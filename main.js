console.log("JavaScript Charged");
const myBtn = document.querySelector("#btn");
const myP = document.querySelector("#p");

myBtn.addEventListener('click', ()=>{

    let myRequest = new XMLHttpRequest();
    // myRequest.open('GET', 'https://api.chucknorris.io/jokes/random');
    // myRequest.onload = () => {
    //       console.log(myRequest.responseText);
    //       var reponse = JSON.parse(myRequest.responseText);
    //       myP.innerHTML = reponse.value;
        
    //       let dataTemp = reponse.value;

    //       myP.innerHTML = "<hr>" + myP.innerHTML+ "/" + dataTemp; 

    myRequest.open('GET', 'http://localhost/PhpGateau/index.php?controller=gateau&task=indexApi');
    myRequest.onload = () => {
    
        
      console.log(myRequest.responseText);
      
           var reponse = JSON.parse(myRequest.responseText);
           console.log(reponse);
           console.log(reponse['0']);
           myP.innerHTML = "name : " + reponse['0'].name + "<br> gout : " + reponse['0'].gout;

        reponse.forEach(gateau => {
            console.log("name : " + gateau.name + " | gout : " + gateau.gout);
        });

      };
    myRequest.send();
} )

const myBtn2 = document.querySelector("#Secondbtn");
const myP2 = document.querySelector("#p2");

myBtn2.addEventListener('click', ()=>{

    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'http://localhost/PhpGateau/index.php?controller=gateau&task=showApi&id=1');
    myRequest.onload = () => {
    
        
      var reponse = JSON.parse(myRequest.responseText);
      
      console.log("GATEAUX");
      console.log("name : " + reponse.gateau.name + " | gout : " + reponse.gateau.gout);
      console.log("RECIPE");
      reponse.recipes.forEach(recipe => {
        console.log("name : " + recipe.name + " | desc : " + recipe.gout);
      })

      };
    myRequest.send();
} )