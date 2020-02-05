<template lang="pug">
q-header.bg-primary.text-white(bordered)
    q-toolbar.bg-primary.text-whiterounded-borders
        q-btn(flat, label='Homepage')
        q-space
        q-tabs(v-model='tab', shrink)
            q-tab(name='tab1', label='Tab 1')
            q-tab(name='tab2', label='Tab 2')
            q-tab(name='tab3', label='Tab 3')

</template>

<script>
export default {
    props: {},
    components: {},
    mixins: [],
    data: function () {
        return {
            tab: ''
        };
    },
    watch: {},
    computed: {},
    created: function () { },
    beforeDestroy: function () { },
    mounted: function () { },
    methods: {},
}
</script>

<style>
</style>
