// Write your solution in this file!
const employee = {
    name: "James",
    streetAddress: "123 Easy St",

}

function updateEmployeeWithKeyAndValue(employee, k, v) {
    return {
        ...employee,
        [k]: v,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, k, v) {
    employee[k] = v;

    return employee;
}

function deleteFromEmployeeByKey(employee, k) {
    const {
        [k]: deletedValue, ...rest
    } = employee
    return rest;
}
function destructivelyDeleteFromEmployeeByKey(employee, k) {
    delete employee[k]
    return employee
}
