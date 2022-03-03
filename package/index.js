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
var PblSctrBnkName = ['Bank of Baroda', 'Bank of India', 'Bank of Maharashtra', 'Canara Bank', 'Central Bank of India', 'Indian Bank', 'Indian Overseas Bank', 'Punjab & Sind Bank', 'Punjab National Bank', 'State Bank of India', 'UCO Bank', 'Union Bank of India'];
// var iFscCode = [' BARB0',''];
var breakfastName = ['Aloo paratha', 'Ackee and saltfish ', 'Aloo paratha', 'Anadama bread', 'Apple dumpling', 'Arepa', 'Bacon', 'egg and cheese sandwich', 'Bacon and eggs', 'Bacon sandwich', 'Bagel', 'Bagel and cream cheese', 'Baked beans', 'Banana', 'Banana nut bread', 'Banana bread', 'Barley honey', 'Bear claw', 'Bhakri', 'Bhatoora', 'Bialy', 'Biscuits and gravy', 'Bizcocho', 'Boiled egg', 'Boudin', 'Bran flakes', 'Bread', 'Breadfruit', 'Brunch Bar', 'yogurt', 'Calas', 'Cereal', 'Cereal bar', 'Cereal germ', 'Changua', 'Chicken and waffles', 'Chilaquiles', 'Chipped beef on toast', 'Chocolate gravy', 'Chouriço', 'Chwee kueh', 'Cinnamon roll', 'cinnamon toast crunch', 'Buttered crumpet', 'Coffee cake', 'Dosa', 'Collops', 'Congee', 'Cottage cheese', 'Creamed eggs on toast', 'Cretons', 'Croissant', 'Crumpet', 'Cuban bread', 'Dim sum', 'Dosa', 'Doughnut or Donut', 'Doubles', 'Dutch baby pancake', 'Eggs Benedict', 'Egg sandwich', 'Eggs and brains', 'Eggs Beauregard', 'Eggs Benedict', 'Egg bhurji', 'Eggs bourguignon', 'Eggo cereal', 'Eggs Neptune', 'Eggs Sardou', 'Enchilada', 'Energy bar', 'English muffin', 'Facturas', 'Fatoot samneh', 'French toast', 'Fried bread', 'Fried cheese', 'Fried chicken', 'Frybread', 'Fried egg', 'Frittata', 'Frühschoppen', 'Fruit pudding', 'Gnocchi', 'Goetta', 'Gogli', 'Granola', 'Griddle scone', 'Grillades', 'Grits', 'Halwa poori', 'Hamburger', 'Hangtown Fry', 'Honey Puffs', 'Huevos pericos', 'Huevos rancheros', 'Idli', 'Idli with sambar', 'Kulcha with chole ', 'Katogo', 'Kedgeree', 'Khaman', 'Kiribath', 'Kolache', 'Kulcha', 'Kulich', 'Malasadas', 'McMuffin', 'Meeshay', 'Milk toast', 'Oatmeal', 'Omelette', 'Orange juice', 'Palm syrup', 'Palmier', 'Pancake', 'Peanut butter', 'Pebete', 'Protein bar', 'Pumpkin bread', 'Ham and cheese quiche', 'Quick bread', 'Raisin bran', 'Raisin bread', 'Reindeer meat', 'Rolled oats', 'Roti canai', 'Roti prata', 'Salt cod', 'Satti', 'Sausage', 'Sausage gravy', 'Scone', 'Scrambled eggs', 'Scrapple', 'Shaobing', 'Green smoothie', 'Smoothie', 'Soft-boiled eggs', 'Suhur', 'Teacake', 'Toast', 'Toaster Strudels', 'Tomato omelette', 'Touton', 'Tripe', 'Upma Dosa', 'Vegan yogurt with blueberries', 'Viennoiserie', 'Waffle', 'Water biscuit', 'Weisswurst', 'Waffles with strawberries', 'Youtiao', 'Zucchini bread'];
var lunchCurriesName = ['Mulangi sambar', 'Leaf curry', 'Brinjal curry', 'Ladiesfinger curry', 'Patato curry', 'Chicken curry', 'Palak paneer', 'Kaju curry', 'Veg masala curry', 'Pappu charu', 'Tamato rasam', 'Govi paneer', 'Paneer tikka', 'Chicken moglai', 'Chicken lollypop', 'Chicken 65', 'Chicken tikka', 'Chicken masala curry', 'Butter chicken', 'Amritsari Chicken Masala', 'Kolhapuri Chicken Curry', 'Chicken Xacuti', 'Chicken Do Pyaaza', 'Sali Marghi', 'Murgh Rezala', 'Chicken Stew'];
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
var actAge = "";
var actEyeColor = "";
var actBloodGroup = "";
var actWeight = "";
var actSkinColor = "";
var actStateName = "";
var actDistName = "";
var actCardFullDetails = "";
var actBreakfast = "";
var actBnchAddress = [];

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
  else if (actlstName == "") {
    this.lastNameGenerator();
  }
  var fullName = actfirName + " " + actlstName;
  return actFullName = fullName;
}
exports.fullNameGenerator = fullNameGenerator;
/**
 * This method is for generate random age between (18-99).
 * @returns age
 */
