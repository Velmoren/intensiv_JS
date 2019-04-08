const switcher = document.querySelector('#cbx'),
  more = document.querySelector('.more'),
  model = document.querySelector('.model'),
  videos = document.querySelectorAll('.videos__item');

let player;

function bindSlideToggle(trigger, boxBody, content, openClass) {
  let button = {
    'element': document.querySelector(trigger),
    'active': false
  };
  const box = document.querySelector(boxBody),
    boxContent = document.querySelector(content);

  /* обработчики событий */
  button.element.addEventListener('click', () => {
    if (button.active === false) {
      /* проверяем меню на неактивность */
      button.active = true; /* если она не активна - то активируем */
      /*кроссбраузерность высоты для браузера Опера */
      let operaHeight = boxContent.scrollHeight + 35;
      box.style.height = Math.max(operaHeight, boxContent.clientHeight) + 'px';
      box.classList.add(openClass); /* Активный класс для слайда */
    } else {
      button.active = false; /* если она активна - делаем ее неактивной */
      box.style.height = 0 + 'px';
      box.classList.remove(openClass); /* Удаляем активный класс для слайда */
    }
  }); /* это функция callback */
}
/* вызываем функцию с нужными нам аргументами */
bindSlideToggle('.hamburger', '[data-slide="nav"]', '.header__menu', 'slide-active');

/* функция переключения режимов темного/светлого */
function switchMode() {
  if (night === false) {
    // document.body.style.backgroundColor = '#000';
    night = true;
    document.body.classList.add('night');
    /* трансформируем бургер-кнопку */
    document.querySelectorAll('.hamburger > line').forEach(item => {
      item.style.stroke = '#fff';
    });

    document.querySelectorAll('.videos__item-descr').forEach(item => {
      item.style.color = '#fff';
    });

    document.querySelectorAll('.videos__item-views').forEach(item => {
      item.style.color = '#fff';
    });

    document.querySelector('.header__item-descr').style.color = '#fff';

    document.querySelector('.logo > img').src = 'logo/youtube_night.svg';
  } else {
    night = false;
    // document.body.style.backgroundColor = '#fff';
    document.body.classList.remove('night');
    document.querySelectorAll('.hamburger > line').forEach(item => {
      item.style.stroke = '#000';
    });
    document.querySelectorAll('.videos__item-descr').forEach(item => {
      item.style.color = '#000';
    });
    document.querySelectorAll('.videos__item-views').forEach(item => {
      item.style.color = '#000';
    });
    document.querySelector('.header__item-descr').style.color = '#000';
    document.querySelector('.logo > img').src = 'logo/youtube.svg';
  }
}

let night = false;
switcher.addEventListener('change', () => {
  switchMode();
});

const data = [
  ['img/thumb_3.webp', 'img/thumb_4.webp', 'img/thumb_5.webp'],
  ['#3 Верстка на Flexbox CSS | Блок преимущества и галерея | Марафон верстки | Вртем Исламов',
    '#2 Установка spikmi и работа с ветками на Github | Марафон верстки Урок 2',
    '#1 Верстка реального заказа Landing Page | Марафон верстки | Артем Исламов'
  ],
  ['3,6 тыс. просмотров', '4,2 тыс. просмотров', '28 тыс. просмотров'],
  ['X9SmcY3LM-U', '7BvHoh0BrMw', 'mC8JW_aG2EM']
];

more.addEventListener('click', () => {
  const videosWrapper = document.querySelector('.videos__wrapper');
  more.remove();

  /* перебираем массив Data */
  for (let i = 0; i < data[0].length; i++) {
    let card = document.createElement('a');
    card.classList.add('videos__item', 'videos__item-active');
    card.setAttribute('data-url', data[3][i]);
    /* косые кавычки специально для интерполяции */
    card.innerHTML = `
    <img src="${data[0][i]}" alt="thumb">
    <div class="videos__item-descr">
        ${data[1][i]}
    </div>
    <div class="videos__item-views">
        ${data[2][i]}
    </div>
    `;
    videosWrapper.appendChild(card);
    /* запуск через промежуток времени */
    setTimeout(() => {
      card.classList.remove('videos__item-active');
    }, 10);
  }
});