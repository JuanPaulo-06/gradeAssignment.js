let score = prompt("Enter your score:");

score = Number(score);

if (isNaN(score) || score < 0 || score > 100)
  console.log("Please enter a valid score between 0 and 100.");

  if (score >= 90) 
    console.log("Grade: Excellent");
   else if (score >= 80 && score < 90) 
    console.log("Grade: Good");
   else if (score >= 70 && score < 80) 
    console.log("Grade: Fair");
   else 
    console.log("Grade: Needs Improvement");
