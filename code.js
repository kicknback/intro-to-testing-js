// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function notHelloWorld() {
    return "Let's hope this works";
}

function sayHello(input) {
    if (typeof input === 'string') {
        return `Hello, ${input}!`;
    } else {
        return "Hello, World!";
    }
}

function isFive(input) {
    if (input == 5) {
        return true;
    } else {
        return false;
    }
}

function isEven(input) {
    return input % 2 === 0;
}

function isVowel(input) {
    if (typeof input === 'boolean' || !input) {
        return false;
    } else if (input.length > 1) {
        return false;
    }
    return /[aeiou]/gi.test(input);
}

function add(input1, input2) {
    return Number(input1) + Number(input2);
}
