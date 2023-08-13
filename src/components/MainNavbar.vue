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
      @click="movePage('/', $route)"
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
      <div
        class="child-navbar"
        :class="{ 'on-page': $route.path === '/' }"
        @click="movePage('/', this)"
      >
        Home
      </div>
      <div
        class="child-navbar"
        :class="{ 'on-page': $route.path === '/projects' }"
        @click="movePage('/projects', this)"
      >
        Projects
      </div>
      <div
        class="child-navbar"
        :class="{ 'on-page': $route.path === '/about' }"
        @click="movePage('/about', this)"
      >
        About
      </div>
    </div>
    <div class="Mobile-Navigation">
      <burger-navbar :isOpen="isOpen" @click="isOpen = !isOpen" />
      <q-menu
        @show="isOpen = true"
        @hide="isOpen = false"
        :visible="isOpen"
        transition-show="rotate"
        transition-hide="rotate"
        style="right: 25px !important"
        id="menu-mobile-navigation"
      >
        <q-list style="min-width: 150px">
          <q-item clickable>
            <q-item-section
              @click="movePage('/', this)"
              :class="{ 'on-page': $route.path === '/' }"
              >Home</q-item-section
            >
          </q-item>
          <q-item clickable>
            <q-item-section
              @click="movePage('/projects', this)"
              :class="{ 'on-page': $route.path === '/projects' }"
              >Projects</q-item-section
            >
          </q-item>
          <q-item clickable>
            <q-item-section
              @click="movePage('/about', this)"
              :class="{ 'on-page': $route.path === '/about' }"
              >About</q-item-section
            >
          </q-item>
        </q-list>
      </q-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BurgerNavbar from './BurgerNavbar.vue';
import { movePage } from '../functions/movePage';

export default defineComponent({
  components: { BurgerNavbar },
  name: 'MainNavbar',
  data() {
    return { isOpen: false };
  },
  methods: {
    movePage,
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
