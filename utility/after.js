/**
 * Only execute callback function after * times.
 */
function after(times, callback) {
  return () => {
    if (--times === 0) callback()
  }
}

const fn = after(3, () => console.log('Hello World!'))

fn()
fn()
fn() // Hello World!
