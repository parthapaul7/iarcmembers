const secCon = document.getElementById("sCotainer");
const memCon = document.getElementById("mContainer");



//firebase cutiyapa start
let names=[];
let file = document.getElementById('demo');
let picUrl=[];
let storageRef = firebase.storage().ref();

file.addEventListener('change',function(){
  // console.log(e.target.files);
  
  
  for(let i=0;i<e.target.files.length;i++){
  let imgFile= e.target.files[i];
  let storageRef = firebase.storage().ref("images/"+imgFile.name);
  // let task=storageRef.put(imgFile);
  
  task.on('state_changed',function progres(snap){
  
  console.log(snap.bytesTransferred);
  
  });
  
  console.log("click called");
  }
  
  
  })

  storageRef.child('images/').listAll().then((result) => {
    result.items.forEach(element => {
      // console.log(element);
      element.getDownloadURL().then(function(url){
        // console.log(url);
        
        picUrl.push(url);
        console.log(url);
        
        
        for(let i=0;i<picUrl.length;i++){
          
          if(picUrl[i].includes(names.slice(0,5))){ 
            
            
          }

        }
        
  
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
          console.log("length of picUrl:",picUrl.length);
      
          secretary += ` <div class="card" style="width: 20rem;">
            <img src=" ".jpeg" class="card-img-top" alt="...">
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


// firebase 



