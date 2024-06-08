function prefixToInfix(prefix) {
    const stack = [];

    for (let i = prefix.length - 1; i >= 0; i--) {
        const char = prefix[i];
        
        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        } else {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            
            const subExpression = `(${operand1}${char}${operand2})`;
            stack.push(subExpression);
        }
    }
    
    return stack.pop();
}

const prefix = "+AB-CD";
console.log(prefixToInfix(prefix)); 
