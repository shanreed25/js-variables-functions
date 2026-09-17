# Lab 1

> JavaScript program for a data processing tool
#### Demonstrates

- Manipulation of variables to perform mathematical operations and string manipulation.
- Writing and calling functions that use parameters and return values.
- Useing conditional logic inside functions to create more dynamic behavior.
- Refactoring code to improve readability and reusability

#### Funtionality
- handles user input
- performs mathematical calculations
- manipulate strings
- provide dynamic feedback based on user actions

**Functions are efficient and reusable to ensure the code is scalable**


## Task 1: Flexible String Manipulation with Functions
1. Create a function called `formatFullName` that takes two parameters: `firstName` and `lastName`. The function should return the full name in the format `lastName`, `firstName`.
2. Format the `firstName` and `lastName` so that the first letter of each is always capatilized.
3. Add a condition that checks if either the first or last name is missing. If so, return a string saying “Invalid name input.”

## Task 2: Mathematical Operations with Multiple Parameters
1. Write a function called `calculateTotalCost` that takes three parameters: `price`, `quantity`, and `taxRate`.
2. The function should calculate the total cost of items, including tax. Use the formula: `totalCost = (price * quantity) * (1 + taxRate)`.
3. Ensure that `price`, `quantity`, and `taxRate` are all valid numbers. If any are invalid, return a string: “Invalid input.”


## Task 3: Functions with Conditional Logic
1. Write a function called checkEligibility that takes two parameters: age and isEmployed. The function should check if a person is eligible for a program based on the following rules:
    - If the person is over 18 and employed, they are eligible.
    - If the person is over 18 but unemployed, they are conditionally eligible.
    - If the person is 18 or younger, they are not eligible.
2. Return an appropriate string message for each scenario.

## Task 4: Refactoring for Reusability
1. Refactor the `calculateTotalCost` function from **Task 2** to include an optional `discount` parameter. 
    - If the `discount` is provided, the function should subtract the `discount` from the `totalCost` before applying tax.
2. If no `discount` is provided, calculate the total cost as before.


## Reflection Questions
1. How did you approach creating more flexible functions with parameters?
> I like to write out the task in my own words, then make a plan, before coding.

2. What challenges did you face while incorporating conditional logic in your functions?
> The most challenging thing about this project for me was formating the name. This was because I assummed `firstName.charAt(0).toUpperCase() + firstName.slice(1)` would automatically change the value of `firstName`. Realizing that strings are immutable and that, `firstName.charAt(0).toUpperCase() + firstName.slice(1)` was creating a new string that I had to pass back to the `firstName` variable.

3. How does refactoring improve the readability and maintainability of your code?
> Refactoring you code can help break down logic, make your code easier to test, remove duplication and have consistent looking code.