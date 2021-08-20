const secCon = document.getElementById("sCotainer");
const memCon = document.getElementById("mContainer");

let names = [];

//firebase cutiyapa start

let storageRef = firebase.storage().ref();

storageRef
  .child("images/")
  .listAll()
  .then((result) => {
    let x = document.getElementsByClassName("cardImg");
    result.items.forEach((element) => {
      element.getDownloadURL().then(function (url) {
        console.log(url);
        for (let i = 0; i < names.length; i++) {
          if (url.includes(names[i].slice(0, 4))) {
            x[
              i
            ].innerHTML = `<img src="${url}".jpeg" class="card-img-top" alt="..." >`;
          }
        }
      });
    });
  });

// firebase end end

let secretary = "";
let members = "";

function getData() {
  url = "https://sheetdb.io/api/v1/iti4m6gu0rspr";
  fetch(url, { method: "get" })
    .then((response) => {
      return response.json();
    })
    .then((info) => {
      info.forEach((e, index) => {
        if (e.ROLE.includes("Secretary")) {
          secretary += ` <div class="card" style="width: 20rem;">
            <div class="cardImg">
            <img src="images/loading.gif".jpeg" class="card-img-top" alt="..." ></div>
            <div class="card-body">
             <h5 class="card-title">${e.NAME}</h5>
            <p class="card-text">${e.ROLE}<br>Contact- ${e.WHATSAPPNO}</p>
            </div>
            </div>`;

          names.push(e.NAME);
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
