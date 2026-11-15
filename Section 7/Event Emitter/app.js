import EventEmitter from "events"

const emitter = new EventEmitter()
emitter.on("event1", () => {
  console.log("Event fired 1")
})
emitter.on("event1", () => {
  console.log("Event fired 2")
})
emitter.on("abc", () => {
  console.log("abc event fired")
})

emitter.emit("event1")
emitter.emit("abc")
// console.log(emitter)