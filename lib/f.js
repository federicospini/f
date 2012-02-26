
/*!
 * ƒ
 * JavaScript functional library
 * Copyright (c) 2011 Enrico Marino <enrico.marino@email.com>
 * MIT License
 */

 !(function (exports) {

  /**
   * Library namespace.
   */

   var ƒ = exports.ƒ = exports.f = {};

  /**
   * Library version.
   */

  exports.version = '0.0.0';

  /**
   * apply 
   * returns the result of the application expression `f(x)`
   * 
   * @param {Function} [f = arguments[0]]
   * @param {Mixed} [x = arguments[1]]
   * @return the result of the application expression `f(x)`
   * @api public
   */
  
  ƒ.apply = function () {
    var f = arguments[0];
    var x = arguments[1];
    return f(x);
  };



 }(this));