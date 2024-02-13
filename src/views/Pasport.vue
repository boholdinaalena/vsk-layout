<template>
  <div class="title">
    Оформление полиса

    <div class="title-line-progress">
      <svg class="select-progress" width="11" height="11">
        <circle cx="5" cy="5.67188" r="5" />
      </svg>
      <svg class="select-progress" height="1">
        <line
          x1="0.5"
          y1="0.5"
          x2="417.5"
          y2="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg class="title-proggres-line select-progress" width="11" height="11">
        <circle cx="5" cy="5.67188" r="5" />
      </svg>
      <svg class="title-proggres-line select-progress" height="1">
        <line
          x1="0.5"
          y1="0.5"
          x2="417.5"
          y2="0.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg class="select-progress" width="11" height="11">
        <circle cx="5" cy="5.67188" r="5" />
      </svg>
    </div>
    <div class="title-text-progress">
      <p class="select-progress">Персональные данные</p>
      <p class="select-progress">Контактные данные</p>
      <p class="select-progress">Паспортные данные</p>
    </div>
  </div>
  <div class="pasport row">
    <div class="pasport-data">
        <input type="text" placeholder="Серия паспорта">
        <input type="text" placeholder="Номер паспорта">
        <input type="text" placeholder="Кем выдан">
        <div class="pasport-data-input">
        <input type="text" placeholder="Дата выдачи паспорта">
        <img class="pasport-data-calender" src="../assets/calender.svg" alt="">
        </div>
    </div>

    <div class="area">
      <div class="area-title">Страхователь</div>
      <div class="area-text medium"><b>Физическое лицо</b></div>
      <div class="area-title">Лимит</div>
      <div class="area-text"><b>1млн800тыс</b></div>
      <div class="amoun-line"></div>
      <div class="area-description">Страховой риск</div>
      <div class="area-text"><b>Смерть,Инвалидность</b></div>
      <div class="area-description">Срок страхования</div>
      <div class="area-text"><b>12 месяцев</b></div>
    </div>
  </div>
  <div class="next">
    <div class="next-text">*договор вступает в силу с 00.00 часов 5 дня с момента оплаты</div>
    <router-link class="next-btn" to="/policy-popup">Далее</router-link>
  </div>
</template>
<style lang="scss">
.pasport-data {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    width: 700px;
    gap: 20px;

    input {
        width: 256px;
    }

    &-input {
        display: flex;
        align-items: center;
    }

    &-calender {
        margin-left: -30px;
    }
}
</style>