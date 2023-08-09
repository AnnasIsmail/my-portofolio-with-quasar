<template>
  <q-icon
    id="notification"
    v-if="popUp"
    style="position: fixed; left: calc(50vw - 118px)"
  >
    <q-popup-proxy transition-show="flip-up" transition-hide="flip-down">
      <q-banner class="bg-red text-white">
        <template v-slot:avatar>
          <q-icon name="warning" />
        </template>
        Under Development
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
    setTimeout(() => (this.popUp = false), 5000);
  },
});
</script>
