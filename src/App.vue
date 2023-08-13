<template>
  <q-icon
    id="notification"
    v-if="popUp"
    style="position: fixed; left: calc(50vw - 219px)"
  >
    <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
      <q-banner class="bg-red text-white">
        <template v-slot:avatar>
          <q-icon name="warning" />
        </template>
        Under Development, or visit
        <a
          style="color: white"
          href="https://annasismail.github.io/My-Portofolio/"
        >
          my old portfolio website </a
        >.
      </q-banner>
    </q-popup-proxy>
  </q-icon>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      popUp: true,
    };
  },
  mounted() {
    setTimeout(() => (this.popUp = false), 10000);
  },
});
</script>

<style scoped>
@media (max-width: 1200px) {
  #notification {
    top: 90px;
  }
}
</style>
