/*!
 * @author Satyajit319 <satyajit319@gmail.com>
 * date 03/03/2022
 */

var firstMaleName = ['Hari', 'sam', 'Mukund', 'Nabaghan', 'Abhishek', 'Suresh', 'Santunu', 'Akashya', 'Haribol',
  'Madhab', 'Balkrushna', 'Aarav', 'Vihaan', 'Vivaan', 'Ananya', 'Diya', 'Advik', 'Kabir', 'Anaya',
  'Aarav', 'Vivaan', 'Aditya', 'Vivaan', 'Vihaan', 'Arjun', 'Vivaan', 'Reyansh', 'Mohammed', 'Sai',
  'Arnav', 'Aayan', 'Krishna', 'Ishaan', 'Shaurya', 'Atharva', 'Advik', 'Pranav', 'Advaith', 'Aaryan',
  'Dhruv', 'Kabir', 'Ritvik', 'Aarush', 'Kian', 'Darsh', 'Veer', 'Aadil', 'Aakash', 'Aarif',
  'Aashu', 'Aatif', 'Aayush', 'Abdul', 'Abdullah', 'Abhash', 'Abhimanyu', 'Abhinav', 'Abhishek', 'Abrar',
  'Adi', 'Aditya', 'Aftab', 'Agyapad', 'Ahsan', 'Ajay', 'Ajeet', 'Ajit', 'Ajman', 'Akash',
  'Akbar', 'Akhilesh', 'Akhtar', 'Akram', 'Akshay', 'Akshpaat', 'Altaf', 'Aman', 'Amar', 'Amarjeet',
  'Ameen', 'Amil', 'Amit', 'Anil', 'Anjali', 'Ankit', 'Ankur', 'Ansh', 'Anshu', 'Anshul',
  'Ansu', 'Anuj', 'Anup', 'Anurag', 'Anwari', 'Aoosaf', 'Arif', 'Arman', 'Arsad',
  'Arsh', 'Arun', 'Arvind', 'Aryan', 'Ashish', 'Ashok', 'Ashu', 'Ashutosh', 'Asif', 'Atul',
  'Avinash', 'Ayan', 'Azam', 'Bablu', 'Babu', 'Babulal', 'Baksi', 'Balbir', 'Balram', 'Balwant',
  'Banarsi', 'Bandu', 'Bangali', 'Banwari', 'Barkat', 'Begraj', 'Bhagwans', 'Bhajanlal', 'Bhanu',
  'Bharma', 'Bhupender', 'Bhupesh', 'Bijender', 'Bijendra', 'Bikki', 'Birender', 'Birij', 'Birjesh', 'Bishan',
  'Bittu', 'Bobi', 'Boby', 'Bram', 'Brijmohan', 'Chandan', 'Chander', 'Chanderpal', 'Chandra', 'Chandrram',
  'Chatan', 'Chatar', 'Chaterpal', 'Cheddi', 'Chetan', 'Chetanram', 'Chirag', 'Chitrangans', 'Chran', 'Daler',
  'Daniel', 'Danish', 'Daya', 'Deep', 'Deepak', 'Deepchand', 'Deepender', 'Deewan', 'Desh',
  'Deshraj', 'Deva', 'Devender', 'Devinder', 'Devraj', 'Dhalchand', 'Dhanna', 'Dharam', 'Dharmandra', 'Dharmender',
  'Dharmvir', 'Dheeraj', 'Dhramender', 'Dhrmveer', 'Dilip', 'Dinesh', 'Divansh', 'Divyansh', 'Dular', 'Durganand',
  'Faijal', 'Farid', 'Farmaan', 'Firoj', 'Fulmiya', 'Ganesh', 'Gaurav', 'Gauri', 'Gautam', 'Ghan',
  'Ghanshyam', 'Giri', 'Girish', 'Gopi', 'Gorav', 'Gourav', 'Gulfam', 'Gulreg', 'Gulshan', 'Gyanendra',
  'Haider', 'Hansraj', 'Harak', 'Hararat', 'Harendra', 'Hari', 'Harish', 'Harison', 'Harkesh', 'Harpal',
  'Harsh', 'Harshal', 'Harvinder', 'Hazrat', 'Hemant', 'Himanshu', 'Hosiyarilal', 'Hrithik', 'Imran', 'Inder',
  'Inderjeet', 'Irshad', 'Ishan', 'Ishant', 'Ishwar', 'Islam', 'Jabbar', 'Jabir', 'Jagmal', 'Jahagir',
  'Jahid', 'Jaiprakash', 'Jasbir', 'Jasveer', 'Jatin', 'Javed', 'Jeeshan', 'Jeetu', 'Jeeya', 'Jitender',
  'Jitendera', 'Jitendra', 'Kabul', 'Kaif', 'Kalu', 'Kamruddin', 'Kanhaiya', 'Kapil',
  'Karan', 'Kavilash', 'Keshave', 'Khemraj', 'Khursheed', 'Kiran', 'Kishan', 'Kripal', 'Krishan', 'Krishana',
  'Kuldeep', 'Kumar', 'Kumari', 'Kunal', 'Kundan', 'Kushal', 'Laksh', 'Lal', 'Lalan', 'Lalaram',
  'Lalit', 'Lamani', 'Lave', 'Lawrence', 'Laxman', 'Lekhraj', 'Leo', 'Loknath', 'Lokesh',
  'Madan', 'Mahaveer', 'Mahender', 'Mahendra', 'Mahesh', 'Mahipal', 'Mamchand', 'Mamta', 'Man', 'Manful',
  'Manish', 'Manjeet', 'Manjiv', 'Mannu', 'Manoj', 'Manpreet', 'Mithlesh', 'Mobin', 'Mohan', 'Mohit',
  'Moni', 'Monu', 'Mukeemuddin', 'Mukesh', 'Muneer', 'Munesh', 'Nadeem', 'Nandkishore', 'Nandmeena', 'Nandu',
  'Nanhe', 'Narayan', 'Narender', 'Naresh', 'Naseem', 'Nashim', 'Neeraj', 'Nikhil', 'Nitin', 'Noorhasan',
  'Omprakash', 'Pancu', 'Pankaj', 'Paras', 'Pardeep', 'Parmod', 'Parteek', 'Partik', 'Pavan', 'Pawan',
  'Phooleshwar', 'Pintu', 'Piyush', 'Pooja', 'Prabhjeet', 'Pradeep', 'Prahlad', 'Pramod', 'Prasant', 'Praveen',
  'Prem', 'Prhalad', 'Prince', 'Punarjyoti', 'Punit', 'Pushkar', 'Puspak', 'Rada', 'Radha', 'Radhey',
  'Raghubir', 'Raghunandan', 'Raghuvir', 'Rahish', 'Rahul', 'Raj', 'Raja', 'Rajan', 'Rajaram', 'Rajeev',
  'Rajendar', 'Rajender', 'Rajesh', 'Rajiv', 'Rajkumar', 'Rajneesh', 'Rajni', 'Raju', 'Rajveer', 'Rakesh',
  'Ram', 'Ramchander', 'Ramesh', 'Ramhetu', 'Ramkishan', 'Ramprasad', 'Ramtek', 'Randhir', 'Ranjeet', 'Ranjit',
  'Raseel', 'Ratiman', 'Ravi', 'Ravikant', 'Ravinder', 'Ravindra', 'Raviraj', 'Ridhakaran', 'Rihan', 'Rinki',
  'Rinku', 'Rishi', 'Riyaz', 'Robin', 'Rohit', 'Ronak', 'Roshan', 'Rupender', 'Rupesh', 'Sachin',
  'Saddam', 'Sahil', 'Sahrukh', 'Sajjan', 'Salim', 'Salin', 'Salmaan', 'Same', 'Sameem', 'Sameer',
  'Samsuddin', 'Sandeep', 'Sanjay', 'Sanjeev', 'Sanjiv', 'Sanni', 'Sanny', 'Santosh', 'Sartaj', 'Sarvan',
  'Satbar', 'Satender', 'Satish', 'Satpal', 'Satyam', 'Satyvrat', 'Saurabh', 'Sehzad', 'Shabuddin', 'Shagufta',
  'Shail', 'Shailesh', 'Shakil', 'Shakti', 'Shambhu', 'Shamim', 'Shankar', 'Sharukh', 'Shashank', 'Shashikant',
  'Shaukat', 'Shayam', 'Shayamveer', 'Shibu', 'Shisupal', 'Shiv', 'Shiva', 'Shivam', 'Shivyalam', 'Shobharam',
  'Shripal', 'Shubham', 'Shyam', 'Shyamlal', 'Shyamveer', 'Sidharath', 'Sivam', 'Somnath', 'Sonu',
  'Subhakar', 'Subhas', 'Subhash', 'Sudhansu', 'Sudhir', 'Suhail', 'Sujeet'
];
var title = ['Sahu', 'Behera', 'Sahoo', 'Nayak', 'Dash', 'Das', 'Pati', 'Pattanayak', 'Muduli', 'Parida', 'Samantaray', 'Mallick', 'Malick', 'Barik', 'Barika'];
var emlDomain = ['gmail.com', 'yahoo.com', 'hotmail.com', 'rediffmail.com', 'mns.com', 'github.com', 'bandu.com', 'baidu.com', 'aol.com', 'comcast.net'];
var gender = ['Male', 'Female', 'TransGender'];
var hairColor = ['Black', 'Brown', 'Red', 'Blond'];
var skinColor = ['Ivory', 'Beige', 'Alabaster', 'Honey', 'Carotenoid', 'Tan', 'Caramel', 'Bronze', 'Mahogany', 'Chestnut', 'Buff', 'Peaches', 'Umber', 'Praline', 'Espresso Brown', 'Porcelain', 'Hickory', 'Mustard', 'Sable', 'Almond', 'Bisque', 'Teak', 'Cacao', 'Pecan', 'Saddle Brown'];
var bloodGroup = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
var eyeColor = ['Brown', 'Blue', 'Hazel', 'Amber', 'Green', 'Gray', 'Red'];
var stateName = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
var stateAndhraDist = ['Anantapuram', 'Chittoor', 'East Godavari', 'Guntur', 'YSR Kadapa', 'Krishna', 'Kurnool', 'Prakasam', 'Sri Potti Sriramulu Nellore', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 'West Godavari'];
var stateArunachalDist = ['Anjaw', 'Changlang', 'Dibang Valley', 'East Kameng', 'East Siang', 'Kamle', 'Kra Daadi', 'Kurung Kumey', 'Lepa Rada', 'Lohit', 'Longding', 'Lower Dibang Valley', 'Lower Siang', 'Lower Subansiri', 'Namsai', 'Pakke Kessang', 'Papum Pare', 'Shi Yomi', 'Siang', 'Tawang', 'Tirap', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang'];
var stateAssamDist = ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'South Salmara Mankachar', 'Sonitpur', 'Tinsukia', 'Udalguri', 'West Karbi Anglong'];
var stateBiharDist = ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'];
var stateChhattisgarhDist = ['Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Gariyaband', 'Janjgir-Champa', 'Jashpur', 'Kabirdham', 'Kanker', 'Kondagaon', 'Korba', 'Korea', 'Mahasamund', 'Mungeli', 'Narayanpur', 'Raigarh', 'Raipur', 'Rajnandgaon', 'Sukma', 'Surajpur', 'Surguja'];
var stateGoaDist = ['North Goa', 'South Goa'];
var stateGujaratDist = ['Ahmedabad', 'Amreli', 'Anand', 'Aravalli', 'Banaskantha (Palanpur)', 'Bharuch', 'Bhavnagar', 'Botad', 'Chhota Udepur', 'Dahod', 'Dangs (Ahwa)', 'Devbhoomi Dwarka', 'Gandhinagar', 'Gir Somnath', 'Jamnagar', 'Junagadh', 'Kachchh', 'Kheda (Nadiad)', 'Mahisagar', 'Mehsana', 'Morbi', 'Narmada (Rajpipla)', 'Navsari', 'Panchmahal (Godhra)', 'Patan', 'Porbandar', 'Rajkot', 'Sabarkantha (Himmatnagar)', 'Surat', 'Surendranagar', 'Tapi (Vyara)', 'Vadodara', 'Valsad'];
var stateHaryanaDist = ['Ambala', 'Bhiwani', 'Charkhi Dadri', 'Faridabad', 'Fatehabad', 'Gurugram (Gurgaon)', 'Hisar', 'Jhajjar', 'Jind', 'Kaithal', 'Karnal', 'Kurukshetra', 'Mahendragarh', 'Nuh', 'Palwal', 'Panchkula', 'Panipat', 'Rewari', 'Rohtak', 'Sirsa', 'Sonipat', 'Yamunanagar'];
var stateHimachalDist = ['Bilaspur', 'Chamba', 'Hamirpur', 'Kangra', 'Kinnaur', 'Kullu', 'Lahaul & Spiti', 'Mandi', 'Shimla', 'Sirmaur (Sirmour)', 'Solan', 'Una'];
var stateJharkhandDist = ['Bokaro', 'Chatra', 'Deoghar', 'Dhanbad', 'Dumka', 'East Singhbhum', 'Garhwa', 'Giridih', 'Godda', 'Gumla', 'Hazaribag', 'Jamtara', 'Khunti', 'Koderma', 'Latehar', 'Lohardaga', 'Pakur', 'Palamu', 'Ramgarh', 'Ranchi', 'Sahibganj', 'Seraikela-Kharsawan', 'Simdega', 'West Singhbhum'];
var stateKarnatakaDist = ['Bagalkot', 'Ballari (Bellary)', 'Belagavi (Belgaum)', 'Bengaluru (Bangalore) Rural', 'Bengaluru (Bangalore) Urban', 'Bidar', 'Chamarajanagar', 'Chikballapur', 'Chikkamagaluru (Chikmagalur)', 'Chitradurga', 'Dakshina Kannada', 'Davangere', 'Dharwad', 'Gadag', 'Hassan', 'Haveri', 'Kalaburagi (Gulbarga)', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysuru (Mysore)', 'Raichur', 'Ramanagara', 'Shivamogga (Shimoga)', 'Tumakuru (Tumkur)', 'Udupi', 'Uttara Kannada (Karwar)', 'Vijayapura (Bijapur)', 'Yadgir'];
var stateKeralaDist = ['Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod', 'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad', 'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'];
var stateMadhyaPradeshDist = ['Agar Malwa', 'Alirajpur', 'Anuppur', 'Ashoknagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa', 'Khargone', 'Mandla', 'Mandsaur', 'Morena', 'Narsinghpur', 'Neemuch', 'Panna', 'Raisen', 'Rajgarh', 'Ratlam', 'Rewa', 'Sagar', 'Satna', 'Sehore', 'Seoni', 'Shahdol', 'Shajapur', 'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha'];
var stateMaharashtraDist = ['Ahmednagar', 'Akola', 'Amravati', 'Aurangabad', 'Beed', 'Bhandara', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai City', 'Mumbai Suburban', 'Nagpur', 'Nanded', 'Nandurbar', 'Nashik', 'Osmanabad', 'Palghar', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sangli', 'Satara', 'Sindhudurg', 'Solapur', 'Thane', 'Wardha', 'Washim', 'Yavatmal'];
var stateManipurDist = ['Bishnupur', 'Chandel', 'Churachandpur', 'Imphal East', 'Imphal West', 'Jiribam', 'Kakching', 'Kamjong', 'Kangpokpi', 'Noney', 'Pherzawl', 'Senapati', 'Tamenglong', 'Tengnoupal', 'Thoubal', 'Ukhrul'];
var stateMeghalayaDist = ['East Garo Hills', 'East Jaintia Hills', 'East Khasi Hills', 'North Garo Hills', 'Ri Bhoi', 'South Garo Hills', 'South West Garo Hills', 'South West Khasi Hills', 'West Garo Hills', 'West Jaintia Hills', 'West Khasi Hills'];
var stateMizoramDist = ['Aizawl', 'Champhai', 'Kolasib', 'Lawngtlai', 'Lunglei', 'Mamit', 'Saiha', 'Serchhip'];
var stateNagalandDist = ['Dimapur', 'Kiphire', 'Kohima', 'Longleng', 'Mokokchung', 'Mon', 'Peren', 'Phek', 'Tuensang', 'Wokha', 'Zunheboto'];
var stateOdishaDist = ['Angul', 'Balangir', 'Balasore', 'Bargarh', 'Bhadrak', 'Boudh', 'Cuttack', 'Deogarh', 'Dhenkanal', 'Gajapati', 'Ganjam', 'Jagatsinghapur', 'Jajpur', 'Jharsuguda', 'Kalahandi', 'Kandhamal', 'Kendrapara', 'Kendujhar (Keonjhar)', 'Khordha', 'Koraput', 'Malkangiri', 'Mayurbhanj', 'Nabarangpur', 'Nayagarh', 'Nuapada', 'Puri', 'Rayagada', 'Sambalpur', 'Sonepur', 'Sundargarh'];
var statePunjabDist = ['Amritsar', 'Barnala', 'Bathinda', 'Faridkot', 'Fatehgarh Sahib', 'Fazilka', 'Ferozepur', 'Gurdaspur', 'Hoshiarpur', 'Jalandhar', 'Kapurthala', 'Ludhiana', 'Mansa', 'Moga', 'Muktsar', 'Nawanshahr (Shahid Bhagat Singh Nagar)', 'Pathankot', 'Patiala', 'Rupnagar', 'Sahibzada Ajit Singh Nagar (Mohali)', 'Sangrur', 'Tarn Taran'];
var stateRajasthanDist = ['Ajmer', 'Alwar', 'Banswara', 'Baran', 'Barmer', 'Bharatpur', 'Bhilwara', 'Bikaner', 'Bundi', 'Chittorgarh', 'Churu', 'Dausa', 'Dholpur', 'Dungarpur', 'Hanumangarh', 'Jaipur', 'Jaisalmer', 'Jalore', 'Jhalawar', 'Jhunjhunu', 'Jodhpur', 'Karauli', 'Kota', 'Nagaur', 'Pali', 'Pratapgarh', 'Rajsamand', 'Sawai Madhopur', 'Sikar', 'Sirohi', 'Sri Ganganagar', 'Tonk', 'Udaipur'];
var stateSikkimDist = ['East Sikkim', 'North Sikkim', 'South Sikkim', 'West Sikkim'];
var stateTamilNaduDist = ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi (Tuticorin)', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'];
var stateTelanganaDist = ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhoopalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Komaram Bheem Asifabad', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal', 'Nagarkurnool', 'Nalgonda', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Rangareddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal (Rural)', 'Warangal (Urban)', 'Yadadri Bhuvanagiri'];
var stateTripuraDist = ['Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'];
var stateUttarPradeshDist = ['Agra', 'Aligarh', 'Allahabad', 'Ambedkar Nagar', 'Amethi (Chatrapati Sahuji Mahraj Nagar)', 'Amroha (J.P. Nagar)', 'Auraiya', 'Azamgarh', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor', 'Budaun', 'Bulandshahr', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Faizabad', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'Gautam Buddha Nagar', 'Ghaziabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur (Panchsheel Nagar)', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur', 'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kanshiram Nagar (Kasganj)', 'Kaushambi', 'Kushinagar (Padrauna)', 'Lakhimpur - Kheri', 'Lalitpur', 'Lucknow', 'Maharajganj', 'Mahoba', 'Mainpuri', 'Mathura', 'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'RaeBareli', 'Rampur', 'Saharanpur', 'Sambhal (Bhim Nagar)', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamali (Prabuddh Nagar)', 'Shravasti', 'Siddharth Nagar', 'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao', 'Varanasi'];
var stateUttarakhandDist = ['Almora', 'Bageshwar', 'Chamoli', 'Champawat', 'Dehradun', 'Haridwar', 'Nainital', 'Pauri Garhwal', 'Pithoragarh', 'Rudraprayag', 'Tehri Garhwal', 'Udham Singh Nagar', 'Uttarkashi'];
var stateWestBengalDist = ['Alipurduar', 'Bankura', 'Birbhum', 'Cooch Behar', 'Dakshin Dinajpur (South Dinajpur)', 'Darjeeling', 'Hooghly', 'Howrah', 'Jalpaiguri', 'Jhargram', 'Kalimpong', 'Kolkata', 'Malda', 'Murshidabad', 'Nadia', 'North 24 Parganas', 'Paschim Medinipur (West Medinipur)', 'Paschim (West) Burdwan (Bardhaman)', 'Purba Burdwan (Bardhaman)', 'Purba Medinipur (East Medinipur)', 'Purulia', 'South 24 Parganas', 'Uttar Dinajpur (North Dinajpur)'];


var actfirName = "";
var actlstName = "";
var actFullName = "";
var actGender = "";
var actHairColor = "";
var actEyeColor = "";
var panNo = "";
var actBloodGroup = "";
var actWeight = "";
var actSkinColor = "";
var actStateName = "";
var actDistName = "";
var actCardFullDetails = "";
var firstDate1 = "";
var actAge = "";
var secondDate = new Date(2012, 4, 12);// every year to be increase one year.

/**
 * This method can generate random First name of a person.
 * @returns firstName
 */
function firstNameGenerator() {
  var number = Math.floor(Math.random() * 469);
  //var lengthofarray = firstMaleName.length;
  return actfirName = firstMaleName[number];
}
exports.firstNameGenerator = firstNameGenerator;
/**
 * This method can generate random Last name of a person.
 * @returns LastName
 */
function lastNameGenerator() {
  var number = Math.floor(Math.random() * 10);
  return actlstName = title[number];
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
  var fullName = actfirName + " " + actlstName;
  return actFullName = fullName;
}
exports.fullNameGenerator = fullNameGenerator;
/**
 * This method is for generate random age between (18-99).
 * @returns age
 * @deprecated
 */
function adultAgeGenerator() {
  var age = Math.floor(Math.random() * (99 - 18 + 1)) + 18;
  return ageYrs = age;
}
exports.adultAgeGenerator = adultAgeGenerator;
/**
 * This method is for generate random mobile number
 * @returns MobileNumber
 */
function mobileNumberGenerator() {
  var mobNumber = Math.floor(Math.random() * (9999999999 - 6000000000 + 1)) + 6000000000;
  return mobNumber;
}
exports.mobileNumberGenerator = mobileNumberGenerator;
/**
 * This method generates aadharnumber of a person
 * @returns aadharnumber
 */
function aadharNumberGenerator() {
  var adharNum = Math.floor(Math.random() * (999999999999 - 100000000000 + 1)) + 100000000000;
  return adharNum;
}
exports.aadharNumberGenerator = aadharNumberGenerator;
/**
 * This method generte unique emailId every time.
 * @returns emailId
 */
function emailIdGenerator() {
  var emlNum = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  var domain = Math.floor(Math.random() * 10);
  if (actfirName == "") {
    this.firstNameGenerator();
  }
  return actfirName + emlNum + '@' + emlDomain[domain];
}
exports.emailIdGenerator = emailIdGenerator;
/**
 * This method gives the random user Id according to the first name of the person.
 * @returns userId
 */
function userIdGenerator() {
  if (actfirName == "") {
    this.firstNameGenerator();
  }
  var usrIdNum = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
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
  var str = "";
  for (var i = 0; i < len; i++) {
    var rand = Math.floor(Math.random() * 62);
    var charCode = rand += rand > 9 ? (rand < 36 ? 55 : 61) : 48;
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
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for (var i = 0; i < 3; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  if (actlstName == "") {
    this.lastNameGenerator();

  }
  var lastNamefirstChar = actlstName.substring(0, 1);
  var num = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  const lastChar = characters.charAt(Math.floor(Math.random() * 26))
  panNo = result + "P" + lastNamefirstChar + num + lastChar;
  return panNo;
}
exports.panCardId = panCardId;
/**
 * This method generate a gender for user.
 * @returns gender
 */
function genderGenerator() {
  var gen = Math.floor(Math.random() * 3);
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
  start = new Date("1935-01-01");
  end = new Date(2002, 0, 1);
  dob = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const r = dob.toISOString().slice(0, 10);
  const firstDate2 = r.split("-");
  const yr = firstDate2[0];
  const mn = firstDate2[1];
  const dy = firstDate2[2];
  firstDate1 = yr + "-" + mn + "-" + dy;
  return firstDate1;
  // return new Date();
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
  var firstDate = new Date(firstDate1);
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

// time difference in Months
function getMonthsDiff(startDate = new Date(), endDate = new Date()) {
  console.log("monthdiff: ", startDate);
  let monthsOfFullYears = getYearsDiff(startDate, endDate) * 12;
  let months = monthsOfFullYears;
  // the variable below is not necessary, but I kept it for understanding of code
  // we can use "startDate" instead of it
  let yearsAfterStart = new Date(
    startDate.getFullYear() + getYearsDiff(startDate, endDate),
    startDate.getMonth(),
    startDate.getDate()
  );
  let isDayAhead = endDate.getDate() >= yearsAfterStart.getDate();

  if (startDate.getMonth() == endDate.getMonth() && !isDayAhead) {
    months = 11;
    return months;
  }

  if (endDate.getMonth() >= yearsAfterStart.getMonth()) {
    let diff = endDate.getMonth() - yearsAfterStart.getMonth();
    months += (isDayAhead) ? diff : diff - 1;
  }
  else {
    months += isDayAhead
      ? 12 - (startDate.getMonth() - endDate.getMonth())
      : 12 - (startDate.getMonth() - endDate.getMonth()) - 1;
  }

  return months;
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
  var hairclr = Math.floor(Math.random() * 4);
  return actHairColor = hairColor[hairclr];
}
exports.hairColorGenerator = hairColorGenerator;
/**
 * This method generates eyecolor of a humanbeing.
 * @returns eyecolor
 */
function eyeColorGenerator() {
  var eyeclr = Math.floor(Math.random() * 7);
  return actEyeColor = eyeColor[eyeclr];
}
exports.eyeColorGenerator = eyeColorGenerator;
/**
 * This function generate blood group for user.
 * @returns bloodgroup
 */
function bloodGroupGenerator() {
  var bldgrp = Math.floor(Math.random() * 8);
  return actBloodGroup = bloodGroup[bldgrp];
}
exports.bloodGroupGenerator = bloodGroupGenerator;
/**
 * This method generate random weight of a user values are in between(35-109)
 * @returns weight
 */
function weightGenerator() {
  var wt = Math.floor(Math.random() * (109 - 35 + 1)) + 35;
  return actWeight = wt;
}
exports.weightGenerator = weightGenerator;
/**
 * This method gives skin color of an user.
 * @returns skincolor
 */
function skinColorGenerator() {
  var sknclr = Math.floor(Math.random() * 25);
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
  var number = Math.floor(Math.random() * 28);
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
  if (actStateName == "Andhra Pradesh") {
    var dis = Math.floor(Math.random() * 13);
    actDistName = stateAndhraDist[dis];
  }
  if (actStateName == "Arunachal Pradesh") {
    var dis = Math.floor(Math.random() * 26);
    actDistName = stateArunachalDist[dis];
  }
  if (actStateName == "Assam") {
    var dis = Math.floor(Math.random() * 34);
    actDistName = stateAssamDist[dis];
  }
  if (actStateName == "Bihar") {
    var dis = Math.floor(Math.random() * 38);
    actDistName = stateBiharDist[dis];
  }
  if (actStateName == "Chhattisgarh") {
    var dis = Math.floor(Math.random() * 28);
    actDistName = stateChhattisgarhDist[dis];
  }
  if (actStateName == "Goa") {
    var dis = Math.floor(Math.random() * 2);
    actDistName = stateGoaDist[dis];
  }
  if (actStateName == "Gujarat") {
    var dis = Math.floor(Math.random() * 33);
    actDistName = stateGujaratDist[dis];
  }
  if (actStateName == "Haryana") {
    var dis = Math.floor(Math.random() * 22);
    actDistName = stateHaryanaDist[dis];
  }
  if (actStateName == "Himachal Pradesh") {
    var dis = Math.floor(Math.random() * 12);
    actDistName = stateHimachalDist[dis];
  }
  if (actStateName == "Jharkhand") {
    var dis = Math.floor(Math.random() * 24);
    actDistName = stateJharkhandDist[dis];
  }
  if (actStateName == "Karnataka") {
    var dis = Math.floor(Math.random() * 31);
    actDistName = stateKarnatakaDist[dis];
  }
  if (actStateName == "Kerala") {
    var dis = Math.floor(Math.random() * 14);
    actDistName = stateKeralaDist[dis];
  }
  if (actStateName == "Madhya Pradesh") {
    var dis = Math.floor(Math.random() * 52);
    actDistName = stateMadhyaPradeshDist[dis];
  }
  if (actStateName == "Maharashtra") {
    var dis = Math.floor(Math.random() * 36);
    actDistName = stateMaharashtraDist[dis];
  }
  if (actStateName == "Manipur") {
    var dis = Math.floor(Math.random() * 16);
    actDistName = stateManipurDist[dis];
  }
  if (actStateName == "Meghalaya") {
    var dis = Math.floor(Math.random() * 12);
    actDistName = stateMeghalayaDist[dis];
  }
  if (actStateName == "Mizoram") {
    var dis = Math.floor(Math.random() * 8);
    actDistName = stateMizoramDist[dis];
  }
  if (actStateName == "Nagaland") {
    var dis = Math.floor(Math.random() * 11);
    actDistName = stateNagalandDist[dis];
  }
  if (actStateName == "Odisha") {
    var dis = Math.floor(Math.random() * 30);
    actDistName = stateOdishaDist[dis];
  }
  if (actStateName == "Punjab") {
    var dis = Math.floor(Math.random() * 23);
    actDistName = statePunjabDist[dis];
  }
  if (actStateName == "Rajasthan") {
    var dis = Math.floor(Math.random() * 33);
    actDistName = stateRajasthanDist[dis];
  }
  if (actStateName == "Sikkim") {
    var dis = Math.floor(Math.random() * 4);
    actDistName = stateSikkimDist[dis];
  }
  if (actStateName == "Tamil Nadu") {
    var dis = Math.floor(Math.random() * 38);
    actDistName = stateTamilNaduDist[dis];
  }
  if (actStateName == "Telangana") {
    var dis = Math.floor(Math.random() * 33);
    actDistName = stateTelanganaDist[dis];
  }
  if (actStateName == "Tripura") {
    var dis = Math.floor(Math.random() * 8);
    actDistName = stateTripuraDist[dis];
  }
  if (actStateName == "Uttar Pradesh") {
    var dis = Math.floor(Math.random() * 75);
    actDistName = stateUttarPradeshDist[dis];
  }
  if (actStateName == "Uttarakhand") {
    var dis = Math.floor(Math.random() * 13);
    actDistName = stateUttarakhandDist[dis];
  }
  if (actStateName == "West Bengal") {
    var dis = Math.floor(Math.random() * 23);
    actDistName = stateWestBengalDist[dis];
  }
  return actDistName;
}
exports.distGenerator = distGenerator;

/**
 * This function generate address of an user. 
 * Dependent on the other functions
 * 
 * 
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
  return [actFullName, actStateName, actDistName];
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
  var validMnth = Math.floor(Math.random() * 12);
  var validYr = Math.floor(Math.random() * (2027 - 2022 + 1)) + 2022;
  var cvv = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  var visaElectronNum = Math.floor(Math.random() * (4999999999999999 - 4101110010111111 + 1)) + 4101110010111111;
  var validThru = validMnth + "/" + validYr;
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
  var bunchAddress = [];
  for (let i = 0; i < desiredDataSetNumber; i++) {
    actFullName = firstMaleName[Math.floor(Math.random() * 469)] + ' ' + title[Math.floor(Math.random() * 10)];
    state = this.stateGenerator();
    dist = this.distGenerator();
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
  var bunchBio = [];
  for (let i = 0; i < desiredDataSetNumber; i++) {
    var fulName = firstMaleName[Math.floor(Math.random() * 469)] + ' ' + title[Math.floor(Math.random() * 10)];
    var gen = gender[Math.floor(Math.random() * 3)];
    var hairclr = hairColor[Math.floor(Math.random() * 4)];
    //var age = Math.floor(Math.random() * (99 - 18 + 1)) + 18;
    var dob = this.birthDateTimeGenerator();
    var age = this.ageCalculation();
    var eyeclr = eyeColor[Math.floor(Math.random() * 7)];
    var bldGrp = bloodGroup[Math.floor(Math.random() * 8)];
    var weight = Math.floor(Math.random() * (109 - 35 + 1)) + 35;
    var sknClr = skinColor[Math.floor(Math.random() * 25)];
    bunchBio.push([fulName, gen, hairclr, dob, age, eyeclr, bldGrp, weight, sknClr]);
  }
  return bunchBio;
}
exports.hugeBiologicalDataGenerator = hugeBiologicalDataGenerator;






