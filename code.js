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