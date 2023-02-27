<script>
    import NavigationBar from '../../../../helper-vue-components/src/NavigationBar/CollapsableNavigationBar/Component.vue'

    export default {
        mixins: [
            NavigationBar
        ],
        props: {
            added_classes: {
                type: Object,
                default() {
                    return{
                        'root': 'navbar-dark'
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>