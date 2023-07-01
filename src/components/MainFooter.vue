<template>
  <div
    class="text-overline"
    style="
      width: 100%;
      height: 70px;
      display: flex;
      align-item: center;
      justify-content: center;
      background-color: #323443;
      padding: 25px 0;
    "
  >
    Made with love
    <Icon
      icon="mdi:love"
      width="35px"
      color="#EBEBEB"
      class="q-py-xs"
      style="margin-top: -7px"
    />
    By <span class="text-weight-bolder q-pl-xs"> Annas Ismail Muhammad </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default defineComponent({
  name: 'MainFooter',
  components: {
    Icon,
  },
});
</script>

<style scoped></style>
