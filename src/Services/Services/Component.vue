<template lang="pug">
    include Template.pug
</template>

<script>
    export default {
        props: {
            text_content_sections: {
                type: Array
            },
            title_section: {
                type: Object
            },
            icon_sections: {
                type: Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>
