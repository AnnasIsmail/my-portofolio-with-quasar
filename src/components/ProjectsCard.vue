<template>
  <div
    class="project-card"
    style="
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      min-height: 150px;
      max-height: 285px;
      overflow: hidden;
    "
  >
    <div
      style="
        background-color: #323443;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        max-height: 285px;
        flex-direction: column;
      "
    >
      <div
        style="
          padding: 10px;
          display: flex;
          justify-content: end;
          gap: 10px;
          width: 100%;
        "
      >
        <q-btn
          style="
            background-color: #3f4152;
            padding: 5px;
            display: flex;
            border-radius: 8px;
          "
          :href="Project.urlGithub"
          target="_blank"
        >
          <Icon icon="mdi:code" height="23px" />
        </q-btn>
        <q-btn
          style="
            background-color: #3f4152;
            padding: 5px;
            display: flex;
            border-radius: 8px;
          "
          :href="Project.url"
          target="_blank"
        >
          <Icon icon="ic:outline-arrow-outward" height="23px" />
        </q-btn>
      </div>
      <q-img
        :src="Project.image[0]"
        alt="asd"
        width="90%"
        style="margin auto; cursor: pointer;"
        @click="movePageToDetail"
      />
    </div>
    <div style="padding: 20px">
      <div class="text-subtitle2 q-pb-xs">
        {{ Project.type }}
      </div>
      <div
        class="text-h4 text-weight-bold"
        style="cursor: pointer"
        @click="movePageToDetail"
      >
        {{ Project.name }}
      </div>
      <div
        class="text-body text-weight-regular"
        style="
          margin-top: 20px;
          color: #d6d6d6;
          overflow: hidden;
          cursor: pointer;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
        "
        @click="movePageToDetail"
      >
        {{ Project.description }}
      </div>
      <div>
        <q-card-section
          style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 10px"
        >
          <chip-technology
            v-for="tech in Project.technology"
            :key="tech"
            :Skill="getTechnology(tech)"
          />
        </q-card-section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import { Project } from './models';
import { movePage } from '../functions/movePage';
import ChipTechnology from 'src/components/ChipTechnology.vue';
import Skills from 'src/data/Skills';

export default defineComponent({
  name: 'ProjectCard',
  props: {
    Project: {
      type: Object as () => Project,
      required: true,
    },
  },
  components: {
    Icon,
    ChipTechnology,
  },
  data() {
    return {
      styleFontTooltip:
        'background-image: linear-gradient(to bottom right,rgba(59, 246, 134, 1) 40%,rgba(76, 169, 255, 1) 60%);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;',
      Skills,
    };
  },
  methods: {
    movePageToDetail() {
      movePage(`/detail-project/${this.Project.id}`, this);
    },
    getTechnology(id: string) {
      return Skills.find((data) => data.id === id);
    },
  },
});
</script>

<style scoped>
@media (max-width: 600px) {
  .project-card {
    grid-template-columns: 1fr !important;
    grid-template-rows: 1fr 1fr !important;
    max-height: none !important;
  }
}
</style>
