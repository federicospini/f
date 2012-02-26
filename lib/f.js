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

  exports.version = '0.0.1';

  /**
   * apply 
   * apply the given function to the given value
   * 
   * @param {Function} [f = arguments[0]] function
   * @param {Mixed} [x = arguments[1]] value
   * @return the result of the application expression `f(x)`
   * @api public
   */
  
  ƒ.apply = function () {
    var f = arguments[0];
    var x = arguments[1];
    return f(x);
  };

  /**
   * aa
   * apply the given function to each element of the given array
   * 
   * @param {Function} f function
   * @param {Mixed} 
   */

  ƒ.aa = function (f) {
    return function (array) {
      return array.map(function (element) {
        return f(element);
      });
    };
  };

  /**
   * comp
   * returns the composition of the given functions
   * 
   * @param {Array} functions array of functions to compose
   * @return {Function} the composition of the given functions
   */

  ƒ.comp = function (functions) {
    return functions.reduce(function (f, g) {
      return function (x) {
        return f(g(x));
      };
    });
  };

  /**
   * cons
   * Apply each function of the given array `functions` to the given value `x`,
   * and return the array of application values
   *
   * @param {Array} functions
   * @return {Array} the array of application values
   */

  ƒ.cons = function (functions) {
    return function (x) {
      return functions.map(function (f) {
        return f(x);
      });
    };
  };


 }(this));