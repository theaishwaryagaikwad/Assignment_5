
function evaluatePostfix(expression) {
    const stack = [];
    
    for (let char of expression) {
        if (!isNaN(char)) {
            stack.push(Number(char));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            
            switch (char) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(a / b);
                    break;
                default:
                    throw new Error(`Unknown operator: ${char}`);
            }
        }
    }

    return stack.pop();
}

console.log(evaluatePostfix("231*+9-")); 
