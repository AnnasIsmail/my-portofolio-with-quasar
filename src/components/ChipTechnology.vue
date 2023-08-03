<template>
  <div
    style="
      background-color: #fbfbfb;
      height: 50px;
      border-radius: 10px;
      display: flex;
      padding: 5px;
      margin-bottom: 10px;
    "
  >
    <a :href="Skill.link" target="_blank" style="margin: auto; height: 30px">
      <Icon :icon="Skill.icon" height="30px" />
      <q-tooltip
        transition-show="rotate"
        transition-hide="rotate"
        style="background-color: #272727"
      >
        <span :style="styleFontTooltip">{{ Skill.name }}</span>
      </q-tooltip>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import { Skill } from 'src/components/models';

export default defineComponent({
  name: 'ChipTechnology',
  props: {
    Skill: {
      type: Object as () => Skill,
      required: true,
    },
  },
  data() {
    return {
      styleFontTooltip:
        'background-image: linear-gradient(to bottom right,rgba(59, 246, 134, 1) 40%,rgba(76, 169, 255, 1) 60%);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;',
    };
  },
  components: {
    Icon,
  },
});
</script>
