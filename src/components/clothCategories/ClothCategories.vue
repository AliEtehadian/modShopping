<template>
  <div class="p-5" style="margin: 80px 0 0; background: #f5f5f5">
    <div class="d-flex flex-column align-items-center px-4">
      <div class="d-flex justify-content-center w-100 mb-5" style="border-bottom: 2px solid white">
        <a
          v-for="(c, i) in categories"
          :key="i"
          href="/#/"
          class="px-4 py-2 link-dark text-decoration-none"
          :class="{ activeLink: c.active }"
          style="font-size: 24px; font-weight: 350"
          @click="deactivate(i)"
          >{{ c.name }}</a
        >
      </div>

      <div class="col-12 img-hover-zoom mb-3">
        <router-link to="/#/" class="row position-relative d-flex align-items-end">
          <img :src="require(`../../assets/image/cloth categories/${dir}/1.jpg`)" />
          <div class="col-2 position-absolute px-0 pe-2">
            <div
              class="col-7 text-center text-secondary txt py-2"
              style="font-size: 1.25rem; background: #f5f5f5"
            >
              لباس مردانه
            </div>
          </div>
        </router-link>
      </div>

      <cloth-item
        v-for="(c, i) in categories"
        :active="c.active"
        :key="i"
        :dir="c.dir"
        :num="c.imgnum"
        :titles="c.titles"
      />
    </div>
  </div>
</template>

<script>
import clothItem from './clothItem.vue';

export default {
  components: { clothItem },
  data: () => ({
    categories: [
      {
        name: 'مردانه',
        active: false,
        dir: 'men',
        imgnum: [2, 3, 4],
        titles: ['کفش مردانه', 'اکسسوری مردانه', 'ورزشی مردانه'],
      },
      {
        name: 'زنانه',
        active: false,
        dir: 'women',
        imgnum: [2, 3, 4],
        titles: ['کفش زنانه', 'اکسسوری زنانه', 'ورزشی زنانه'],
      },
      {
        name: 'بچگانه',
        active: true,
        dir: 'children',
        imgnum: [2, 3],
        titles: ['دخترانه', 'پسرانه'],
      },
      {
        name: 'زیبایی و سلامت',
        active: false,
        dir: 'beauty',
        imgnum: [2, 3, 4, 5],
        titles: ['لوازم بهداشتی', 'لوازم برقی', 'عطر', 'ابزار سلامت'],
      },
    ],
    dir: 'children',
  }),
  methods: {
    deactivate(i) {
      this.categories.forEach((cat) => {
        // eslint-disable-next-line no-param-reassign
        cat.active = false;
      });
      this.categories[i].active = true;
      this.dir = this.categories[i].dir;
    },
  },
};
</script>

<style>
.activeLink {
  border-bottom: 4px solid !important;
  font-weight: 500 !important;
}
.img-hover-zoom {
  overflow: hidden;
}

.img-hover-zoom img {
  transition: transform 1s ease;
}

.img-hover-zoom:hover img {
  transform: scale(1.05);
}

.img-hover-zoom .txt {
  transition: color 0.8s;
}

.img-hover-zoom:hover .txt {
  color: black !important;
}
</style>
