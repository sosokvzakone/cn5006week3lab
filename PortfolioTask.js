const currentDateTime = new Date();
const studentID = "2035035"
console.log("This is my Portfolio Task");
console.log("Programe run on : " + currentDateTime.toLocaleString());

const EmpSkills= (skills,Name,LabGrp,studentID)=> 
    {
    console.log(" Name:" + Name + " Favourite programming language "+ skills)
    console.log(" Lab Group " + LabGrp)
    console.log("Student ID " + studentID)
}

EmpSkills(" css"," Anghelina Zubenco"," Group 18", "2035035");

const lastFourDigits = studentID.slice(-4);

const uniqueValue = lastFourDigits
    .split("")
    .reduce((total, digit) => total + Number(digit), 0);

console.log("Last four digits of Student ID: " + lastFourDigits);
console.log("Unique value: " + uniqueValue);