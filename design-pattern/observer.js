/**
 * Observer-Subject Pattern is another usage design patter which base on publish-subscribe pattern.
 */

class Subject {
  constructor(initialState) {
    this.state = initialState
    this._observers = []
  }
  attach(observer) {
    this._observers.push(observer)
  }
  setState(newState) {
    this.state = newState
    this._observers.forEach((o) => o.update(newState))
  }
}

class Observer {
  constructor(name) {
    this.name = name
  }
  update(newState) {
    console.log(`Hey, ${this.name} know your state change to ${newState}.`)
  }
}

const subject = new Subject('Fox')
const hunter = new Observer('Hunter')
subject.attach(hunter)
subject.setState('out of barrier') // Hey, Hunter know your state change to out of barrier.
