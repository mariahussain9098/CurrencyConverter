import inquirer from "inquirer";

const conversion = {
    "PKR":{
        "USD" : 0.0036,
        "GBP" : 0.0028,
        "PKR" : 1
    },
    "GBP":{
        "USD" : 1.27,
        "PKR" : 354.19,
        "GBP" : 1
    },
    "USD":{
        "PKR" : 279.65,
        "GBP" : 0.79,
        "USD" : 1
    }
}
const answer:{
    from : "PKR" | "USD" | "GBP",
    to: "PKR" | "USD" | "GBP",
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name : "from",
        choices: ["PKR", "USD", "GBP"],
        message: "select your currency"
    },
    {
        type: "list",
        name : "to",
        choices: ["PKR", "USD", "GBP"],
        message: "select your conversion currency"
    },
    {
        type: "number",
        name : "amount",
        message: "enter your conversion amount"
    }
])

const {from, to, amount} = answer;
if(from && to && amount){
    const result = conversion[from][to] * amount;
    console.log(`Your conversion from ${from} to ${to} is : ${result}`);

}else{
    console.log("Invalid inputs")
}