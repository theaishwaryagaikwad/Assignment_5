function postfixToPrefix(postfix) {
    const stack = [];

    for (let i = 0; i < postfix.length; i++) {
        const char = postfix[i];
        
        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            
            const subExpression = `${char}${operand1}${operand2}`;
            stack.push(subExpression);
        }
    }
    
    return stack.pop();
}

const postfix = "*AB+CD-*";
console.log(postfixToPrefix(postfix)); 
