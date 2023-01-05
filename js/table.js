a = JSON.parse(localStorage.getItem("logindata"));
m = JSON.parse(getCookie("userdata"));
//  if(m == null || m == ''){
//     location.assign('login.html')
//  }else {
//     location.assign('blank.html')
//  }
const userdataname = JSON.parse(localStorage.getItem("user"));
const userdatanamelist = userdataname.filter(function (value) {
  return value.id == m.id;
});
for (let x of userdatanamelist) {
  document.getElementById("profilename").innerHTML = x.userName;
  document.getElementById("name").innerHTML = x.userName;
}
tasklist = a.filter(function (value) {
  return value.userid == m.id;
});

str = "";
tasklist.forEach(function (value) {
  str += `<tr>
    <td>${value.date}</td>
    <td>${value.title}</td>
    <td>${value.textarea}</td>
    <td><i onclick='Editdata(${value.id})' class="bi bi-pen-fill"></i>
       <i  onclick='deledata(${value.id})' class="bi bi-trash3-fill"></i></td>
</tr>`;
});
document.getElementById("tabledata").innerHTML = str;

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
                    <td>${value.date}</td>
                    <td>${value.title}</td>
                    <td>${value.textarea}</td>
                    <td><i onclick='Editdata(${value.id})' class="bi bi-pen-fill"></i>
                    <i  onclick='deledata(${value.id})' class="bi bi-trash3-fill"></i></td>                </tr>`;
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
}

function updatenewvalue() {
  index = document.getElementById("index").value;
  var id = 1;
  let logindata1 = [];
  if (localStorage.getItem("logindata") != null) {
    logindata1 = JSON.parse(localStorage.getItem("logindata"));
    const findInd = logindata1.findIndex((Object) => {
      return Object.id == index;
    });
    logindata1[findInd].title = document.getElementById("title").value;
    logindata1[findInd].textarea = document.getElementById("textarea").value;
    logindata1[findInd].date = document.getElementById("date").value;
  }
  let jsonstring = JSON.stringify(logindata1);
  localStorage.setItem("logindata", jsonstring);
  alert("Data successfully Entered...!");
  let a = JSON.parse(localStorage.getItem("logindata"));
  m = JSON.parse(getCookie("userdata"));
  const tasklist = a.filter(function (value) {
    return value.userid == m.id;
  });
  let str = "";
  tasklist.forEach(function (value) {
    str += `<tr>
                    <td>${value.date}</td>
                    <td>${value.title}</td>
                    <td>${value.textarea}</td>
                    <td><i onclick='Editdata(${value.id})' class="bi bi-pen-fill"></i>
                    <i  onclick='deledata(${value.id})' class="bi bi-trash3-fill"></i></td>                </tr>`;
  });
  document.getElementById("tabledata").innerHTML = str;
  document.getElementById("add").style.display = "inline-block";
  document.getElementById("update").style.display = "none";
  document.getElementById("title").value = "";
  document.getElementById("textarea").value = "";
  document.getElementById("date").value = "";
}
