<template>
  <section class="" style="margin: 80px 0 0">
    <div class="d-flex" style="overflow-x: hidden">
      <div class="col-4 d-flex flex-column p-0 ms-1">
        <router-link to="/#/" class="row">
          <img :src="require('../assets/image/midle col/2.jpg')" />
        </router-link>
        <router-link to="/#/" class="row pt-1">
          <img :src="require('../assets/image/midle col/1.jpg')" />
        </router-link>
      </div>
      <div class="col-8 d-flex flex-column p-0">
        <router-link to="/#/" class="row mb-1">
          <img class="" :src="require('../assets/image/midle col/3.jpg')" />
        </router-link>

        <div class="d-flex">
          <router-link to="/#/" class="row col-4 m-0 ms-1">
            <img :src="require('../assets/image/midle col/4.jpg')" class="p-0" />
          </router-link>
          <router-link to="/#/" class="row col-8 m-0">
            <img :src="require('../assets/image/midle col/5.jpg')" class="p-0" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
