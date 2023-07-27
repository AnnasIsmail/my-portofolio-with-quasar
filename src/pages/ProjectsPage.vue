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
              :ProjectsCard="data"
            />
          </div>
        </div>
      </transition>
    </q-intersection>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectsCard from '../components/ProjectsCard.vue';

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
    const dataProjects = [
      {
        name: 'GCONN',
        type: 'Web Development',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the ",
        url: 'https://gconn.netlify.app/',
        urlGithub: 'https://github.com/AnnasIsmail/GCONN',
        urlImage:
          'https://annasismail.github.io/My-Portofolio/assets/img/portfolio/gconn.png',
      },
      {
        name: 'GCONN',
        type: 'Web Development',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the ",
        url: 'https://gconn.netlify.app/',
        urlGithub: 'https://github.com/AnnasIsmail/GCONN',
        urlImage:
          'https://annasismail.github.io/My-Portofolio/assets/img/portfolio/gconn.png',
      },
      {
        name: 'GCONN',
        type: 'Web Development',
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the ",
        url: 'https://gconn.netlify.app/',
        urlGithub: 'https://github.com/AnnasIsmail/GCONN',
        urlImage:
          'https://annasismail.github.io/My-Portofolio/assets/img/portfolio/gconn.png',
      },
    ];
    return {
      dataProjects,
    };
  },
});
</script>

<style scoped></style>
