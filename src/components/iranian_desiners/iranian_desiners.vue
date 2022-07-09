<template>
  <div class="p-5" style="margin: 7px 0 0; background: #f5f5f5">
    <div class="container p-5">
      <div class="mb-5">
        <p style="font-size: 1.75rem">طـــراحانــ ایــــرانـی</p>
      </div>
      <div class="d-flex">
        <div class="col-3 d-flex flex-column" style="line-height: 3">
          <a
            :class="[
              'link-secondary text-decoration-none',
              component == 'degreman' ? 'active link-dark' : undefined,
            ]"
            @click="component = 'degreman'"
            href="/#/"
            >دگرمان</a
          >
          <a
            :class="[
              'link-secondary text-decoration-none',
              component == 'gray' ? 'active link-dark' : undefined,
            ]"
            @click="component = 'gray'"
            href="/#/"
            >گری
          </a>
          <a
            :class="[
              'link-secondary text-decoration-none',
              component == 'dalavin' ? 'active link-dark' : undefined,
            ]"
            @click="component = 'dalavin'"
            href="/#/"
            >دالاوین</a
          >
          <a
            :class="[
              'link-secondary text-decoration-none',
              component == 'yele' ? 'active link-dark' : undefined,
            ]"
            @click="component = 'yele'"
            href="/#/"
            >یله
          </a>
          <a
            :class="[
              'link-secondary text-decoration-none',
              component == 'ncno' ? 'active link-dark' : undefined,
            ]"
            @click="component = 'ncno'"
            href="/#/"
            >ان سی نو</a
          >
          <a
            :class="[
              'link-secondary text-decoration-none',
              component == 'coy' ? 'active link-dark' : undefined,
            ]"
            @click="component = 'coy'"
            href="/#/"
            >کوی
          </a>
        </div>
        <div class="row col-9 d-flex m-0">
          <div class="row d-flex mb-4 gx-4 mx-0 p-0">
            <img class="col-8" :src="require(`../../assets/image/${component}/5.jpg`)" />
            <img class="col-4" :src="require(`../../assets/image/${component}/1.jpg`)" />
          </div>

          <div class="row d-flex gx-4 mx-0 p-0">
            <img class="col-4" :src="require(`../../assets/image/${component}/3.jpg`)" />
            <img class="col-4" :src="require(`../../assets/image/${component}/4.jpg`)" />
            <img class="col-4" :src="require(`../../assets/image/${component}/2.jpg`)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    component: 'gray',
  }),
};
</script>

<style>
.active {
  font-size: 25px;
  font-weight: 500;
}
</style>
