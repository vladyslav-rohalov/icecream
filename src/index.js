//Swiper
//-------------------------------------------------------------------------------------
import './js/header-scroll';
import Swiper, { Pagination, Keyboard, Autoplay } from 'swiper';
import '../node_modules/swiper/swiper.scss';

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

import { onModalOpen } from './js/modal-all';

document.addEventListener('DOMContentLoaded', onModalOpen); // end ready

//--------------------------------------------------------------------------------------
// Numbers animation
import throttledOnScrollMouse from './js/number-animation';

window.addEventListener('scroll', throttledOnScrollMouse);
