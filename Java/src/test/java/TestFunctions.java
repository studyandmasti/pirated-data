import io.github.studyandmasti.PiratedData;

public class TestFunctions extends PiratedData {
public static void main(String[] args) {
	PiratedData pd = new PiratedData();
	String firstName =pd.firstNameGenerator();
	System.out.println(firstName);
	
	String lastName = pd.lastNameGenerator();
	System.out.println(lastName);
	
	String fullName = pd.fullNameGenerator();
	System.out.println(fullName);
	
	long mobno = pd.mobileNumberGenerator();
	System.out.println(mobno);
	
	long aadhar = pd.aadharNumberGenerator();
	System.out.println(aadhar);
	
	String email = pd.emailIdGenerator();
	System.out.println(email);
	
	String userId = pd.userIdGenerator();
	System.out.println(userId);
	
	char[] pass= pd.passwordGenerator(8);
	System.out.println(pass);
	
	int num = pd.randomNumberGenerator(45);
	System.out.println(num);
}

}
