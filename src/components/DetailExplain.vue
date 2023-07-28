<template>
  <div
    class="q-py-md"
    style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px"
  >
    <q-img :src="DetailExplain.url" :ratio="16 / 9" />
    <q-card
      dark
      bordered
      class="bg-grey-9 my-card"
      :style="DetailExplain.right ? 'grid-column: 1; grid-row: 1' : ''"
    >
      <q-card-section>
        <div class="text-h6">{{ DetailExplain.name }}</div>
        <div class="text-subtitle2">{{ DetailExplain.path }}</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ DetailExplain.description }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';
import { DetailExplain } from './models';

export default defineComponent({
  name: 'DetailExplain',
  props: {
    DetailExplain: {
      type: Object as () => DetailExplain,
      required: true,
    },
  },
  setup() {
    return {
      slide: ref(1),
    };
  },
});
</script>
