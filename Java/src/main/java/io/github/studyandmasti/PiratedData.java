package io.github.studyandmasti;

import java.util.Date;
import java.util.Random;

/**
 * 
 * @author Satyajit319 
 *   date 03/03/2022
 */

public class PiratedData {
	DataProvider dp = new DataProvider();
	String actfirName = "";
	String actlstName = "";
	String actFullName = "";
	String actGender = "";
	String actHairColor = "";
	String actEyeColor = "";
	String panNo = "";
	String passNo = "";
	String dlNum = "";
	String actBloodGroup = "";
	String actWeight = "";
	String actSkinColor = "";
	String actStateName = "";
	String actDistName = "";
	String actCardFullDetails = "";
	String firstDate1 = "";
	String actAge = "";
	Date secondDate = new Date(2012, 4, 12);// every year to be increase one year.

	/**
	 * This method can generate random First name of a person. 
	 * @return firstName
	 */
	public String firstNameGenerator() {
		int number = (int) Math.floor(Math.random() * 469);
		actfirName = dp.firstMaleName[number];
		return actfirName;

	}

	/**
	 * This method can generate random Last name of a person.
	 * 
	 * @return LastName
	 */
	public String lastNameGenerator() {
		int number = (int) Math.floor(Math.random() * 806);
		return actlstName = dp.title[number];
	}

	/**
	 * This method can generate full name of a person.
	 * 
	 * @return FullName
	 */
	public String fullNameGenerator() {
		if (actfirName == "") {
			this.firstNameGenerator();
		}
		if (actlstName == "") {
			this.lastNameGenerator();
		}
		String fullName = actfirName + " " + actlstName;
		return actFullName = fullName;
	}

	/**
	 * This method is for generate random mobile number
	 * 
	 * @return MobileNumber
	 */
	public long mobileNumberGenerator() {
		long mobNumber = (long) (Math.floor(Math.random() * (9999999999L - 6000000000L + 1)) + 6000000000L);
		return mobNumber;
	}

	/**
	 * This method generates aadharnumber of a person
	 * 
	 * @return aadharnumber
	 */
	public long aadharNumberGenerator() {
		long adharNum = (long) (Math.floor(Math.random() * (999999999999L - 100000000000L + 1)) + 100000000000L);
		return adharNum;
	}

	/**
	 * This method generte unique emailId every time.
	 * 
	 * @return emailId
	 */
	public String emailIdGenerator() {
		int emlNum = (int) (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
		int domain = (int) Math.floor(Math.random() * 10);
		if (actfirName == "") {
			this.firstNameGenerator();
		}
		return actfirName + emlNum + '@' + dp.emlDomain[domain];
	}
	/**
	   * This method gives the random user Id according to the first name of the person.
	   * @return userId
	   */
	  public String userIdGenerator() {
	    if (actfirName == "") {
	      this.firstNameGenerator();
	    }
	    int usrIdNum = (int) (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
	    String userId = actfirName + usrIdNum;
	     return userId;
	  }
	  /**
	   * This method generate a strong alpha numeric password. 
	   * @param length
	   * @return password
	   */
	  public char[]  passwordGenerator(int length) {
		  String capitalCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	      String lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
	      String specialCharacters = "!@#$";
	      String numbers = "1234567890";
	      String combinedChars = capitalCaseLetters + lowerCaseLetters + specialCharacters + numbers;
	      Random random = new Random();
	      char[] password = new char[length];

	      password[0] = lowerCaseLetters.charAt(random.nextInt(lowerCaseLetters.length()));
	      password[1] = capitalCaseLetters.charAt(random.nextInt(capitalCaseLetters.length()));
	      password[2] = specialCharacters.charAt(random.nextInt(specialCharacters.length()));
	      password[3] = numbers.charAt(random.nextInt(numbers.length()));
	   
	      for(int i = 4; i< length ; i++) {
	         password[i] = combinedChars.charAt(random.nextInt(combinedChars.length()));
	      }
	      return password;
	  }
	  /**
	   * This function can generate long number.
	 * @return long number
	 */
	public long randomNumberGenerator() {
		  Random random = new Random();   
		  long longNumber = random.nextLong(); 
		  return longNumber;
	  }
	/**
	 * This function can generate integer type of number according to the range (0-maximum number provided)
	 * @param MaxNumber
	 * @return number
	 */
	public int randomNumberGenerator(int MaxNumber) {
		  Random random = new Random();   
		  int number = random.nextInt(MaxNumber); 
		  return number;
	  }
	
}