function adultAgeGenerator() {
  var age = Math.floor(Math.random() * (99 - 18 + 1)) + 18;
  return actAge = age;
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
 * This method generate a gender for user.
 * @returns gender
 */
function genderGenerator() {
  var gen = Math.floor(Math.random() * 3);
  return actGender = gender[gen];
}
exports.genderGenerator = genderGenerator;
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
  else if (actlstName == "") {
    this.lastNameGenerator();
  }
  else if (actGender == "") {
    this.genderGenerator();
  }
  else if (actHairColor == "") {
    this.hairColorGenerator();
  }
  else if (actAge == "") {
    this.adultAgeGenerator();
  }
  else if (actEyeColor == "") {
    this.eyeColorGenerator();
  }
  else if (actBloodGroup == "") {
    this.bloodGroupGenerator();
  }
  else if (actWeight == "") {
    this.weightGenerator();
  }
  else if (actSkinColor == "") {
    this.skinColorGenerator();
  }

  return [actfirName, actlstName, actGender, actHairColor, actAge, actEyeColor, actBloodGroup, actWeight, actSkinColor];
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

  else if (actStateName == "Andhra Pradesh") {
    var dis = Math.floor(Math.random() * 13);
    actDistName = stateAndhraDist[dis];
  }
  else if (actStateName == "Arunachal Pradesh") {
    var dis = Math.floor(Math.random() * 26);
    actDistName = stateArunachalDist[dis];
  }
  else if (actStateName == "Assam") {
    var dis = Math.floor(Math.random() * 34);
    actDistName = stateAssamDist[dis];
  }
  else if (actStateName == "Bihar") {
    var dis = Math.floor(Math.random() * 38);
    actDistName = stateBiharDist[dis];
  }
  else if (actStateName == "Chhattisgarh") {
    var dis = Math.floor(Math.random() * 28);
    actDistName = stateChhattisgarhDist[dis];
  }
  else if (actStateName == "Goa") {
    var dis = Math.floor(Math.random() * 2);
    actDistName = stateGoaDist[dis];
  }
  else if (actStateName == "Gujarat") {
    var dis = Math.floor(Math.random() * 33);
    actDistName = stateGujaratDist[dis];
  }
  else if (actStateName == "Haryana") {
    var dis = Math.floor(Math.random() * 22);
    actDistName = stateHaryanaDist[dis];
  }
  else if (actStateName == "Himachal Pradesh") {
    var dis = Math.floor(Math.random() * 12);
    actDistName = stateHimachalDist[dis];
  }
  else if (actStateName == "Jharkhand") {
    var dis = Math.floor(Math.random() * 24);
    actDistName = stateJharkhandDist[dis];
  }
  else if (actStateName == "Karnataka") {
    var dis = Math.floor(Math.random() * 31);
    actDistName = stateKarnatakaDist[dis];
  }
  else if (actStateName == "Kerala") {
    var dis = Math.floor(Math.random() * 14);
    actDistName = stateKeralaDist[dis];
  }
  else if (actStateName == "Madhya Pradesh") {
    var dis = Math.floor(Math.random() * 52);
    actDistName = stateMadhyaPradeshDist[dis];
  }
  else if (actStateName == "Maharashtra") {
    var dis = Math.floor(Math.random() * 36);
    actDistName = stateMaharashtraDist[dis];
  }
  else if (actStateName == "Manipur") {
    var dis = Math.floor(Math.random() * 16);
    actDistName = stateManipurDist[dis];
  }
  else if (actStateName == "Meghalaya") {
    var dis = Math.floor(Math.random() * 12);
    actDistName = stateMeghalayaDist[dis];
  }
  else if (actStateName == "Mizoram") {
    var dis = Math.floor(Math.random() * 11);
    actDistName = stateMizoramDist[dis];
  }
  else if (actStateName == "Nagaland") {
    var dis = Math.floor(Math.random() * 12);
    actDistName = stateNagalandDist[dis];
  }
  else if (actStateName == "Odisha") {
    var dis = Math.floor(Math.random() * 30);
    actDistName = stateOdishaDist[dis];
  }
  else if (actStateName == "Punjab") {
    var dis = Math.floor(Math.random() * 23);
    actDistName = statePunjabDist[dis];
  }
  else if (actStateName == "Rajasthan") {
    var dis = Math.floor(Math.random() * 33);
    actDistName = stateRajasthanDist[dis];
  }
  else if (actStateName == "Sikkim") {
    var dis = Math.floor(Math.random() * 4);
    actDistName = stateSikkimDist[dis];
  }
  else if (actStateName == "Tamil Nadu") {
    var dis = Math.floor(Math.random() * 38);
    actDistName = stateTamilNaduDist[dis];
  }
  else if (actStateName == "Telangana") {
    var dis = Math.floor(Math.random() * 33);
    actDistName = stateTelanganaDist[dis];
  }
  else if (actStateName == "Tripura") {
    var dis = Math.floor(Math.random() * 8);
    actDistName = stateTripuraDist[dis];
  }
  else if (actStateName == "Uttar Pradesh") {
    var dis = Math.floor(Math.random() * 75);
    actDistName = stateUttarPradeshDist[dis];
  }
  else if (actStateName == "Uttarakhand") {
    var dis = Math.floor(Math.random() * 13);
    actDistName = stateUttarakhandDist[dis];
  }
  else if (actStateName == "West Bengal") {
    var dis = Math.floor(Math.random() * 23);
    actDistName = stateWestBengalDist[dis];
  }
  return actDistName;
}
exports.distGenerator = distGenerator;
// PostalPinGenerator: function () {

