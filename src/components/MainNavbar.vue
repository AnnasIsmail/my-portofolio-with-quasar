<template>
  <div
    style="
      display: flex;
      padding-top: 10px;
      padding-bottom: 30px;
      justify-content: space-between;
      border-bottom: 1px solid #4d4d4d;
      font-family: 'poppins';
    "
  >
    <div
      class="text-h5 text-weight-bold"
      style="letter-spacing: 1px; cursor: pointer"
      @click="movePage('/')"
    >
      Annas
    </div>
    <div
      class="text-subtitle1 text-weight-light Main-Navigation"
      style="
        display: flex;
        gap: 30px;
        vertical-align: baseline;
        padding-top: 4px;
      "
    >
      <div class="child-navbar">Contact</div>
      <div
        class="child-navbar"
        :class="{ 'on-page': $route.path === '/skills' }"
        @click="movePage('/skills')"
      >
        Skills
      </div>
      <div
        class="child-navbar"
        :class="{ 'on-page': $route.path === '/projects' }"
        @click="movePage('/projects')"
      >
        Projects
      </div>
    </div>
    <burger-navbar
      class="Mobile-Navigation"
      :isOpen="isOpen"
      @click="isOpen = !isOpen"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BurgerNavbar from './BurgerNavbar.vue';

export default defineComponent({
  components: { BurgerNavbar },
  name: 'MainNavbar',
  data() {
    return { isOpen: false };
  },
  methods: {
    movePage(path: string) {
      const element = document.getElementById('move-page');
      if (element !== null) {
        element.click();
      }
      setTimeout(() => {
        this.$router.push(path);
      }, 1000);
    },
  },
});
</script>

<style scoped>
.child-navbar {
  color: #d1d1d1;
  cursor: pointer;
}
.child-navbar:hover {
  color: #ffffff;
}
.on-page {
  color: white !important;
  font-weight: bold !important;
}
.Mobile-Navigation {
  display: none;
}
@media (max-width: 500px) {
  .Mobile-Navigation {
    display: block;
  }
  .Main-Navigation {
    display: none !important;
  }
}
</style>
