class MyEmitter {
  constructor() {
    this._eventsCount = 0;
    this._events = {};
  }
  on(eventName, eventHandler) {
    if (this._events[eventName])
      this._events[eventName]["eventHandlers"].push(eventHandler);
    else {
      this._events[eventName] = { eventHandlers: [eventHandler] };
      this._eventsCount++;
    }

    this._events[eventName]["once"] = false;
  }
  once(eventName, eventHandler) {
    if (this._events[eventName])
      this._events[eventName]["eventHandlers"].push(eventHandler);
    else {
      this._events[eventName] = { eventHandlers: [eventHandler] };
      this._eventsCount++;
    }
    this._events[eventName]["once"] = true;
  }
  emit(eventName,...args) {
    if (this._events[eventName]) {
      for (const fnction of this._events[eventName]["eventHandlers"]) {
        fnction(...args);
      }
      if (this._events[eventName]["once"]) {
        delete this._events[eventName];
        this._eventsCount--;
      }
    }
  }
}
const e1 = new MyEmitter();


e1.on("abc", () => {
  console.log("custom event");
});
e1.on("abc", (arg1,arg2,arg3) => {
  console.log("abc event fired")
  console.log(arg1,arg2,arg3)
})

e1.once("print", () => {
  console.log("printed");
});

e1.emit("abc",1,2,3);
e1.emit("print");
e1.emit("print");
console.log(e1);
