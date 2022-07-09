<template>
  <header>
    <div
      class="container-fluid"
      :class="{ 'position-absolute': carouselActive, 'mb-4 shadow': !carouselActive }"
      style="z-index: 2"
    >
      <nav class="nav d-flex justify-content-between">
        <div class="col-2 d-flex justify-content-end mb-auto pt-4">
          <router-link
            v-if="carouselActive"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="مشاهده حساب کاربری"
            :to="{ name: 'logIn' }"
            class="text-decoration-none text-black login"
            >ورود/ ثبت نام
          </router-link>
        </div>
        <div class="col-6 d-block-flex justify-content-center">
          <router-link
            class="text-black font-header-1 text-decoration-none d-flex justify-content-center"
            exact-active-class="no-active"
            :to="{ name: 'home' }"
            >MODSTYLE</router-link
          >
          <div v-if="carouselActive & !isMobile" class="bg-secondary my-2 mx-auto w-50">
            <hr style="height: 0.2px; margin: 0px" />
          </div>
          <div v-if="carouselActive & !isMobile" class="d-flex justify-content-center">
            <a class="nav-link font-header-2 text-black" href="#">زنانه </a>
            <a class="nav-link font-header-2 text-black" href="#">مردانه </a>
            <a class="nav-link font-header-2 text-black" href="#">بچگانه </a>
            <a class="nav-link font-header-2 text-black" href="#">حراج استایل</a>
            <div class="vr my-auto" style="height: 12px"></div>
            <a class="nav-link d-inline font-header-2 text-black" href="#">زیبایی و سلامت</a>
            <a class="nav-link font-header-2 text-black" href="#">برندها </a>
            <a class="nav-link font-header-2 text-black" href="#">خانه ساعت </a>
          </div>
        </div>
        <div class="col-2 d-flex justify-content-center mb-auto pt-4">
          <header-search v-if="carouselActive & !isMobile" />
        </div>
      </nav>
    </div>
    <hedear-carousel v-if="carouselActive" />
  </header>
</template>

<script>
import HeaderSearch from './HeaderSearch.vue';
import HedearCarousel from './HedearCarousel.vue';

export default {
  components: { HeaderSearch, HedearCarousel },
  name: 'Header',
  data: () => ({}),
  computed: {
    carouselActive() {
      return this.$route.name !== 'logIn';
    },
    isMobile() {
      return window.innerWidth < 600;
    },
  },
  mounted() {},
};
</script>

<style>
.font-header-1 {
  font-weight: 490px;
  font-size: 45px;
}
.font-header-2 {
  font-weight: 400;
  font-size: 14px;
}
.font-header-2:hover {
  font-weight: 700;
}
.login {
  font-size: 0.8rem;
  font-weight: 500;
  color: gray;
}
</style>
