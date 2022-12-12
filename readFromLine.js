const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("please tell your name? ", (name)=>{
    console.log("Hello ",name);
    rl.close();
})
