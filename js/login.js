let userdata = JSON.parse(getCookie("userdata"));
if (userdata != null || userdata != "") {
  location.assign("todolist.html");
}

function loginfrm(event) {
  event.preventDefault();
  usernm();
  passwd();
  if (usernm() && passwd()) {
    let eml = document.getElementById("exampleInputEmail1").value;
    let psd = document.getElementById("exampleInputPassword1").value;
    user = JSON.parse(localStorage.getItem("user"));
    let flag1 = 0;
    debugger;
    for (let x of user) {
      if (x.emailId == eml && x.passWord == psd) {
        var d = new Date();
        d.setDate(d.getDate() + 5);
        //       document.cookie = `loginuser=${x.emailId}; expires=${d}; path=/`;
        document.cookie = `userdata=${JSON.stringify(x)}; expires=${d}; path=/`;
        let m = document.cookie;
        console.log(m);
        flag1 = 1;
        break;
      }
    }
    if (flag1 == 1) {
      location.assign("todolist.html");
    } else {
      document.getElementById("emlvalidation").innerHTML =
        "* Incorrect username or password";
    }
  }
}

function usernm() {
  let eml = document.getElementById("exampleInputEmail1").value;
  if (eml == "") {
    document.getElementById("emlvalidation").innerHTML = "* Is required";
  } else {
    document.getElementById("emlvalidation").innerHTML = "";
    return true;
  }
}

function passwd() {
  let psd = document.getElementById("exampleInputPassword1").value;
  if (psd == "") {
    document.getElementById("pswdvalidation").innerHTML = "* Is required";
  } else {
    document.getElementById("pswdvalidation").innerHTML = "";
    return true;
  }
}
