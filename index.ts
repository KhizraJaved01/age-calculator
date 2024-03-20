#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let answer = await inquirer.prompt([
{
    name: "age",
    type: "number", 
    message: "Enter your age:"
}
]);

if(answer.age < 60) {
    console.log(chalk.blue(`Insha Allah, after ${60 - answer.age} years you will be 60 years old.`));
}
else {
    console.log(chalk.blue(`Masha Allah, You have been 60 years old for ${answer.age - 60} years.`));
}