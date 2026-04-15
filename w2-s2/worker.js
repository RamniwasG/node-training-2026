console.log("self : ", self); // WorkerGlobalScope
console.log("globalThis : ", globalThis) // WorkerGlobalScope
console.log("this : ", this); // WorkerGlobalScope
// console.log("window : ", window); // window is not defined
// console.log("global : ", global); // window is not defined
self.onmessage = function(e) {
    console.log("worker recieved", e.data)
    const result = e.data * 5;
    self.postMessage(result)
}