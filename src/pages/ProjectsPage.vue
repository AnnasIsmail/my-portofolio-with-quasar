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
          <div class="text-h4 text-weight-bold q-pb-lg">Projects</div>
          <div class="flex q-mb-md" style="gap: 20px">
            <projects-card
              v-for="data in dataProjects"
              :key="data.name"
              :Project="data"
            />
          </div>
        </div>
      </transition>
    </q-intersection>
  </q-page>
</template>

<script lang="ts">
import Projects from 'src/data/Projects';
import { defineComponent } from 'vue';
import ProjectsCard from '../components/ProjectsCard.vue';
import { Project } from '../components/models';

export default defineComponent({
  name: 'IndexPage',
  components: {
    ProjectsCard,
  },
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
  setup() {
    const dataProjects = Projects as Project[];
    return {
      dataProjects,
    };
  },
});
</script>

<style scoped></style>
