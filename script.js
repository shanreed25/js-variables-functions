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