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
   console.log(tasklist)
   for(let x of tasklist){
    document.getElementById('exampleInputEmail').value = x.emailId;
    console.log( x.emailId)
    var oldpassWord = x.passWord;
  
}

console.log(oldpassWord)
function passwd(){
    let input_oldpswrd = document.getElementById('exampleInputoldPassword1').value;
    console.log(oldpassWord)
    if(input_oldpswrd == oldpassWord){
        console.log('right')
        document.getElementById('oldpswdvalidation').value = '';
    }else {
        document.getElementById('oldpswdvalidation').value = 'error';
        console.log('error')
    }
}