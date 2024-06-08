function infixToPrefix(infix) {
    function precedence(op) {
        if (op === '+' || op === '-') return 1;
        if (op === '*' || op === '/') return 2;
        if (op === '^') return 3;
        return 0;
    }

    function isOperator(c) {
        return precedence(c) > 0;
    }

    function reverseAndReplace(infix) {
        let reversed = infix.split('').reverse().join('');
        let result = '';
        for (let char of reversed) {
            if (char === '(') {
                result += ')';
            } else if (char === ')') {
                result += '(';
            } else {
                result += char;
            }
        }
        return result;
    }

    function infixToPostfix(infix) {
        const stack = [];
        let output = '';

        for (let char of infix) {
            if (/[a-zA-Z0-9]/.test(char)) {
                output += char;
            } else if (char === '(') {
                stack.push(char);
            } else if (char === ')') {
                while (stack.length && stack[stack.length - 1] !== '(') {
                    output += stack.pop();
                }
                stack.pop(); 
            } else if (isOperator(char)) {
                while (
                    stack.length &&
                    precedence(stack[stack.length - 1]) >= precedence(char)
                ) {
                    output += stack.pop();
                }
                stack.push(char);
            }
        }
        while (stack.length) {
            output += stack.pop();
        }
        return output;
    }

    let reversedInfix = reverseAndReplace(infix);

    let postfix = infixToPostfix(reversedInfix);

    let prefix = postfix.split('').reverse().join('');

    return prefix;
}

const infix = "a+b*(c^d-e)^(f+g*h)-i";
console.log(infixToPrefix(infix));
