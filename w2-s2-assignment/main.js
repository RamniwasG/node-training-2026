const worker = new Worker('worker.js')
worker.postMessage(10);
worker.onmessage = function(e) {
    console.log("result from worker is : ", e.data)
}