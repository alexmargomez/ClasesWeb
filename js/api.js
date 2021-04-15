

var btn = document.getElementById('request');
var bio = document.getElementById('bio');

btn.addEventListener('click', function() {

  var request = new XMLHttpRequest();
  request.open('Get', '../js/api.json');
  request.send();

  request.onreadystatechange = function() {
    if(request.readyState === 4 && request.status === 200) {
        let datos = JSON.parse(request.responseText);
        bio.innerHTML = '';

        for(let item of datos){
          bio.innerHTML += `
            <tr>
              <td> ${item.name} </td>
              <td> ${item.age}</td>
            </tr>
          `;
        }

    } else {
        bio.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
    }
  }
  document.getElementById('h1s').innerHTML = "Datos recibidos AJAX";
});
