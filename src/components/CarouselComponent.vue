<template>
  <div class="q-pa-md">
    <q-carousel swipeable arrows animated v-model="slide" thumbnails infinite>
      <q-carousel-slide
        v-for="src in Photo"
        :key="src"
        :name="1"
        :img-src="src"
        style="max-width: 850px; margin: auto"
      />
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CarouselComponent',
  props: {
    Photo: {
      type: [String, Array],
      required: true,
    },
  },
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
