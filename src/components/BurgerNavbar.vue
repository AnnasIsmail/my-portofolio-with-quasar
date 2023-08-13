<template>
  <div>
    <div class="menu-btn" :class="{ open: isOpen }">
      <div class="menu-btn__burger"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BurgerNavbar',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
});
</script>

<style scoped>
.menu-btn {
  cursor: pointer;
}
.menu-btn__burger {
  width: 30px;
  height: 4px;
  margin-top: 15px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
}
.menu-btn__burger::before,
.menu-btn__burger::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 4px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
}
.menu-btn__burger::before {
  transform: translateY(-10px);
}
.menu-btn__burger::after {
  transform: translateY(10px);
}
/* ANIMATION */
.menu-btn.open .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}
.menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
}
.menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
}
</style>
