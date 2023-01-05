
function submit1(event) {
    event.preventDefault();
    usernm();
    emailid1();
    telephon();
    password1();
    cnfrmpasswrd();
    if (usernm() && emailid1() && telephon() && password1() && cnfrmpasswrd()) {
        let username2 = document.getElementById('username').value;
        let email2 = document.getElementById('email').value;
        let password2 = document.getElementById('password').value;
        let tel2 = document.getElementById('number').value;

        let user = [];


        let id = 1;
        if (localStorage.getItem('user') !== null) {
            user = JSON.parse(localStorage.getItem('user'));
         id = user[user.length - 1].id + 1;
        }
        let json = {
            "id": id,
            "userName": username2,
            "emailId": email2,
            "passWord": password2,
            "telePhone": tel2
        }
        let flag = 0;
        for (let y of user) {
            if (y.emailId == email2) {
                document.getElementById('emailid').innerHTML = 'Account is already available';
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            user.push(json)
            let jsonstring = JSON.stringify(user);
            localStorage.setItem('user', jsonstring);
            console.log(jsonstring)
            location.assign('login.html')
        }

    }
}
function usernm() {
    const username1 = document.getElementById('username').value;
    let a = /^[a-z][a-z0-9._]{5,16}$/gm;
    let b = /^[0-9]/gm;
    if (username1 == '') {
        document.getElementById('userid').innerHTML = 'Please Enter Username';
    } else if (a.test(username1)) {
        document.getElementById('userid').innerHTML = '';
        return true;
    } else if (b.test(username1)) {
        document.getElementById('userid').innerHTML = 'First character start with letters';
    } else {
        document.getElementById('userid').innerHTML = 'character should be a-z,0-9,.,_';
    }
}
function emailid1() {
    const username1 = document.getElementById('email').value;
    let eml = /^[a-z]+[a-z0-9.-_]*@[a-z]*.[a-z]{2,3}/gm;
    let b = /^[0-9A-Z]/gm;
    if (username1 == '') {
        document.getElementById('emailid').innerHTML = 'Please Enter Email Id';
    } else if (eml.test(username1)) {
        document.getElementById('emailid').innerHTML = '';
        return true;
    } else if (b.test(username1)) {
        document.getElementById('emailid').innerHTML = 'First character start with only a-z';
    } else {
        document.getElementById('emailid').innerHTML = 'write in proper format like   <i>"artijansari@gmail.com"</i>';
    }
}
function password1() {
    const username1 = document.getElementById('password').value;
    let pass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/gm;
    let c = /^[^!@#$%&*]/gm;
    if (username1 == '') {
        document.getElementById('passwordid').innerHTML = 'Please Enter Password';
    } else if (pass.test(username1)) {
        document.getElementById('passwordid').innerHTML = '';
        return true;
    } else if (c.test(username1)) {
        document.getElementById('passwordid').innerHTML = 'Special character required'
    } else {
        document.getElementById('passwordid').innerHTML = 'invalid password';
    }
}
function cnfrmpasswrd() {
    debugger;
    let username1 = document.getElementById('password').value;
   let username12 = document.getElementById('confirmpassword').value;
    if (username1 == username12) {
        document.getElementById('confirmid').innerHTML = '';
        return true;
    } else {
        document.getElementById('confirmid').innerHTML = 'password not matched';
    }
}
function telephon() {
    const tel = document.getElementById('number').value;
    let phn = /^[6789]{1}[0-9]{9}$/gm;
    if (tel == '') {
        document.getElementById('Phone').innerHTML = 'Please Enter Phone number';
    } else if (tel.length < 10 || tel.length > 10) {
        document.getElementById('Phone').innerHTML = 'please type 10 number digit';
    }
    else if (!phn.test(tel)) {
        document.getElementById('Phone').innerHTML = 'invalid phone number';
    }
    else {
        document.getElementById('Phone').innerHTML = '';
        return true;
    }
}
