<script>
    import LargeTextContent from './../../../text-contents-vue-components/src/LargeTextContent/Component.vue'

    export default {
        mixins: [
            LargeTextContent
        ],
        data() {
            return {
                addedClasses: {
                    '.content': 'text-uppercase'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>