// object definition
const student1 = {
    name: "Jack",
    grade: "5",
    introduction: function () {
      console.log(this.name + "studies in grade" + this.grade + ".");
    },
  };
  
  // object definition
  const student2 = {
    name: "Jimmy ",
    grade: " 6",
  };
  
  // the object student2 is borrowing introduction method from student1
  let result= student1.introduction.bind(student2);
  
  // invoking introduction() function
  result();
  
  // Output:
  // Jimmy studies in grade 6.





  // object definition
const x = {
    name: "Jack",
    introduction: function (score) {
      console.log(this.name + "scored " + score + " in an exam.");
    },
  };
  
  // object definition
  const y = {
    name: "Jimmy ",
  };
  
  // passing two parameters y and '95'
  let res = x.introduction.bind(y, 95);
  
  // invoking res() function
  res(); // Jimmy scored 95 in an exam.