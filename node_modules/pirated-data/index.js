var firstMaleName = ['Hari','sam','Mukund','Nabaghan','Abhishek','Suresh','Santunu','Akashya','Haribol','Arjun','Madhab','Balkrushna']
var title = ['Sahu','Behera','Sahoo','Nayak','Dash','Das','Pati','Pattanayak','Muduli','Parida','Samantaray','Mallick','Malick','Barik','Barika']
var emlDomain =['gmail.com','yahoo.com','hotmail.com','rediffmail.com','mns.com','github.com','bandu.com','baidu.com','aol.com','comcast.net']
var actfirName;


module.exports = {
   
  // add : function(a,b){
  //   return a+b;
  // },
  
  lastNameGenerator : function(){
    var number = Math.floor(Math.random() * 10);
    return title[number];
  },
  adultAgeGenerator : function(){
    var age =  Math.floor(Math.random() * (99 - 18 + 1) ) + 18;
    return age;
  },
  mobileNumberGenerator :function(){
    var mobNumber = Math.floor(Math.random() * (9999999999 - 6000000000 + 1) ) + 6000000000;
    return mobNumber;
  },
  aadharNumberGenerator : function(){
    var adharNum = Math.floor(Math.random() * (999999999999 - 100000000000 + 1) ) + 100000000000;
    return adharNum;
  },
  financialCardGenerator : function(){
    var visaElectron = Math.floor(Math.random() * (4999999999999999 - 4101110010111111 + 1) ) + 4101110010111111;
    //var masterCard = Math.floor(Math.random() * (5500000000000000 - 510000000000000 + 1) ) + 510000000000000;
    return visaElectron;
  },
  
   firstNameGenerator:function(){
    var number =  Math.floor(Math.random() * 10);
    return actfirName = firstMaleName[number];
   },
  emailIdGenerator: function(){
    // this.firstNameGenerator();
    var emlNum = Math.floor(Math.random() * (999 - 100 + 1) ) + 100;
    var domain = Math.floor(Math.random() * 10);
    return actfirName+emlNum+'@'+emlDomain[domain];
  },
  userId: function(){
    var usrIdNum = Math.floor(Math.random() * (999 - 100 + 1) ) + 100;
    return userId = actfirName+usrIdNum;
  },
  password: function(){
    
  }
}
