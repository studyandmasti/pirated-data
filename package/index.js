/*!
 * @author Satyajit319 <satyajit319@gmail.com> * date 03/03/2022
 */
const { firstMaleName, title, emlDomain, gender, hairColor, skinColor, bloodGroup, eyeColor, stateName, stateAndhraDist, stateArunachalDist, stateAssamDist, stateBiharDist, stateChhattisgarhDist, stateGoaDist, stateGujaratDist, stateHaryanaDist, stateHimachalDist, stateJharkhandDist, stateKarnatakaDist, stateKeralaDist, stateMadhyaPradeshDist, stateMaharashtraDist, stateManipurDist, stateMeghalayaDist, stateMizoramDist, stateNagalandDist, stateOdishaDist, statePunjabDist, stateRajasthanDist, stateSikkimDist, stateTamilNaduDist, stateTelanganaDist, stateTripuraDist, stateUttarPradeshDist, stateUttarakhandDist, stateWestBengalDist } = require('./dataProvider.js');

var actfirName = "";
var actlstName = "";
var actFullName = "";
var actGender = "";
var actHairColor = "";
var actEyeColor = "";
var panNo = "";
var actBloodGroup = "";
var actWeight = "";
var actSkinColor = "";
var actStateName = "";
var actDistName = "";
var actCardFullDetails = "";
var firstDate1 = "";
var actAge = "";
var secondDate = new Date(2012, 4, 12);// every year to be increase one year.


/**
 * This method can generate random First name of a person.
 * @returns firstName
 */
function firstNameGenerator() {
  var number = Math.floor(Math.random() * 469);
  //var lengthofarray = firstMaleName.length;
  return actfirName = firstMaleName[number];
}
exports.firstNameGenerator = firstNameGenerator;
/**
 * This method can generate random Last name of a person.
 * @returns LastName
 */
function lastNameGenerator() {
  var number = Math.floor(Math.random() * 806);
  return actlstName = title[number];
}
exports.lastNameGenerator = lastNameGenerator;
/**
 * This method can generate full name of a person.
 * @returns FullName
 */
function fullNameGenerator() {
  if (actfirName == "") {
    this.firstNameGenerator();
  }
  if (actlstName == "") {
    this.lastNameGenerator();
  }
  var fullName = actfirName + " " + actlstName;
  return actFullName = fullName;
}
exports.fullNameGenerator = fullNameGenerator;
/**
 * This method is for generate random age between (18-99).
 * @returns age
 * @deprecated
 */
function adultAgeGenerator() {
  var age = Math.floor(Math.random() * (99 - 18 + 1)) + 18;
  return ageYrs = age;
}
exports.adultAgeGenerator = adultAgeGenerator;
/**
 * This method is for generate random mobile number
 * @returns MobileNumber
 */
function mobileNumberGenerator() {
  var mobNumber = Math.floor(Math.random() * (9999999999 - 6000000000 + 1)) + 6000000000;
  return mobNumber;
}
exports.mobileNumberGenerator = mobileNumberGenerator;
/**
 * This method generates aadharnumber of a person
 * @returns aadharnumber
 */
function aadharNumberGenerator() {
  var adharNum = Math.floor(Math.random() * (999999999999 - 100000000000 + 1)) + 100000000000;
  return adharNum;
}
exports.aadharNumberGenerator = aadharNumberGenerator;
/**
 * This method generte unique emailId every time.
 * @returns emailId
 */
function emailIdGenerator() {
  var emlNum = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  var domain = Math.floor(Math.random() * 10);
  if (actfirName == "") {
    this.firstNameGenerator();
  }
  return actfirName + emlNum + '@' + emlDomain[domain];
}
exports.emailIdGenerator = emailIdGenerator;
/**
 * This method gives the random user Id according to the first name of the person.
 * @returns userId
 */
function userIdGenerator() {
  if (actfirName == "") {
    this.firstNameGenerator();
  }
  var usrIdNum = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  return userId = actfirName + usrIdNum;
}
exports.userIdGenerator = userIdGenerator;
/**
 * This method generate a strong alpha numeric password. 
 * @argument lengthofPassword
 * 
 * @returns password
 */
