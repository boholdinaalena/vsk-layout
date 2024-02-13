<template>
    <div class="title">
      Оформление полиса

      <div class="title-line-progress">
        <svg class="select-progress" width="11" height="11">
          <circle cx="5" cy="5.67188" r="5" />
        </svg>
        <svg height="1">
          <line
            opacity="0.3"
            x1="0.5"
            y1="0.5"
            x2="417.5"
            y2="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg class="title-proggres-line" width="11" height="11">
          <circle cx="5" cy="5.67188" r="5" />
        </svg>
        <svg class="title-proggres-line" height="1">
          <line
            opacity="0.3"
            x1="0.5"
            y1="0.5"
            x2="417.5"
            y2="0.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg width="11" height="11">
          <circle cx="5" cy="5.67188" r="5" />
        </svg>
      </div>
      <div class="title-text-progress">
        <p class="select-progress">Персональные данные</p>
        <p>Контактные данные</p>
        <p>Паспортные данные</p>
      </div>
    </div>
  <div class="personal row">
    <div class="personal-data">
      <div class="insured">
        <div class="insured-title">Страхователь</div>
        <input type="text" placeholder="Физическое лицо" />
        <input type="text" placeholder="Фамилия" />
        <input type="text" placeholder="Имя" />
        <input type="text" placeholder="Отчество" />
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
    <div class="next-empty"></div>
    <div class="next-text">*договор вступает в силу с 00.00 часов 5 дня с момента оплаты</div>
    <router-link class="next-btn" to="/contact-data">Далее</router-link>
  </div>
</template>
<style lang="scss">
.insured {
  &-title {
    font-size: 20px;
    margin-top: 15px;
  }

  input {
    display: flex;
    width: 498px;
    margin-top: 15px;
  }
}

.area {
    margin-left: 230px;

  }
</style>
