
const container= document.getElementById("container");

let html="";


function getData(){
    url="https://sheet.best/api/sheets/ca077534-54f7-42a7-ad9c-ac1668215f96";
    fetch(url,{method:"get"}).then((response)=>{

        return response.json();
    }).then((info)=>{


        info.forEach(e => {
            console.log(e);

    
            html+=` <div class="card" style="width: 20rem;">
            <img src="" class="card-img-top" alt="...">
            <div class="card-body">
             <h5 class="card-title">${e.NAME}</h5>
            <p class="card-text">${e.ROLE}</p>
             
            </div>
            </div>`;
            
            container.innerHTML=html;
            
        });
        
    });
}

getData();