// SIMPLE OBJECT;
const person = {
    name: "Abrish",
    age: 17,
    gender: "Female"
  };
  
  console.log("Name:", person.name);
  console.log("Age:", person.age);
 console.log("Gender:", person.gender);
  
//NESTED OBJECT:

const personWithAddress = {
    name: "Abrish",
    age:17,
    address: {
      street: "10th street cliften",
      city: "Karachi",}
  };
   console.log(personWithAddress);

  // ACCESING PROPERTIES OF THE NESTED OBJECTG:

  console.log("Name:", personWithAddress.name);
  console.log("Age:", personWithAddress.age);
  console.log("Street:", personWithAddress.address.street);
  console.log("City:", personWithAddress.address.city);
  
//  ARRAY OF OBJECT REPRESENTING BOOKS:

const Books_ = [
    { name: "Math", color: "Red", price: 100 },
    { name: "Comouter", color: "Yellow", price: 300},
    { name: "Islamiat", color: "Green", price: 500},
  ];

  console.log(Books_);