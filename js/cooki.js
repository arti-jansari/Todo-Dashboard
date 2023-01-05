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

function display(){

let str = '';
    userfilterdata.forEach(function (value) {
        str += `<tr>
                    <td>${value.date}</td>
                    <td>${value.title}</td>
                    <td>${value.textarea}</td>
                    <td><button onclick='Editdata()'>EDIT</button><button onclick='deledata(${value.id})'>DELETE</button></td>
                </tr>`

    });
    document.getElementById('tabledata').innerHTML = str;

  }