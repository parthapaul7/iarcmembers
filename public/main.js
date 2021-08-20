const secCon = document.getElementById("sCotainer");
const memCon = document.getElementById("mContainer");



//firebase cutiyapa start


let storageRef = firebase.storage().ref();


  storageRef.child('images/').listAll().then((result) => {
    let x= document.getElementsByClassName("cardImg");
    result.items.forEach((element,index) => {
      element.getDownloadURL().then(function(url){
        // console.log(url);
        
        console.log(url);
        

        x[index].innerHTML= `<img src="${url}".jpeg" class="card-img-top" alt="..." >`
        
  
      })
      console.log("before printing");
     
    });
    
  
    
  })

  // firebase end end




let secretary = "";
let members = "";

function getData() {
  let count = 0;
  url = "https://sheet.best/api/sheets/ca077534-54f7-42a7-ad9c-ac1668215f96";
  fetch(url, { method: "get" })
    .then((response) => {
      return response.json();
    })
    .then((info) => {
      info.forEach((e,index) => {
        

        if (e.ROLE.includes("Secretary")) {
          console.log(index);
      
          secretary += ` <div class="card" style="width: 20rem;">
            <div class="cardImg"></div>
            <div class="card-body">
             <h5 class="card-title">${e.NAME}</h5>
            <p class="card-text">${e.ROLE}</p>
            </div>
            </div>`;

          count++;
        } else {
          members += ` <div class="card" style="width: 20rem;">
                <div class="card-body">
                 <h5 class="card-title">${e.NAME}</h5>
                <p class="card-text">${e.ROLE}</p>
                </div>
                </div>`;
        }
      });

      secCon.innerHTML = secretary;

      memCon.innerHTML = members;
    });
}

getData();






