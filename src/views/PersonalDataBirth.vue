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
      <svg class="title-proggres-line" height="1">
        <line
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
      <p class="select-progress">Контактные данные</p>
      <p>Паспортные данные</p>
    </div>
  </div>
  <div class="contact row">
    <div class="contact-data">
      <label>Дата рождения</label>
      <div class="contact-data-birth">
        <input type="text" placeholder="День" />
        <input type="text" placeholder="Месяц" />
        <input type="text" placeholder="Год" />
      </div>

      <label>Номер телефона</label>
      <input type="text" placeholder="+7(___)___-__-__" />

      <label>Почта</label>
      <input type="text" placeholder="E-mail" />

      <label>Адрес застрахованного</label>
      <input type="text" placeholder="Адрес" />
    </div>
    <div class="area">
      <div class="area-title">Страхователь</div>
      <div class="area-text medium">Физическое лицо</div>
      <div class="area-title">Лимит</div>
      <div class="area-text">1млн800тыс</div>
      <hr class="long" />
      <div class="amoun-line"></div>
      <div class="area-description">Страховой риск</div>
      <div class="area-text">Смерть,Инвалидность</div>
      <div class="area-description">Срок страхования</div>
      <div class="area-text">12 месяцев</div>
    </div>
  </div>
  <div class="routing">
    <div class="routing-empty"></div>
    <div class="routing-text">
      *договор вступает в силу с 00.00 часов 5 дня с <br />
      момента оплаты
    </div>
    <div class="routing-container">
      <router-link class="routing-btn" to="/personal-data-insured"
        >Назад</router-link
      >
      <router-link class="routing-btn" to="/personal-data-pasport">Вперед</router-link>
    </div>
  </div>
</template>
<style lang="scss">
.contact {
  .area {
    margin-left: 100px;
  }
}
.contact-data {
  margin-top: 20px;
  min-width: 506px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;

  label {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
  }

  &-birth {
    display: flex;
    justify-content: space-between;

    input[type="text"] {
      width: 116px;
    }
  }

  &-btn {
    width: 263px;
    height: 47px;
    font-family: PT Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    margin-bottom: 25px;
  }

  &-list {
    margin-bottom: 120px;
  }

  &-item {
    display: flex;
    justify-content: space-between;
    width: 201px;
    background: white;
    padding: 12px;
    border-radius: 8px;
  }
}
</style>
