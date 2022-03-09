// 제품 고르기
const current_product = document.createElement('div');
current_product.classList.add('current_product')

const machine_product = document.querySelector('.vending_machine');

let cash = 0;

let product_coke = 0;
let product_water = 0;
let product_coffee = 0;

let total_cash = 0;

let change_cash = 0;

current_product.textContent = `선택 제품: 
콜라: ${product_coke} 개,
물: ${product_water} 개,
커피: ${product_coffee} 개
`;


machine_product.append(current_product)

// 제품 선택
const coke = document.querySelector('.coke')
coke.addEventListener('click', getCoke)

const water = document.querySelector('.water')
water.addEventListener('click', getWater)

const coffee = document.querySelector('.coffee')
coffee.addEventListener('click', getCoffee)

function getCoke() {
  product_coke++
  alert(`콜라를 선택 하셨습니다`)
  total_cash = total_cash + 1100
  current_product.textContent = `선택 제품: 
  콜라: ${product_coke} 개,
  물: ${product_water} 개,
  커피: ${product_coffee} 개
  `;

  total_cash_text.textContent = `결제 금액: ${total_cash} 원`;
}

function getWater() {
  product_water++
  alert(`물을 선택 하셨습니다`)
  total_cash = total_cash + 600
  current_product.textContent = `선택 제품: 
  콜라: ${product_coke} 개,
  물: ${product_water} 개,
  커피: ${product_coffee} 개
  `;

  total_cash_text.textContent = `결제 금액: ${total_cash} 원`;
}

function getCoffee() {
  product_coffee++
  alert(`커피를 선택 하셨습니다`)
  total_cash = total_cash + 700
  current_product.textContent = `선택 제품: 
  콜라: ${product_coke} 개,
  물: ${product_water} 개,
  커피: ${product_coffee} 개
  `;

  total_cash_text.textContent = `결제 금액: ${total_cash} 원`;
}

// 현금 
const current_cash = document.createElement('div');
current_cash.classList.add('current_cash');

const cashes = document.querySelector('.cash');
cashes.append(current_cash)

current_cash.textContent = `투입 금액: ${cash} 원`;

const total_cash_text = document.createElement('div');
total_cash_text.classList.add('total_cash_test')

const payment = document.querySelector('.payment');
payment.append(total_cash_text)

total_cash_text.textContent = `결제 금액: ${total_cash} 원`;


// 현금 투입
const cach_hundred = document.querySelector('.hundred');
cach_hundred.addEventListener('click', plusHundred)

const cach_five_hundred = document.querySelector('.five_hundred');
cach_five_hundred.addEventListener('click', plusFiveHundred)

const cach_thousand = document.querySelector('.thousand');
cach_thousand.addEventListener('click', plusThousand)

const cach_five_thousand = document.querySelector('.five_thousand');
cach_five_thousand.addEventListener('click', plusFiveThousand)

const cach_ten_thousand = document.querySelector('.ten_thousand');
cach_ten_thousand.addEventListener('click', plusTenThousand)


function plusHundred() {
  cash = cash + 100;
  alert('100원이 투입 되었습니다')
  current_cash.textContent = `투입 금액: ${cash} 원`;
}

function plusFiveHundred() {
  cash = cash + 500;
  alert('500원이 투입 되었습니다')
  current_cash.textContent = `투입 금액: ${cash} 원`;
}
function plusThousand() {
  cash = cash + 1000;
  alert('1,000원이 투입 되었습니다')
  current_cash.textContent = `투입 금액: ${cash} 원`;
}
function plusFiveThousand() {
  cash = cash + 5000;
  alert('5,000원이 투입 되었습니다')
  current_cash.textContent = `투입 금액: ${cash} 원`;
}
function plusTenThousand() {
  cash = cash + 10000;
  alert('10,000원이 투입 되었습니다')
  current_cash.textContent = `투입 금액: ${cash} 원`;
}

// 현금 반환
const cash_return = document.createElement('button')
cash_return.classList.add('.cash_return_button');

cash_return.textContent = '현금반환'

cashes.appendChild(cash_return)

cash_return.addEventListener('click', cashReturn);

function cashReturn() {
  console.log('click')
  if (cash <= 0) {
    alert('현금을 넣어 주세요')
  } else {
    alert(`${cash}원이 반환 되었습니다`)
    cash = 0
    current_cash.textContent = `투입 금액: ${cash} 원`;
    change.remove()
  }
}



