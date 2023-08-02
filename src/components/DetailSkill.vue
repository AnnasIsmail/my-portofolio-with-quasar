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
            <div
              style="
                background-color: #323443;
                min-height: 100px;
                width: 100%;
                border-radius: 12px;
                margin-left: 40px;
              "
            >
              <div
                style="
                  position: absolute;
                  margin-left: -40px;
                  margin-top: 20px;
                  background-color: #323443;
                  border-radius: 20px;
                  background-image: linear-gradient(
                    to bottom right,
                    rgba(59, 246, 134, 1) 40%,
                    rgba(76, 169, 255, 1) 60%
                  );
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: 3px;
                "
              >
                <Icon
                  icon="logos:react"
                  height="55px"
                  style="
                    background-color: #323443;
                    padding: 10px;
                    border-radius: 20px;
                  "
                />
              </div>
              <div style="margin: 5px; margin-left: 40px">
                <div class="text-h6 text-weight-bold">React Js</div>
                <div
                  class="text-overline text-weight-bold text-capitalize"
                  style="margin-top: -8px; margin-bottom: 5px"
                >
                  library
                </div>
                <div class="text-body2">
                  React.js adalah pustaka JavaScript yang populer untuk
                  membangun antarmuka pengguna (UI) interaktif dan responsif.
                  Dengan pendekatan komponen, rendering efisien menggunakan
                  Virtual DOM, dan dukungan JSX, React.js memungkinkan
                  pengembang untuk membuat kode yang mudah dipelihara dan
                  efisien. Aliran data satu arah, ekosistem yang kuat, dan
                  komunitas yang aktif membuat React.js menjadi pilihan utama
                  untuk pengembangan aplikasi web modern.
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </q-intersection>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { Skill } from 'src/components/models';

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
    // setTimeout(() => {
    //   this.showElement = false;
    // }, 2000);
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
    const TechWIDOrigin: Skill[] = [
      {
        name: 'Bootstrap',
        link: 'https://getbootstrap.com/',
        icon: 'logos:bootstrap',
        type: 'framework',
      },
      {
        name: 'React JS',
        link: 'https://reactjs.org/',
        icon: 'logos:react',
        type: 'library',
      },
      {
        name: 'Vue JS',
        link: 'https://vuejs.org/',
        icon: 'logos:vue',
        type: 'framework',
      },
      {
        name: 'Node JS',
        link: 'https://nodejs.org/',
        icon: 'logos:nodejs',
        type: 'framework',
      },
      {
        name: 'HTML',
        link: 'https://www.w3schools.com/html/',
        icon: 'logos:html-5',
        type: 'language',
      },
      {
        name: 'CSS',
        link: 'https://www.w3schools.com/css/',
        icon: 'logos:css-3',
        type: 'language',
      },
      {
        name: 'Javascript',
        link: 'https://www.javascript.com/',
        icon: 'logos:javascript',
        type: 'language',
      },
      {
        name: 'JAVA',
        link: 'https://www.java.com/',
        icon: 'logos:java',
        type: 'language',
      },
      {
        name: 'PHP',
        link: 'https://www.php.net/',
        icon: 'logos:php',
        type: 'language',
      },
      {
        name: 'Material UI',
        link: 'https://mui.com/',
        icon: 'logos:material-ui',
        type: 'library',
      },
      {
        name: 'Quasar',
        link: 'https://quasar.dev/',
        icon: 'devicon:quasar',
        type: 'framework',
      },
      {
        name: 'Laravel',
        link: 'https://laravel.com/',
        icon: 'logos:laravel',
        type: 'framework',
      },
      {
        name: 'Codeigniter',
        link: 'https://codeigniter.com/',
        icon: 'logos:codeigniter-icon',
        type: 'framework',
      },
      {
        name: 'MySQL',
        link: 'https://www.mysql.com/',
        icon: 'logos:mysql',
        type: 'database',
      },
      {
        name: 'MongoDB',
        link: 'https://www.mongodb.com/',
        icon: 'devicon:mongodb',
        type: 'database',
      },
      {
        name: 'Git',
        link: 'https://git-scm.com/',
        icon: 'devicon:git',
        type: 'tool',
      },
      {
        name: 'Python',
        link: 'https://www.python.org/',
        icon: 'logos:python',
        type: 'language',
      },
      {
        name: 'Socket.io',
        link: 'https://socket.io/',
        icon: 'devicon:socketio',
        type: 'library',
      },
      {
        name: 'Typescript',
        link: 'https://www.typescriptlang.org/docs/',
        icon: 'logos:typescript-icon',
        type: 'language',
      },
    ];

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
