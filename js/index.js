var labels = new Array(7);
var amounts = new Array(7);
var balance = 921.48;
const soft_red = "hsl(10, 79%, 65%)";
const cyan = "hsl(186, 34%, 60%)";

const data = {
  labels: "",
  datasets: [
    {
      label: "",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: "",
    },
  ],
};

async function getData() {
  const response = await fetch("./data.json");
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    labels[i] = data[i].day;
    amounts[i] = data[i].amount;
  }
  makeGraph(data, labels, amounts);
  setBalance(balance);
  setTotal(amounts);
}

function setBalance(balance) {
  document.getElementById("balance").innerHTML = "$" + balance;
}

function setTotal(amounts) {
  document.getElementById("total").innerHTML =
    "$" + amounts.reduce((a, b) => a + b);
}

// Array.prototype.max = function() {
//   return Math.max.apply(null, this);
// };

function getAmountArr(data) {
  var arr = new Array(7);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = data[i].amount;
  }
  return arr;
}

function getBGColorArr(data) {
  console.log(data)
  var max = Math.max.apply(Math, data)
  var arr = new Array(7)
  for (let i = 0; i < arr.length; i++) {
    if (data[i] != max) arr[i] = soft_red;
    else arr[i] = cyan;
  }
  return arr
}

function makeGraph(data, labels, amounts) {
  data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset",
        backgroundColor: getBGColorArr(getAmountArr(data)),
        borderColor: "hsl(10, 79%, 65%)",
        borderRadius: 3,
        borderSkipped: false,
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        barThickness: 30,
        data: amounts,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  };
  const myChart = new Chart(document.getElementById("myChart"), config);
}

getData();