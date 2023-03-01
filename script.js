const countryInput = document.querySelector(".country-input");
const longitudeInput = document.querySelector(".longitude-input");
const latitudeInput = document.querySelector(".latitude-input");
const searchCountry = document.querySelector("#second");
const searchCoords = document.querySelector("#first");
const err = document.querySelector(".err");
const svg = d3.select(".svg").attr("width", window.innerWidth);
const longBtn = document.querySelector(".long-lat");
const countryBtn = document.querySelector(".country");

function shownSearchLong() {
  return longBtn.classList.add("shown");
}

const data = [
  {
    name: "sunrise",
    share: 5,
  },
  {
    name: "sunset",
    share: 5,
  },
  {
    name: "firstLight",
    share: 5,
  },
  {
    name: "lastLight",
    share: 5,
  },
  {
    name: "dawn",
    share: 5,
  },
  {
    name: "dusk",
    share: 5,
  },
  {
    name: "solarNoon",
    share: 5,
  },
  {
    name: "goldenHour",
    share: 5,
  },
  {
    name: "dayLength",
    share: 5,
  },
];

const sunriseSunset = async (longitude, latitude) => {
  const response = await fetch(
    `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&date=today`
  );
  const data = await response.json();
  const results = data.results;
  console.log(results);
  const entries = Object.entries(results).filter(
    (x) => x[0] !== "timezone" && x[0] !== "day_length"
  );
  const newData = entries
    .map((d) => {
      const amOrPm = d[1].split(" ")[1];
      const [hourStr, minuteStr, secondStr] = d[1]
        .replace("AM", "")
        .replace("PM", "")
        .trim()
        .split(":");

      const hour =
        amOrPm === "PM" && +hourStr < 12
          ? parseInt(hourStr) + 12
          : parseInt(hourStr);
      const minute = parseInt(minuteStr);
      const second = parseInt(secondStr);

      // const date = d3.timeParse("%I:%M:%S %p")(d[1])

      return {
        name: d[0].replace("_", " "),
        date: new Date(2022, 0, 1, hour, minute, second),
      };
    })
    .sort((a, b) => a.date - b.date);
  console.log(newData);
  draw(newData);
};

let timeScale = d3
  .scaleTime()
  .domain([new Date(2022, 0, 1, 0, 0, 0), new Date(2022, 0, 2, 0, 0, 0)])
  .range([0, window.innerWidth - 100]);

let axis = d3.axisBottom(timeScale);
d3.select("#time").call(axis.tickFormat(d3.timeFormat("%I %p")));

const errorMsg = `<div class='error'> Country not Found </div>`;
err.insertAdjacentHTML("afterbegin", errorMsg);

searchCountry.addEventListener("click", function (e) {
  e.preventDefault();
  if (err.classList.contains("shown")) {
    err.classList.remove("shown");
  }
  const found = countryData.find(
    (d) =>
      countryInput.value === d.countryName.toLowerCase() ||
      countryInput.value === d.countryName
  );
  countryInput.value = "";
  if (!found) {
    err.classList.add("shown");
    return;
  }
  let longitude = found.longitude;
  let latitude = found.latitude;

  sunriseSunset(longitude, latitude);
});

searchCoords.addEventListener("click", function (e) {
  e.preventDefault();
  if (err.classList.contains("shown")) {
    err.classList.remove("shown");
    return;
  }
  let longitude = longitudeInput.value;
  let latitude = latitudeInput.value;

  sunriseSunset(longitude, latitude);
  longitudeInput.value = "";
  latitudeInput.value = "";
});

function draw(data) {
  const percentage = d3
    .scaleLinear()
    .domain([data[0].date, data[data.length - 1].date])
    .range([0, 1]);

  const colorScale = d3.interpolateYlOrBr;

  svg
    .select("#lines")
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", (d, i) => {
      return `translate(${timeScale(d.date)}, ${i % 2 === 1 ? "200" : "100"})`;
    })
    .html((d, i) => {
      return `
    <line x1='0' x2='0' y1=${i % 2 === 1 ? "5" : "200"} y2=${
        i % 2 === 1 ? "100" : "300"
      } stroke="#525E64"/>
   `;
    });
  svg
    .select("#elements")
    .selectAll("g")
    .data(data)
    .join("g")
    .attr("transform", (d, i) => {
      return `translate(${timeScale(d.date)}, ${i % 2 === 1 ? "200" : "400"})`;
    })
    .attr("class", "g")
    .html((d, i) => {
      return `<circle class="circle" r="30" fill='${colorScale(
        percentage(d.date)
      )}'  stroke-width="4">  </circle> 
    <foreignObject x="-20" y="-20" width="40" height="40"> 
    <div class='circle-text' style='color: ${
      percentage(d.date) > 0.75 ? "white" : "black"
    }'> ${d.name} </div>
    </foreignObject>
    `;
    })
    .each(function (d) {
      const el = this;

      if (el._tippy) el._tippy.destroy();

      const tooltip = getTooltipHtml(d.name, d.date);

      tippy(el, {
        content: tooltip,
        placement: "right",
        arrow: false,
        allowHTML: true,
        interactive: true,
        appendTo: () => document.body,
      });
    });
}

const colorScale = d3.scaleLinear().domain();

function getTooltipHtml(name, date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return ` 
  ${hours}:${minutes}:${seconds}
  `;
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
  sunriseSunset(crd.longitude, crd.latitude);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