function passwordGenerator(len) {
  var str = "";
  for (var i = 0; i < len; i++) {
    var rand = Math.floor(Math.random() * 62);
    var charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48;
    str += String.fromCharCode(charCode);
  }
  return str;
}
exports.passwordGenerator = passwordGenerator;
/**
 * This function have the work of generating person's pan card number(India format)
 * @returns panNo
 */
function panCardId() {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for (var i = 0; i < 3; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  if (actlstName == "") {
    this.lastNameGenerator();
  }
  var lastNamefirstChar = actlstName.substring(0, 1);
  var num = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  const lastChar = characters.charAt(Math.floor(Math.random() * 26))
  panNo = result + "P" + lastNamefirstChar + num + lastChar;
  return panNo;
}
exports.panCardId = panCardId;
/**
 * This method generate a gender for user.
 * @returns gender
 */
function genderGenerator() {
  var gen = Math.floor(Math.random() * 3);
  return actGender = gender[gen];
}
exports.genderGenerator = genderGenerator;
/**
 * This function gives the date of birth of an user.
 * @param {*} start 
 * @param {*} end 
 * @returns 
 */
function birthDateTimeGenerator() {
  const start = new Date("1935-01-01");
  const end = new Date(2002, 0, 1);
  const dob = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const r = dob.toISOString().slice(0, 10);
  const firstDate2 = r.split("-");
  const yr = firstDate2[0];
  const mn = firstDate2[1];
  const dy = firstDate2[2];
  firstDate1 = yr + "-" + mn + "-" + dy;
  return firstDate1;
  // return new Date();
}
exports.birthDateTimeGenerator = birthDateTimeGenerator;
/**
 * This function gives age of the user.
 * @returns age
 */
function ageCalculation() {
  if (firstDate1 == "") {
    this.birthDateTimeGenerator();
  }
  var firstDate = new Date(firstDate1);
  secondDate = new Date();
  if (firstDate > secondDate)
    [firstDate, secondDate] = [secondDate, firstDate];

  let monthDiff = 0;
  let isDayAhead = secondDate.getDate() >= firstDate.getDate();

  if (secondDate.getMonth() >= firstDate.getMonth()) {
    let diff = secondDate.getMonth() - firstDate.getMonth();
    monthDiff += (isDayAhead) ? diff : diff - 1;
  }
  else {
    monthDiff += isDayAhead
      ? 12 - (firstDate.getMonth() - secondDate.getMonth())
      : 12 - (firstDate.getMonth() - secondDate.getMonth()) - 1;
  }

  let dayDiff = 0;

  if (isDayAhead) {
    dayDiff = secondDate.getDate() - firstDate.getDate();
  }
  else {
    let b4EndDate = new Date(
      secondDate.getFullYear(),
      secondDate.getMonth() - 1,
      firstDate.getDate()
    )
    dayDiff = getDaysDiff(b4EndDate, secondDate);
  }

  if (firstDate.getMonth() == secondDate.getMonth() && !isDayAhead)
    monthDiff = 11;

  let exactTimeDiffUnits = {
    yrs: getYearsDiff(firstDate, secondDate),
    mths: monthDiff,
    dys: dayDiff,
  };
  actAge = `${exactTimeDiffUnits.yrs} years, ${exactTimeDiffUnits.mths} months, ${exactTimeDiffUnits.dys} days`;
  return actAge;
}
exports.ageCalculation = ageCalculation;
// time difference in Days
function getDaysDiff(startDate = new Date(), endDate = new Date()) {
  console.log("daydiff: ", startDate);
  if (startDate > endDate) [startDate, endDate] = [endDate, startDate];

  let timeDiff = endDate - startDate;
  let timeDiffInDays = Math.floor(timeDiff / (1000 * 3600 * 24));

  return timeDiffInDays;
}

// time difference in Months
function getMonthsDiff(startDate = new Date(), endDate = new Date()) {
  console.log("monthdiff: ", startDate);
  let monthsOfFullYears = getYearsDiff(startDate, endDate) * 12;
  let months = monthsOfFullYears;
  // the variable below is not necessary, but I kept it for understanding of code
  // we can use "startDate" instead of it
  let yearsAfterStart = new Date(
    startDate.getFullYear() + getYearsDiff(startDate, endDate),
    startDate.getMonth(),
    startDate.getDate()
  );
  let isDayAhead = endDate.getDate() >= yearsAfterStart.getDate();

  if (startDate.getMonth() == endDate.getMonth() && !isDayAhead) {
    months = 11;
    return months;
  }

  if (endDate.getMonth() >= yearsAfterStart.getMonth()) {
    let diff = endDate.getMonth() - yearsAfterStart.getMonth();
    months += (isDayAhead) ? diff : diff - 1;
  }
  else {
    months += isDayAhead
      ? 12 - (startDate.getMonth() - endDate.getMonth())
      : 12 - (startDate.getMonth() - endDate.getMonth()) - 1;
  }

  return months;
}

// time difference in Years
function getYearsDiff(startDate = new Date(), endDate = new Date()) {
  console.log("yrdiff: ", startDate);
  if (startDate > endDate) [startDate, endDate] = [endDate, startDate];

  let yearB4End = new Date(
    endDate.getFullYear() - 1,
    endDate.getMonth(),
    endDate.getDate()
  );
  let year = 0;
  year = yearB4End > startDate
    ? yearB4End.getFullYear() - startDate.getFullYear()
    : 0;
  let yearsAfterStart = new Date(
    startDate.getFullYear() + year + 1,
    startDate.getMonth(),
    startDate.getDate()
  );

  if (endDate >= yearsAfterStart) year++;

  return year;
}


/**
 * This method generates random hair color of a human
 * @returns haircolor
 */
function hairColorGenerator() {
  var hairclr = Math.floor(Math.random() * 4);
  return actHairColor = hairColor[hairclr];
}
exports.hairColorGenerator = hairColorGenerator;
/**
 * This method generates eyecolor of a humanbeing.
 * @returns eyecolor
 */
function eyeColorGenerator() {
  var eyeclr = Math.floor(Math.random() * 7);
  return actEyeColor = eyeColor[eyeclr];
}
exports.eyeColorGenerator = eyeColorGenerator;
/**
 * This function generate blood group for user.
 * @returns bloodgroup
 */
function bloodGroupGenerator() {
  var bldgrp = Math.floor(Math.random() * 8);
  return actBloodGroup = bloodGroup[bldgrp];
}
exports.bloodGroupGenerator = bloodGroupGenerator;
/**
 * This method generate random weight of a user values are in between(35-109)
 * @returns weight
 */
function weightGenerator() {
  var wt = Math.floor(Math.random() * (109 - 35 + 1)) + 35;
  return actWeight = wt;
}
exports.weightGenerator = weightGenerator;
/**
 * This method gives skin color of an user.
 * @returns skincolor
 */
function skinColorGenerator() {
  var sknclr = Math.floor(Math.random() * 25);
  return actSkinColor = skinColor[sknclr];
}
exports.skinColorGenerator = skinColorGenerator;
// Biological details generator
/**
 * This function give you all the basic bioligical data of an user.
 * @returns Name, gender, haircolor, age, eyeclolor, blood group, weight, skin color.
 */
function BiologicalData() {

  if (actfirName == "") {
    this.firstNameGenerator();
  }
  if (actlstName == "") {
    this.lastNameGenerator();
  }
  if (actGender == "") {
    this.genderGenerator();
  }
  if (actHairColor == "") {
    this.hairColorGenerator();
  }
  if (firstDate1 == "") {
    this.birthDateTimeGenerator();
  }
  // else if (actAge == "") {
  //   this.adultAgeGenerator();
  // }
  if (actAge == "") {
    this.ageCalculation();
  }
  if (actEyeColor == "") {
    this.eyeColorGenerator();
  }
  if (actBloodGroup == "") {
    this.bloodGroupGenerator();
  }
  if (actWeight == "") {
    this.weightGenerator();
  }
  if (actSkinColor == "") {
    this.skinColorGenerator();
  }

  return [actfirName, actlstName, actGender, actHairColor, firstDate1, actAge, actEyeColor, actBloodGroup, actWeight, actSkinColor];
}
exports.BiologicalData = BiologicalData;

/**
 * This function generate a state(Indian) for user.
 * @returns stateName
 */
function stateGenerator() {
  var number = Math.floor(Math.random() * 28);
  return actStateName = stateName[number];
}
exports.stateGenerator = stateGenerator;
/**
 * This method can generate the district name for user.
 * 
 * @returns districtName
 */
function distGenerator() {
  var stateList={"Andhra Pradesh":13,"Arunachal Pradesh":26,"Assam":34,"Bihar":38,"Chhattisgarh":28,"Goa":2,
  "Gujarat":33,"Haryana":22,"Himachal Pradesh":12,"Jharkhand":24,"Karnataka":31,"Kerala":14,"Madhya Pradesh":52,
  "Maharashtra":36,"Manipur":16,"Meghalaya":12,"Mizoram":8,"Nagaland":11,"Odisha":30,"Punjab":23,"Rajasthan":33,
  "Sikkim":4,"Tamil Nadu":38,"Telangana":33,"Tripura":8,"Uttar Pradesh":75,"Uttarakhand":13, "West Bengal":23}
  
  if (actStateName == "") {
    this.stateGenerator();
  }
  if(actStateName){
    var dis = Math.floor(Math.random() * stateList[actStateName]);
    actDistName = stateAndhraDist[dis];
  }
  return actDistName;
}
exports.distGenerator = distGenerator;

/**
 * This function generate address of an user. 
 * Dependent on the other functions
 * 
 * 
 * @returns fullname,statename, districtname
 */
// Address of an user
function addressGenerator() {
  if (actFullName == "") {
    this.fullNameGenerator();
  }
  if (actStateName == "") {
    this.stateGenerator();
  }
  if (actDistName == "") {
    this.distGenerator();
  }
  return [actFullName, actStateName, actDistName];
}
exports.addressGenerator = addressGenerator;


//Financial Details
/**
 * This function generate a virtual visa card Details
 * @returns card holder name, card number, validThru, cvv
 */
function financialCardGenerator() {
  if (actFullName == "") {
    this.fullNameGenerator();
  }
  var validMnth = Math.floor(Math.random() * 12);
  var validYr = Math.floor(Math.random() * (2027 - 2022 + 1)) + 2022;
  var cvv = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  var visaElectronNum = Math.floor(Math.random() * (4999999999999999 - 4101110010111111 + 1)) + 4101110010111111;
  var validThru = validMnth + "/" + validYr;
  actCardFullDetails = [actFullName, visaElectronNum, validThru, cvv];
  return actCardFullDetails;
}
exports.financialCardGenerator = financialCardGenerator;

/**
 * This function gives you the bunch set of random address data
 * in the form of array set.
 * @param  desiredDataSetNumber 
 * @returns bunchAddress
 */
function hugeAddressGenerator(desiredDataSetNumber) {
  var bunchAddress = [];
  for (let i = 0; i < desiredDataSetNumber; i++) {
    actFullName = firstMaleName[Math.floor(Math.random() * 469)] + ' ' + title[Math.floor(Math.random() * 10)];
    state = this.stateGenerator();
    dist = this.distGenerator();
    bunchAddress.push([actFullName, state, dist]);
  }
  return bunchAddress;
}
exports.hugeAddressGenerator = hugeAddressGenerator;
/**
 * This function gives you the bunch set of random biological data
 * in the form of array set.
 * @param  desiredDataSetNumber 
 * @returns bunchBio
 */
function hugeBiologicalDataGenerator(desiredDataSetNumber) {
  var bunchBio = [];
  for (let i = 0; i < desiredDataSetNumber; i++) {
    var fulName = firstMaleName[Math.floor(Math.random() * 469)] + ' ' + title[Math.floor(Math.random() * 10)];
    var gen = gender[Math.floor(Math.random() * 3)];
    var hairclr = hairColor[Math.floor(Math.random() * 4)];
    //var age = Math.floor(Math.random() * (99 - 18 + 1)) + 18;
    var dob = this.birthDateTimeGenerator();
    var age = this.ageCalculation();
    var eyeclr = eyeColor[Math.floor(Math.random() * 7)];
    var bldGrp = bloodGroup[Math.floor(Math.random() * 8)];
    var weight = Math.floor(Math.random() * (109 - 35 + 1)) + 35;
    var sknClr = skinColor[Math.floor(Math.random() * 25)];
    bunchBio.push([fulName, gen, hairclr, dob, age, eyeclr, bldGrp, weight, sknClr]);
  }
  return bunchBio;
}
exports.hugeBiologicalDataGenerator = hugeBiologicalDataGenerator;







