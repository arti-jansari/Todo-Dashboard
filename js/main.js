



function title1() {
    let title1 = document.getElementById('title').value;
    if (title1 == '') {
        document.getElementById('titleerror').innerHTML = '* Is required';
    } else {
        document.getElementById('titleerror').innerHTML = '';
        return true;
    }
}
function textarea1() {
    let textarea1 = document.getElementById('textarea').value;
    if (textarea1 == '') {
        document.getElementById('textareaerror').innerHTML = '* Is required';
    } else {
        document.getElementById('textareaerror').innerHTML = '';
        return true;
    }
}
function date1() {
    let date1 = document.getElementById('date').value;
    if (date1 == '') {
        document.getElementById('dateerror').innerHTML = '* Is required';
    } else {
        document.getElementById('dateerror').innerHTML = '';
        return true;
    }
}

function Adddatavalue(event) {
    event.preventDefault();
    title1();
    textarea1();
    date1();
    if (title1() && textarea1() && date1()) {
        let title1 = document.getElementById('title').value;
        document.getElementById('title').value = '';
        let textarea1 = document.getElementById('textarea').value;
        document.getElementById('textarea').value = '';
        let date1 = document.getElementById('date').value;
        document.getElementById('date').value = '';
        let logindata1 = [];
        let id = 1;
        if (localStorage.getItem('logindata') != null) {
            logindata1 = JSON.parse(localStorage.getItem('logindata'));
            if (logindata1.length > 0) {
                 id = logindata1[logindata1.length - 1].id + 1;
            } else {
                id = 1;
            }
        }
        let m = JSON.parse(getCookie('userdata'));
        console.log(m)
        let json = {
            'userid': m.id,
            'id': id,
            "title": title1,
            "textarea": textarea1,
            "date": date1,
         }
        logindata1.push(json)
        let jsonstring = JSON.stringify(logindata1);
               localStorage.setItem('logindata', jsonstring);
        alert('success') 
        let a = JSON.parse(localStorage.getItem("logindata"));
        m = JSON.parse(getCookie('userdata'));
       const  tasklist = a.filter(function (value) {
         return value.userid == m.id;
       });
        let str = '';
        tasklist.forEach(function (value) {
        str += `<tr>
            <td>${value.date}</td>
            <td>${value.title}</td>
            <td>${value.textarea}</td>
            <td><i onclick='Editdata(${value.id})' class="bi bi-pen-fill"></i>
                    <i  onclick='deledata(${value.id})' class="bi bi-trash3-fill"></i></td>
        </tr>`

    });
    document.getElementById('tabledata').innerHTML = str;        

    }  
    
}

 
    





