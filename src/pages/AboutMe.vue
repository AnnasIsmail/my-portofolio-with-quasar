<template>
  <q-page style="height: auto; overflow: hidden">
    <input type="hidden" id="move-page" @click="movePageDocument" />
    <q-intersection style="min-height: 500px" class="main-bio-intersection">
      <div
        class="main-bio"
        style="
          display: grid;
          grid-template-rows: auto auto;
          grid-template-columns: 200px 50% auto;
          align-items: start;
          gap: 10px;
          transition: all 1s ease-in-out;
        "
      >
        <transition
          appear
          enter-active-class="animated lightSpeedInRight"
          leave-active-class="animated lightSpeedOutLeft"
          style="animation-duration: 1s"
        >
          <div
            class="text-h3 text-weight-bold main-bio-item-1"
            style="
              background-image: linear-gradient(
                to bottom right,
                rgba(59, 246, 134, 1) 40%,
                rgba(76, 169, 255, 1) 60%
              );
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin: 70px 0;
              padding-bottom: 6px;
              grid-column: 1 / span 3;
            "
            v-if="showElement"
          >
            Hello, I'm Annas, Innovative fullstack developer, enthusiastic about
            teamwork and creating technological solutions.
          </div>
        </transition>
        <transition
          appear
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutLeft"
          style="animation-duration: 1s"
        >
          <div
            class="main-bio-item-2"
            style="
              border-radius: 50%;
              width: 160px;
              height: 160px;
              background-image: linear-gradient(
                to bottom right,
                rgba(59, 246, 134, 1) 40%,
                rgba(76, 169, 255, 1) 60%
              );
              border: 2px solid transparent;
              background-clip: padding-box;
              padding: 3px;
              grid-row: 2;
              grid-column: 1;
            "
            v-if="showElement"
          >
            <q-img
              src="~assets/photo.png"
              style="
                width: 100%;
                border-radius: 50%;
                max-width: 160px;
                max-height: 160px;
                background-color: #3a3636;
              "
            />
          </div>
        </transition>
        <transition
          appear
          enter-active-class="animated bounceIn"
          leave-active-class="animated bounceOut"
          style="animation-duration: 1s"
        >
          <div
            class="main-bio-item-3"
            style="grid-row: 2; grid-column: 2; margin-top: 20px"
            v-if="showElement"
          >
            <div class="text-h5 text-weight-bold">Biography</div>
            <div
              class="text-body text-weight-regular"
              style="margin-top: 20px; color: #d6d6d6"
            >
              I am constantly learning and developing myself. I have a strong
              commitment to learning (Learning Commitment +1), meticulous in
              documentation (Documentation Excellence +2). I am also skilled in
              problem-solving. Excited on
              <span v-for="(skill, index) in biographySkills" :key="skill.name">
                {{
                  index > 0
                    ? index === biographySkills.length - 1
                      ? ' and '
                      : ', '
                    : ''
                }}
                <a
                  :href="skill.link"
                  target="_blank"
                  :class="['q-link', 'text-weight-bold']"
                  :style="{ color: skill.color }"
                >
                  {{ skill.name }}
                </a>
              </span>
            </div>
          </div>
        </transition>
        <transition
          appear
          enter-active-class="animated bounceInRight"
          leave-active-class="animated bounceOutRight"
          style="animation-duration: 1s"
        >
          <div
            class="main-bio-item-4"
            style="grid-row: 2; grid-column: 3; margin-top: 20px"
            v-if="showElement"
          >
            <div class="text-h5 text-weight-bold lets-connect">
              Lets Connect
            </div>
            <div
              style="
                display: flex;
                align-items: center;
                gap: 10px;
                margin-top: 20px;
              "
            >
              <a
                href="https://www.linkedin.com/in/annas-ismail-muhammad-04a70a1b8/"
                target="_blank"
              >
                <Icon icon="skill-icons:linkedin" height="30px" />
                <q-tooltip
                  transition-show="rotate"
                  transition-hide="rotate"
                  style="background-color: #323443"
                >
                  <span :style="styleFontTooltip"> My Linked In </span>
                </q-tooltip>
              </a>
              <a href="https://github.com/AnnasIsmail" target="_blank">
                <Icon icon="uiw:github" height="30px" color="#cdd9e5" />
                <q-tooltip
                  transition-show="rotate"
                  transition-hide="rotate"
                  style="background-color: #323443"
                >
                  <span :style="styleFontTooltip"> My Github </span>
                </q-tooltip>
              </a>
              <a href="https://www.instagram.com/annas_i_m/" target="_blank">
                <Icon icon="skill-icons:instagram" height="30px" />
                <q-tooltip
                  transition-show="rotate"
                  transition-hide="rotate"
                  style="background-color: #323443"
                >
                  <span :style="styleFontTooltip"> My Instagram </span>
                </q-tooltip>
              </a>
              <a href="https://www.instagram.com/annas_i_m/" target="_blank">
                <Icon icon="logos:youtube-icon" height="30px" />
                <q-tooltip
                  transition-show="rotate"
                  transition-hide="rotate"
                  style="background-color: #323443"
                >
                  <span :style="styleFontTooltip"> My Youtube </span>
                </q-tooltip>
              </a>
            </div>
          </div>
        </transition>
      </div>
    </q-intersection>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { movePage } from '../functions/movePage';
import Skills from '../data/Skills';
import { Project, Skill } from '../components/models';
import Projects from 'src/data/Projects';

export default defineComponent({
  name: 'IndexPage',
  components: {
    Icon,
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
    document.getElementById('notification')?.click();
  },
  unmounted() {
    this.showElement = false;
  },
  computed: {
    searchedTechnologies(): Skill[] {
      return this.TechWID.filter((tech) =>
        tech.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    filteredTechnologies(): Skill[] {
      return this.TechWID.filter(
        (tech) => tech.type.toLowerCase() === this.filter.toLowerCase()
      );
    },
  },
  methods: {
    movePage,
    movePageDocument() {
      this.showElement = false;
    },
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
    const dataProjects = Projects as Project[];
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
