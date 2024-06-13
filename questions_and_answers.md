1.  let greeting;
    greetign = {};
    console.log(greetign);
    A: {}
    B: ReferenceError: greetign is not defined
    C: undefined

Ans: B.
Here we declared a variable called "greeting", but then we tried to assign an empty object to a variable named 'greetign'. Because of this, 'greetign' is not recognized as a variable, so it makes a ReferenceError.

2.  function sum(a, b) {
    return a + b;
    }

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

Ans: D.
Here Js tries to perform type coercion and convert the string "2" to a number when you use the + operator. So, it adds 1 (a number) to 2 (converted from "2"), resulting in 3.

3.  const food = ["🍕", "🍫", "🥑", "🍔"];
    const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Ans: A.
When we change info.favoriteFood to "🍝", it only updates the info object, not the food array. So, when you console.log(food);, the array remains the same: ["🍕", "🍫", "🥑", "🍔"].

4.  function sayHi(name) {
    return `Hi there, ${name}`;
    }

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Ans: B.
The sayHi function expects a name parameter, but when we call sayHi() without providing an argument, it defaults to undefined. So, it returns "Hi there, undefined."

5.  let count = 0;
    const nums = [0, 1, 2, 3];

nums.forEach((num) => {
if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

Ans: C.
The forEach loop iterates through the nums array, and the condition if (num) checks if each element is truthy (non-zero). Since there are three non-zero elements (1, 2, and 3) in the array, the count variable is incremented three times, resulting in a final value of 3.
