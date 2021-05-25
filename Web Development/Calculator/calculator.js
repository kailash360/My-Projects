console.log("JavaScript has been integrated successfully!")

// Getting the opeartors and other elements 
let add = document.getElementById("add")
let subtract = document.getElementById("subtract")
let multiply = document.getElementById("multiply")
let divide = document.getElementById("divide")
let equal = document.getElementById("equal")
let expressionSection = document.querySelector(".upper")
let inputSection = document.getElementById("lower")
let expression = "";
var answer = 0;
let inputOperator = ""


//Getting the operands
let zero = document.getElementById("0");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let clear = document.getElementById("clear");
let backspace = document.getElementById("backspace");

//Getting clicking sound
let click1 = new Audio("media/click1.mp3")
let click2 = new Audio("media/click2.mp3")

//Adding event-listeners for the operands
zero.addEventListener("click", () => {
    click1.play()
    inputSection = document.getElementById("lower")
    if (inputSection.value != "0") {
        inputSection.value += "0"
    }
})
one.addEventListener("click", () => {
    click1.play()
    inputSection = document.getElementById("lower");
    inputSection.value += "1";
})
two.addEventListener("click", () => {
    click1.play()
    inputSection = document.getElementById("lower");
    inputSection.value += "2";
})
three.addEventListener("click", () => {
    click1.play()
    inputSection = document.getElementById("lower");
    inputSection.value += "3";
})
four.addEventListener("click", () => {
    click1.play()
    inputSection = document.getElementById("lower");
    inputSection.value += "4";
})
five.addEventListener("click", () => {
    inputSection = document.getElementById("lower");
    inputSection.value += "5";
})
six.addEventListener("click", () => {
    click1.play()
    inputSection = document.getElementById("lower");
    inputSection.value += "6";
})
seven.addEventListener("click", () => {
    click1.play()
    inputSection = document.getElementById("lower");
    inputSection.value += "7";
})
eight.addEventListener("click", () => {
    click1.play()
    inputSection = document.getElementById("lower");
    inputSection.value += "8";
})
nine.addEventListener("click", () => {
    click1.play()
    inputSection = document.getElementById("lower");
    inputSection.value += "9";
})

//Adding event-listeners for Clear All and backspace
clear.addEventListener("click", () => {
    click1.play()
    answer = 0;
    inutOperator = ""
    expression = ""
    inputSection.value = ""
    expressionSection.innerHTML = ""
})

backspace.addEventListener("click", () => {
    click1.play()
    inputSection.value = inputSection.value.slice(0, -1);
})

//***Eventlisteers and Functions for calculation***
// For addition 
add.addEventListener("click", () => {
    click2.play()
    clickOperator("+");
    inputOperator = "+"
})

// For subtraction 
subtract.addEventListener("click", () => {
    click2.play()
    clickOperator("-");
    inputOperator = "-"
})

// For multiplication 
multiply.addEventListener("click", () => {
    click2.play()
    clickOperator("*");
    inputOperator = "*"
})

// For division 
divide.addEventListener("click", () => {
    click2.play()
    clickOperator("/");
    inputOperator = "/"
})

//On clicking equals-to
equal.addEventListener("click", () => {
    click2.play()
    evaluate(inputOperator)
})


//****Function to handle each operator****
function clickOperator(operator) {
    console.log("Operator:" + operator)

    // If user does not evaluate an expression and continues with calculation 
    if (expression.charAt((expression.length) - 1) == operator) {
        alert("Click on '=' to evaluate, and then proceed with further calculations")
    }
    //Adding the operator sign in intermediate steps
    else if (expression != "") {
        expression += operator
    }
    //If user starts with an operation,i.e when expression is empty
    else {
        let op1 = parseInt(document.querySelector("#lower").value)
        answer += op1;
        expression += answer + operator;
    }

    //Updating the xpression on upper-half of display container
    expressionSection = document.querySelector(".upper")
    expressionSection.innerHTML = expression
    inputSection.value = "";
}

//****Function to handle each time te user asks to evaluate ****
function evaluate(operator) {
    let op2 = document.getElementById("lower").value

    //Evaluating the expression 
    let ch = expression.charAt((expression.length) - 1)
    if (ch == "+" || ch == "-" || ch == "*" || ch == "/") {
        //If user has clicked to evluate without the value of second operand,then add 0 automatically to complete it
        if (op2 == "") {
            op2 = 0
        }
        expression += op2;
        answer = calculate(parseInt(answer), parseInt(op2), operator)
    }

    //Updating the expression and displaying the result
    expressionSection.innerHTML = expression;
    inputSection.value = answer;
}


//Function to evaluate the simple expression: operand1-opeartor-operand2
function calculate(operand1, operand2, operator) {
    if (operator == "+") {
        return operand1 + operand2;
    } else if (operator == "-") {
        return operand1 - operand2;
    } else if (operator == "*") {
        return operand1 * operand2;
    } else if (operator == "/") {
        return operand1 / operand2;
    }
}