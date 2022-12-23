//Swiper
//-------------------------------------------------------------------------------------
import './js/header-scroll';
import Swiper, { Pagination, Keyboard, Autoplay } from 'swiper';
import '../node_modules/swiper/swiper.scss';
//import '../node_modules/swiper/modules/pagination/pagination.scss';

const swiper = new Swiper('[data-swiper="gallery"]', {
  modules: [Keyboard, Autoplay],
  keyboard: {
    enabled: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  speed: 800,
});

const swiperReviews = new Swiper('[data-swiper="reviews"]', {
  modules: [Pagination, Keyboard],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  loop: true,
  speed: 800,
});

//Modal window
//-------------------------------------------------------------------------------------

!(function (e) {
  'function' != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    'function' != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

const scrollController = {
  disablesScroll() {
    document.body.style.cssText = `
    overflow: hidden;
    `;
  },
  enabledScroll() {
    document.body.style.cssText = '';
  },
};

document.addEventListener('DOMContentLoaded', function () {
  /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function (e) {
      /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
      e.preventDefault();

      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
      modalElem.classList.add('active');
      overlay.classList.add('active');
      scrollController.disablesScroll();
    }); // end click
  }); // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
      scrollController.enabledScroll();
    });
  }); // end foreach

  document.body.addEventListener(
    'keyup',
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector('.modal.active').classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
        scrollController.enabledScroll();
      }
    },
    false
  );

  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
    scrollController.enabledScroll();
  });
}); // end ready

//--------------------------------------------------------------------------------------
// Numbers animation
import throttledOnScrollMouse from './js/number-animation';

window.addEventListener('scroll', throttledOnScrollMouse);
