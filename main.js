console.log("coucou");

const myBtn = document.querySelector("#btn");
const myP = document.querySelector("#p");

myBtn.addEventListener('click', ()=>{

    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://api.chucknorris.io/jokes/random');

    myRequest.onreadystatechange = function() {
        if (myRequest.readyState === 4) {
          console.log(myRequest.responseText);
          var reponse = JSON.parse(myRequest.responseText);
          myP.innerHTML = reponse.value;
        }
      };
    myRequest.send();
} )