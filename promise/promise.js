const PENDING = 'PENDING'
const RESOLVED = 'RESOLVED'
const REJECTED = 'REJECTED'

class Promise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined

    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (data) => {
      if (this.status === PENDING) {
        this.value = data
        this.status = RESOLVED
        this.onFulfilledCallbacks.forEach((fn) => fn())
      }
    }
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason
        this.status = REJECTED
        this.onRejectedCallbacks.forEach((fn) => fn())
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onfulfilled, onrejected) {
    if (this.status === RESOLVED) {
      onfulfilled(this.value)
    }
    if (this.status === REJECTED) {
      onrejected(this.reason)
    }
    if (this.status === PENDING) {
      this.onFulfilledCallbacks.push(() => {
        onfulfilled(this.value)
      })
      this.onRejectedCallbacks.push(() => {
        onrejected(this.reason)
      })
    }
  }
}

module.exports = Promise
