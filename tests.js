// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//----------------------------------

describe("sayHello", function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("sayHello should return a string", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane!'", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return 'Hello, Alex!'", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return 'Hello, Pat!'", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return 'Hello, World!'", function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return 'Hello, World!'", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!'", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
})

// -----------------------------------

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it("should return true if passed 5", function() {
        expect(isFive(5)).toBe(true);
    });
    it("should return true if passed '5'", function() {
        expect(isFive("5")).toBe(true);
    });
    it("should return false if not passed 5", function() {
        expect(isFive(!5)).toBe(false);
    });
});

// -----------------------------------

describe("isEven", function() {
    it("should be a defined function", function() {
        expect(typeof isEven).toBe("function");
    });
    it("should return true when executed with isEven(2)", function() {
        expect(isEven(2)).toBe(true);
    });
    it("should return true when executed with isEven(-4)", function() {
        expect(isEven(-4)).toBe(true);
    });
    it("should return false when executed with isEven(3)", function() {
        expect(isEven(3)).toBe(false);
    });
    it("should return false when executed with isEven('banana')", function() {
        expect(isEven('banana')).toBe(false);
    });
    it("should return true when executed with isEven('8')", function() {
        expect(isEven('8')).toBe(true);
    });
    it("should return false when executed with a boolean input like isEven(true) or isEven(false)", function() {
        expect(isEven(true || false)).toBe(false);
    });
    it("should return false when executed without an argument like isEven()", function() {
        expect(isEven()).toBe(false);
    });
})