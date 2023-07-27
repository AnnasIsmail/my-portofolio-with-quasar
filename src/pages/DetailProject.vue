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
          <div class="text-h4 text-weight-bold q-pb-lg">Detail Projects</div>
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
          <div>
            <q-img src="https://picsum.photos/500/300" :ratio="16 / 9" />
            <q-card dark bordered class="bg-grey-9 my-card">
              <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>

              <q-separator dark inset />

              <q-card-section>
                {{ lorem }}
              </q-card-section>
            </q-card>
          </div>
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
import { defineComponent } from 'vue';
import CarouselComponent from '../components/CarouselComponent.vue';

export default defineComponent({
  name: 'IndexPage',
  components: { CarouselComponent },
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
