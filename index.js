#! /usr/bin/cnv node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter first number? ",
        type: "number",
        name: "firstnumber",
    },
    { message: "Enter second number?", type: "number", name: "secondnumber" },
    {
        message: "Choice one of the operator?",
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Exponentation",
        ],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else if (answer.operator === "Exponentation") {
    console.log(answer.firstnumber ** answer.secondnumber);
}
else {
    console.log("You are using invalid operator!!");
}
