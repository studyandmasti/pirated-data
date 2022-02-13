// const firstName = require('pirated-data')
const userData = require('pirated-data')
// var result = userData.add(4,5)
// console.log(result);
var startname = userData.firstNameGenerator();
console.log(startname);
var lastName =userData.lastNameGenerator();
console.log(lastName);
var age = userData.adultAgeGenerator();
console.log(age);
var mobnum = userData.mobileNumberGenerator();
console.log(mobnum);
var card = userData.financialCardGenerator();
console.log(card);
var aadhar = userData.aadharNumberGenerator();
console.log(aadhar);
// var eml = userData.emailIdGenerator();
// console.log(eml);
