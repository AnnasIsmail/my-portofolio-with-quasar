<template>
  <div>
    <div class="bg" style="padding: 2vw 3vh; padding-bottom: 100px">
      <q-layout style="max-width: 1200px; margin: auto">
        <main-navbar-vue />
        <q-page-container>
          <router-view />
        </q-page-container>
      </q-layout>
    </div>
    <main-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainFooter from '../components/MainFooter.vue';
import MainNavbarVue from '../components/MainNavbar.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    MainNavbarVue,
    MainFooter,
  },
  mounted() {
    this.$q.dark.set(true);
  },
});
</script>

<style scoped>
.bg {
  font-family: 'Sora', sans-serif;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #272727;
}
</style>
