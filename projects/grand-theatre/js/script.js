/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/aos.js":
/*!***********************!*\
  !*** ./src/js/aos.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const aos = () => {
  AOS.init({
    disable: function () {
      let maxWidth = 900;
      return window.innerWidth <= maxWidth;
    },
    offset: 200,
    duration: 800,
    once: true
  });
};

/* harmony default export */ __webpack_exports__["default"] = (aos);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiper */ "./src/js/swiper.js");
/* harmony import */ var _menuBurger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuBurger */ "./src/js/menuBurger.js");
/* harmony import */ var _scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrolling */ "./src/js/scrolling.js");
/* harmony import */ var _aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aos */ "./src/js/aos.js");




window.addEventListener('DOMContentLoaded', () => {
  Object(_aos__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_swiper__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_menuBurger__WEBPACK_IMPORTED_MODULE_1__["default"])('.menu-btn', '.header__aside', '.menu');
  Object(_scrolling__WEBPACK_IMPORTED_MODULE_2__["default"])('.pageup', '.header__aside', '.menu', '.menu-btn');
});

/***/ }),

/***/ "./src/js/menuBurger.js":
/*!******************************!*\
  !*** ./src/js/menuBurger.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menuBurger = (burgerTrigger, ...menuTrigger) => {
  const burger = document.querySelector(burgerTrigger);
  const menu = document.querySelectorAll(menuTrigger);
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.forEach(e => {
      e.classList.toggle('active');
    });
  });

  if (window.innerWidth > 1024) {
    menu.forEach(e => {
      e.classList.remove('active');
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (menuBurger);

/***/ }),

/***/ "./src/js/scrolling.js":
/*!*****************************!*\
  !*** ./src/js/scrolling.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = (upSelector, ...menuTrigger) => {
  const menu = document.querySelectorAll(menuTrigger);
  /* Появление стрелки вверх */

  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1000) {
      upElem.style.pointerEvents = "all";
      upElem.style.opacity = "1";
    } else {
      upElem.style.pointerEvents = "none";
      upElem.style.opacity = "0";
    }
  });
  /* Скролл при помощи requestAnimationFrame */

  let links = document.querySelectorAll('[href^="#"]'),
      speed = 0.15;
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      menu.forEach(e => {
        e.classList.remove('active');
      });
      let widthTop = document.documentElement.scrollTop,
          hash = this.hash,
          toBlock = document.querySelector(hash).getBoundingClientRect().top,
          start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
            r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/swiper.js":
/*!**************************!*\
  !*** ./src/js/swiper.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const swiper = () => {
  new Swiper('.poster-slider', {
    spaceBetween: 50,
    centeredSlides: true,
    speed: 1000,
    breakpoints: {
      320: {
        pagination: {
          el: '.poster-pagination',
          clickable: true
        }
      },
      1024: {
        navigation: {
          nextEl: '.poster-button-next',
          prevEl: '.poster-button-prev'
        }
      }
    }
  });

  if (window.innerWidth < 1024) {
    document.querySelector('.poster-button-next').style.display = 'none';
    document.querySelector('.poster-button-prev').style.display = 'none';
  }

  new Swiper('.image-slider', {
    slidesPerView: 4,
    speed: 1000,
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          el: '.image-pagination',
          clickable: true
        }
      },
      425: {
        slidesPerView: 2,
        pagination: {
          el: '.image-pagination',
          clickable: true
        }
      },
      768: {
        slidesPerView: 3,
        pagination: {
          el: '.image-pagination',
          clickable: true
        }
      },
      1024: {
        slidesPerView: 4
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (swiper);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map