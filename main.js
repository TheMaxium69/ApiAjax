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
      myP.innerHTML = myRequest.responseText;
      
           var reponse = JSON.parse(myRequest.responseText);
           console.log(reponse['0']);



      };
    myRequest.send();
} )