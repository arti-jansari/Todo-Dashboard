let userdata = getCookie("userdata");
if (userdata == null || userdata == "") {
  location.assign("login.html");
}

let todaydate = new Date();
let dd = todaydate.getDate();
let m2 = dd.toString().padStart(2, "0");
// console.log(m2)
let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let dateday = day[todaydate.getDay()];
let month1 = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = todaydate.getMonth() + 1;
month = month.toString().padStart(2, "0");
let mm = month1[todaydate.getMonth()];
let yer = todaydate.getFullYear();
document.getElementById("todaydata").innerHTML = dateday + " " + m2 + " " + mm;
let datefortoday = yer + "-" + month + "-" + m2;

let date_month = m2 + mm;
let a = JSON.parse(localStorage.getItem("logindata"));
m = JSON.parse(getCookie("userdata"));
const tasklist = a.filter(function (value) {
  return value.userid == m.id;
});
// console.log(datefortoday);
let str = "";
tasklist.forEach(function (value) {
  if (value.date == datefortoday) {
    str += `<tr>
    <td><span class="change-icon">
            
    <i class="far fa-circle"></i>
    <i class="far fa-check-circle"></i>
  </span></td>
    <td>${value.title}</td>
    <td>${value.date}</td>
    <td><i onclick='Editdata(${value.id})' class="bi bi-pen-fill"></i>
       <i  onclick='deledata(${value.id})' class="bi bi-trash3-fill"></i></td>
</tr>`;
  }
});

document.getElementById("tabledata").innerHTML = str;

// console.log(datefortoday)
let str1 = "";

// let overduedate = new Date(new Date().setDate(todaydate.getDate()));
// let dd_od = overduedate.getDate();
// let date_od = dd_od.toString().padStart(2, "0");
// let overyer = overduedate.getFullYear();
// let overmonth = overduedate.getMonth() + 1;
// let overdue_date = overyer + "-" + overmonth + "-" + date_od;
tasklist.forEach(function (value) {
  if (value.date < datefortoday) {
    str1 += `<tr>
      <td><span class="change-icon">
            
      <i class="far fa-circle"></i>
      <i class="far fa-check-circle"></i>
    </span></td>
      <td>${value.title}</td>
      <td>${value.date}</td>
      <td><i onclick='Editdata(${value.id})' class="bi bi-pen-fill"></i>
         <i  onclick='deledata(${value.id})' class="bi bi-trash3-fill"></i></td>
  </tr>`;
  }
});

document.getElementById("tabledata1").innerHTML = str1;

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let str2 = "";

tasklist.forEach(function (value) {
  if (value.date > datefortoday) {
    str2 += `<tr>
      <td><span class="change-icon">
            
    <i class="far fa-circle"></i>
    <i class="far fa-check-circle"></i>
  </span></td>
      <td>${value.title}</td>
      <td>${value.date}</td>
      <td><i onclick='Editdata(${value.id})' class="bi bi-pen-fill"></i>
         <i  onclick='deledata(${value.id})' class="bi bi-trash3-fill"></i></td>
  </tr>`;
  }
});

document.getElementById("tabledata2").innerHTML = str2;

function deledata(e) {
  let localvariable = JSON.parse(localStorage.getItem("logindata"));
  console.log(e);
  const findInd = localvariable.findIndex((Object) => {
    return Object.id === e;
  });

  localvariable.splice(findInd, 1);
  localStorage.setItem("logindata", JSON.stringify(localvariable));

  let a = JSON.parse(localStorage.getItem("logindata"));
  m = JSON.parse(getCookie("userdata"));
  const tasklist = a.filter(function (value) {
    return value.userid == m.id;
  });

  let str = "";
  tasklist.forEach(function (value) {
    str += `<tr>
      <td><span class="change-icon">
            
    <i class="far fa-circle"></i>
    <i class="far fa-check-circle"></i>
  </span></td>
                 
                  <td>${value.title}</td>
                  <td>${value.date}</td>
                  <td><i onclick='Editdata(${value.id})' class="bi bi-pen-fill"></i>
                  <i  onclick='deledata(${value.id})' class="bi bi-trash3-fill"></i></td>
              </tr>`;
  });
  document.getElementById("tabledata").innerHTML = str;
}

function Editdata(e) {
  let localvariable = JSON.parse(localStorage.getItem("logindata"));
  const findInd = localvariable.findIndex((Object) => {
    return Object.id == e;
  });

  document.getElementById("title").value = localvariable[findInd].title;
  document.getElementById("textarea").value = localvariable[findInd].textarea;
  document.getElementById("date").value = localvariable[findInd].date;
  document.getElementById("index").value = e;
  document.getElementById("add").style.display = "none";
  document.getElementById("update").style.display = "inline-block";
  location.assign("index.html");
}
