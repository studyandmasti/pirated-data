
<p align="center">
  <a href="#">
    <img alt="Pirated-Data" src="https://github.com/studyandmasti/pirated-data/blob/main/JavaScript/package/Images/pirated-data-logo.png?raw=true"width="100" height="100" />
  </a>
</p>
<h1 align="center">
 Pirated-Data
</h1>

 ![CodeFactor](https://www.codefactor.io/repository/github/satya319/pirated-data/badge/main)
 
**Install the package via npm**
```
npm i pirated-data
```
## Data provided for the user are 

- [First name](#First-name)
- [Last name](#Last-name)
- [Age](#Age)
- [Mobile number](#Mobile-number)
- [Aadhar number ( unique identification number)](#Aadhar-number-(unique-identification-number))
- [Email-id](#Email-id)
- [Upi-Id](#Upi-Id)
- [User Id](#User-Id)
- [Password](#Password)
- [PanCard ID](#PanCard-ID)
- [Passport Number](#Passport-Number)
- [Driving license number](#Driving-license-number)
- [Random number](#Random-Number)
- [Financial card](#Financial-card)
  - [Card Number](#Card-Number)
  - [Card Holder Name](#Card-Holder-Name)
  - [Validthru](#Validthru)
  - [Cvv](#Cvv)
- [Person's Biological Data](#Person's-Biological-Data)
  - [First name](#First-name)
  - [Last name](#Last-name)
  - [Gender](#Gender)
  - [Hair Color](#Hair-Color)
  - [Date of birth](#Date-of-birth)
  - [Age](#Age)
  - [Eye Color](#Eye-Color)
  - [Blood group](#Blood-group)
  - [Weight](#Weight)
  - [Body Skin Color](#Body-Skin-Color)
- [Address](#Address)
  - [Full Name](#Full-Name)
  - [State Name](#State-Name)
  - [District Name](#District-Name)

### To use the package's individual function
-----------------------------------------------
```
// For getting first name 
const userData = require('pirated-data');
var startname = userData.firstNameGenerator();


/* For getting last name */
const userData = require('pirated-data');
var lastName =userData.lastNameGenerator();

/* For full name of an user */
const userData = require('pirated-data');
var fulName = userData.fullNameGenerator();


// For getting Age
const userData = require('pirated-data');
var age = userData.adultAgeGenerator();

// For getting mobile number
const userData = require('pirated-data');
var mobnum = userData.mobileNumberGenerator();

// For getting financial card number
const userData = require('pirated-data');
var card = userData.financialCardGenerator();

/* For getting Bank Name */
const userData = require('pirated-data');
 var bnkName = userData.bankNameGenerator();

// For getting AadharCard number
const userData = require('pirated-data');
var aadhar = userData.aadharNumberGenerator();

//For getting email-id
const userData = require('pirated-data');
var eml = userData.emailIdGenerator();

// For getting userId
const userData = require('pirated-data');
var usrId = userData.userId();

// For getting Password
/* pass the value of desired length of password inside the parenthesis. 
It will give you the alphanumeric 
*/
const userData = require('pirated-data');
var pwd = userData.password(10);

/*For getting pancard number */
var id = userData.panCardId();
console.log(id);

/*For getting passport number */
 const passNum = userData.passportNumber();
 console.log(passNum);

/*For getting DL number */
const dl = userData.drivinglicenseGenerator();
console.log(dl);

/* For generating Gendor of an user */
const userData = require('pirated-data');
 var gender = userData.genderGenerator();

/* For generating the state of an user */
const userData = require('pirated-data');
 var state = userData.stateGenerator();

/* For generating a district of an user */
const userData = require('pirated-data');
 var dist = userData.distGenerator();
 
/* For generating random number upto a certain range */
const userData = require('pirated-data');
var randomNumber = userData.randomNumberGenerator(MaxLimit);


```
### Pirated-Data also supports generate sets of data
- [Address](#Address)
  - [Full Name](#Full-Name)
  - [State Name (India)](#State-Name-(-India-))
  - [District Name (India)](#District-Name-(-India-))
- [Biological Details](#Biological-Details)
  - [Full name](#Full-name)
  - [Gender](#Gender)
  - [Hair Color](#Hair-Color)
  - [Date of birth](#Date-of-birth)
  - [Age](#Age)
  - [Eye Color](#Eye-Color)
  - [Blood group](#Blood-group)
  - [Weight](#Weight)
  - [Body Skin Color](#Body-Skin-Color)



To generate biological details and address use the below functions
```
/* To generate biological details of an user */
const userData = require('pirated-data');
  var biology = userData.BiologicalData();

/* To generate Address of an user */
const userData = require('pirated-data');
var address = userData.addressGenerator();

/* To generate huge set of biological data */
const userData = require('pirated-data');
const desirednumber = 10;
var bnchBio = userData.hugeBiologicalDataGenerator(desirednumber);
console.log(bnchBio);
It will generate the 10 sets of user data.

/* To generate huge set of Address data */
const userData = require('pirated-data');
const desirednumber = 10;
var bnchAddress = userData.hugeAddressGenerator(desirednumber);
console.log(bnchAddress);
```
## Need More feature
_________________________________
If you want to more feature of this package just create an issue [Here.](https://github.com/satya319/pirated-data/issues)

