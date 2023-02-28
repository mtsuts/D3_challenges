const input = document.querySelector(".input");
const search = document.querySelector(".button");
const err = document.querySelector(".err");
const svg = d3.select(".svg").attr('width', window.innerWidth);

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

let timeScale = d3
  .scaleTime()
  .domain([new Date(2022, 0, 1), new Date(2022, 0, 2)])
  .range([0, window.innerWidth- 100]);

let axis = d3.axisBottom(timeScale);
d3.select("#time").call(axis.tickFormat(d3.timeFormat("%I %p")));

const errorMsg = `<div class='error'> Country not Found </div>`;
err.insertAdjacentHTML("afterbegin", errorMsg);

search.addEventListener("click", function (e) {
  e.preventDefault();
  if (err.classList.contains("shown")) {
    err.classList.remove("shown");
  }
  const found = countryData.find(
    (d) =>
      input.value === d.countryName.toLowerCase() ||
      input.value === d.countryName
  );
  input.value = "";
  if (!found) {
    err.classList.add("shown");
    return;
  }
  let longitude = found.longitude;
  let latitude = found.latitude;

  const sunriseSunset = async () => {
    const response = await fetch(
      `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&date=today`
    );
    const data = await response.json();
    const results = data.results;
console.log(results)
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
          amOrPm === "PM" ? parseInt(hourStr) + 12 : parseInt(hourStr);
        const minute = parseInt(minuteStr);
        const second = parseInt(secondStr);

        return {
          name: d[0].replace('_', ' '),
          date: new Date(2022, 0, 1, hour, minute, second),
        };
      })
      .sort((a, b) => a.date - b.date);
    draw(newData);
  };
  sunriseSunset();
});




function draw(data) {
  svg.select("#lines").selectAll('g').data(data).join('g').attr('transform', (d,i) => {
    return `translate(${timeScale(d.date)}, ${i % 2 === 1 ? '200': '100'})`
  }).html((d,i) => {
    return `
    <line x1='0' x2='0' y1=${i % 2 ===1 ?'5' : '200'} y2=${i % 2 === 1 ? '100' : '300'} stroke="black"/>
   `
  })
  svg.select("#elements").selectAll('g').data(data).join('g').attr('transform', (d,i) => {
    return `translate(${timeScale(d.date)}, ${i % 2 === 1 ? '200': '400'})`
  }).html((d,i) => {
    return `
    <circle r="30" fill=${i % 2 === 1 ? '#F36A5A' : '#F3C200'}  stroke-width="4">  </circle>
    <text x="0" y="0" dominant-baseline="middle" text-anchor="middle" font-size='12px'> ${d.name}</text>
    `
  })
}


