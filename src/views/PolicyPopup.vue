<template>
  <div class="policy-popup">
    <div class="policy-popup-header">
      <p>24210NZI1340016809</p>
      <div class="policy-popup-icons">
        <div class="policy-popup-icon">
          <img src="../assets/edit.svg" alt="edit" />
        </div>
        <div class="policy-popup-icon">
          <img src="../assets/cross.svg" alt="close" />
        </div>
      </div>
    </div>
    <div class="policy-popup-table">
      <table>
        <tr>
          <td>Тип страхования</td>
          <td>Срок страхования</td>
          <td>Сумма страхования</td>
        </tr>
        <tr class="category">
          <td >Смерть, Инвалидность</td>
          <td>66972363</td>
          <td>3500₽</td>
        </tr>
        <tr>
          <td>Страхователь</td>
          <td colspan="2">Виталий Моисеев</td>
        </tr>
        <tr>
          <td>Номер телефона</td>
          <td colspan="2">+7 963 393 49 49</td>
        </tr>
        <tr>
          <td>E-mail</td>
          <td colspan="2">test@test.ru</td>
        </tr>
        <tr>
          <td>Паспорт</td>
          <td colspan="2">6697 23639494</td>
        </tr>
        <tr class="tr-indent"></tr>
        <tr>
          <td>Сотрудник</td>
          <td colspan="2">Иванов Иван Иванович</td>
        </tr>
        <tr>
          <td>Промокод</td>
          <td colspan="2">AKCEPT</td>
        </tr>
        <tr>
          <td>Куратор</td>
          <td colspan="2">Петров Станислав Станиславович</td>
        </tr>
        <tr>
          <td>Счет на оплату</td>
          <td colspan="2">
            https://vsk.ru/2939384848
            <img src="../assets/copy.svg" alt="copy" />
          </td>
        </tr>
      </table>
    </div>

    <div class="policy-popup-nav">
      <button>Сформировать счет</button>
      <button>Предпросмотр полиса</button>
    </div>
  </div>
  <div class="bg-popup"></div>
</template>

<style lang="scss">

.policy-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 455px;
  background: white;
  font-size: 13px;
  font-family: PT Sans;
  padding: 32px 45px;
  padding-right: 20px;
  border-radius: 10px;

  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-icons {
    display: flex;
    gap: 8px;
  }

  &-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #eaeaea;
    border-radius: 8px;

    img {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &-table {
    display: flex;
    flex: 1;
    margin-bottom: 10px;

    td {
        width: 160px;
        line-height: 30px;
        vertical-align: middle;
    }

    td:first-child {
      width: 180px;
      color: #6E7B97;
      font-weight: 500;
      font-size: 14px;
    }
    td:last-child {
      width: 122px;
    }



    .category {
      margin: 24px 0;

      td:first-child {
        font-family: Raleway;
        font-weight: normal;
        color: #000000;
        font-size: 13px;
      }

    }

    tr:first-child {
      font-size: 12px;
      font-weight: 600;
      color: #a0a0ae;
      justify-self: end;

      td:first-child {
        font-size: 12px;
      font-weight: 600;
      color: #a0a0ae;
      justify-self: end;
      }
    }
  }

  &-nav {
    display: flex;
    gap: 10px;

    button {
      background: #2D6ABA;
      border-radius: 16px;
      color: white;
      font-family: Raleway;
      font-weight: 500;
      font-size: 16px;
      padding: 19px;
      width: 50%;
    }
  }
}

.tr-indent {
  height: 70px;
}

</style>
