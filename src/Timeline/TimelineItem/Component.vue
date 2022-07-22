<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            image_url: {
                type: String
            },
            image_alt: {
                type: String,
                default() {
                    return ''
                }
            },
            date_interval: {
                type: String
            },
            title: {
                type: String
            },
            content: {
                type: String
            },
            is_inverted: {
                type: Boolean,
                default() {
                    return false
                }
            }
        },
        computed: {
            isInvertedClass() {
                if (this.is_inverted) {
                    return 'timeline-inverted'
                }
                else {
                    return ''
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
