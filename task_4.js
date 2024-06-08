function sortStack(stack) {
    if (stack.length <= 1) {
        return;
    }

    let top = stack.pop();

    sortStack(stack);

    insertSorted(stack, top);
}

function insertSorted(stack, element) {
    if (stack.length === 0 || stack[stack.length - 1] <= element) {
        stack.push(element);
        return;
    }

    let top = stack.pop();

    insertSorted(stack, element);

    stack.push(top);
}

const stack = [34, 3, 31, 98, 92, 23];
sortStack(stack);
console.log(stack); 