// 현금 결제
const payment_cash = document.querySelector('.payment_cash');

const change = document.createElement('div');
change.classList.add('.change_cash')

change.textContent = `환급 받을 돈 ${change_cash} 원`;



payment_cash.addEventListener('click', paymentCash);

// 거스름돈 받기
const change_button = document.createElement('button')
change_button.classList.add('.change_button');

change_button.textContent = '거스름돈 받기'
console.log(change_button)

function paymentCash() {
  if (product_coke === 0 && product_water === 0 && product_coffee === 0) {
    alert('제품을 선택해 주세요')
  } else if (cash === 0) {
    alert('현금을 투입해주세요')
  } else if (cash < total_cash) {
    alert('현금이 부족합니다')
  } else if (cash === total_cash) {
    cash = 0
    product_coke = 0;
    product_water = 0;
    product_coffee = 0;
    total_cash = 0;
    current_product.textContent = `선택 제품: 
    콜라: ${product_coke} 개,
    물: ${product_water} 개,
    커피: ${product_coffee} 개
    `;
    current_cash.textContent = `투입 금액: ${cash} 원`;
    total_cash_text.textContent = `결제 금액: ${total_cash} 원`;
    alert('현금 결제 완료')
  }

  else {
    change_cash = cash - total_cash
    cash = 0
    product_coke = 0;
    product_water = 0;
    product_coffee = 0;
    payment.append(change)
    payment.append(change_button)
    current_product.textContent = `선택 제품: 
    콜라: ${product_coke} 개,
    물: ${product_water} 개,
    커피: ${product_coffee} 개
    `;

    total_cash_text.textContent = `현금 결제 완료`;
    current_cash.textContent = `투입 금액: ${cash} 원`;
    change.textContent = `환급 받을 돈: ${change_cash} 원`;
  }
}

// 거스름돈 받기
change_button.addEventListener('click', getCash);

function getCash() {
  alert(`${change_cash}을 돌려 받았습니다`)
  cash = 0
  change_cash = 0
  change.remove()
  total_cash_text.remove()
  change_button.remove()
  cardOnOff.textContent = 'out'
  current_cash.textContent = `투입 금액: ${cash} 원`;
}


// 카드 넣기
const cardOnOff = document.createElement('span');
cardOnOff.classList.add('.card_check');

cardOnOff.textContent = 'out'

const card_machine = document.querySelector('.card_machine');
card_machine.append(cardOnOff)

card_machine.addEventListener('click', chackInCard);

function chackInCard() {
  if (cardOnOff.textContent === 'out') {
    alert('카드를 넣었습니다')
    cardOnOff.textContent = 'in'
  } else {
    alert('카드를 뺏습니다')
    cardOnOff.textContent = 'out'
  }
}

// 카드결제
const card = document.querySelector('.card');
card.addEventListener('click', paymentCard);

function paymentCard() {
  if (product_coke === 0 && product_water === 0 && product_coffee === 0) {
    alert('제품을 선택해 주세요')
  } else if (cardOnOff.textContent === 'out') {
    alert('카드를 넣어주세요')
  } else if (cardOnOff.textContent === 'in' && cash > 0) {
    change_cash = cash
    total_cash = 0;
    product_coke = 0;
    product_water = 0;
    product_coffee = 0;
    current_product.textContent = `선택 제품: 
    콜라: ${product_coke} 개,
    물: ${product_water} 개,
    커피: ${product_coffee} 개
    `;
    total_cash_text.textContent = `카드 결제 완료`;
    payment.append(change)
    // payment.append(change_button)
    change.textContent = `환급 받을 돈: ${change_cash} 원`;
    cardOnOff.textContent = 'out'
    alert('카드 결제 완료')
  } else if (cardOnOff.textContent === 'in' && cash === 0) {
    change_cash = cash
    // alert(`선택 제품: 
    // 콜라: ${product_coke} 개, 물: ${product_water} 개, 커피: ${product_coffee} 개을 구매 하셨습니다`)

    total_cash = 0;
    product_coke = 0;
    product_water = 0;
    product_coffee = 0;
    current_product.textContent = `선택 제품: 
    콜라: ${product_coke} 개,
    물: ${product_water} 개,
    커피: ${product_coffee} 개
    `;
    total_cash_text.textContent = `카드 결제 완료`;
    cardOnOff.textContent = 'out'
    alert(
      `카드 결제 완료
      카드를 반환합니다, 카드를 챙겨주세요
    `)
  }
}



