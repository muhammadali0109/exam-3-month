current = 0;

const next = document.getElementById('increment');
const span = document.getElementById('span');
const prev = document.getElementById('decrement');

next.addEventListener('click', () => {
  current++;
  span.textContent = current
})
prev.addEventListener('click', () => {
  current--;
  span.textContent = current
  if(current < 0){
    span.textContent = 0
  }
})

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  btn.textContent = "Добавлено"
  btn.classList.add('section-1__btn-js')
})






const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close');

const basket = document.getElementById('basket');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

btn1.addEventListener('click', () => {
  basket.innerHTML += `  
  <h2>fruits</h2>
  <p>1 200 rub</p>`
  btn1.textContent = "Добавлено"
  btn1.classList.add('section__bn1') 
})
btn2.addEventListener('click', () => {
  basket.innerHTML += `  
  <h2>rabbit</h2>
  <p>1 200 rub</p>`
btn2.textContent = "Добавлено"
btn2.classList.add('section__bn1') 
})
btn3.addEventListener('click', () => {
  basket.innerHTML += `  
  <h2>love</h2>
  <p>1 200 rub</p>`
btn3.textContent = "Добавлено"
btn3.classList.add('section__bn1') 
})
btn4.addEventListener('click', () => {
  basket.innerHTML += `  
  <h2>pinapple</h2>
  <p>1 200 rub</p>`
btn4.textContent = "Добавлено"
btn4.classList.add('section__bn1') 
})
btn5.addEventListener('click', () => {
  basket.innerHTML += `  
  <h2>flowers</h2>
  <p>1 200 rub</p>`
btn5.textContent = "Добавлено"
btn5.classList.add('section__bn1') 
})
btn6.addEventListener('click', () => {
  basket.innerHTML += `  
  <h2>leaf</h2>
  <p>1 200 rub</p>`
btn6.textContent = "Добавлено"
btn6.classList.add('section__bn1') 
})
openBtn.addEventListener('click',() => {
  basket.classList.add('header__open')
  
})
closeBtn.addEventListener('click',  () => {
  basket.classList.remove('header__open')
})


