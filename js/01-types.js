var username = "instructor";
//let password: string = "Letmein1234!";
var instructorId = 5;
//let password: string;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
var greeting = "Hello";
var password;
password: 1234;
var age = 40;
var currentYear = 2018;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var companyName;
companyName = "Eleven Fifty";
var appName = 'Twitter';
appName = "Instagram";
var isLoggedIn = true;
var IsGoldLevelUser = true;
var studentList = ['Tom', 'Tracy', 'Nikaya'];
var allScores = [100, 92, 95, 96];
console.log("Student List:", studentList[0]);
var dataFromThirdParty = '12345';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 12345;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
function sayHelloToAll() {
    console.log("Hello to all.");
}
sayHelloToAll();
var undefinedVariable = undefined;
var nullVariable = null;
//Declasre a tuple type
var usernameAndId;
//Initialize it
usernameAndId = [1, "kenisreally40"]; // OK
//usernameAndId = ["kenn26", 2]; // This would not work because the values are not in the correct order.
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["THree"] = 3] = "THree";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
var x;
var y;
x = '1234';
x = 1234;
// Note that these would throw an error.
// x = true;
// y = false;
//# sourceMappingURL=01-types.js.map