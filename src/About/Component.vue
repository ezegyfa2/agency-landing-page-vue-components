<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            title_section: {
                type: Object
            },
            timeline_section: {
                type: Object
            }
        },
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
