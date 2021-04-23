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