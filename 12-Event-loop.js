const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 3;
// setTimeout(() => console.log("Timer 1 finsihed"), 0);
// setImmediate(() => console.log("Immediate 1 finsihed"));

fs.readFile("./content/first.txt", () => {
    console.log("I/O completed");
    console.log("-----------");

    setTimeout(() => console.log("Timer 2 finsihed"), 0);
    setTimeout(() => console.log("Timer 3 finsihed"), 3000);
    setImmediate(() => console.log("Immediate 2 finsihed"));

    process.nextTick(() => console.log("Process.nextTick finsihed"));

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password encrypted")
    })

});
console.log("Hello from the top level code");
