export default {
	install(Vue) {
		Vue.component('agency-landing-page', require('./LandingPage.vue').default);
	}
};