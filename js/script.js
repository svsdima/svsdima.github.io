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

/***/ "./src/js/burger.js":
/*!**************************!*\
  !*** ./src/js/burger.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector),
        burgerElem = document.querySelector(burgerSelector);
  menuElem.style.display = "none";
  /* Открытие бургера */

  burgerElem.addEventListener('click', e => {
    e.preventDefault();

    if (menuElem.style.display == "none") {
      menuElem.style.display = "block";
      menuElem.classList.add('animate__animated', 'animate__slideInLeft');
      menuElem.classList.remove('animate__slideOutLeft');
      burgerElem.classList.add('is-active');
    } else {
      menuElem.classList.add('animate__slideOutLeft');
      menuElem.classList.remove('animate__slideInLeft');
      burgerElem.classList.remove('is-active');
      setTimeout(function () {
        menuElem.style.display = "none";
      }, 500);
    }

    clearTimeout();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = () => {
  const menu = document.querySelector('.portfolio__menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLanding = menu.querySelector('.landing'),
        btnStore = menu.querySelector('.store'),
        btnApp = menu.querySelector('.app'),
        wrapper = document.querySelector('.portfolio__wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markLanding = wrapper.querySelectorAll('.landing'),
        markStore = wrapper.querySelectorAll('.store'),
        markApp = wrapper.querySelectorAll('.app'),
        no = document.querySelector('.portfolio__no');
  /* Фильтрация элементов */

  const typeFilter = markType => {
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animate__animated', 'animate__fadeIn');
    });
    no.style.display = 'none';
    no.classList.remove('animate__animated', 'animate__fadeIn');

    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animate__animated', 'animate__fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animate__animated', 'animate__fadeIn');
    }
  };

  btnAll.addEventListener('click', () => {
    typeFilter(markAll);
  });
  btnLanding.addEventListener('click', () => {
    typeFilter(markLanding);
  });
  btnStore.addEventListener('click', () => {
    typeFilter(markStore);
  });
  btnApp.addEventListener('click', () => {
    typeFilter(markApp);
  });
  menu.addEventListener('click', e => {
    let target = e.target;

    if (target && target.tagName == "LI") {
      items.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progress_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-bar */ "./src/js/progress-bar.js");
/* harmony import */ var _scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrolling */ "./src/js/scrolling.js");
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger */ "./src/js/burger.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ "./src/js/filter.js");



 // window.onload = function() {
//     setTimeout(function() {
//         document.getElementById("preloader_malc").style.opacity = 0;
//     }, 400);
// };

window.addEventListener('DOMContentLoaded', () => {
  Object(_progress_bar__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_scrolling__WEBPACK_IMPORTED_MODULE_1__["default"])('.pageup');
  Object(_burger__WEBPACK_IMPORTED_MODULE_2__["default"])('.menu', '.nav__trigger');
  Object(_filter__WEBPACK_IMPORTED_MODULE_3__["default"])();
});

/***/ }),

/***/ "./src/js/progress-bar.js":
/*!********************************!*\
  !*** ./src/js/progress-bar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const progressBar = () => {
  const progress = document.querySelectorAll('.skills__progress-bar');
  progress.forEach(item => {
    item.style.width = item.getAttribute('data-done') + '%';
    item.style.opacity = 1;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (progressBar);

/***/ }),

/***/ "./src/js/scrolling.js":
/*!*****************************!*\
  !*** ./src/js/scrolling.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = upSelector => {
  /* Появление стрелки вверх */
  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1000) {
      upElem.classList.add('animate__animated', 'animate__fadeIn');
      upElem.classList.remove('animate__fadeOut');
    } else {
      upElem.classList.add('animate__fadeOut');
      upElem.classList.remove('animate__fadeIn');
    }
  });
  /* Скролл при помощи requestAnimationFrame */

  let links = document.querySelectorAll('[href^="#"]'),
      speed = 0.15;
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map