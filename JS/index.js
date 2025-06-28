let apikey = "4391c7c947704eb68cf123733252506";
let baseurl = " http://api.weatherapi.com/v1";
let searchinput = document.querySelector(".main_input");

let row = document.querySelector(".row");

async function getdata() {
  try {
    let data = await fetch(
      `${baseurl}/forecast.json?key=${apikey}&q=${searchinput.value}&days=3`,
      {
        method: "GET",
        headers: {
          "contetn-type": "/forecast.json",
        },
      }
    );

    let response = await data.json();
    // console.log(response);
    // console.log(response.forecast.forecastday[1]);
    // console.log(response.current.temp_c);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const d = new Date(response.forecast.forecastday[0].date);

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let container = `  
            <div class="col col-md-12 col-sm-12 col-lg-4 g-0 ">
              <div class="card one">
                <div class="card-header text-white d-flex justify-content-between  ">
                  <div class="day">${daysOfWeek[d.getDay()]}</div>
                  <div class="Date">${d.getDate()}${months[d.getMonth()]}</div>
                </div>
                <div class="card-body">
                  <div class="current_location">
                    ${response.location.name}
                  </div>
                  <h2>${response.current.temp_c}<sup>o</sup>C</h2>
                  <p class="card-text">
                    <img src="https:${
                      response.forecast.forecastday[0].day.condition.icon
                    }" alt="image">
                  <div class="weather">
                    ${response.forecast.forecastday[0].day.condition.text}
                    <div class="stautes ">
                      <img src="./img/icon-umberella.png" alt=""> 20%
                      <img src="./img/icon-wind.png" alt="">18km/h
                      <img src="./img/icon-compass.png" alt="">East
                    </div>
                  </div>
                  </p>
                </div>
              </div>
            </div>
            <div class="col col-md-12 col-sm-12 col-lg-4 g-0">
              <div class="card two">
                <div class="card-header text-center text-white">${
                  daysOfWeek[(d.getDay() + 1) % 7]
                }</div>
                <div class="card-body text-center">
                   <img src="https:${
                     response.forecast.forecastday[1].day.condition.icon
                   }" alt="image">
                  <div class="card-text fs-4">
                    <div class="sec-deg">${
                      response.forecast.forecastday[1].day.maxtemp_c
                    }<sup>o</sup>C</div>
                    <br>
                    <span class="fs-6">${
                      response.forecast.forecastday[1].day.mintemp_c
                    }<sup>o</sup>C</span>
                    <div class="sec_statues fs-5">${
                      response.forecast.forecastday[1].day.condition.text
                    }</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col col-md-12 col-sm-12 col-lg-4 g-0">
              <div class="card one three">
                <div class="card-header text-center text-white">${
                  daysOfWeek[(d.getDay() + 2) % 7]
                }</div>
                <div class="card-body text-center">
                   <img src="https:${
                     response.forecast.forecastday[2].day.condition.icon
                   }" alt="image">
                  <div class="card-text fs-4">
                    <div class="sec-deg">${
                      response.forecast.forecastday[2].day.maxtemp_c
                    }<sup>o</sup>C</div>
                    <br>
                    <span class="fs-6">${
                      response.forecast.forecastday[2].day.mintemp_c
                    }<sup>o</sup>C</span>
                    <div class="sec_statues fs-5">${
                      response.forecast.forecastday[2].day.condition.text
                    }</div>
                  </div>
                </div>
              </div>
            </div>

           `;

    row.innerHTML = container;
  } catch (error) {
    console.log("Error");
  }
}

getdata();
