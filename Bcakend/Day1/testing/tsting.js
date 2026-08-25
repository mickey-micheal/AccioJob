const figlet = require('figlet');
const chalk = require('chalk');
const cowsay = require('cowsay');


console.log(chalk.red("Mickey"))

figlet("Hello World!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(chalk.blue(data));
})

console.log(cowsay.say({
    text : "Mickey Singh",
    e : "oO",
    T : "U"
}))
