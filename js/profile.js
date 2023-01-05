let a = JSON.parse(localStorage.getItem("user"));
let m =JSON.parse( getCookie('userdata'));
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  
  const  tasklist = a.filter(function (value) {
    return value.id == m.id;
   });
document.getElementById('uniqueid').value = tasklist[0].id;
document.getElementById('username').value =tasklist[0].userName;
document.getElementById('email').value = tasklist[0].emailId;
document.getElementById('number').value = tasklist[0].telePhone;
document.getElementById('password').value = tasklist[0].passWord;

function savechanges(event){
  event.preventDefault();
  usernm();
  emailid1();
  telephon();
  password1();
  if (usernm() && emailid1() && telephon() && password1()) {

let index = document.getElementById('uniqueid').value;

    let logindata1 = [];
    if (localStorage.getItem('user') != null) {
        logindata1 = JSON.parse(localStorage.getItem('user'))
        const findInd = logindata1.findIndex((Object) => {
            return Object.id == index
        }); 
        logindata1[findInd].userName = document.getElementById('username').value ;       
        logindata1[findInd].emailId= document.getElementById('email').value;
        logindata1[findInd].telePhone = document.getElementById('number').value;      
        logindata1[findInd].passWord = document.getElementById('password').value;      
    }
    let jsonstring = JSON.stringify(logindata1);
        localStorage.setItem('user', jsonstring);
        alert("Data successfully Entered...!");
        location.assign('todolist.html')
        



  }

 }



 const image_input = document.querySelector("#image-input");
 image_input.addEventListener("change", function() {
   const reader = new FileReader();
   reader.addEventListener("load", () => {
     const uploaded_image = reader.result;
     document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
   });
   reader.readAsDataURL(this.files[0]);
 });