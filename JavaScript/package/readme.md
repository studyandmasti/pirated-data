
<p align="center">
  <a href="#">
    <img alt="Pirated-Data" src="https://github.com/studyandmasti/pirated-data/blob/main/JavaScript/package/Images/pirated-data-logo.png?raw=true"width="100" height="100" />
  </a>
</p>
<h1 align="center">
 Pirated-Data
</h1>

 ![CodeFactor](https://www.codefactor.io/repository/github/satya319/pirated-data/badge/main)

 **Note:** ***This project generates random data for testing purposes only and should not be used officially or for any copyright infringement.*** 

 
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
- [Passport number](#Passport-Number)
- [Driving license number](#Driving-license-number)
- [Random number](#Random-Number)
- [Random sentence](#Random-sentence)
- [Random paragraph](#Random-paragraph)
- [Random GUID](#Random-GUID)
- [Financial card](#Financial-card)
  - [Card number](#Card-Number)
  - [Card holder name](#Card-Holder-Name)
  - [Validthru](#Validthru)
  - [Cvv](#Cvv)
- [Person's Biological Data](#Person's-Biological-Data)
  - [First name](#First-name)
  - [Last name](#Last-name)
  - [Gender](#Gender)
  - [Hair color](#Hair-Color)
  - [Date of birth](#Date-of-birth)
  - [Age](#Age)
  - [Eye Color](#Eye-Color)
  - [Blood group](#Blood-group)
  - [Weight](#Weight)
  - [Body skin Color](#Body-Skin-Color)
- [Address](#Address)
  - [Full name](#Full-Name)
  - [State name](#State-Name)
  - [District name](#District-Name)
- [Organization details](#Organization-details)
  - [Company name]()
  - [Company type]()
  - [CEO name]()
  - [GST number]()
  - [Website]()
  - [Founded date]()
  - [Help line number]()
  - [Address]()



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

### Import to your TypeScript project 
```
import userData from 'pirated-data';
```
Example :</br>
```
import userData from 'pirated-data';
let fulName = userData.userIdGenerator();
    console.log("pirated data test: ",fulName);
```
### Import to your JavaScript project
```
const userData = require('pirated-data');
```
Example :</br>
```
const userData = require('pirated-data');
let fulName = userData.userIdGenerator();
    console.log("pirated data test: ",fulName);
```
------------------------------------------------
For comprehensive guidance on utilizing this plugin, please visit our website at [https://studyandmasti.cyou](https://studyandmasti.cyou) to gain insights on its usage.
### Check the below table for function list and use JavaScript function
| Function   Name | Java | JavaScript |
|---|---|---|
| firstNameGenerator() | Yes | Yes |
| lastNameGenerator() | Yes | Yes |
| fullNameGenerator() | Yes | Yes |
| mobileNumberGenerator() | Yes | Yes |
| aadharNumberGenerator() | Yes | Yes |
| emailIdGenerator() | Yes | Yes |
| userIdGenerator() | Yes | Yes |
| passwordGenerator(int length) | Yes | Yes |
| randomNumberGenerator() | Yes | No |
| randomNumberGenerator(int MaxNumber) | Yes | Yes |
| panCardId() | Yes | Yes |
| upiIdGenerator() | Yes | Yes |
| hairColorGenerator() | Yes | Yes |
| genderGenerator() | Yes | Yes |
| birthDateTimeGenerator() | Yes | Yes |
| eyeColorGenerator() | Yes | Yes |
| bloodGroupGenerator() | Yes | Yes |
| skinColorGenerator() | Yes | Yes |
| weightGenerator() | Yes | Yes |
| ageCalculation() | Yes | Yes |
| passportNumber() | Yes | Yes |
| drivinglicenseGenerator() | No | Yes |
| BiologicalData() | No | Yes |
| stateGenerator() | No | Yes |
| distGenerator() | No | Yes |
| addressGenerator() | No | Yes |
| financialCardGenerator() | No | Yes |
| GUIDGenerator() | No | Yes |
| hugeAddressGenerator(desiredDataSetNumber) | No | Yes |
| hugeBiologicalDataGenerator(desiredDataSetNumber) | No | Yes |
| randomSentenceGenerator()  | Yes |  Yes |
| randomParagraphGenerator(sentenceCount) | Yes | Yes |
| randomCompanyNameGenerator() | No | Yes |
| randomBusinessTypeGenerator() |  No | Yes |
| randomGstNumberGenerator() | No | Yes |
| randomCompanyUrlGenerator() | No | Yes |
| randomCompanyDetailsGenerator() | No | Yes |
## Need More feature
_________________________________
If you want to more feature of this package just create an issue [Here.](https://github.com/satya319/pirated-data/issues)

