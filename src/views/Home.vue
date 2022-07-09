<template>
  <div>
    <iranianDesiners />
    <discount-wrap-picture />
    <cloth-categories />

    <horizantal-list />
  </div>
</template>
<script>
import DiscountWrapPicture from '../components/DiscountWrapPicture.vue';
import IranianDesiners from '../components/iranian_desiners/iranian_desiners.vue';
import ClothCategories from '../components/clothCategories/ClothCategories.vue';

export default {
  name: 'Home',
  components: {
    IranianDesiners,
    DiscountWrapPicture,
    ClothCategories,
  },
};
</script>
