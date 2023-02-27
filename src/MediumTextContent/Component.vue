<script>
    import MediumTextContent from './../../../text-contents-vue-components/src/MediumTextContent.vue'

    export default {
        mixins: [
            MediumTextContent
        ],
        props: { 
            added_classes: {
                type: Object,
                default() {
                    return{
                        '.title': 'text-uppercase',
                        'content.': 'text-uppercase'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>