const employee = {
    name:``, 
    streetAddress:``
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;

//This function should not mutate the employee; it should return a new Object that has an updated value for the key passed in.
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;

//   //this function should work the same as updateEmployeeWithKeyAndValue() but it should mutate the employee Object passed in.
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
   
    // this function should take in a employee Object and a key. It should delete the property with that key from the employee Object. This should not mutate the original employee Object; it should return a new Object that doesn't include the identified key-value pair.
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
    //this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
}