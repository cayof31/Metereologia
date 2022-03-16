const apiKey = "532f00b3a0e364956fa53b8e9cb42e5f";
const sectionone = document.querySelector("#metdata");
const button = document.querySelector("#SButton");
const p = document.createElement("span");

function fet() {
  if (p.length > 0) {
    p.innerText = null;
  }else{
  const cidade = document.querySelector("#SInput").value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`;
  fetch(url)
  .then((response) => response.json())
    .then(function (body) {
      sectionone.appendChild(p);
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
        console.log(p, body);
    })
    .catch(function (err) {
      console.log(err);
    });
}}
  
  button.onclick = fet;
  