// },
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
  else if (actStateName == "") {
    this.stateGenerator();
  }
  else if (actDistName == "") {
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
  //var masterCard = Math.floor(Math.random() * (5500000000000000 - 510000000000000 + 1) ) + 510000000000000;
  var validThru = validMnth + "/" + validYr;
  actCardFullDetails = [actFullName, visaElectronNum, validThru, cvv];
  return actCardFullDetails;
}
exports.financialCardGenerator = financialCardGenerator;
//   bankNameGenerator: function () {
//     var number = Math.floor(Math.random() * 10);
//     return PblSctrBnkName[number];
//   },
//   // food choices
//   breakastGenerator: function () {
//     var bkfst = Math.floor(Math.random() * 155);
//     return actBreakfast = breakfastName[bkfst];
//   },
//   lunchCurryGenerator: function() {
//     var lnchcry = Math.floor(Math.random() * 26);
// return actLunchCurryName = lunchCurriesName[lnchcry];
//   },
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
// function superAddress(){
//   this.hugeAddressGenerator(5);
//  return actBnchAddress.push(bunchAddress);
// }
// exports.superAddress = superAddress;
// function printNum(){
//   for (i = 0; i<=60;i++){
//   console.log(i);
//   }
//   return i;
// }
// exports.printNum = printNum;
