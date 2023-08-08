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
          <div class="text-h4 text-weight-bold q-pb-lg">Skills</div>
          <div class="flex q-mb-md" style="gap: 20px">
            <detail-skill
              v-for="data in Skills"
              :key="data.name"
              :Skill="data"
            />
          </div>
        </div>
      </transition>
    </q-intersection>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Skill } from '../components/models';
import DetailSkill from 'src/components/DetailSkill.vue';
import Skills from '../data/Skills';

export default defineComponent({
  name: 'SkillPage',
  components: { DetailSkill },
  data() {
    return {
      styleFontTooltip:
        'background-image: linear-gradient(to bottom right,rgba(59, 246, 134, 1) 40%,rgba(76, 169, 255, 1) 60%);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;',
      search: '',
      filter: '',
      showElement: false,
      Skills,
    };
  },
  mounted() {
    this.showElement = true;
  },
  unmounted() {
    this.showElement = false;
  },
  computed: {
    searchedTechnologies() {
      return this.TechWID.filter((tech) =>
        tech.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    filteredTechnologies() {
      return this.TechWID.filter(
        (tech) => tech.type.toLowerCase() === this.filter.toLowerCase()
      );
    },
  },
  methods: {
    searchTechnologies() {
      this.TechWID = this.TechWIDOrigin;
      if (this.filter) this.TechWID = this.filteredTechnologies;
      if (!this.search) return;
      this.TechWID = this.searchedTechnologies;
    },
    filterTechnologies() {
      this.TechWID = this.TechWIDOrigin;
      if (this.search) this.TechWID = this.searchedTechnologies;
      if (!this.filter) return;
      this.TechWID = this.filteredTechnologies;
    },
    movePage() {
      this.showElement = false;
    },
  },
  setup() {
    const biographySkills = [
      {
        name: 'React',
        color: '#3b82f6',
        link: 'https://react.dev/',
      },
      {
        name: 'Vue',
        color: '#41b883',
        link: 'https://vuejs.org/',
      },
      {
        name: 'CodeIgniter',
        color: '#DD4814',
        link: 'https://codeigniter.com/',
      },
      {
        name: 'Laravel',
        color: '#EB4432',
        link: 'https://laravel.com/',
      },
    ];
    const TechWIDOrigin = Skills as Skill[];

    const filterType = ['Language', 'Framework', 'Library', 'Database', 'Tool'];
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
      biographySkills,
      TechWIDOrigin,
      TechWID: ref(TechWIDOrigin),
      filterType,
      dataProjects,
    };
  },
});
</script>

<style scoped>
@media (max-width: 850px) {
  .main-bio {
    grid-template-columns: 160px 50% auto !important;
  }
  .main-bio-intersection {
    min-height: 560px !important;
  }
  .second-bio-intersection {
    min-height: 450px !important;
  }
}
@media (max-width: 750px) {
  .main-bio {
    grid-template-columns: 160px 40% auto !important;
  }
  .main-bio-intersection {
    min-height: 670px !important;
  }
}
@media (max-width: 650px) {
  .main-bio {
    grid-template-columns: 1fr 1fr !important;
  }
  .main-bio-item-3 {
    grid-row: 3 !important;
    grid-column: 1 / span 2 !important;
  }
  .main-bio-item-4 {
    grid-column: 2 !important;
  }
  .main-bio-item-1 {
    font-size: 40px;
  }
  .technology {
    grid-template-columns: 1fr !important;
  }
  .main-bio-intersection {
    min-height: 750px !important;
  }
  .second-bio-intersection {
    min-height: 530px !important;
  }
}
@media (max-width: 500px) {
  .main-bio {
    grid-template-columns: 1fr !important;
  }
  .main-bio-item-2 {
    grid-row: 1 !important;
    grid-column: 1 / span 3 !important;
    margin: auto !important;
    margin-top: 20px !important;
  }
  .lets-connect {
    display: none;
  }
  .main-bio-item-4 {
    grid-row: 2 !important;
    grid-column: 1 / span 3 !important;
    margin: auto !important;
  }
  .main-bio-item-3 {
    grid-row: 4 !important;
    grid-column: 1 / span 2 !important;
    text-align: center;
  }
  .main-bio-item-1 {
    grid-row: 3 !important;
    grid-column: 1 / span 2 !important;
    text-align: center;
    font-size: 35px;
    margin: 20px 0 !important;
  }
  .main-bio-intersection {
    min-height: 890px !important;
  }
  .second-bio-intersection {
    min-height: 630px !important;
  }
}
</style>
