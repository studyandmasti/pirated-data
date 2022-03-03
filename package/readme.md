![Logo](package\Images\pirated-data-logo.png)
# Pirated data 
**Install the package**
```
npm i pirated-data
```
## Data provided for the user are 

- First name
- Last name
- Age
- Mobile number
- Aadhar number( unique identification number)
- Email-id
- User Id
- Password
- Financial card
  - Card Number
  - Card Holder Name
  - Validthru
  - Cvv
- Person's Biological Data
  - First Name
  - Last Name
  - Gender
  - Hair Color
  - Age
  - Eye Color
  - Blood group
  - Weight
  - Body Skin Color
- Address
  - Full Name
  - State Name
  - District Name

### To use the package's individual function
-----------------------------------------------
```
// For getting first name 
const userData = require('pirated-data');
var startname = userData.firstNameGenerator();


// For getting last name 
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

/* For generating Gendor of an user */
const userData = require('pirated-data');
 var gender = userData.genderGenerator();

/* For generating the state of an user */
const userData = require('pirated-data');
 var state = userData.stateGenerator();

/* For generating a district of an user */
const userData = require('pirated-data');
 var dist = userData.distGenerator();


```
### Pirated-Data also supports generate sets of data
- Address
- Biological Details.

To generate biological details and address use the below functions
```
/* To generate biological details of an user */
const userData = require('pirated-data');
  var biology = userData.BiologicalData();

/* To generate Address of an user */
const userData = require('pirated-data');
var address = userData.addressGenerator();
```
## Need More feature
_________________________________
If you want to more feature of this package just create an issue [Here.](https://github.com/satya319/pirated-data/issues)

