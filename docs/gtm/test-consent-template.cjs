// Teste local da lógica; não substitui validar permissões/ordem no GTM real.
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const path = require('node:path')
const source = fs.readFileSync(path.join(__dirname, 'yess-consent-template.js'), 'utf8')
function run(event, analytics, marketing) {
	const calls = []
	const layer = { event, yess_analytics_consent: analytics, yess_marketing_consent: marketing }
	const apis = {
		setDefaultConsentState: (value) => calls.push(['default', value]),
		updateConsentState: (value) => calls.push(['update', value]),
		copyFromDataLayer: (key) => layer[key],
		createQueue: (key) => {
			assert.equal(key, 'dataLayer')
			return (value) => calls.push(['event', value])
		},
	}
	vm.runInNewContext(source, {
		require: (key) => {
			assert.ok(key in apis)
			return apis[key]
		},
		data: { gtmOnSuccess: () => calls.push(['success']) },
	})
	return JSON.parse(JSON.stringify(calls))
}
const initial = run('gtm.init_consent', true, true)
assert.equal(initial[0][0], 'default')
for (const key of [
	'analytics_storage',
	'ad_storage',
	'ad_user_data',
	'ad_personalization',
	'personalization_storage',
]) {
	assert.equal(initial[0][1][key], 'denied')
}
assert.equal(initial.length, 2)
for (const analytics of [false, true, undefined, 'true']) {
	for (const marketing of [false, true, undefined, 'true']) {
		const calls = run('yess_consent_update', analytics, marketing)
		assert.equal(calls[0][0], 'update')
		assert.equal(calls[0][1].analytics_storage, analytics === true ? 'granted' : 'denied')
		for (const key of ['ad_storage', 'ad_user_data', 'ad_personalization']) {
			assert.equal(calls[0][1][key], marketing === true ? 'granted' : 'denied')
		}
		assert.equal(calls[1][0], 'event')
		assert.equal(calls[1][1].event, 'yess_consent_ready')
		assert.equal(calls[1][1].yess_analytics_consent, analytics === true)
		assert.equal(calls[1][1].yess_marketing_consent, marketing === true)
		assert.equal(calls[2][0], 'success')
	}
}
assert.deepEqual(run('yess_consent_ready', true, true), [['success']])
assert.deepEqual(run('gtm.init', true, true), [['success']])
console.log(
	'Ponte GTM: padrão negado, 16 combinações, ordem update/ready e ausência de recursão OK.',
)
