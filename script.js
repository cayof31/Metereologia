const apiKey = "532f00b3a0e364956fa53b8e9cb42e5f";
const primarysection = document.querySelector("#metdata");
const button = document.querySelector("#SButton");
const p = document.createElement("span");
const inputcity = document.querySelector("#SInput")
let cidade;

function fet() {
  if (p.length > 0) {
    p.innerText = null;
  } else {
     cidade = document.querySelector("#SInput").value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then(function (body) {
        primarysection.appendChild(p);
        const coord = body.coord;
        const tempMax = body.main.temp_max != null ? body.main.temp_max : null;
        const tempMin = body.main.temp_min;
        const temp = body.main.temp;
        const humidity = body.main.humidity;
        p.innerText =
          body.name +
          ` 
      ` +
          coord.lat +
          `` +
          coord.lon +
          ` 
        ` +
          temp +
          ` atual |` +
          tempMax +
          ` Max | ` +
          tempMin +
          `Min 
        ` +
          humidity;
      })
      .catch(function (err) {
        console.log(err);
        alert("insira um nome de cidade válido");
         p.innerText = ``;
         inputcity.value = ``;
      });
  }
}

button.onclick = fet;
