import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "fn",
    },
    {
        message: "Enter second number",
        type: "number",
        name: "sn",
    },
    {
        message: "choose operator",
        type: "list",
        name: "operator",
        choices: ["Add", "Sub", "Mul", "Div"],
    },
]);
if (answer.operator === "Add") {
    console.log(answer.fn + " + " + answer.sn + " = " + (answer.fn + answer.sn));
}
else if (answer.operator === "Sub") {
    console.log(answer.fn + " - " + answer.sn + " = " + (answer.fn - answer.sn));
}
else if (answer.operator === "Mul") {
    console.log(answer.fn + " x " + answer.sn + " = " + (answer.fn * answer.sn));
}
else if (answer.operator === "Div") {
    console.log(answer.fn + " / " + answer.sn + " = " + (answer.fn / answer.sn));
}
