console.log("JavaScript Charged");

const myBtn = document.querySelector("#btn");
const myP = document.querySelector("#p");
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

const myBtn2 = document.querySelector("#btn2");
const myP2 = document.querySelector("#p2");

const myBtn3 = document.querySelector("#btn3");
const myP3 = document.querySelector("#p3");

//inutile FormData
var data = new FormData();
data.append('id', '3');

myBtn2.addEventListener('click', ()=>{

    let myRequest = new XMLHttpRequest();
    myRequest.open('POST', 'http://localhost/PhpGateau/index.php?controller=gateau&task=showApi');
    myRequest.onload = () => {
      var reponse = JSON.parse(myRequest.responseText);
        
        console.log("---------------SHOWAPI------------");  
        console.log("GATEAUX");
        console.log("name : " + reponse.gateau.name + " | gout : " + reponse.gateau.gout);
        console.log("RECETTE");
        reponse.recipes.forEach(recipe => {
          console.log("name : " + recipe.name + " | desc : " + recipe.desc);
        })
      };
    myRequest.send('id=3');
})