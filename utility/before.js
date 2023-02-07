/**
 * Do something before a function call
 */
// ES6
Function.prototype.before = function (beforeFunc) {
  return (...args) => {
    beforeFunc()
    this(...args)
  }
}
// ES5
Function.prototype.before = function (beforeFunc) {
  var _this = this
  return function () {
    beforeFunc()
    _this.apply(_this, arguments)
  }
}

/**
 * const greeting = () => console.log('World!');
 *
 * const sayHi = greeting.before(() => console.log('Hello '));
 *
 * sayHi(); // Hello, World!
 */
