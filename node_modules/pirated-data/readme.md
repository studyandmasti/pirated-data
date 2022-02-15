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
- Financial card number
- Aadhar number( unique identification number)
- Email-id
- User Id
- Password

### To use the package
```
// For getting first name 
const userData = require('pirated-data');
var startname = userData.firstNameGenerator();


// For getting last name 
const userData = require('pirated-data');
var lastName =userData.lastNameGenerator();

// For getting Age
const userData = require('pirated-data');
var age = userData.adultAgeGenerator();

// For getting mobile number
const userData = require('pirated-data');
var mobnum = userData.mobileNumberGenerator();

// For getting financial card number
const userData = require('pirated-data');
var card = userData.financialCardGenerator();

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

```

