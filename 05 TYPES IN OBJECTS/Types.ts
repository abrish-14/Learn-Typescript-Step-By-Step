interface addressTypes {
    city: string;
    streetno: number;
    buildingName: string;
  }
  type PersonType = {
    name: string;
    class: number;
    rollNo: number;
    subjects: string[];
    address: addressTypes;
  };
  
  let person1: PersonType = {
    name: "Abrish",
    class: 10,
    rollNo: 24,
    subjects: ["Computer", "English", "Chemistry"],
    address: {
      city: "Islamabad",
      streetno: 14,
      buildingName: "sana building"
    }
  };
  console.log(person1);
  
  let person2: PersonType[] = [
    {
      name: "Madiha",
      class: 10,
      rollNo: 16,
      subjects: ["Chemistry", "Biology", "Physics"],
      address: {
        city: "Karachi",
        streetno: 9,
        buildingName: "jama Street Building"
      }
    }
  ];
  
  console.log(person2);
  
  //number,string, boolean => types
  
  // type alise
  type carstring = string;
  let car: carstring = "Marcities";
  console.log(car);
  
  type agenumber = number;
  let age: agenumber = 17;
  console.log(age);
  
  type isPassboolean = boolean;
  let isPass: isPassboolean = true;
  console.log(isPass);