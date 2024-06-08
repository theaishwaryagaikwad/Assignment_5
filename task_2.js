function isBalanced(expression) {
  const stack = [];
  const openBrackets = ['(', '{', '['];
  const closeBrackets = [')', '}', ']'];
  const matchingBrackets = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of expression) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isBalanced("{[()]}")); 
console.log(isBalanced("{[(])}")); 
