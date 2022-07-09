<template>
  <div class="row" dir="ltr">
    <div id="carouselAll" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselAll" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselAll" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselAll" data-bs-slide-to="2"></li>
        <li data-bs-target="#carouselAll" data-bs-slide-to="3"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/image/l.jpg" alt="First slide" class="d-block w-100" />
        </div>
        <div class="carousel-item">
          <img src="../assets/image/wow.jpg" alt="Second slide" class="d-block w-100" />
        </div>
        <div class="carousel-item">
          <img src="../assets/image/brands.jpg" alt="Third slide" class="d-block w-100" />
          <div class="carousel-caption">
            <h3>Caption</h3>
            <p>This text describes the third slide</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../assets/image/r.jpg" alt="Fourth slide" class="d-block w-100" />

        </div>
      </div>
      <a href="#carouselAll" class="carousel-control-prev" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a href="#carouselAll" class="carousel-control-next" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.agile__nav-button {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  height: 100%;
  position: absolute;
  top: 0;
  transition-duration: 0.3s;
  width: 80px;
}
.agile__nav-button:hover {
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
.agile__nav-button--prev {
  left: 0;
}
.agile__nav-button--next {
  right: 0;
}
.agile__dots {
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #fff;
}

.slide {
  display: block;

  -o-object-fit: cover;
  object-fit: cover;
}
</style>
