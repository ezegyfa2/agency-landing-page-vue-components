export default {
	install(Vue) {
		require('text-contents-vue-components').default.install(Vue);
		require('description-vue-components').default.install(Vue);
		require('helper-vue-components').default.install(Vue);
		
		Vue.component('agency-navigation-bar', require('./NavigationBar/NavigationBar/Component.vue').default);
		Vue.component('agency-navigation-link', require('./NavigationBar/NavigationLink/Component.vue').default);
		Vue.component('agency-header', require('./Header/Component.vue').default);
		Vue.component('agency-services', require('./Services/Services/Component.vue').default);
		Vue.component('agency-about', require('./About/Component.vue').default);
		Vue.component('agency-timeline', require('./Timeline/Timeline/Component.vue').default);
		Vue.component('agency-timeline-item', require('./Timeline/TimelineItem/Component.vue').default);
		Vue.component('agency-team', require('./Team/Team/Component.vue').default);
		Vue.component('agency-team-member', require('./Team/Member/Component.vue').default);
		Vue.component('agency-clients', require('./Clients/Component.vue').default);
		Vue.component('agency-contact-form', require('./ContactForm/Component.vue').default);
		Vue.component('agency-footer', require('./Footer/Component.vue').default);

		Vue.component('agency-landing-page', require('./LandingPage/Component.vue').default);

		Vue.component('agency-large-text-content', require('./LargeTextContent/Component.vue').default);
		Vue.component('agency-medium-text-content', require('./MediumTextContent/Component.vue').default);
		Vue.component('agency-small-text-content', require('./SmallTextContent/Component.vue').default);
		Vue.component('agency-text-content-with-icon', require('./Services/TextContentWithIcon/Component.vue').default);
	}
};