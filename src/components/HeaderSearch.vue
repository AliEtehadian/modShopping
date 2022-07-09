script
<template>
  <input
    placeholder="جستجو محصولات"
    style="background: none; font-size: 15px; color: gray"
    @click="active = !active"
  />

  <div
    :class="['position-absolute', active ? 'offcanvas.show' : 'offcanvas offcanvas-top']"
    id="offcanvasTop"
    style="
      z-index: 2;
      width: 100%;
      top: 0;
      right: 0;
      left: 0;
      height: 490px;
      background: rgba(243, 243, 244, 0.98);
    "
  >
    <div class="row d-flex flex-column align-items-center offcanvas-body">
      <div class="col-8 py-5">
        <div class="d-flex justify-content-end">
          <button type="button" class="btn-close text-reset" @click="active = !active"></button>
        </div>
        <div class="py-4">
          <i class="bi bi-search"></i>

          <div class="input-icons">
            <i class="bi bi-search"></i>
            <input
              class="w-100 p-3"
              id="input2"
              placeholder="جستجو کنید ..."
              style="background: none; font-size: 17px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false,
    visibleTop: false,
  }),
  methods: {
    focusNext(elem) {
      this.active = !this.active;
      const currentIndex = Array.from(elem.form.elements).indexOf(elem);
      elem.form.elements
        .item(currentIndex < elem.form.elements.length - 1 ? currentIndex + 1 : 0)
        .focus();
    },
  },
};
</script>

<style>
.input-icons {
  width: 100%;
  margin-bottom: 10px;
}

.icon {
  padding: 10px;
  color: green;
  min-width: 50px;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  text-align: center;
}
input {
  border: 0;
  outline: 0;
  border-bottom: 1px gray solid;
}

.offcanvas,
.offcanvas-top:active,
.offcanvas.show:active {
  transition: 8s;
}
</style>
