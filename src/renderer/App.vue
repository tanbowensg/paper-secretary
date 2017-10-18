<template>
  <div id="app">
    <landing-page></landing-page>
  </div>
</template>

<script>
  import LandingPage from '@/components/landing-page/landing-page.vue'

  export default {
    name: 'PaperHelper',
    components: {
      LandingPage
    }
  }
</script>

<style lang="scss">
@import './style/index.scss';
</style>
