/*!
 * @author Satyajit319 <satyajit319@gmail.com> * date 03/03/2022 last updated: 12/04/2024
 */

const { firstMaleName, title, emlDomain, upiDomain, gender, hairColor, skinColor, bloodGroup, eyeColor, stateName, stateDist,
  stateList, stateRtoCode, stateRtoCount, randomSentences, typeOfBusiness, companyNames, gstCodeArray, domainExtensionsArray } = require('./dataProvider.js');

let actfirName = "";
let actlstName = "";
let actFullName = "";
let actGender = "";
let actHairColor = "";
let actEyeColor = "";
let panNo = "";
var passNo = "";
let actBloodGroup = "";
let actWeight = "";
let actSkinColor = "";
let actStateName = "";
let actDistName = "";
let actCardFullDetails = "";
let actUpiId = "";
let actMobileNumber = "";
let firstDate1 = "";
let actAge = "";
let secondDate = new Date(2013, 4, 12);// every year to be increase one year.
let actCompanyName = "";
let actCompanyType = "";
let actGSTNum = "";
let actCompanyWebsite = "";
let actAddress = [];



/**
 * This method can generate random First name of a person.
 * @returns firstName
 */
function firstNameGenerator() {
  let number = Math.floor(Math.random() * firstMaleName.length);
  //var lengthofarray = firstMaleName.length;
  return actfirName = firstMaleName[number - 1];
}
exports.firstNameGenerator = firstNameGenerator;
/**
 * This method can generate random Last name of a person.
 * @returns LastName
 */
function lastNameGenerator() {
  let number = Math.floor(Math.random() * title.length);
  return actlstName = title[number - 1];
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
  let fullName = actfirName + " " + actlstName;
  return actFullName = fullName;
}
exports.fullNameGenerator = fullNameGenerator;
/**
 * This method is for generate random mobile number
 * @returns MobileNumber
 */
function mobileNumberGenerator() {
  actMobileNumber = Math.floor(Math.random() * (9999999999 - 6000000000 + 1)) + 6000000000;
  return actMobileNumber;
}
exports.mobileNumberGenerator = mobileNumberGenerator;
/**
 * This method generates aadharnumber of a person
 * @returns aadharnumber
 */
function aadharNumberGenerator() {
  let adharNum = Math.floor(Math.random() * (999999999999 - 100000000000 + 1)) + 100000000000;
  return adharNum;
}
exports.aadharNumberGenerator = aadharNumberGenerator;
/**
 * This method generte unique emailId every time.
 * @returns emailId
 */
function emailIdGenerator() {
  let emlNum = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  let domain = Math.floor(Math.random() * 10);
  if (actfirName == "") {
    this.firstNameGenerator();
  }
  return actfirName + emlNum + '@' + emlDomain[domain];
}
exports.emailIdGenerator = emailIdGenerator;
/**
 * This function can generate random upi Id.
 * @returns upiId
 */
function upiIdGenerator() {
  if (actMobileNumber == "") {
    this.mobileNumberGenerator();
  }
  let upiIdIndex = Math.floor(Math.random() * upiDomain.length);
  actUpiId = actMobileNumber + upiDomain[upiIdIndex - 1];
  return actUpiId;
}
exports.upiIdGenerator = upiIdGenerator;
/**
 * This method gives the random user Id according to the first name of the person.
 * @returns userId
 */
