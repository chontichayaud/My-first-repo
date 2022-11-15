  let now =  new Date();
  let y = now.getFullYear();
  let m = now.getMonth() + 1;
  let d = now.getDate();
  let plus6Weeks = new Date().setDate(now.getDate() + 42);

  document.querySelector("#date").append(d + "/" + m + "/" + y);
  document.querySelector("#dateIn6Weeks").append(plus6Weeks.getDate() + "/" + (plus6Weeks.getMonth()+1) + "/" + plus6Weeks.getFullYear());

  console.log(plus6Weeks);
  console.log("This worked");