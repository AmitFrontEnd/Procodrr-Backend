const { Worker } = require("worker_threads")

console.time('Task')
let completedTask = 0

function createWorker(file) {
  const worker = new Worker(file)
  worker.on('exit', () => {
    completedTask++
    if (completedTask === 3)
      console.timeEnd('Task')
  })
}
createWorker('./worker1.js')
createWorker('./worker2.js')
createWorker('./worker3.js')

// for (let i = 0; i < 10000000000; i++) {
//   if (i === 500000000) console.log('half done')
// }
// for (let i = 0; i < 10000000000; i++) {
//   if (i === 500000000) console.log('half done')
// }
// for (let i = 0; i < 10000000000; i++) {
//   if (i === 500000000) console.log('half done')
// }