function userIdGenerator() {
  if (actfirName == "") {
    this.firstNameGenerator();
  }
  let usrIdNum = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  let userId;
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
  let str = "";
  for (let i = 0; i < len; i++) {
    let rand = Math.floor(Math.random() * 62);
    let charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48;
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
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let charactersLength = characters.length;
  for (let i = 0; i < 3; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  if (actlstName == "") {
    this.lastNameGenerator();
  }
  let lastNamefirstChar = actlstName.substring(0, 1);
  let num = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  const lastChar = characters.charAt(Math.floor(Math.random() * 26))
  panNo = result + "P" + lastNamefirstChar + num + lastChar;
  return panNo;
}
exports.panCardId = panCardId;
/**
 * This function will give you the random sample passport number for Indian citizen.
 * @returns passNo
 */
function passportNumber() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  let result = characters.charAt(Math.floor(Math.random() * charactersLength));
  let num = Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000;
  passNo = result + num;
  return passNo;
}
exports.passportNumber = passportNumber;
/**
 * This function generates the random Driving license number.
 * @returns 
 */
function drivinglicenseGenerator() {
  if (actStateName == "") {
    this.stateGenerator();
  }
  if (actStateName) {
    var rtoCode = stateRtoCode[actStateName];
  }
  if (actStateName) {
    var rtoNum = Math.floor(Math.random() * stateRtoCount[actStateName]);
    // actDistName = stateDist[actStateName];
    if (rtoNum >= 1 && rtoNum < 10) {
      rtoNum = "0" + rtoNum;
    }
    else if (rtoNum == 0) {
      rtoNum = "01";
    }
  }
  const yr = Math.floor(Math.random() * (2022 - 1998 + 1)) + 1998;
  const appNo = Math.floor(Math.random() * (8888888 - 1000000 + 1)) + 1000000;
  const dl = rtoCode + rtoNum + yr + appNo;
  let dlNum;
  return dlNum = dl;
}
exports.drivinglicenseGenerator = drivinglicenseGenerator;

/**
 * This method generate a gender for user.
 * @returns gender
 */
function genderGenerator() {
  let gen = Math.floor(Math.random() * 3);
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
  const start = new Date("1937-01-01");
  const end = new Date(2002, 0, 1);
  const dob = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const r = dob.toISOString().slice(0, 10);
  const firstDate2 = r.split("-");
  const yr = firstDate2[0];
  const mn = firstDate2[1];
  const dy = firstDate2[2];
  firstDate1 = yr + "-" + mn + "-" + dy;
  return firstDate1;

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
  let firstDate = new Date(firstDate1);
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
  let hairclr = Math.floor(Math.random() * 4);
  return actHairColor = hairColor[hairclr];
}
exports.hairColorGenerator = hairColorGenerator;
/**
 * This method generates eyecolor of a humanbeing.
 * @returns eyecolor
 */
function eyeColorGenerator() {
  let eyeclr = Math.floor(Math.random() * 7);
  return actEyeColor = eyeColor[eyeclr];
}
exports.eyeColorGenerator = eyeColorGenerator;
/**
 * This function generate blood group for user.
 * @returns bloodgroup
 */
function bloodGroupGenerator() {
  let bldgrp = Math.floor(Math.random() * 8);
  return actBloodGroup = bloodGroup[bldgrp];
}
exports.bloodGroupGenerator = bloodGroupGenerator;
/**
 * This method generate random weight of a user values are in between(35-109)
 * @returns weight
 */
function weightGenerator() {
  let wt = Math.floor(Math.random() * (109 - 35 + 1)) + 35;
  return actWeight = wt;
}
exports.weightGenerator = weightGenerator;
/**
 * This method gives skin color of an user.
 * @returns skincolor
 */
function skinColorGenerator() {
  let sknclr = Math.floor(Math.random() * 25);
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
  let number = Math.floor(Math.random() * 28);
  return actStateName = stateName[number];
}
exports.stateGenerator = stateGenerator;
/**
 * This method can generate the district name for user.
 * 
 * @returns districtName
 */
function distGenerator() {
  if (actStateName == "") {
    this.stateGenerator();
  }
  if (actStateName) {
    let dis = Math.floor(Math.random() * stateList[actStateName] - 1);
    dis <= 0 ? dis = 0 : dis;
    actDistName = stateDist[actStateName][dis]
  }
  return actDistName;
}
exports.distGenerator = distGenerator;

/**
 * This function generate address of an user. 
 * Dependent on the other functions
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
  actAddress = [actFullName, actStateName, actDistName]
  return actAddress;
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
  let validMnth = Math.floor(Math.random() * 12);
  let validYr = Math.floor(Math.random() * (2027 - 2022 + 1)) + 2022;
  let cvv = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  let visaElectronNum = Math.floor(Math.random() * (4999999999999999 - 4101110010111111 + 1)) + 4101110010111111;
  let validThru = validMnth + "/" + validYr;
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
  let bunchAddress = [];
  for (let i = 0; i < desiredDataSetNumber; i++) {
    actFullName = firstMaleName[Math.floor(Math.random() * 469)] + ' ' + title[Math.floor(Math.random() * 10)];
    let state = this.stateGenerator();
    let dist = this.distGenerator();
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
  let bunchBio = [];
  for (let i = 0; i < desiredDataSetNumber; i++) {
    let fulName = firstMaleName[Math.floor(Math.random() * 469)] + ' ' + title[Math.floor(Math.random() * 10)];
    let gen = gender[Math.floor(Math.random() * 3)];
    let hairclr = hairColor[Math.floor(Math.random() * 4)];
    //var age = Math.floor(Math.random() * (99 - 18 + 1)) + 18;
    let dob = this.birthDateTimeGenerator();
    let age = this.ageCalculation();
    let eyeclr = eyeColor[Math.floor(Math.random() * 7)];
    let bldGrp = bloodGroup[Math.floor(Math.random() * 8)];
    let weight = Math.floor(Math.random() * (109 - 35 + 1)) + 35;
    let sknClr = skinColor[Math.floor(Math.random() * 25)];
    bunchBio.push([fulName, gen, hairclr, dob, age, eyeclr, bldGrp, weight, sknClr]);
  }
  return bunchBio;
}
exports.hugeBiologicalDataGenerator = hugeBiologicalDataGenerator;
/**
 * This function generate random number 0 to 999999999999
 * @returns randomNumber
 */
function randomNumberGenerator(maxNumber) {
  var number = Math.floor(Math.random() * maxNumber);
  return number;
}
exports.randomNumberGenerator = randomNumberGenerator;

/**
 * This function will generate random sentence
 * @returns  random sentence
 */
function randomSentenceGenerator() {
  let randomSentence = randomSentences[Math.floor(Math.random() * randomSentences.length) + 1];
  return randomSentence;
}
exports.randomSentenceGenerator = randomSentenceGenerator;
/**
 * This function will generate random paragraph
 * @param {*} sentenceCount 
 * @returns random paragraph
 */

function randomParagraphGenerator(sentenceCount) {
  const selectedSentences = [];
  for (let i = 0; i < sentenceCount; i++) {
    const randomIndex = Math.floor(Math.random() * randomSentences.length);
    selectedSentences.push(randomSentences[randomIndex]);
  }
  return selectedSentences.join(' ');
}
exports.randomParagraphGenerator = randomParagraphGenerator;

/**
 * This function will generate random company names
 * @returns random company names
 */
function randomCompanyNameGenerator() {
  let randomIndex = Math.floor(Math.random() * companyNames.length);
  let companyName = randomIndex === 0 ? companyNames[randomIndex] : companyNames[randomIndex - 1];
  actCompanyName = companyName;
  return actCompanyName;
}
exports.randomCompanyNameGenerator = randomCompanyNameGenerator;
/**
 * This function will generate random company types
 * @returns random company category
 */
function randomBusinessTypeGenerator() {
  let businessTypeIndex = Math.floor(Math.random() * typeOfBusiness.length);
  actCompanyType = businessTypeIndex === 0 ? typeOfBusiness[businessTypeIndex] : typeOfBusiness[businessTypeIndex - 1];
  return actCompanyType;
}
exports.randomBusinessTypeGenerator = randomBusinessTypeGenerator;
/**
 * This function will generate random GST numbers for a company
 * @returns random GST number
 */
function randomGstNumberGenerator() {
  let gstCodeArrayIndex = Math.floor(Math.random() * gstCodeArray.length);
  let gststeCode;
  gststeCode = gstCodeArrayIndex === 0 ? gstCodeArray[gstCodeArrayIndex] : gstCodeArray[gstCodeArrayIndex - 1];
  let panId = this.panCardId();
  let entityNum = () => Math.floor(Math.random() * 9) + 1;
  let alphabet = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
  let checkSumNum = () => Math.floor(Math.random() * 9) + 1;
  actGSTNum = gststeCode + panId + entityNum() + alphabet() + checkSumNum();
  return actGSTNum;
}
exports.randomGstNumberGenerator = randomGstNumberGenerator;
/**
 * This function can generate company url
 * @returns  Company website
 */
function randomCompanyUrlGenerator() {
  if (actCompanyName == "") {
    this.randomCompanyNameGenerator();
  }
  let domainName = actCompanyName.replace(/\s/g, '');
  let randomExtensionIndex = Math.floor(Math.random() * domainExtensionsArray.length);
  let tld = randomExtensionIndex === 0 ? domainExtensionsArray[randomExtensionIndex] : domainExtensionsArray[randomExtensionIndex - 1];;
  actCompanyWebsite = 'https://www.' + domainName.toLowerCase() + tld;
  return actCompanyWebsite;
}
exports.randomCompanyUrlGenerator = randomCompanyUrlGenerator;

/**
 * This function will generate random company details in bundle
 * @returns [Company name, Company type,  GST number, Website, Address, Helpline number, Founded date] 
 * 
 */
function randomCompanyDetailsGenerator() {
  if (actCompanyName == "") {
    this.randomCompanyNameGenerator();
  }
  if (actCompanyType == "") {
    this.randomBusinessTypeGenerator();
  }
  if (actGSTNum == "") {
    this.randomGstNumberGenerator();
  }
  if (actCompanyWebsite == "") {
    this.randomCompanyUrlGenerator();
  }
  if (actAddress == "") {
    this.addressGenerator();
  }
  if (actMobileNumber == "") {
    this.mobileNumberGenerator();
  }
  if (actFullName == "") {
    this.fullNameGenerator();
  }
  if (firstDate1 == "") {
    this.birthDateTimeGenerator();
  }
  let companyDetailBundle = [actCompanyName, actCompanyType, actFullName, actGSTNum, actCompanyWebsite, firstDate1, actMobileNumber, actAddress];
  return companyDetailBundle;
}
exports.randomCompanyDetailsGenerator = randomCompanyDetailsGenerator;

/**
 * This function will generate random GUID
 * @returns random GUID
 */
function randomGUIDGenerator() {
  function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
exports.randomGUIDGenerator = randomGUIDGenerator;