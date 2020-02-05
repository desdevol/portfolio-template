<template lang="pug">
q-layout(view='hHh lpR fFf')
    //- Header
    Header
    //- q-drawer(show-if-above, v-model='left', side='left', bordered)
    //-     // drawer content
    q-page-container
        Hero
        //- q-page-scroller(expand, position='top', :scroll-offset='150', :offset='[0, 0]')
        //-     .col.cursor-pointer.q-pa-sm.bg-accent.text-white.text-center
        //-         | Scroll back up...
</template>

<script>
import Header from './components/Header'
import Hero from './components/Hero'
export default {
    name: 'LayoutDefault',
    components: {
        Header,
        Hero
    },
    data() {
        return {
            leftDrawerOpen: false
        }
    }
}
</script>

<style>
</style>
