import com.source.FunctionProvider;

public class TestFunctions extends FunctionProvider {
public static void main(String[] args) {
	FunctionProvider fun = new FunctionProvider();
	String firstName =fun.firstNameGenerator();
	System.out.println(firstName);
	
	String lastName = fun.lastNameGenerator();
	System.out.println(lastName);
	
	String fullName = fun.fullNameGenerator();
	System.out.println(fullName);
	
	long mobno = fun.mobileNumberGenerator();
	System.out.println(mobno);
	
	long aadhar = fun.aadharNumberGenerator();
	System.out.println(aadhar);
	
	String email = fun.emailIdGenerator();
	System.out.println(email);
	
	String userId = fun.userIdGenerator();
	System.out.println(userId);
	
	char[] pass= fun.passwordGenerator(8);
	System.out.println(pass);
}

}
