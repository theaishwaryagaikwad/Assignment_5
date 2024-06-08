function infixToPostfix(infix) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };
    const associativity = {
        '+': 'L',
        '-': 'L',
        '*': 'L',
        '/': 'L',
        '^': 'R'
    };
    function isOperator(char) {
        return precedence[char] !== undefined;
    }

    const output = [];
    const stack = [];

    for (const char of infix) {
        if (/[a-zA-Z0-9]/.test(char)) {
            output.push(char);
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                output.push(stack.pop());
            }
            stack.pop(); 
        } else if (isOperator(char)) {
            while (
                stack.length > 0 &&
                isOperator(stack[stack.length - 1]) &&
                (
                    (associativity[char] === 'L' && precedence[char] <= precedence[stack[stack.length - 1]]) ||
                    (associativity[char] === 'R' && precedence[char] < precedence[stack[stack.length - 1]])
                )
            ) {
                output.push(stack.pop());
            }
            stack.push(char);
        }
    }

    while (stack.length > 0) {
        output.push(stack.pop());
    }

    return output.join('');
}

const infix = "a+b*(c^d-e)^(f+g*h)-i";
console.log(infixToPostfix(infix)); 
