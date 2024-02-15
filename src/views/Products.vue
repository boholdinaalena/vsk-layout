<template>
  <div class="title">Страховые продукты</div>
  <div class="products">
    <div class="product">
      <div class="product-title">Страхование от несчастных<br> случаев</div>
      <div class="product-description">
        Защита для вас и вашего ребенка на случай непредвиденных событий
      </div>
      <router-link to="/statistics" class="product-btn"
        >Оформить полис</router-link
      >
      </div>
      <div class="product">
        <div class="product-title">Страхование от несчастных<br> случаев</div>
        <div class="product-description">
          Защита для вас и вашего ребенка на случай непредвиденных событий
        </div>
        <router-link to="/statistics" class="product-btn"
          >Оформить полис</router-link
        >
    </div>
  </div>
</template>

<style lang="scss">

.products {
  display: flex;
  gap: 30px;
  margin-top: 34px;
}

.product {
  width: 400px;
  background: rgba(249, 249, 249, 1);
  padding: 34px 0px 0px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);

  &-title, &-description {
    margin-left: 34px;
    margin-bottom: 34px;
  }

  &-title {
    font-size: 26px;
    font-family: Montserrat;
    font-weight: bold;
    line-height: 36px;
    text-transform: uppercase;
  }

  &-btn {
    height: 54px;
    width: 243px;
    font-weight: bold;
    font-size: 16px;
    text-transform: uppercase;
  }

}
</style>
