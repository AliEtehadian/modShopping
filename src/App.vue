<template>
  <div>
    <app-header />

    <section>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </section>
  </div>
</template>
<script>
import AppHeader from './components/Header.vue';

export default {
  components: { AppHeader },
};
</script>
<style>
body {
  /* font-family: IRANYekan; */
  direction: rtl;
  font-weight: 400;
  overflow-x: hidden;
}
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
