// Task 1: Flexible String Manipulation with Functions

function formatFullName(firstName, lastName) {
    //Step 1: check if either the first or last name is missing if so, return a string saying “Invalid name input.”
    if (firstName == null || lastName == null)
        return "Invalid Input"
    else {
        //Step 2: the first letter of each is always capatilized
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        return `${lastName}, ${firstName}`//Step 3: return the full name in the format lastName, firstName
    }

}

let userName = formatFullName("shannon", "reed")
console.log(userName);//Reed, Shannon
//===================================================================================================


// Task 2 & 4: Mathematical Operations with Multiple Parameters
function calculateTotalCost(price, quantity, taxRate, discount=0) {//include an optional discount parameter

    //ensure that price, quantity, and taxRate are all valid numbers
    if (typeof price !== "number" || typeof quantity  !== "number" || typeof taxRate !== "number"){
        return "Invalid Input"
    } 
    
    totalCost = (price * quantity) * (1 + taxRate)//calculate the total cost of items, including tax

    if(discount !== 0){//If the discount is provided, the function should subtract the discount from the total cost before applying tax
        discountAmount = totalCost * (discount / 100)
        finalCost = totalCost - discountAmount
        return finalCost 

    } else {
        return totalCost//If no discount is provided, calculate the total cost as before
    }     

}

cost = calculateTotalCost(45, 1, 0, 10)

console.log(cost);//40.5

