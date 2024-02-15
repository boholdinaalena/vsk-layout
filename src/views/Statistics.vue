<template>
  <div class="title">Расчет стоимости полиса</div>

  <div class="statistics row">
    <div>
      <div class="block limit">
        <div class="block-title limit-title">Страхователь</div>
        Лимит покрытия (рубли)
        <div class="limit-line"></div>
        <div class="limit-prices">
          <div class="limit-price">150 000</div>
          <input class="limit-input" type="text" />
          <div class="limit-price">10 000 000</div>
        </div>
      </div>

      <div class="block insurance">
        <div class="block-title insurance-title">Страховые риски</div>
        <div class="insurance-container">
          <div class="insurance-content">
            <img
              class="insurance-content-img"
              src="../assets/check.svg"
              alt="check"
            />
            <div class="insurance-content-title">Смерть</div>
            <div class="insurance-content-description">
              Смерть Застрахованного в результате несчастного случая
              произошедшего в период страхования
            </div>
          </div>

          <div class="insurance-content">
            <img
              class="insurance-content-img"
              src="../assets/check.svg"
              alt="check"
            />
            <div class="insurance-content-title">
              Временная нетрудоспособность
            </div>
            <div class="insurance-content-description">
              Застрахованного в результате несчастного случая, произошедшего в
              период страхования, и приведшего к временной нетрудоспособности
              работающего Застрахованного или к лечению в условиях поликлиники
              или стационара неработающего застрахованного
            </div>
          </div>
        </div>
        Срок страхования
        <div class="insurance-data">12 месяцев</div>
      </div>
    </div>
    <div class="area">
      <div class="area-title">Страхователь</div>
      <div class="area-text medium">Физическое лицо</div>
      <div class="area-title">Лимит</div>
      <div class="area-text">1млн800тыс</div>
      <hr>
      <div class="amoun-line"></div>
      <div class="area-description">Страховой риск</div>
      <div class="area-text">Смерть,Инвалидность</div>
      <div class="area-description">Срок страхования</div>
      <div class="area-text">12 месяцев</div>
      <div class="amoun-line"></div>
      <hr>
      <div class="area-description">Предварительный расчёт</div>
      <div class="area-sum">0₽</div>
      <router-link class="area-btn" to="/personal-data-insured">Рассчитать</router-link>
    </div>
  </div>
</template>
<style lang="scss">

.limit {
  &-title {
    margin-bottom: 30px;
  }

  &-line {
    background: #1958fa;
    height: 3px;
    border-radius: 100px;
    margin: 40px 0px 17px;
  }
  &-prices {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-price {
    flex-shrink: 0;
    color: rgba(0, 0, 0, 0.3);
  }

  &-input, input[type=text] {
    padding: 0;
    height: 37px;
    min-width: 198px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    text-align: center;
    color: #495057;
    font-size: 16px;
  }
}

.insurance {
  &-title {
    margin-bottom: 15px;
  }
  &-container {
    display: flex;
    gap: 21px;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  &-content:first-child {
    width: 218px;
    flex: none;
  }

  &-content {
    align-self: flex-start;
    flex: 1;
    padding: 17px;
    border-radius: 12px;
    background: rgba(25, 88, 250, 0.05);

    &-img {
      width: 20px;
      margin-bottom: 10px;
    }

    &-title {
      font-size: 16px;
      margin-bottom: 16px;
    }

    &-description {
      font-size: 10px;
      line-height: 18px;
    }
  }

  &-data {
    text-align: end;
    color: rgba(0, 0, 0, 0.3);
  }
}

.block {
  max-width: 540px;
  padding: 20px;
  margin: 18px 15px 0px;
  background: white;
  font-family: "PT Sans";
  font-weight: 200;
  font-size: 14px;
  letter-spacing: 0.2px;
  border-radius: 4px;

  &-title {
    font-size: 20px;
  }
}


</style>
