  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  document.createElement("p");
  p.textContent = n.getDate();
  
  document.querySelector("#date").append("The date is" + p);
  console.log("This worked");