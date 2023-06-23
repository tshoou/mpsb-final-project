<template>
<div class="mx-auto flex justify-center h-screen bg-darkBlue align-middle">
    <iframe style="max-width:100%" src="https://wordwall.net/id/embed/ac5707f969ea4e25bd051218a820f5c4?themeId=1&templateId=5&fontStackId=0" width="500" height="380" frameborder="0" allowfullscreen></iframe>
</div>
  
  <Footer/>
</template>

<script>
import Footer from "../components/HomeComponents/FooterComponent.vue"
export default {
    
  name: "ChallengeComponent",
  components: {
    Footer
  }
};
</script>

<style>

</style>