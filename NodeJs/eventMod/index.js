const EventEmitter = require("events");

// creating own events
const event = new EventEmitter();

// event.on("sayMyName", () => {
//   console.log("Your name is sapna");
// });

// event.on("sayMyName", () => {
//   console.log("Your name is saini");
// });

// event.on("sayMyName", () => {
//   console.log("Your name is pulkit");
// });

event.on("checkPage", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});

// event.emit("sayMyName");
event.emit("checkPage", 200, "ok");

// The concept is quit simple: emitter objects emit named events that cause
// previously registered listeners to be called. so, an emitter object
// basically has two main features:
//1. emitting name events.
//2. Registering and unregistering listerer functions.
