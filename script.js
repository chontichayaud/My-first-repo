  let n =  new Date();
  let y = n.getFullYear();
  let m = n.getMonth() + 1;
  let d = n.getDate();

  document.querySelector("#date").append("The date is" + n.getDate());
  console.log("This worked");