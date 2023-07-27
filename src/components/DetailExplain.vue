<template>
  <div
    class="q-py-md"
    style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px"
  >
    <q-img src="https://picsum.photos/500/300" :ratio="16 / 9" />
    <q-card
      dark
      bordered
      class="bg-grey-9 my-card"
      style="grid-column: 1; grid-row: 1"
    >
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
