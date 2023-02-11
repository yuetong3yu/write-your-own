/**
 * We looking at some design pattern call AOP(Aspect-Orienting Programming).
 *
 * We need a wrapper function to hide the side effect function, and only exposure custom function to users.
 *
 * That's basically how `setState` in React works.
 */

function perform(method, wrappers) {
  return () => {
    wrappers.forEach((wrapper) => wrapper.initialize())
    method()
    wrappers.forEach((wrapper) => wrapper.close())
  }
}

const newFunc = perform(() => {
  console.log('Hi, do something here...')
}, [
  {
    initialize() {
      console.log('Wrapper 1 initialized.')
    },
    close() {
      console.log('Wrapper 1 closed')
    },
  },
  {
    initialize() {
      console.log('Wrapper 2 initialized.')
    },
    close() {
      console.log('Wrapper 2 closed')
    },
  },
])

newFunc()

/**
 * Wrapper 1 initialized.
 * Wrapper 2 initialized.
 * Hi, do something here...
 * Wrapper 1 closed
 * Wrapper 2 closed
 */
