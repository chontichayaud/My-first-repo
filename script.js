  let now =  new Date();
  let plus6Weeks = new Date();
  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  plus6Weeks.setDate(plus6Weeks.getDate() + 42);
  console.log(plus6Weeks);


  document.querySelector("#date").append(d + "/" + m + "/" + y);
  document.querySelector("#dateIn6Weeks").append(plus6Weeks.getDate() + "/" + (plus6Weeks.getMonth()+1) + "/" + plus6Weeks.getFullYear());

  console.log("This worked");