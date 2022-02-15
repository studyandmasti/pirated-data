var firstMaleName = ['Hari', 'sam', 'Mukund', 'Nabaghan', 'Abhishek', 'Suresh', 'Santunu', 'Akashya', 'Haribol', 'Arjun',
  'Madhab', 'Balkrushna','Aarav','Vihaan','Vivaan','Ananya','Diya','Advik','Kabir','Anaya',
  'Aarav','Vivaan','Aditya','Vivaan','Vihaan','Arjun','Vivaan','Reyansh','Mohammed','Sai',
  'Arnav','Aayan','Krishna','Ishaan','Shaurya','Atharva','Advik','Pranav','Advaith','Aaryan',
  'Dhruv','Kabir','Ritvik','Aarush','Kian','Darsh','Veer'
]
var title = ['Sahu', 'Behera', 'Sahoo', 'Nayak', 'Dash', 'Das', 'Pati', 'Pattanayak', 'Muduli', 'Parida', 'Samantaray', 'Mallick', 'Malick', 'Barik', 'Barika']
var emlDomain = ['gmail.com', 'yahoo.com', 'hotmail.com', 'rediffmail.com', 'mns.com', 'github.com', 'bandu.com', 'baidu.com', 'aol.com', 'comcast.net']
var actfirName;


module.exports = {

  // add : function(a,b){
  //   return a+b;
  // },
  firstNameGenerator: function () {
    var number = Math.floor(Math.random() * 47);
    return actfirName = firstMaleName[number];
  },
  lastNameGenerator: function () {
    var number = Math.floor(Math.random() * 10);
    return title[number];
  },
  adultAgeGenerator: function () {
    var age = Math.floor(Math.random() * (99 - 18 + 1)) + 18;
    return age;
  },
  mobileNumberGenerator: function () {
    var mobNumber = Math.floor(Math.random() * (9999999999 - 6000000000 + 1)) + 6000000000;
    return mobNumber;
  },
  financialCardGenerator: function () {
    var visaElectron = Math.floor(Math.random() * (4999999999999999 - 4101110010111111 + 1)) + 4101110010111111;
    //var masterCard = Math.floor(Math.random() * (5500000000000000 - 510000000000000 + 1) ) + 510000000000000;
    return visaElectron;
  },

  aadharNumberGenerator: function () {
    var adharNum = Math.floor(Math.random() * (999999999999 - 100000000000 + 1)) + 100000000000;
    return adharNum;
  },


  emailIdGenerator: function () {
    // this.firstNameGenerator();
    var emlNum = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    var domain = Math.floor(Math.random() * 10);
    return actfirName + emlNum + '@' + emlDomain[domain];
  },
  userId: function () {
    var usrIdNum = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    return userId = actfirName + usrIdNum;
  },
  password: function (len) {
    var str = "";                                // String result
    for (var i = 0; i < len; i++) {              // Loop `len` times
      var rand = Math.floor(Math.random() * 62); // random: 0..61
      var charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48; // Get correct charCode
      str += String.fromCharCode(charCode);      // add Character to str
    }
    return str; // After all loops are done, return the concatenated string
  }
}
