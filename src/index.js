export default {
    install(Vue) {
        require('text-contents-vue-components').default.install(Vue);
        require('description-vue-components').default.install(Vue);
        require('helper-vue-components').default.install(Vue);

        registerVueComponent(
            'agency-navigation-bar',
            require('./NavigationBar/NavigationBar/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/NavigationBar/NavigationBar/Component.vue'
        );
        registerVueComponent(
            'agency-navigation-link',
            require('./NavigationBar/NavigationLink/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/NavigationBar/NavigationLink/Component.vue'
        );
        registerVueComponent(
            'agency-header',
            require('./Header/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/Header/Component.vue'
        );
        registerVueComponent(
            'agency-services',
            require('./Services/Services/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/Services/Services/Component.vue'
        );
        registerVueComponent(
            'agency-about',
            require('./About/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/About/Component.vue'
        );
        registerVueComponent(
            'agency-timeline',
            require('./Timeline/Timeline/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/Timeline/Timeline/Component.vue'
        );
        registerVueComponent(
            'agency-timeline-item',
            require('./Timeline/TimelineItem/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/Timeline/TimelineItem/Component.vue'
        );
        registerVueComponent(
            'agency-team',
            require('./Team/Team/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/Team/Team/Component.vue'
        );
        registerVueComponent(
            'agency-team-member',
            require('./Team/Member/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/Team/Member/Component.vue'
        );
        registerVueComponent(
            'agency-clients',
            require('./Clients/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/Clients/Component.vue'
        );
        registerVueComponent(
            'agency-contact-form',
            require('./ContactForm/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/ContactForm/Component.vue'
        );
        registerVueComponent(
            'agency-footer',
            require('./Footer/Footer/Component.vue').default,
            Vue,
			'agency-landing-page-vue-/Footer/Footer/Component.vue'
        );
        registerVueComponent(
            'agency-footer-link',
            require('./Footer/Link/Component.vue').default,
            Vue,
			'agency-landing-page-vue-/Footer/Link/Component.vue'
        );

        registerVueComponent(
            'agency-landing-page',
            require('./LandingPage/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/LandingPage/Component.vue'
        );

        registerVueComponent(
            'agency-large-text-content',
            require('./LargeTextContent/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/LargeTextContent/Component.vue'
        );
        registerVueComponent(
            'agency-medium-text-content',
            require('./MediumTextContent/Component.vue').default,
            Vue,
			'agency-landing-page-vue-/MediumTextContent/Component.vue'
        );
        registerVueComponent(
            'agency-small-text-content',
            require('./SmallTextContent/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/SmallTextContent/Component.vue'
        );
        registerVueComponent(
            'agency-text-content-with-icon',
            require('./Services/TextContentWithIcon/Component.vue').default,
            Vue,
			'agency-landing-page-vue-components/Services/TextContentWithIcon/Component.vue'
        );
    },
};
