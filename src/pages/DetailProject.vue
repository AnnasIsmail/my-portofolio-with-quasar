<template>
  <q-page style="height: auto; overflow: hidden">
    <input type="hidden" id="move-page" @click="movePage" />
    <q-intersection
      style="min-height: 500px; padding-top: 30px"
      class="main-bio-intersection"
    >
      <transition
        appear
        enter-active-class="animated backInUp"
        leave-active-class="animated backOutDown"
        style="animation-duration: 1s"
      >
        <div v-if="showElement">
          <div class="text-h4 text-weight-bold q-pb-sm">Detail Projects</div>
          <a
            href="https://gconn.netlify.app/"
            style="color: white"
            target="_blank"
            >https://gconn.netlify.app/</a
          >
          <br />
          <a
            href="https://github.com/AnnasIsmail/GCONN"
            style="color: white"
            target="_blank"
            >https://github.com/AnnasIsmail/GCONN</a
          >
          <carousel-component />
          <div class="q-py-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <detail-explain />
          <div class="text-h5 text-weight-bold q-pb-lg">Demo Video</div>
          <q-video
            :ratio="16 / 9"
            src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
          />
        </div>
      </transition>
    </q-intersection>
  </q-page>
</template>

<script lang="ts">
import DetailExplain from 'src/components/DetailExplain.vue';
import { defineComponent } from 'vue';
import CarouselComponent from '../components/CarouselComponent.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { CarouselComponent, DetailExplain },
  data() {
    return {
      styleFontTooltip:
        'background-image: linear-gradient(to bottom right,rgba(59, 246, 134, 1) 40%,rgba(76, 169, 255, 1) 60%);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;',
      search: '',
      filter: '',
      showElement: false,
    };
  },
  mounted() {
    this.showElement = true;
  },
  unmounted() {
    this.showElement = false;
  },
  methods: {
    movePage() {
      this.showElement = false;
    },
  },
});
</script>

<style scoped></style>
