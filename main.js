console.log("JavaScript Charged");

const myBtn = document.querySelector("#btn");
const myP = document.querySelector("#p");

const myBtn2 = document.querySelector("#btn2");
const myP2 = document.querySelector("#p2");

const myBtn3 = document.querySelector("#btn3");

const myBtn4 = document.querySelector("#btn4");

var params = 'id=7'
var paramsCreate = 'name=test&gout=test';

myBtn.addEventListener('click', ()=>{

    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'http://localhost/PhpGateau/index.php?controller=gateau&task=indexApi');
    myRequest.onload = () => {
        var reponse = JSON.parse(myRequest.responseText);
        
        console.log("---------------INDEXAPI------------");
        reponse.forEach(gateau => {
            console.log("name : " + gateau.name + " | gout : " + gateau.gout);
        });
      };
    myRequest.send();
} )

myBtn2.addEventListener('click', ()=>{

    let myRequest = new XMLHttpRequest();
    myRequest.open('POST', 'http://localhost/PhpGateau/index.php?controller=gateau&task=showApi', true);
    myRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    myRequest.onload = () => {
        
        let reponse = JSON.parse(myRequest.responseText);
        console.log("---------------SHOWAPI------------");  
        console.log("GATEAUX");
        console.log("name : " + reponse.gateau.name + " | gout : " + reponse.gateau.gout);
        console.log("RECETTE");
        reponse.recipes.forEach(recipe => {
          console.log("name : " + recipe.name + " | desc : " + recipe.desc);
        })
      };
    myRequest.send(params);
})

myBtn3.addEventListener('click', ()=>{

  let myRequest = new XMLHttpRequest();
  myRequest.open('POST', 'http://localhost/PhpGateau/index.php?controller=gateau&task=supprApi', true);
  myRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  myRequest.onload = () => {

    };
  myRequest.send(params);
})

myBtn4.addEventListener('click', ()=>{

  let myRequest = new XMLHttpRequest();
  myRequest.open('POST', 'http://localhost/PhpGateau/index.php?controller=gateau&task=addApi', true);
  myRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  myRequest.onload = () => {

    };
  myRequest.send(paramsCreate);
})