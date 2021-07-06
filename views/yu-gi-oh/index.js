"use strict";
(function (define) {
  define(function (require, exports, module) {
    const echo = require("echo-js");
    module.exports = {
      template: require("text!./../../views/index.hbs"),
      run: function ({ render, route, template }) {
        const cards = [
          "img/pic_001.jpg",
          "img/pic_002.jpg",
          "img/pic_003.jpg",
          "img/pic_004.jpg",
          "img/pic_005.jpg",
          "img/pic_006.jpg",
          "img/pic_007.jpg",
          "img/pic_008.jpg",
          "img/pic_009.jpg",
          "img/pic_010.jpg",
          "img/pic_011.jpg",
          "img/pic_012.jpg",
          "img/pic_013.jpg",
          "img/pic_014.jpg",
        ].map((v) => {
          return { name: "...", img: "./views/yu-gi-oh/" + v };
        });
        console.log(cards);
        render({ children: [{ children: cards }] });
        echo.init({
          offset: 100,
          throttle: 150,
          unload: false,
          callback: function (element, op) {
            // console.log(element, "has been", op + "ed");
          },
        });
      },
    };
  });
})(define);
