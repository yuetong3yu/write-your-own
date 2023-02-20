/**
 * p-limit is a advanced version of Promise.all.
 * It can get a result of Promise list, but only allow specific number of concurrency.
 */
export function promiseLimit(tasks, limit) {
  let running = 0,
    taskIndex = 0
  const results = []

  return new Promise((resolve, reject) => {
    function runNextTask() {
      if (taskIndex === tasks.length && running === 0) {
        resolve(results)
        return
      }

      if (running < limit && taskIndex < tasks.length) {
        running++
        const task = tasks[taskIndex++]

        task()
          .then((result) => {
            results.push(result)
          })
          .catch((err) => {
            reject(err)
            return
          })
          .finally(() => {
            running--
            runNextTask()
          })

        runNextTask()
      }
    }

    runNextTask()
  })
}
