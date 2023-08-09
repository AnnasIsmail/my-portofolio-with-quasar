<template>
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
        :icon="Skill.icon"
        width="55px"
        style="background-color: #fbfbfb; padding: 10px; border-radius: 20px"
      />
    </div>
    <div style="margin: 5px; margin-left: 40px">
      <div class="text-h6 text-weight-bold">
        <a
          :href="Skill.link"
          target="_blank"
          style="margin: auto; height: 30px; color: white"
        >
          {{ Skill.name }}
        </a>
      </div>
      <div
        class="text-overline text-weight-bold text-capitalize"
        style="margin-top: -8px; margin-bottom: 5px"
      >
        {{ Skill.type }}
      </div>
      <div class="text-body2">
        {{ Skill.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';
import { Skill } from 'src/components/models';

export default defineComponent({
  name: 'DetailSkill',
  props: {
    Skill: {
      type: Object as () => Skill,
      required: true,
    },
  },
  components: {
    Icon,
  },
});
</script>
