/**
 * On-Emit is a design pattern which used a lot in JS industry.
 */

const event = {
  _fns: [],
  on(fn) {
    this._fns.push(fn)
  },
  emi() {
    this._fns.forEach((fn) => fn())
  },
}
