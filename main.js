
const container= document.getElementById("members");

let html=` <tr> <th> NAMES </th> <th> STUDY AT </th> <th> CONTACT ME </th></tr>`;


function getData(){
    url="https://sheet.best/api/sheets/bf16f39a-8d52-4512-aaa7-16b0c2ffc1da";
    fetch(url,{method:"get"}).then((response)=>{

        return response.json();
    }).then((info)=>{


        info.forEach(e => {
            console.log(e);
            html+=` <tr> <td>${e.name} </td> <td>  <img src="${e.img}" alt="Girl in a jacket" width="500" height="600"></td> <td>${e.phone_number} </td></tr>`;
            
            container.innerHTML=html;
        });
        
    });
}

// getData();