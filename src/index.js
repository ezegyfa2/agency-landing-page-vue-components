export default {
	install(Vue) {
		require('text-contents-vue-components').default.install(Vue);
		require('description-vue-components').default.install(Vue);
		require('helper-vue-components').default.install(Vue);
		
		registerVueComponent('agency-navigation-bar', require('./NavigationBar/NavigationBar/Component.vue').default, Vue);
		registerVueComponent('agency-navigation-link', require('./NavigationBar/NavigationLink/Component.vue').default, Vue);
		registerVueComponent('agency-header', require('./Header/Component.vue').default, Vue);
		registerVueComponent('agency-services', require('./Services/Services/Component.vue').default, Vue);
		registerVueComponent('agency-about', require('./About/Component.vue').default, Vue);
		registerVueComponent('agency-timeline', require('./Timeline/Timeline/Component.vue').default, Vue);
		registerVueComponent('agency-timeline-item', require('./Timeline/TimelineItem/Component.vue').default, Vue);
		registerVueComponent('agency-team', require('./Team/Team/Component.vue').default, Vue);
		registerVueComponent('agency-team-member', require('./Team/Member/Component.vue').default, Vue);
		registerVueComponent('agency-clients', require('./Clients/Component.vue').default, Vue);
		registerVueComponent('agency-contact-form', require('./ContactForm/Component.vue').default, Vue);
		registerVueComponent('agency-footer', require('./Footer/Footer/Component.vue').default, Vue);
		registerVueComponent('agency-footer-link', require('./Footer/Link/Component.vue').default, Vue);

		registerVueComponent('agency-landing-page', require('./LandingPage/Component.vue').default, Vue);

		registerVueComponent('agency-large-text-content', require('./LargeTextContent/Component.vue').default, Vue);
		registerVueComponent('agency-medium-text-content', require('./MediumTextContent/Component.vue').default, Vue);
		registerVueComponent('agency-small-text-content', require('./SmallTextContent/Component.vue').default, Vue);
		registerVueComponent('agency-text-content-with-icon', require('./Services/TextContentWithIcon/Component.vue').default, Vue);
	}
};