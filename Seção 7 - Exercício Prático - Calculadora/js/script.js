let count = 0;
let historic = "";
let newCalc = false;
let newNumber = true;
let setEqual = false;

setZero();

function setZero() {
    let zero = 0;
    count = 0;
    document.querySelector("#display").innerHTML = zero;
    document.querySelector("#historic").innerHTML = " ";
}

function cacel() {
    let zero = 0;
    count = 0;
    document.querySelector("#display").innerHTML = zero;
}

function includeDigit(number) {
    setEqual = false;
    while (newCalc == true) {
        setZero();
        newCalc = false;
    }

    if (count < 14) {
        number = parseFloat(number);
        let actualNumber = document.querySelector("#display").textContent;

        if (actualNumber == "0") {
            document.querySelector("#display").innerHTML = number;
        } else {
            count += 1;
            actualNumber += number;
            document.querySelector("#display").innerHTML = actualNumber;
        }
    }
}

function getPercent() {
    let number1 = document.querySelector("#display").textContent;
    if (number1 != 0) {
        number1 /= 100;
        document.querySelector("#display").innerHTML = number1;
        count = 0;
    }
}

function startCalc(operator) {
    setEqual = false;
    let number1 = document.querySelector("#display").textContent;
    if (newCalc == true) {
        document.querySelector("#historic").innerHTML = `${number1} ${operator} `;
        document.querySelector("#display").innerHTML = 0;
        newCalc = false;
    } else {
        historic = ` ${number1} ${operator} `;
        document.querySelector("#historic").innerHTML += historic;
        document.querySelector("#display").innerHTML = 0;
        count = 0;
        newNumber = true;
    }
}

function finalizeCalc(equal) {
    let number1 = document.querySelector("#display").textContent;
    if (number1 != 0 && setEqual == false) {
        historic = number1;
        document.querySelector("#historic").innerHTML += historic;
        let result = document.querySelector("#historic").textContent;
        let limit = /[1,2,3,4,5,6,7,8,9,0,+,-,*,/,.]/g;
        result = result.match(limit);
        let finalResult = "";
        for (let i = 0; i < result.length; i++) {
            finalResult += result[i];
        }
        result = eval(finalResult);

        document.querySelector("#historic").innerHTML += " =";
        document.querySelector("#display").innerHTML = result;
        console.log(result);
        newCalc = true;
        setEqual = true;
    }
}

function moreLess() {
    number1 = document.querySelector("#display").textContent;
    if (number1 != 0) {
        number1 = number1 * -1;
        document.querySelector("#display").innerHTML = number1;
    }
}

function includePoint() {
    number1 = document.querySelector("#display").textContent;
    if (number1 != "0") {
        number1 += ".";
        document.querySelector("#display").innerHTML = number1;
        newNumber = false;
    } else {
        number1 = document.querySelector("#display").textContent;
        number1 = "0.";
        document.querySelector("#display").innerHTML = number1;
        newCalc = false;
    }
}
