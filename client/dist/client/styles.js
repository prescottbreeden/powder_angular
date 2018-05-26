(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/sass/styles.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/sass/styles.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "/*\n0-600px:    Phone\n600-900px:  Tablet Portrait\n900-1200px: Tablet Landscape\n[1200-1800] is where normal styles apply\n1800+:      Big Desktop\n\n$breakpoint argument choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\n    @include respond(tab-land) { // width < 1200?\n        font-size: 56.25%; // 1 rem = 9px, 9/16 = 56.25%\n    }\n\n    @include respond(med-desktop) { // width < 1050?\n        font-size: 56.25%; // 1 rem = 9px, 9/16 = 56.25%\n    }\n\n    @include respond(tab-port) { // width < 900?\n        font-size: 50%; // 1 rem = 8px, 8/16 = 50%\n    }\n\n    @include respond(big-desktop) {\n        font-size: 75%; // 1 rem = 12px, 12/16 = 75%\n    }\n\nORDER: Base + typography > general layout + grid > page layout > components\n*/\n@-webkit-keyframes moveInButton {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(3rem);\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n@keyframes moveInButton {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(3rem);\n    transform: translateY(3rem);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n@-webkit-keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-10rem);\n    transform: translateX(-10rem);\n  }\n  80% {\n    -webkit-transform: translateX(1rem);\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-10rem);\n    transform: translateX(-10rem);\n  }\n  80% {\n    -webkit-transform: translateX(1rem);\n    transform: translateX(1rem);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@-webkit-keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10rem);\n    transform: translateX(10rem);\n  }\n  80% {\n    -webkit-transform: translateX(-1rem);\n    transform: translateX(-1rem);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10rem);\n    transform: translateX(10rem);\n  }\n  80% {\n    -webkit-transform: translateX(-1rem);\n    transform: translateX(-1rem);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\nhtml {\n  font-size: 62.5%;\n}\n@media (max-width: 75em) {\n  html {\n    font-size: 56.25%;\n  }\n}\n@media (max-width: 56.75em) {\n  html {\n    font-size: 50%;\n  }\n}\n@media (min-width: 112.5em) {\n  html {\n    font-size: 75%;\n  }\n}\nbody {\n  box-sizing: border-box;\n  padding: 3rem;\n}\n@media (max-width: 56.75em) {\n  body {\n    padding: 0;\n  }\n}\nbody {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  line-height: 1.7;\n  color: #777;\n}\n.heading-primary {\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  margin-bottom: 6rem;\n}\n.heading-primary--main {\n  display: block;\n  font-size: 6rem;\n  font-weight: 400;\n  letter-spacing: 3.5rem;\n  -webkit-animation-name: moveInLeft;\n  animation-name: moveInLeft;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n@media (max-width: 37.5em) {\n  .heading-primary--main {\n    letter-spacing: 1rem;\n    font-family: 5rem;\n  }\n}\n.heading-primary--sub {\n  display: block;\n  font-size: 2rem;\n  font-weight: 700;\n  letter-spacing: 1.7rem;\n  -webkit-animation: moveInRight 1s ease-out;\n  animation: moveInRight 1s ease-out;\n}\n@media (max-width: 37.5em) {\n  .heading-primary--sub {\n    letter-spacing: 0.5rem;\n  }\n}\n.heading-secondary {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: inline-block;\n  background-image: linear-gradient(to right, #9DE4FF, #72b6d2);\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent;\n  letter-spacing: 0.2rem;\n  transition: all 0.2s;\n}\n@media (max-width: 56.75em) {\n  .heading-secondary {\n    font-size: 3rem;\n  }\n}\n@media (max-width: 37.5em) {\n  .heading-secondary {\n    font-size: 2.5rem;\n  }\n}\n.heading-secondary:hover {\n  -webkit-transform: skewY(2deg) skewX(15deg) scale(1.1);\n  transform: skewY(2deg) skewX(15deg) scale(1.1);\n  text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);\n}\n.heading-tertiary {\n  font-size: 1.6rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.paragraph {\n  font-size: 1.6rem;\n}\n.paragraph:not(:last-child) {\n  margin-bottom: 3rem;\n}\n.u-center-text {\n  text-align: center !important;\n}\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important;\n}\n@media (max-width: 56.75em) {\n  .u-margin-bottom-big {\n    margin-bottom: 5rem !important;\n  }\n}\n.u-margin-bottom-medium {\n  margin-bottom: 4rem !important;\n}\n@media (max-width: 56.75em) {\n  .u-margin-bottom-medium {\n    margin-bottom: 5rem !important;\n  }\n}\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important;\n}\n.u-margin-top-big {\n  margin-top: 8rem !important;\n}\n.u-margin-top-huge {\n  margin-top: 10rem !important;\n}\n.bg-video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  color: white;\n  z-index: -1;\n  opacity: 0.15;\n  overflow: hidden;\n}\n.bg-video__content {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n.btn, .btn:link, .btn:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1.5rem 4rem;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all 0.2s;\n  position: relative;\n  font-size: 1.6rem;\n  border: none;\n  cursor: pointer;\n}\n.btn:hover {\n  -webkit-transform: translateY(-3px);\n  transform: translateY(-3px);\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n}\n.btn:hover::after {\n  -webkit-transform: scaleX(1.4) scaleY(1.6);\n  transform: scaleX(1.4) scaleY(1.6);\n  opacity: 0;\n}\n.btn:active, .btn:focus {\n  -webkit-transform: translateY(-1px);\n  transform: translateY(-1px);\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n  outline: none;\n}\n.btn::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 100px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all 0.4s;\n}\n.btn--white {\n  background-color: #fff;\n  color: #777;\n}\n.btn--white::after {\n  background-color: #fff;\n}\n.btn--blue {\n  background-color: #5FB8D8;\n  color: #fff;\n}\n.btn--blue::after {\n  background-color: #5FB8D8;\n}\n.btn--animated {\n  -webkit-animation: moveInButton 0.5s ease-out 0.75s;\n  animation: moveInButton 0.5s ease-out 0.75s;\n  -webkit-animation-fill-mode: backwards;\n  animation-fill-mode: backwards;\n}\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  color: #5FB8D8;\n  display: inline-block;\n  text-decoration: none;\n  border-bottom: 0.1rem solid #5FB8D8;\n  padding: 0.3rem;\n  transition: all 0.2s;\n}\n.btn-text:hover {\n  background-color: #5FB8D8;\n  color: #fff;\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n  -webkit-transform: translateY(-0.2rem);\n  transform: translateY(-0.2rem);\n}\n.btn-text:active {\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n.card {\n  -webkit-perspective: 150rem;\n          perspective: 150rem;\n  -moz-perspective: 150rem;\n  position: relative;\n  height: 52rem;\n}\n.card__side {\n  height: 52rem;\n  transition: all 0.8s ease-out;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n}\n.card__side--front {\n  background-color: #fff;\n}\n.card__side--back {\n  -webkit-transform: rotateY(180deg);\n  transform: rotateY(180deg);\n}\n.card__side--back-1 {\n  background-image: linear-gradient(to right bottom, #7ed56f, #28b485);\n}\n.card__side--back-2 {\n  background-image: linear-gradient(to right bottom, #ff9500, #fb6819);\n}\n.card__side--back-3 {\n  background-image: linear-gradient(to right bottom, #2998ff, #5643fa);\n}\n.card:hover .card__side--front {\n  -webkit-transform: rotateY(-180deg);\n  transform: rotateY(-180deg);\n}\n.card:hover .card__side--back {\n  -webkit-transform: rotateY(0);\n  transform: rotateY(0);\n}\n.card__picture {\n  background-size: cover;\n  height: 23rem;\n  background-blend-mode: color;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);\n  clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.card__picture--1 {\n  background-image: linear-gradient(to right bottom, #7ed56f, #28b485), url('cliff_drop.jpg');\n}\n.card__picture--2 {\n  background-image: linear-gradient(to right bottom, #ff9500, #fb6819), url('board_pow_crop.jpg');\n}\n.card__picture--3 {\n  background-image: linear-gradient(to right bottom, #2998ff, #5643fa), url('mauro-paillex-heli2_lowres.jpg');\n}\n.card__heading {\n  font-size: 2.8rem;\n  font-weight: 300;\n  text-transform: uppercase;\n  text-align: right;\n  color: #fff;\n  position: absolute;\n  top: 12rem;\n  right: 2rem;\n  width: 60%;\n}\n.card__heading-span {\n  padding: 1rem 1.5rem;\n  -webkit-box-decoration-break: clone;\n  box-decoration-break: clone;\n}\n.card__heading-span--1 {\n  background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.85), rgba(40, 180, 133, 0.85));\n}\n.card__heading-span--2 {\n  background-image: linear-gradient(to right bottom, rgba(255, 149, 0, 0.85), rgba(251, 104, 25, 0.85));\n}\n.card__heading-span--3 {\n  background-image: linear-gradient(to right bottom, rgba(41, 152, 255, 0.85), rgba(86, 67, 250, 0.85));\n}\n.card__details {\n  padding: 3rem;\n}\n.card__details ul {\n  list-style: none;\n  width: 80%;\n  margin: 0 auto;\n}\n.card__details ul li {\n  text-align: center;\n  font-size: 1.5rem;\n  padding: 1rem;\n}\n@media (max-width: 56.75em) {\n  .card__details ul li {\n    font-size: 2rem;\n  }\n}\n.card__details ul li:not(:last-child) {\n  border-bottom: 1px solid #eee;\n}\n.card__cta {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n  width: 90%;\n}\n.card__price-box {\n  text-align: center;\n  color: #fff;\n  margin-bottom: 8rem;\n}\n.card__price-only {\n  font-size: 1.4rem;\n  text-transform: uppercase;\n}\n.card__price-value {\n  font-size: 6rem;\n  font-weight: 100;\n}\n@media (max-width: 56.75em) {\n  .card {\n    height: auto;\n    border-radius: 3px;\n    background-color: #fff;\n    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n  }\n  .card__side {\n    height: auto;\n    position: relative;\n    box-shadow: none;\n  }\n  .card__side--back {\n    -webkit-transform: rotateY(0);\n    transform: rotateY(0);\n    -webkit-clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);\n    clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);\n  }\n  .card:hover .card__side--front {\n    -webkit-transform: rotateY(0);\n    transform: rotateY(0);\n  }\n  .card__deatils {\n    padding: 1rem 3rem;\n  }\n  .card__cta {\n    position: relative;\n    top: 0;\n    left: 0;\n    -webkit-transform: translate(0);\n    transform: translate(0);\n    width: 100%;\n    padding: 7rem 4rem 4rem 4rem;\n  }\n  .card__price-box {\n    margin-bottom: 3rem;\n  }\n  .card__price-value {\n    font-size: 4rem;\n  }\n}\n.composition {\n  position: relative;\n}\n.composition__photo {\n  width: 55%;\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);\n  border-radius: 3px;\n  position: absolute;\n  z-index: 10;\n  transition: all 0.1s;\n  outline-offset: 2rem;\n}\n@media (max-width: 56.75em) {\n  .composition__photo {\n    outline-offset: orem;\n    float: left;\n    position: relative;\n    width: 33.3333333333%;\n    box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2);\n  }\n}\n.composition__photo--p1 {\n  left: 0;\n  top: -2rem;\n}\n@media (max-width: 56.75em) {\n  .composition__photo--p1 {\n    top: 0;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n}\n.composition__photo--p2 {\n  right: 0;\n  top: 2rem;\n}\n@media (max-width: 56.75em) {\n  .composition__photo--p2 {\n    top: -1rem;\n    -webkit-transform: scale(1.3);\n            transform: scale(1.3);\n    z-index: 100;\n  }\n}\n.composition__photo--p3 {\n  left: 20%;\n  top: 10rem;\n}\n@media (max-width: 56.75em) {\n  .composition__photo--p3 {\n    top: 1rem;\n    left: 0;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n}\n.composition__photo:hover {\n  outline: 1.5rem solid #5FB8D8;\n  -webkit-transform: scale(1.05) translateY(-0.5rem);\n  transform: scale(1.05) translateY(-0.5rem);\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n  z-index: 20;\n}\n@media (max-width: 56.75em) {\n  .composition__photo:hover {\n    outline: none;\n    -webkit-transform: scale(1.2) translateY(0);\n    transform: scale(1.2) translateY(0);\n  }\n}\n.composition:hover .composition__photo:not(:hover) {\n  -webkit-transform: scale(0.95);\n  transform: scale(0.95);\n}\n@media (max-width: 56.75em) {\n  .composition:hover .composition__photo:not(:hover) {\n    -webkit-transform: scale(1.2) !important;\n    transform: scale(1.2) !important;\n  }\n}\n.feature-box {\n  background-color: rgba(255, 255, 255, 0.8);\n  font-size: 1.5rem;\n  padding: 2.5rem;\n  text-align: center;\n  border-radius: 3px;\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n@media (max-width: 56.75em) {\n  .feature-box {\n    padding: 2rem;\n  }\n}\n.feature-box__icon {\n  font-size: 6rem;\n  margin-bottom: 0.5rem;\n  display: inline-block;\n  background-image: linear-gradient(to right, #7ed56f, #28b485);\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent;\n}\n@media (max-width: 56.75em) {\n  .feature-box__icon {\n    margin-bottom: 0;\n  }\n}\n.feature-box:hover {\n  -webkit-transform: translateY(-1.5rem) scale(1.03);\n  transform: translateY(-1.5rem) scale(1.03);\n}\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n.form__group:not(:last-child) {\n  margin-bottom: 2rem;\n}\n.form__input {\n  font-size: 1.5rem;\n  font-family: inherit;\n  color: inherit;\n  padding: 1.5rem 2rem;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.7);\n  border: none;\n  border-bottom: 3px solid transparent;\n  width: 90%;\n  display: block;\n  transition: all 0.3s;\n}\n@media (max-width: 56.75em) {\n  .form__input {\n    width: 100%;\n  }\n}\n.form__input:focus {\n  outline: none;\n  background-color: rgba(255, 255, 255, 0.9);\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n  border-bottom: 3px solid #55c57a;\n}\n.form__input:focus:invalid {\n  border-bottom: 3px solid #fb6819;\n}\n.form__input::-webkit-input-placeholder {\n  color: #999;\n}\n.form__label {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-left: 2rem;\n  margin-top: 0.7rem;\n  display: block;\n  transition: all 0.3s;\n}\n.form__input:placeholder-shown + .form__label {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: translateY(-4rem);\n  transform: translateY(-4rem);\n}\n.form__radio-group {\n  width: 50%;\n  display: inline-block;\n}\n@media (max-width: 56.75em) {\n  .form__radio-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n}\n.form__radio-input {\n  display: none;\n}\n.form__radio-label {\n  font-size: 1.6rem;\n  cursor: pointer;\n  position: relative;\n  padding-left: 4.5rem;\n  display: inline-block;\n  vertical-align: middle;\n}\n.form__radio-button {\n  height: 3rem;\n  width: 3rem;\n  border: 5px solid #5FB8D8;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.form__radio-button::after {\n  content: \"\";\n  display: block;\n  height: 1.3rem;\n  width: 1.3rem;\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background-color: #5FB8D8;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.form__radio-input:checked ~ .form__radio-label .form__radio-button::after {\n  opacity: 1;\n}\n.popup {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(51, 51, 51, 0.8);\n  z-index: 9999;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s;\n}\n.popup:target {\n  opacity: 1;\n  visibility: visible;\n}\n.popup__content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 70%;\n  height: 50rem;\n  background-color: #fff;\n  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  display: table;\n  overflow: hidden;\n  opacity: 0;\n  -webkit-transform: translate(-50%, -50%) scale(0.25);\n  transform: translate(-50%, -50%) scale(0.25);\n  transition: all 0.5s 0.2s;\n}\n@media (max-width: 56.75em) {\n  .popup__content {\n    height: auto;\n  }\n}\n@media (max-width: 37.5em) {\n  .popup__content {\n    height: auto;\n    width: 90%;\n  }\n}\n.popup:target .popup__content {\n  opacity: 1;\n  -webkit-transform: translate(-50%, -50%) scale(1);\n  transform: translate(-50%, -50%) scale(1);\n}\n.popup__left {\n  padding: 0;\n  width: 33.3333333333%;\n  display: table-cell;\n}\n@media (max-width: 56.75em) {\n  .popup__left {\n    width: 0%;\n  }\n}\n@media (max-width: 37.5em) {\n  .popup__left {\n    width: 0%;\n  }\n}\n.popup__right {\n  width: 66.6666666667%;\n  display: table-cell;\n  vertical-align: middle;\n  padding: 3rem 5rem;\n}\n@media (max-width: 56.75em) {\n  .popup__right {\n    width: 100%;\n  }\n}\n@media (max-width: 37.5em) {\n  .popup__right {\n    width: 100%;\n  }\n}\n.popup__img {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n}\n@media (max-width: 56.75em) {\n  .popup__img {\n    margin: 5rem 0;\n  }\n}\n.popup__text {\n  font-size: 1.4rem;\n  margin-bottom: 4rem;\n  -webkit-column-count: 2;\n  column-count: 2;\n  -webkit-column-gap: 4rem;\n  column-gap: 4rem;\n  -webkit-column-rule: 1px solid #eee;\n  column-rule: 1px solid #eee;\n  column-count: 2;\n  column-gap: 4rem;\n  column-rule: 1px solid #eee;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n@media (max-width: 56.75em) {\n  .popup__text {\n    -webkit-column-count: 1;\n    column-count: 1;\n  }\n}\n@media (max-width: 37.5em) {\n  .popup__text {\n    -webkit-column-count: 1;\n    column-count: 1;\n  }\n}\n.popup__close:link, .popup__close:visited {\n  color: #777;\n  position: absolute;\n  top: 2.5rem;\n  right: 2.5rem;\n  font-size: 3rem;\n  text-decoration: none;\n  display: inline-block;\n  line-height: 1;\n}\n.popup__close:hover {\n  color: #28b485;\n}\n@media (max-width: 56.75em) {\n  #popup__btn {\n    display: block;\n    text-align: center;\n    font-size: 2rem;\n  }\n}\n@media (max-width: 37.5em) {\n  #popup__btn {\n    display: block;\n    text-align: center;\n    font-size: 2rem;\n  }\n}\n.story {\n  width: 75%;\n  margin: 0 auto;\n  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 3px;\n  padding: 6rem;\n  padding-left: 9rem;\n  font-size: 1.6rem;\n  -webkit-transform: skewX(-12deg);\n          transform: skewX(-12deg);\n}\n@media (max-width: 56.75em) {\n  .story {\n    width: 100%;\n    padding: 4rem;\n    padding-left: 7rem;\n  }\n}\n@media (max-width: 37.5em) {\n  .story {\n    -webkit-transform: translateX(0) skewX(0);\n            transform: translateX(0) skewX(0);\n  }\n}\n.story__shape {\n  width: 15rem;\n  height: 15rem;\n  float: left;\n  shape-outside: circle(50% at 50% 50%);\n  -webkit-clip-path: circle(50% at 50% 50%);\n  clip-path: circle(50% at 50% 50%);\n  -webkit-transform: translateX(-3rem) skewX(12deg);\n          transform: translateX(-3rem) skewX(12deg);\n  position: relative;\n}\n@media (max-width: 37.5em) {\n  .story__shape {\n    -webkit-transform: translateX(-3rem) skewX(0);\n            transform: translateX(-3rem) skewX(0);\n  }\n}\n.story__img {\n  height: 100%;\n  -webkit-transform: translateX(-3.5rem) scale(1.1);\n          transform: translateX(-3.5rem) scale(1.1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: -webkit-transform 0.5s;\n  transition: transform 0.5s;\n  transition: transform 0.5s, -webkit-transform 0.5s;\n}\n.story__img-2 {\n  -webkit-transform: translateX(-7rem) scale(1.1);\n          transform: translateX(-7rem) scale(1.1);\n}\n.story__text {\n  -webkit-transform: skewX(12deg);\n          transform: skewX(12deg);\n}\n@media (max-width: 37.5em) {\n  .story__text {\n    -webkit-transform: skewX(0);\n            transform: skewX(0);\n  }\n}\n.story__caption {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, 20%);\n          transform: translate(-50%, 20%);\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 1.7rem;\n  text-align: center;\n  opacity: 0;\n  transition: all 0.5s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.story:hover .story__caption {\n  opacity: 1;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.story:hover .story__img {\n  -webkit-transform: translateX(-3.5rem) scale(1);\n          transform: translateX(-3.5rem) scale(1);\n  -webkit-filter: blur(3px) brightness(80%);\n          filter: blur(3px) brightness(80%);\n}\n.story:hover .story__img-2 {\n  -webkit-transform: translateX(-7rem) scale(1);\n          transform: translateX(-7rem) scale(1);\n  -webkit-filter: blur(3px) brightness(80%);\n          filter: blur(3px) brightness(80%);\n}\n.footer {\n  background-color: #333;\n  padding: 10rem 0;\n  font-size: 1.4rem;\n  color: #eee;\n}\n@media (max-width: 56.75em) {\n  .footer {\n    padding: 8rem 0;\n  }\n}\n.footer__logo-box {\n  text-align: center;\n  margin-bottom: 8rem;\n}\n@media (max-width: 56.75em) {\n  .footer__logo-box {\n    margin-bottom: 4rem;\n  }\n}\n.footer__logo {\n  width: 15rem;\n  height: auto;\n}\n.footer__logo-text {\n  color: #72b6d2;\n  font-size: 2.8rem;\n  text-transform: uppercase;\n}\n.footer__navigation {\n  border-top: 1px solid #777;\n  padding: 2rem;\n  display: inline-block;\n}\n@media (max-width: 56.75em) {\n  .footer__navigation {\n    width: 100%;\n    text-align: center;\n  }\n}\n.footer__list {\n  list-style: none;\n}\n.footer__item {\n  display: inline-block;\n}\n.footer__item:not(:last-child) {\n  margin-right: 1.5rem;\n}\n.footer__link:link, .footer__link:visited {\n  color: #eee;\n  background-color: #333;\n  text-decoration: none;\n  text-transform: uppercase;\n  display: inline-block;\n  transition: all 0.2s;\n}\n.footer__link:hover, .footer__link:active {\n  color: #5FB8D8;\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);\n  -webkit-transform: rotate(5deg) scale(1.3);\n  transform: rotate(5deg) scale(1.3);\n}\n.footer__copyright {\n  border-top: 1px solid #777;\n  padding: 2rem;\n  width: 80%;\n  float: right;\n}\n@media (max-width: 56.75em) {\n  .footer__copyright {\n    width: 100%;\n    float: none;\n  }\n}\n.row {\n  max-width: 114rem;\n  margin: 0 auto;\n}\n.row:not(:last-child) {\n  margin-bottom: 8rem;\n}\n@media (max-width: 56.75em) {\n  .row:not(:last-child) {\n    margin-bottom: 6rem;\n  }\n}\n@media (max-width: 56.75em) {\n  .row {\n    max-width: 50rem;\n    padding: 0 3rem;\n  }\n}\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.row [class^=col-] {\n  float: left;\n}\n.row [class^=col-]:not(:last-child) {\n  margin-right: 6rem;\n}\n@media (max-width: 56.75em) {\n  .row [class^=col-]:not(:last-child) {\n    margin-right: 0;\n    margin-bottom: 6rem;\n  }\n}\n@media (max-width: 56.75em) {\n  .row [class^=col-] {\n    width: 100% !important;\n  }\n}\n.row .col-1-of-2 {\n  width: calc((100% - 6rem) / 2);\n}\n.row .col-1-of-3 {\n  width: calc((100% - 2 * 6rem) / 3);\n}\n.row .col-2-of-3 {\n  width: calc(2 * ((100% - 2 * 6rem) / 3) + 6rem);\n}\n.row .col-1-of-4 {\n  width: calc((100% - 3 * 6rem) / 4);\n}\n.row .col-2-of-4 {\n  width: calc(2 * ((100% - 3 * 6rem) / 4) + 6rem);\n}\n.row .col-3-of-4 {\n  width: calc(3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem);\n}\n.header {\n  height: 95vh;\n  background-image: linear-gradient(to right bottom, rgba(95, 184, 216, 0.7), rgba(95, 184, 216, 0.4)), url('bigAir.jpg');\n  background-size: cover;\n  background-position: top;\n  position: relative;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);\n  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);\n}\n@media (max-width: 65.625em) {\n  .header {\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 90vh);\n    clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 90vh);\n  }\n}\n@media (max-width: 56.75em) {\n  .header {\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 90vh);\n    clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 90vh);\n  }\n}\n@media (max-width: 37.5em) {\n  .header {\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 88vh, 0 100%);\n    clip-path: polygon(0 0, 100% 0, 100% 88vh, 0 100%);\n  }\n}\n.header__logo-box {\n  position: absolute;\n  top: 4rem;\n  left: 4rem;\n}\n.header__logo {\n  height: 5rem;\n  -webkit-transform: rotate(0);\n  transform: rotate(0);\n  transition-duration: 0.5s;\n}\n.header__logo:hover {\n  transition-duration: 0.5s;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.header__text-box {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.navigation__checkbox {\n  display: none;\n}\n.navigation__button {\n  background-color: #fff;\n  height: 7rem;\n  width: 7rem;\n  position: fixed;\n  top: 6rem;\n  right: 6rem;\n  border-radius: 50%;\n  z-index: 2000;\n  cursor: pointer;\n}\n@media (max-width: 56.75em) {\n  .navigation__button {\n    top: 4rem;\n    right: 4rem;\n  }\n}\n@media (max-width: 37.5em) {\n  .navigation__button {\n    top: 3.5rem;\n    right: 3.5rem;\n  }\n}\n.navigation__background {\n  height: 6rem;\n  width: 6rem;\n  border-radius: 50%;\n  position: fixed;\n  top: 6.5rem;\n  right: 6.5rem;\n  background-image: radial-gradient(#9DE4FF, #72b6d2);\n  z-index: 1000;\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n  transition: -webkit-transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);\n  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);\n  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);\n}\n@media (max-width: 56.75em) {\n  .navigation__background {\n    top: 4.5rem;\n    right: 4.5rem;\n  }\n}\n@media (max-width: 37.5em) {\n  .navigation__background {\n    top: 3.7rem;\n    right: 3.7rem;\n  }\n}\n.navigation__nav {\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: -100%;\n  z-index: 1500;\n  opacity: 0;\n  width: 0;\n  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n}\n.navigation__list {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 100%;\n  list-style: none;\n  text-align: center;\n}\n@media (max-width: 37.5em) {\n  .navigation__list {\n    margin: 1rem;\n  }\n}\n.navigation__item {\n  margin: 1rem;\n  position: relative;\n  display: block;\n}\n@media (max-width: 56.75em) {\n  .navigation__item {\n    margin-left: -1rem;\n  }\n}\n@media (max-width: 37.5em) {\n  .navigation__item {\n    margin: 1rem;\n    width: 80%;\n  }\n}\n.navigation__snowflake {\n  display: inline-block;\n  position: absolute;\n  top: 1rem;\n  margin-left: 1rem;\n  height: 5rem;\n  transition-duration: 0.5s;\n}\n.navigation__snowflake-1 {\n  -webkit-transform: rotate(-4deg);\n  transform: rotate(-4deg);\n}\n.navigation__snowflake-2 {\n  -webkit-transform: rotate(5deg);\n  transform: rotate(5deg);\n}\n.navigation__snowflake-3 {\n  -webkit-transform: rotate(-12deg);\n  transform: rotate(-12deg);\n}\n.navigation__snowflake-4 {\n  -webkit-transform: rotate(13deg);\n  transform: rotate(13deg);\n}\n.navigation__snowflake-5 {\n  -webkit-transform: rotate(3deg);\n  transform: rotate(3deg);\n}\n.navigation__link:link, .navigation__link:visited {\n  display: inline-block;\n  font-size: 3rem;\n  font-weight: 300;\n  padding: 1rem 2rem;\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);\n  background-size: 220%;\n  transition: all 0.4s;\n}\n.navigation__link:link span, .navigation__link:visited span {\n  margin-right: 1.5rem;\n  display: inline-block;\n}\n.navigation__link:hover, .navigation__link:active {\n  background-position: 100%;\n  color: #5FB8D8;\n  -webkit-transform: translateX(1rem);\n  transform: translateX(1rem);\n}\n.navigation__item:hover > .navigation__snowflake {\n  transition-duration: 0.5s;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.navigation__checkbox:checked ~ .navigation__background {\n  -webkit-transform: scale(80);\n  transform: scale(80);\n}\n.navigation__checkbox:checked ~ .navigation__nav {\n  opacity: 1;\n  width: 100%;\n  left: 0;\n}\n.navigation__icon {\n  position: relative;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.navigation__icon, .navigation__icon::before, .navigation__icon::after {\n  width: 3rem;\n  height: 2px;\n  background-color: #333;\n  display: inline-block;\n}\n.navigation__icon::before, .navigation__icon::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  transition: all 0.2s;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.navigation__icon::before {\n  top: -0.8rem;\n}\n.navigation__icon::after {\n  top: 0.8rem;\n}\n.navigation__button:hover .navigation__icon::before {\n  top: -1rem;\n}\n.navigation__button:hover .navigation__icon::after {\n  top: 1rem;\n}\n.navigation__checkbox:checked + .navigation__button .navigation__icon {\n  background-color: transparent;\n}\n.navigation__checkbox:checked + .navigation__button .navigation__icon::before {\n  top: 0;\n  -webkit-transform: rotate(135deg);\n  transform: rotate(135deg);\n}\n.navigation__checkbox:checked + .navigation__button .navigation__icon::after {\n  top: 0;\n  -webkit-transform: rotate(-135deg);\n  transform: rotate(-135deg);\n}\n.section-about {\n  background-color: #f7f7f7;\n  padding: 25rem 0;\n  margin-top: -20vh;\n}\n@media (max-width: 56.75em) {\n  .section-about {\n    padding: 20rem 0;\n  }\n}\n.section-features {\n  padding: 20rem 0;\n  background-image: linear-gradient(to right bottom, rgba(157, 228, 255, 0.8), rgba(114, 182, 210, 0.8)), url('nat-4.jpg');\n  -webkit-transform: skewY(-7deg);\n  transform: skewY(-7deg);\n  margin-top: -9rem;\n}\n.section-features > * {\n  -webkit-transform: skewY(7deg);\n  transform: skewY(7deg);\n}\n@media (max-width: 56.75em) {\n  .section-features {\n    padding: 10rem 0;\n  }\n}\n.section-packages {\n  background-color: #f7f7f7;\n  padding: 25rem 0 15rem 0;\n  margin-top: -10rem;\n}\n@media (max-width: 56.75em) {\n  .section-packages {\n    padding: 20rem 0 10rem 0;\n  }\n}\n.section-stories {\n  position: relative;\n  padding: 15rem 0;\n}\n@media (max-width: 56.75em) {\n  .section-stories {\n    padding: 10rem 0;\n  }\n}\n.section-book {\n  padding: 15rem 0;\n  background-image: linear-gradient(to right bottom, #9DE4FF, #72b6d2);\n}\n.book {\n  background-image: linear-gradient(105deg, rgba(247, 247, 247, 0.9) 0%, rgba(247, 247, 247, 0.9) 50%, transparent 50%), url('book.jpg');\n  background-size: cover;\n  border-radius: 3px;\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.3);\n}\n@media (max-width: 75em) {\n  .book {\n    background-image: linear-gradient(105deg, rgba(247, 247, 247, 0.9) 0%, rgba(247, 247, 247, 0.9) 65%, transparent 65%), url('book.jpg');\n  }\n}\n@media (max-width: 56.75em) {\n  .book {\n    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%, transparent 100%), url('book.jpg');\n  }\n}\n.book__form {\n  width: 50%;\n  padding: 6rem;\n}\n@media (max-width: 75em) {\n  .book__form {\n    width: 65%;\n  }\n}\n@media (max-width: 56.75em) {\n  .book__form {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=client/src/sass/styles.css.map */\n"
=======
module.exports = "/*\n\n0-600px:    Phone\n600-900px:  Tablet Portrait\n900-1200px: Tablet Landscape\n[1200-1800] is where normal styles apply\n1800+:      Big Desktop\n\n$breakpoint argument choices:\n- phone\n- tab-port\n- tab-land\n- big-desktop\n\n    @include respond(tab-land) { // width < 1200?\n        font-size: 56.25%; // 1 rem = 9px, 9/16 = 56.25%\n    }\n    \n    @include respond(tab-port) { // width < 900?\n        font-size: 50%; // 1 rem = 8px, 8/16 = 50%\n    }\n\n    @include respond(big-desktop) {\n        font-size: 75%; // 1 rem = 12px, 12/16 = 75%\n    }\n\nORDER: Base + typography > general layout + grid > page layout > components\n\n*/\n@-webkit-keyframes moveInButton {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(3rem);\n    transform: translateY(3rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n@keyframes moveInButton {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(3rem);\n    transform: translateY(3rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0); } }\n@-webkit-keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-10rem);\n    transform: translateX(-10rem); }\n  80% {\n    -webkit-transform: translateX(1rem);\n    transform: translateX(1rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-10rem);\n    transform: translateX(-10rem); }\n  80% {\n    -webkit-transform: translateX(1rem);\n    transform: translateX(1rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n@-webkit-keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10rem);\n    transform: translateX(10rem); }\n  80% {\n    -webkit-transform: translateX(-1rem);\n    transform: translateX(-1rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(10rem);\n    transform: translateX(10rem); }\n  80% {\n    -webkit-transform: translateX(-1rem);\n    transform: translateX(-1rem); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0); } }\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\nhtml {\n  font-size: 62.5%; }\n@media (max-width: 75em) {\n    html {\n      font-size: 56.25%; } }\n@media (max-width: 56.75em) {\n    html {\n      font-size: 50%; } }\n@media (min-width: 112.5em) {\n    html {\n      font-size: 75%; } }\nbody {\n  box-sizing: border-box;\n  padding: 3rem; }\n@media (max-width: 56.75em) {\n    body {\n      padding: 0; } }\nbody {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  line-height: 1.7;\n  color: #777; }\n.heading-primary {\n  color: #fff;\n  text-transform: uppercase;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  margin-bottom: 6rem; }\n.heading-primary--main {\n    display: block;\n    font-size: 6rem;\n    font-weight: 400;\n    letter-spacing: 3.5rem;\n    -webkit-animation-name: moveInLeft;\n    animation-name: moveInLeft;\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out; }\n@media (max-width: 37.5em) {\n      .heading-primary--main {\n        letter-spacing: 1rem;\n        font-family: 5rem; } }\n.heading-primary--sub {\n    display: block;\n    font-size: 2rem;\n    font-weight: 700;\n    letter-spacing: 1.7rem;\n    -webkit-animation: moveInRight 1s ease-out;\n    animation: moveInRight 1s ease-out; }\n@media (max-width: 37.5em) {\n      .heading-primary--sub {\n        letter-spacing: .5rem; } }\n.heading-secondary {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: inline-block;\n  background-image: linear-gradient(to right, #9DE4FF, #72b6d2);\n  background-clip: text;\n  -webkit-background-clip: text;\n  color: transparent;\n  letter-spacing: .2rem;\n  transition: all .2s; }\n@media (max-width: 56.75em) {\n    .heading-secondary {\n      font-size: 3rem; } }\n@media (max-width: 37.5em) {\n    .heading-secondary {\n      font-size: 2.5rem; } }\n.heading-secondary:hover {\n    -webkit-transform: skewY(2deg) skewX(15deg) scale(1.1);\n    transform: skewY(2deg) skewX(15deg) scale(1.1);\n    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2); }\n.heading-tertiary {\n  font-size: 1.6rem;\n  font-weight: 700;\n  text-transform: uppercase; }\n.paragraph {\n  font-size: 1.6rem; }\n.paragraph:not(:last-child) {\n    margin-bottom: 3rem; }\n.u-center-text {\n  text-align: center !important; }\n.u-margin-bottom-big {\n  margin-bottom: 8rem !important; }\n@media (max-width: 56.75em) {\n    .u-margin-bottom-big {\n      margin-bottom: 5rem !important; } }\n.u-margin-bottom-medium {\n  margin-bottom: 4rem !important; }\n@media (max-width: 56.75em) {\n    .u-margin-bottom-medium {\n      margin-bottom: 5rem !important; } }\n.u-margin-bottom-small {\n  margin-bottom: 1.5rem !important; }\n.u-margin-top-big {\n  margin-top: 8rem !important; }\n.u-margin-top-huge {\n  margin-top: 10rem !important; }\n.bg-video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  color: white;\n  z-index: -1;\n  opacity: .15;\n  overflow: hidden; }\n.bg-video__content {\n    height: 100%;\n    width: 100%;\n    -o-object-fit: cover;\n    object-fit: cover; }\n.btn, .btn:link, .btn:visited {\n  text-transform: uppercase;\n  text-decoration: none;\n  padding: 1.5rem 4rem;\n  display: inline-block;\n  border-radius: 10rem;\n  transition: all .2s;\n  position: relative;\n  font-size: 1.6rem;\n  border: none;\n  cursor: pointer; }\n.btn:hover {\n  -webkit-transform: translateY(-3px);\n  transform: translateY(-3px);\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15); }\n.btn:hover::after {\n    -webkit-transform: scaleX(1.4) scaleY(1.6);\n    transform: scaleX(1.4) scaleY(1.6);\n    opacity: 0; }\n.btn:active, .btn:focus {\n  -webkit-transform: translateY(-1px);\n  transform: translateY(-1px);\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n  outline: none; }\n.btn::after {\n  content: \"\";\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n  border-radius: 100px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  transition: all .4s; }\n.btn--white {\n  background-color: #fff;\n  color: #777; }\n.btn--white::after {\n    background-color: #fff; }\n.btn--blue {\n  background-color: #5FB8D8;\n  color: #fff; }\n.btn--blue::after {\n    background-color: #5FB8D8; }\n.btn--animated {\n  -webkit-animation: moveInButton .5s ease-out .75s;\n  animation: moveInButton .5s ease-out .75s;\n  -webkit-animation-fill-mode: backwards;\n  animation-fill-mode: backwards; }\n.btn-text:link, .btn-text:visited {\n  font-size: 1.6rem;\n  color: #5FB8D8;\n  display: inline-block;\n  text-decoration: none;\n  border-bottom: 0.1rem solid #5FB8D8;\n  padding: .3rem;\n  transition: all .2s; }\n.btn-text:hover {\n  background-color: #5FB8D8;\n  color: #fff;\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n  -webkit-transform: translateY(-0.2rem);\n  transform: translateY(-0.2rem); }\n.btn-text:active {\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n  -webkit-transform: translateY(0);\n  transform: translateY(0); }\n.card {\n  -webkit-perspective: 150rem;\n          perspective: 150rem;\n  -moz-perspective: 150rem;\n  position: relative;\n  height: 52rem; }\n.card__side {\n    height: 52rem;\n    transition: all .8s ease-out;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    border-radius: 3px;\n    overflow: hidden;\n    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15); }\n.card__side--front {\n      background-color: #fff; }\n.card__side--back {\n      -webkit-transform: rotateY(180deg);\n      transform: rotateY(180deg); }\n.card__side--back-1 {\n        background-image: linear-gradient(to right bottom, #7ed56f, #28b485); }\n.card__side--back-2 {\n        background-image: linear-gradient(to right bottom, #ff9500, #fb6819); }\n.card__side--back-3 {\n        background-image: linear-gradient(to right bottom, #2998ff, #5643fa); }\n.card:hover .card__side--front {\n    -webkit-transform: rotateY(-180deg);\n    transform: rotateY(-180deg); }\n.card:hover .card__side--back {\n    -webkit-transform: rotateY(0);\n    transform: rotateY(0); }\n.card__picture {\n    background-size: cover;\n    height: 23rem;\n    background-blend-mode: color;\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);\n    clip-path: polygon(0 0, 100% 0, 100% 80%, 0% 100%);\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n.card__picture--1 {\n      background-image: linear-gradient(to right bottom, #7ed56f, #28b485), url('cliff_drop.jpg'); }\n.card__picture--2 {\n      background-image: linear-gradient(to right bottom, #ff9500, #fb6819), url('board_pow_crop.jpg'); }\n.card__picture--3 {\n      background-image: linear-gradient(to right bottom, #2998ff, #5643fa), url('mauro-paillex-heli2_lowres.jpg'); }\n.card__heading {\n    font-size: 2.8rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    text-align: right;\n    color: #fff;\n    position: absolute;\n    top: 12rem;\n    right: 2rem;\n    width: 60%; }\n.card__heading-span {\n    padding: 1rem 1.5rem;\n    -webkit-box-decoration-break: clone;\n    box-decoration-break: clone; }\n.card__heading-span--1 {\n      background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.85), rgba(40, 180, 133, 0.85)); }\n.card__heading-span--2 {\n      background-image: linear-gradient(to right bottom, rgba(255, 149, 0, 0.85), rgba(251, 104, 25, 0.85)); }\n.card__heading-span--3 {\n      background-image: linear-gradient(to right bottom, rgba(41, 152, 255, 0.85), rgba(86, 67, 250, 0.85)); }\n.card__details {\n    padding: 3rem; }\n.card__details ul {\n      list-style: none;\n      width: 80%;\n      margin: 0 auto; }\n.card__details ul li {\n        text-align: center;\n        font-size: 1.5rem;\n        padding: 1rem; }\n.card__details ul li:not(:last-child) {\n          border-bottom: 1px solid #eee; }\n.card__cta {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    text-align: center;\n    width: 90%; }\n.card__price-box {\n    text-align: center;\n    color: #fff;\n    margin-bottom: 8rem; }\n.card__price-only {\n    font-size: 1.4rem;\n    text-transform: uppercase; }\n.card__price-value {\n    font-size: 6rem;\n    font-weight: 100; }\n@media (max-width: 56.75em) {\n    .card {\n      height: auto;\n      border-radius: 3px;\n      background-color: #fff;\n      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15); }\n      .card__side {\n        height: auto;\n        position: relative;\n        box-shadow: none; }\n        .card__side--back {\n          -webkit-transform: rotateY(0);\n          transform: rotateY(0);\n          -webkit-clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);\n          clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%); }\n      .card:hover .card__side--front {\n        -webkit-transform: rotateY(0);\n        transform: rotateY(0); }\n      .card__deatils {\n        padding: 1rem 3rem; }\n      .card__cta {\n        position: relative;\n        top: 0;\n        left: 0;\n        -webkit-transform: translate(0);\n        transform: translate(0);\n        width: 100%;\n        padding: 7rem 4rem 4rem 4rem; }\n      .card__price-box {\n        margin-bottom: 3rem; }\n      .card__price-value {\n        font-size: 4rem; } }\n.composition {\n  position: relative; }\n.composition__photo {\n    width: 55%;\n    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);\n    border-radius: 3px;\n    position: absolute;\n    z-index: 10;\n    transition: all .1s;\n    outline-offset: 2rem; }\n@media (max-width: 56.75em) {\n      .composition__photo {\n        float: left;\n        position: relative;\n        width: 33.333333333333%;\n        box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.2); } }\n.composition__photo--p1 {\n      left: 0;\n      top: -2rem; }\n@media (max-width: 56.75em) {\n        .composition__photo--p1 {\n          top: 0;\n          -webkit-transform: scale(1.2);\n                  transform: scale(1.2); } }\n.composition__photo--p2 {\n      right: 0;\n      top: 2rem; }\n@media (max-width: 56.75em) {\n        .composition__photo--p2 {\n          top: -1rem;\n          -webkit-transform: scale(1.3);\n                  transform: scale(1.3);\n          z-index: 100; } }\n.composition__photo--p3 {\n      left: 20%;\n      top: 10rem; }\n@media (max-width: 56.75em) {\n        .composition__photo--p3 {\n          top: 1rem;\n          left: 0;\n          -webkit-transform: scale(1.2);\n                  transform: scale(1.2); } }\n.composition__photo:hover {\n      outline: 1.5rem solid #5FB8D8;\n      -webkit-transform: scale(1.05) translateY(-0.5rem);\n      transform: scale(1.05) translateY(-0.5rem);\n      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n      z-index: 20; }\n.composition:hover .composition__photo:not(:hover) {\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95); }\n.feature-box {\n  background-color: rgba(255, 255, 255, 0.8);\n  font-size: 1.5rem;\n  padding: 2.5rem;\n  text-align: center;\n  border-radius: 3px;\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s; }\n@media (max-width: 56.75em) {\n    .feature-box {\n      padding: 2rem; } }\n.feature-box__icon {\n    font-size: 6rem;\n    margin-bottom: .5rem;\n    display: inline-block;\n    background-image: linear-gradient(to right, #7ed56f, #28b485);\n    background-clip: text;\n    -webkit-background-clip: text;\n    color: transparent; }\n@media (max-width: 56.75em) {\n      .feature-box__icon {\n        margin-bottom: 0; } }\n.feature-box:hover {\n    -webkit-transform: translateY(-1.5rem) scale(1.03);\n    transform: translateY(-1.5rem) scale(1.03); }\n.icon {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor; }\n.form__group:not(:last-child) {\n  margin-bottom: 2rem; }\n.form__input {\n  font-size: 1.5rem;\n  font-family: inherit;\n  color: inherit;\n  padding: 1.5rem 2rem;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.7);\n  border: none;\n  border-bottom: 3px solid transparent;\n  width: 90%;\n  display: block;\n  transition: all .3s; }\n@media (max-width: 56.75em) {\n    .form__input {\n      width: 100%; } }\n.form__input:focus {\n    outline: none;\n    background-color: rgba(255, 255, 255, 0.9);\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);\n    border-bottom: 3px solid #55c57a; }\n.form__input:focus:invalid {\n    border-bottom: 3px solid #fb6819; }\n.form__input::-webkit-input-placeholder {\n    color: #999; }\n.form__label {\n  font-size: 1.2rem;\n  font-weight: 700;\n  margin-left: 2rem;\n  margin-top: .7rem;\n  display: block;\n  transition: all .3s; }\n.form__input:placeholder-shown + .form__label {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: translateY(-4rem);\n  transform: translateY(-4rem); }\n.form__radio-group {\n  width: 50%;\n  display: inline-block; }\n@media (max-width: 56.75em) {\n    .form__radio-group {\n      width: 100%;\n      margin-bottom: 2rem; } }\n.form__radio-input {\n  display: none; }\n.form__radio-label {\n  font-size: 1.6rem;\n  cursor: pointer;\n  position: relative;\n  padding-left: 4.5rem;\n  display: inline-block;\n  vertical-align: middle; }\n.form__radio-button {\n  height: 3rem;\n  width: 3rem;\n  border: 5px solid #5FB8D8;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0; }\n.form__radio-button::after {\n    content: \"\";\n    display: block;\n    height: 1.3rem;\n    width: 1.3rem;\n    border-radius: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    background-color: #5FB8D8;\n    opacity: 0;\n    transition: opacity .2s; }\n.form__radio-input:checked ~ .form__radio-label .form__radio-button::after {\n  opacity: 1; }\n.popup {\n  height: 100vh;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(51, 51, 51, 0.8);\n  z-index: 9999;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  opacity: 0;\n  visibility: hidden;\n  transition: all .3s; }\n.popup:target {\n    opacity: 1;\n    visibility: visible; }\n.popup__content {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    width: 70%;\n    height: 50rem;\n    background-color: #fff;\n    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);\n    border-radius: 3px;\n    display: table;\n    overflow: hidden;\n    opacity: 0;\n    -webkit-transform: translate(-50%, -50%) scale(0.25);\n    transform: translate(-50%, -50%) scale(0.25);\n    transition: all .5s .2s; }\n.popup:target .popup__content {\n    opacity: 1;\n    -webkit-transform: translate(-50%, -50%) scale(1);\n    transform: translate(-50%, -50%) scale(1); }\n.popup__left {\n    padding: 0;\n    width: 33.333333333333333%;\n    display: table-cell; }\n.popup__right {\n    width: 66.6666666666666%;\n    display: table-cell;\n    vertical-align: middle;\n    padding: 3rem 5rem; }\n.popup__img {\n    display: block;\n    width: 100%;\n    overflow: hidden; }\n.popup__text {\n    font-size: 1.4rem;\n    margin-bottom: 4rem;\n    -webkit-column-count: 2;\n    column-count: 2;\n    -webkit-column-gap: 4rem;\n    column-gap: 4rem;\n    -webkit-column-rule: 1px solid #eee;\n    column-rule: 1px solid #eee;\n    column-count: 2;\n    column-gap: 4rem;\n    column-rule: 1px solid #eee;\n    -ms-hyphens: auto;\n    -webkit-hyphens: auto;\n    hyphens: auto; }\n.popup__close:link, .popup__close:visited {\n    color: #777;\n    position: absolute;\n    top: 2.5rem;\n    right: 2.5rem;\n    font-size: 3rem;\n    text-decoration: none;\n    display: inline-block;\n    line-height: 1; }\n.popup__close:hover {\n    color: #28b485; }\n.story {\n  width: 75%;\n  margin: 0 auto;\n  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);\n  background-color: rgba(255, 255, 255, 0.6);\n  border-radius: 3px;\n  padding: 6rem;\n  padding-left: 9rem;\n  font-size: 1.6rem;\n  -webkit-transform: skewX(-12deg);\n          transform: skewX(-12deg); }\n@media (max-width: 56.75em) {\n    .story {\n      width: 100%;\n      padding: 4rem;\n      padding-left: 7rem; } }\n@media (max-width: 37.5em) {\n    .story {\n      -webkit-transform: translateX(0) skewX(0);\n              transform: translateX(0) skewX(0); } }\n.story__shape {\n    width: 15rem;\n    height: 15rem;\n    float: left;\n    shape-outside: circle(50% at 50% 50%);\n    -webkit-clip-path: circle(50% at 50% 50%);\n    clip-path: circle(50% at 50% 50%);\n    -webkit-transform: translateX(-3rem) skewX(12deg);\n            transform: translateX(-3rem) skewX(12deg);\n    position: relative; }\n@media (max-width: 37.5em) {\n      .story__shape {\n        -webkit-transform: translateX(-3rem) skewX(0);\n                transform: translateX(-3rem) skewX(0); } }\n.story__img {\n    height: 100%;\n    -webkit-transform: translateX(-3.5rem) scale(1.1);\n            transform: translateX(-3.5rem) scale(1.1);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transition: -webkit-transform .5s;\n    transition: transform .5s;\n    transition: transform .5s, -webkit-transform .5s; }\n.story__img-2 {\n      -webkit-transform: translateX(-7rem) scale(1.1);\n              transform: translateX(-7rem) scale(1.1); }\n.story__text {\n    -webkit-transform: skewX(12deg);\n            transform: skewX(12deg); }\n@media (max-width: 37.5em) {\n      .story__text {\n        -webkit-transform: skewX(0);\n                transform: skewX(0); } }\n.story__caption {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, 20%);\n            transform: translate(-50%, 20%);\n    color: #fff;\n    text-transform: uppercase;\n    font-size: 1.7rem;\n    text-align: center;\n    opacity: 0;\n    transition: all .5s;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden; }\n.story:hover .story__caption {\n    opacity: 1;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n.story:hover .story__img {\n    -webkit-transform: translateX(-3.5rem) scale(1);\n            transform: translateX(-3.5rem) scale(1);\n    -webkit-filter: blur(3px) brightness(80%);\n            filter: blur(3px) brightness(80%); }\n.story:hover .story__img-2 {\n    -webkit-transform: translateX(-7rem) scale(1);\n            transform: translateX(-7rem) scale(1);\n    -webkit-filter: blur(3px) brightness(80%);\n            filter: blur(3px) brightness(80%); }\n.footer {\n  background-color: #333;\n  padding: 10rem 0;\n  font-size: 1.4rem;\n  color: #eee; }\n@media (max-width: 56.75em) {\n    .footer {\n      padding: 8rem 0; } }\n.footer__logo-box {\n    text-align: center;\n    margin-bottom: 8rem; }\n@media (max-width: 56.75em) {\n      .footer__logo-box {\n        margin-bottom: 4rem; } }\n.footer__logo {\n    width: 15rem;\n    height: auto; }\n.footer__logo-text {\n      color: #72b6d2;\n      font-size: 2.8rem;\n      text-transform: uppercase; }\n.footer__navigation {\n    border-top: 1px solid #777;\n    padding: 2rem;\n    display: inline-block; }\n@media (max-width: 56.75em) {\n      .footer__navigation {\n        width: 100%;\n        text-align: center; } }\n.footer__list {\n    list-style: none; }\n.footer__item {\n    display: inline-block; }\n.footer__item:not(:last-child) {\n      margin-right: 1.5rem; }\n.footer__link:link, .footer__link:visited {\n    color: #eee;\n    background-color: #333;\n    text-decoration: none;\n    text-transform: uppercase;\n    display: inline-block;\n    transition: all .2s; }\n.footer__link:hover, .footer__link:active {\n    color: #5FB8D8;\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);\n    -webkit-transform: rotate(5deg) scale(1.3);\n    transform: rotate(5deg) scale(1.3); }\n.footer__copyright {\n    border-top: 1px solid #777;\n    padding: 2rem;\n    width: 80%;\n    float: right; }\n@media (max-width: 56.75em) {\n      .footer__copyright {\n        width: 100%;\n        float: none; } }\n.row {\n  max-width: 114rem;\n  margin: 0 auto; }\n.row:not(:last-child) {\n    margin-bottom: 8rem; }\n@media (max-width: 56.75em) {\n      .row:not(:last-child) {\n        margin-bottom: 6rem; } }\n@media (max-width: 56.75em) {\n    .row {\n      max-width: 50rem;\n      padding: 0 3rem; } }\n.row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n.row [class^=\"col-\"] {\n    float: left; }\n.row [class^=\"col-\"]:not(:last-child) {\n      margin-right: 6rem; }\n@media (max-width: 56.75em) {\n        .row [class^=\"col-\"]:not(:last-child) {\n          margin-right: 0;\n          margin-bottom: 6rem; } }\n@media (max-width: 56.75em) {\n      .row [class^=\"col-\"] {\n        width: 100% !important; } }\n.row .col-1-of-2 {\n    width: calc((100% - 6rem) / 2); }\n.row .col-1-of-3 {\n    width: calc((100% - 2 * 6rem) / 3); }\n.row .col-2-of-3 {\n    width: calc(2 * ((100% - 2 * 6rem) / 3) + 6rem); }\n.row .col-1-of-4 {\n    width: calc((100% - 3 * 6rem) / 4); }\n.row .col-2-of-4 {\n    width: calc(2 * ((100% - 3 * 6rem) / 4) + 6rem); }\n.row .col-3-of-4 {\n    width: calc(3 * ((100% - 3 * 6rem) / 4) + 2 * 6rem); }\n.header {\n  height: 95vh;\n  background-image: linear-gradient(to right bottom, rgba(95, 184, 216, 0.7), rgba(95, 184, 216, 0.4)), url('bigAir.jpg');\n  background-size: cover;\n  background-position: top;\n  position: relative;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);\n  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%); }\n@media (max-width: 37.5em) {\n    .header {\n      -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);\n      clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%); } }\n.header__logo-box {\n    position: absolute;\n    top: 4rem;\n    left: 4rem; }\n.header__logo {\n    height: 5rem;\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n    transition-duration: .5s; }\n.header__logo:hover {\n    transition-duration: .5s;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg); }\n.header__text-box {\n    position: absolute;\n    top: 40%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    text-align: center; }\n.navigation__checkbox {\n  display: none; }\n.navigation__button {\n  background-color: #fff;\n  height: 7rem;\n  width: 7rem;\n  position: fixed;\n  top: 6rem;\n  right: 6rem;\n  border-radius: 50%;\n  z-index: 2000;\n  cursor: pointer; }\n@media (max-width: 56.75em) {\n    .navigation__button {\n      top: 4rem;\n      right: 4rem; } }\n@media (max-width: 37.5em) {\n    .navigation__button {\n      top: 3.5rem;\n      right: 3.5rem; } }\n.navigation__background {\n  height: 6rem;\n  width: 6rem;\n  border-radius: 50%;\n  position: fixed;\n  top: 6.5rem;\n  right: 6.5rem;\n  background-image: radial-gradient(#9DE4FF, #72b6d2);\n  z-index: 1000;\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);\n  transition: -webkit-transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);\n  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);\n  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.8s cubic-bezier(0.86, 0, 0.07, 1); }\n@media (max-width: 56.75em) {\n    .navigation__background {\n      top: 4.5rem;\n      right: 4.5rem; } }\n@media (max-width: 37.5em) {\n    .navigation__background {\n      top: 3.7rem;\n      right: 3.7rem; } }\n.navigation__nav {\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: -100%;\n  z-index: 1500;\n  opacity: 0;\n  width: 0;\n  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55); }\n.navigation__list {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 100%;\n  list-style: none;\n  text-align: center; }\n.navigation__item {\n  margin: 1rem;\n  position: relative;\n  display: block; }\n@media (max-width: 37.5em) {\n    .navigation__item {\n      width: 80%; } }\n.navigation__snowflake {\n  display: inline-block;\n  position: absolute;\n  top: 1rem;\n  margin-left: 1rem;\n  height: 5rem;\n  transition-duration: .5s; }\n.navigation__snowflake-1 {\n    -webkit-transform: rotate(-4deg);\n    transform: rotate(-4deg); }\n.navigation__snowflake-2 {\n    -webkit-transform: rotate(5deg);\n    transform: rotate(5deg); }\n.navigation__snowflake-3 {\n    -webkit-transform: rotate(-12deg);\n    transform: rotate(-12deg); }\n.navigation__snowflake-4 {\n    -webkit-transform: rotate(13deg);\n    transform: rotate(13deg); }\n.navigation__snowflake-5 {\n    -webkit-transform: rotate(3deg);\n    transform: rotate(3deg); }\n.navigation__link:link, .navigation__link:visited {\n  display: inline-block;\n  font-size: 3rem;\n  font-weight: 300;\n  padding: 1rem 2rem;\n  color: #fff;\n  text-decoration: none;\n  text-transform: uppercase;\n  background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);\n  background-size: 220%;\n  transition: all .4s; }\n.navigation__link:link span, .navigation__link:visited span {\n    margin-right: 1.5rem;\n    display: inline-block; }\n.navigation__link:hover, .navigation__link:active {\n  background-position: 100%;\n  color: #5FB8D8;\n  -webkit-transform: translateX(1rem);\n  transform: translateX(1rem); }\n.navigation__item:hover > .navigation__snowflake {\n  transition-duration: .5s;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n.navigation__checkbox:checked ~ .navigation__background {\n  -webkit-transform: scale(80);\n  transform: scale(80); }\n.navigation__checkbox:checked ~ .navigation__nav {\n  opacity: 1;\n  width: 100%;\n  left: 0; }\n.navigation__icon {\n  position: relative;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n.navigation__icon, .navigation__icon::before, .navigation__icon::after {\n    width: 3rem;\n    height: 2px;\n    background-color: #333;\n    display: inline-block; }\n.navigation__icon::before, .navigation__icon::after {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    transition: all .2s;\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden; }\n.navigation__icon::before {\n    top: -.8rem; }\n.navigation__icon::after {\n    top: .8rem; }\n.navigation__button:hover .navigation__icon::before {\n  top: -1rem; }\n.navigation__button:hover .navigation__icon::after {\n  top: 1rem; }\n.navigation__checkbox:checked + .navigation__button .navigation__icon {\n  background-color: transparent; }\n.navigation__checkbox:checked + .navigation__button .navigation__icon::before {\n    top: 0;\n    -webkit-transform: rotate(135deg);\n    transform: rotate(135deg); }\n.navigation__checkbox:checked + .navigation__button .navigation__icon::after {\n    top: 0;\n    -webkit-transform: rotate(-135deg);\n    transform: rotate(-135deg); }\n.section-about {\n  background-color: #f7f7f7;\n  padding: 25rem 0;\n  margin-top: -20vh; }\n@media (max-width: 56.75em) {\n    .section-about {\n      padding: 20rem 0; } }\n.section-features {\n  padding: 20rem 0;\n  background-image: linear-gradient(to right bottom, rgba(157, 228, 255, 0.8), rgba(114, 182, 210, 0.8)), url('nat-4.jpg');\n  -webkit-transform: skewY(-7deg);\n  transform: skewY(-7deg);\n  margin-top: -9rem; }\n.section-features > * {\n    -webkit-transform: skewY(7deg);\n    transform: skewY(7deg); }\n@media (max-width: 56.75em) {\n    .section-features {\n      padding: 10rem 0; } }\n.section-packages {\n  background-color: #f7f7f7;\n  padding: 25rem 0 15rem 0;\n  margin-top: -10rem; }\n@media (max-width: 56.75em) {\n    .section-packages {\n      padding: 20rem 0 10rem 0; } }\n.section-stories {\n  position: relative;\n  padding: 15rem 0; }\n@media (max-width: 56.75em) {\n    .section-stories {\n      padding: 10rem 0; } }\n.section-book {\n  padding: 15rem 0;\n  background-image: linear-gradient(to right bottom, #9DE4FF, #72b6d2); }\n.book {\n  background-image: linear-gradient(105deg, rgba(247, 247, 247, 0.9) 0%, rgba(247, 247, 247, 0.9) 50%, transparent 50%), url('book.jpg');\n  background-size: cover;\n  border-radius: 3px;\n  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.3); }\n@media (max-width: 75em) {\n    .book {\n      background-image: linear-gradient(105deg, rgba(247, 247, 247, 0.9) 0%, rgba(247, 247, 247, 0.9) 65%, transparent 65%), url('book.jpg'); } }\n@media (max-width: 56.75em) {\n    .book {\n      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%, transparent 100%), url('book.jpg'); } }\n.book__form {\n    width: 50%;\n    padding: 6rem; }\n@media (max-width: 75em) {\n      .book__form {\n        width: 65%; } }\n@media (max-width: 56.75em) {\n      .book__form {\n        width: 100%; } }\n"
>>>>>>> ef0e99dd06b2852cab23ed567ae5cb3a8f79674d

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/sass/styles.css":
/*!*****************************!*\
  !*** ./src/sass/styles.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/raw-loader!../../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/sass/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** multi ./src/sass/styles.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

<<<<<<< HEAD
module.exports = __webpack_require__(/*! /Users/Goethe/Documents/code/udemy/css/powder_angular/client/src/sass/styles.css */"./src/sass/styles.css");
=======
module.exports = __webpack_require__(/*! /code/udemy/css/powder_angular/client/src/sass/styles.css */"./src/sass/styles.css");
>>>>>>> ef0e99dd06b2852cab23ed567ae5cb3a8f79674d


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map