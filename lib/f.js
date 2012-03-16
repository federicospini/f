
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

  exports.version = '0.1.0';

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
   * comp2
   * returns the composition of the given functions
   * 
   * @param {Array} functions array of functions to compose
   * @param {Function} [functions[0]] f
   * @param {Function} [functions[1]] g
   * @return {Function} the composition of the given functions
   */

  ƒ.comp2 = function (functions) {
    var f = functions[0];
    var g = functions[1];
    return function (x) {
      return f(g(x));
    };
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

  /**
   * id
   * return the given `value`
   * 
   * @param value
   * @return the given `value`
   */

  ƒ.id = function (value) {
    return value;
  };
  
  /**
   * k
   * return a function that return the given `value`
   * 
   * @param value
   * @return {Function} a function that return `value`
   */

  ƒ.k = function (value) {
    return function () {
      return value;
    };
  };

  /**
   * cat
   * catenates `args`, an array of arrays, by eliminating a level of nesting
   *
   * @param {Array} arrays array of arrays
   * @return {Array} array created eliminating a level of nesting
   * @api public 
   */
  
  ƒ.cat = function (arrays) {
    var result = [];
    arrays.forEach(function (array) {
      result = result.concat(array);
    });
    return result;
  };

  /**
   * distl
   * distribute left: 
   * returns the `pair` sequence with `value` and the elements of `array` 
   * 
   * @param {Array} pair
   * @param {Array} [pair[0]] array
   * @param {Any}   [pair[1]] value
   * @return the `pair` sequence with `value` and the elements of `array`
   * @api public
   */

  ƒ.distl = function (pair) {
    var value = pair[0];
    var array = pair[1];
    return array.map(function (item) {
      return [value, item];
    });
  };

  /**
   * distr
   * distribute right: 
   * returns the `pair` sequence with the elements of `array` and `value`
   * 
   * @param {Array} pair
   * @param {Array} [pair[0]] array
   * @param {Any}   [pair[1]] value
   * @return the `pair` sequence with the elements of `array` and `value`
   * @api public
   */

  ƒ.distr = function (pair) {
    var array = pair[0];
    var value = pair[1];
    return array.map(function (item) {
      return [item, value];
    });
  };

  /**
   * insl
   * insert left operator  
   * given a binary associative `operator` 
   * returns a function that given an array 
   * returns the riduction of the array by the operator.
   * 
   * @param {Function} operator binary operator
   * @return {Function} function that apply `operator` to the given `array`
   * @api public
   */

  ƒ.insl = function (operator) {
    return function (array) {
      return array.reduce(operator);
    };
  };

  /**
   * insl
   * insert left operator  
   * given a binary associative `operator` 
   * returns a function that given an array 
   * returns the right riduction of the array by the operator.
   * 
   * @param {Function} operator binary operator
   * @return {Function} function that apply `operator` to the given `array`
   * @api public
   */

  ƒ.insr = function (operator) {
    return function (array) {
      return array.reduceRight(operator);
    };
  };
  
}(this));