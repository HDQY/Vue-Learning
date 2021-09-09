<template>
  <div class="homePage">
    <navigation />
    <router-view />
    <foot />
  </div>
</template>

<script>
import DemandIndex from "./demands/DemandIndex.vue";
import DownloadInitFile from "./downloads/Download_InitFile.vue";
import DownloadSetup from "./downloads/Download_Setup.vue";
import Foot from "./Foot.vue";
import Navigation from "./Navigation.vue";
export default {
  components: {
    Foot,
    Navigation,
    DemandIndex,
    DownloadSetup,
    DownloadInitFile,
  },
  name: "Homepage",
  mounted() {
    this.$router.push({
      path: "/Download/Setup",
    });
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homePage {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
