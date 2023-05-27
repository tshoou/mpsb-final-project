<template>
  <HeroComponent/>
  <PengantarComponent/>
  <PreparationsComponent/>
  <TeamDev/>
  <Footer/>
</template>

<script>

import HeroComponent from '../components/HomeComponents/HeroComponent.vue';
import PengantarComponent from '../components/HomeComponents/PengantarComponent.vue'
import PreparationsComponent from '../components/HomeComponents/PreparationsComponent.vue'
import TeamDev from '../components/HomeComponents/TeamDev.vue'
import Footer from '../components/HomeComponents/FooterComponent.vue'
export default {
  name: 'BerandaView',
  components: {
    HeroComponent,
    PengantarComponent,
    PreparationsComponent,
    TeamDev,
    Footer
  }
}
</script>

