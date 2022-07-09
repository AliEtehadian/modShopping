<template>
  <div class="d-flex box">
    <div v-show="active" class="col img-hover-zoom" v-for="(n, i) in num" :key="i">
      <router-link to="/#/" class="row position-relative d-flex align-items-end">
        <img :src="require(`../../assets/image/cloth categories/${dir}/${n}.jpg`)" />
        <div class="px-0 pe-2 position-absolute">
          <div
            class="py-2 px-3 text-center text-secondary txt"
            style="font-size: 1.25rem; background: #f5f5f5; width: fit-content"
          >
            {{ titles[i] }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dir: {
      type: String,
    },
    num: {
      type: Array,
    },
    title: {
      type: String,
    },
    active: {
      type: Boolean,
    },
    titles: {
      type: Array,
    },
  },
};
</script>

<style>
.box {
  margin: 0px -16px;
}
.box > * {
  margin: 16px;
}
</style>
