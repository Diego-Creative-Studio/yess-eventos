// Código para a aba Código de um MODELO DE TAG do GTM (JavaScript em sandbox).
// Não é uma tag HTML personalizada, nem um script para inclusão no site.
// Configuração de permissões e acionadores: ../privacidade-e-cookies.md.
const setDefaultConsentState = require('setDefaultConsentState');
const updateConsentState = require('updateConsentState');
const copyFromDataLayer = require('copyFromDataLayer');
const createQueue = require('createQueue');

const event = copyFromDataLayer('event');
if (event === 'gtm.init_consent') {
	setDefaultConsentState({
		analytics_storage: 'denied',
		ad_storage: 'denied',
		ad_user_data: 'denied',
		ad_personalization: 'denied',
		personalization_storage: 'denied',
		functionality_storage: 'granted',
		security_storage: 'granted'
	});
} else if (event === 'yess_consent_update') {
	const analytics = copyFromDataLayer('yess_analytics_consent') === true;
	const marketing = copyFromDataLayer('yess_marketing_consent') === true;
	updateConsentState({
		analytics_storage: analytics ? 'granted' : 'denied',
		ad_storage: marketing ? 'granted' : 'denied',
		ad_user_data: marketing ? 'granted' : 'denied',
		ad_personalization: marketing ? 'granted' : 'denied'
	});
	// A medição usa este evento posterior, não o evento que solicita a atualização.
	createQueue('dataLayer')({
		event: 'yess_consent_ready',
		yess_analytics_consent: analytics,
		yess_marketing_consent: marketing
	});
}
data.gtmOnSuccess();
