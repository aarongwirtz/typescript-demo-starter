// function demoFunction(someNum){
//     return someNum;
// }
// demoFunction(1); //1
// demoFunction('Stuff'); //2
//demoFunction(1, 'Stuff'); //3 - this one does not work in typescript
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
// 1 - Works
addNumbers(1, 2);
// 2 - Errors
//addNumbers(1, 2, 3);
//addNumbers(1, 2,3, 'Foo');
function addNames(nameOne, nameTwo) {
    return nameOne + " " + nameTwo;
}
console.log(addNames('Micky', 'Mantle'));
//this function creates a type for our parameter
//it also creates a type for the return
function sayHello(name) {
    return name;
}
//the first arguement satisfies the types denoted in the above function
//while the second function call argument does not satisfy the return type, so the second arguement breaks our program
sayHello("Kenn");
//sayHello(1); // this would break
function isTrue(username, password) {
    if (username && password) {
        return true;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=02-functions.js.map