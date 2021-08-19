const secCon = document.getElementById("sCotainer");
const memCon = document.getElementById("mContainer");

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
      info.forEach((e) => {
        console.log(e);

        if (e.ROLE.includes("Secretary")) {
          secretary += ` <div class="card" style="width: 20rem;">
            <img src="images/${e.NAME}.jpeg" class="card-img-top" alt="...">
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
