var NestedIterator = function(nestedList) {
  this.stack = [];
  // Initialize the stack by pushing the nestedList in reverse order
  for (let i = nestedList.length - 1; i >= 0; i--) {
      this.stack.push(nestedList[i]);
  }
};

NestedIterator.prototype.hasNext = function() {
  // Check if there are elements left in the stack
  while (this.stack.length > 0) {
      // Peek at the top of the stack
      const top = this.stack[this.stack.length - 1];
      // If it's an integer, return true
      if (Number.isInteger(top)) {
          return true;
      }
      // Otherwise, it's a nested list, so flatten it
      this.stack.pop(); // Remove the nestedList from the stack
      // Push its elements onto the stack in reverse order
      for (let i = top.length - 1; i >= 0; i--) {
          this.stack.push(top[i]);
      }
  }
  // If the stack is empty, there are no more elements
  return false;
};

NestedIterator.prototype.next = function() {
  // Ensure that there's a next element
  if (this.hasNext()) {
      // Return the top element from the stack
      return this.stack.pop();
  }
};

// Given nestedList
const nestedList = [[1, 1], 2, [1, 1]];

// Create an instance of NestedIterator
const iterator = new NestedIterator(nestedList);

// Initialize an array to store the flattened result
const result = [];

// Iterate through the nested list and push each integer to the result array
while (iterator.hasNext()) {
  result.push(iterator.next());
}

// Print the flattened result to the console
console.log(result);
