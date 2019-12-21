// $("[data-component-type='input-plus-minus']").fieldInputPlusMinus();

$("#contrato1").fieldInputPlusMinus();
$("#contrato2").fieldInputPlusMinus();
$("#contrato3").fieldInputPlusMinus();
$("#contrato4").fieldInputPlusMinus();
$("#contrato5").fieldInputPlusMinus();
$("#contrato6").fieldInputPlusMinus();

$("#contrato7").fieldSelectPlusMinus();
$("#contrato8").fieldSelectPlusMinus();
$("#contrato9").fieldSelectPlusMinus();
$("#contrato10").fieldSelectPlusMinus();

$("#contrato11").fieldSelectPlusMinusAutocomplete();
$("#contrato12").fieldSelectPlusMinusAutocomplete();
$("#contrato13").fieldSelectPlusMinusAutocomplete();
$("#contrato14").fieldSelectPlusMinusAutocomplete();

$("#buttonsearch1").button();
$("#buttonsearch2").button();
$("#buttonsearch21").button();
$("#buttonsearch3").button();
$("#grid1").grid();
$("#gridrecordscount1").gridrecordscount();
$("#tab1").tabgroup();
$("#sidebar1").sidebarwrapper();

$("[data-component-type='text']").fieldInput();

$("#fecha1").fielDate();
$("#fecha2").fielDate();
$("#fecha3").fielDate();
$("#fecha4").fielDate();

$("#negocio").fieldOptions();

$("#servicio_inversion").fieldCheckBox();
$("#formcontrato").form();

$("#ejemploaccordion").customaccordion();

$("#splitter").fieldSplitter();

$("#payment").select();

$("#graficasaccordion").customaccordion();
// Data of Stack Chart, prompt from service
let rendimientos = [
  {
    mes: "January",
    dataA: 0.5,
    dataB: 0.23
  },
  {
    mes: "February",
    dataA: 1,
    dataB: -0.5
  },
  {
    mes: "March",
    dataA: 2.2,
    dataB: -1.6
  },
  {
    mes: "April",
    dataA: 4.5,
    dataB: -3.5
  },
  {
    mes: "May",
    dataA: 7.5,
    dataB: -5.5
  }
];

let dataSetstcY1 = [];
let dataSetstcY2 = [];
let dataSetstcX = [];
for (let i = 0; i < rendimientos.length; i++) {
  let data = rendimientos[i];
  dataSetstcX.push(data.mes);
  dataSetstcY1.push(data.dataA);
  dataSetstcY2.push(data.dataB);
}

stackChart({
  id: "stackChart",
  titleX: "Cifras de rendimientos, tasas e inflación con fines ilustrativos",
  titleY: "Tasa Efectiva del Mejor y Peor Mes",
  labels: dataSetstcX,
  tickMaxY: 8.0,
  tickMinY: -8.0,
  tickStepY: 2.0,
  dataSet: [
    {
      label: "Peor Mes",
      backgroundColor: "#2b6cb0",
      data: dataSetstcY1
    },
    {
      label: "Mejor Mes",
      backgroundColor: "#c53030",
      data: dataSetstcY2
    }
  ],
  width: "400px",
  height: "200px"
});

// Data of Bar Chart, prompt from service
let promediosbc = [
  {
    horizonte: "A (Liquidez)",
    dataA: 4,
    dataB: 3.8
  },
  {
    horizonte: "B (Conservación)",
    dataA: 4,
    dataB: 0
  },
  {
    horizonte: "C (Equilibrio)",
    dataA: 4,
    dataB: 5.5
  },
  {
    horizonte: "D (Incremento)",
    dataA: 4,
    dataB: 7
  },
  {
    horizonte: "E (Maximización)",
    dataA: 4,
    dataB: 9
  },
  {
    horizonte: "",
    dataA: 4
  },
  {
    horizonte: ""
  }
];

let dataSetbcY1 = [];
let dataSetbcY2 = [];
let dataSetbcX = [];
for (let i = 0; i < promediosbc.length; i++) {
  let data = promediosbc[i];
  dataSetbcX.push(data.horizonte);
  dataSetbcY1.push(data.dataA);
  dataSetbcY2.push(data.dataB);
}
barChart({
  id: "barChart",
  titleX: "Cifras de rendimientos, tasas e inflación con fines ilustrativos",
  titleY: "Rendimientos Promedio Anual",
  labels: dataSetbcX,
  tickMaxY: 15.0,
  tickMinY: 0,
  tickStepY: 1,
  width: "400px",
  height: "200px",
  dataSet: [
    {
      type: "line",
      label: "Promedio",
      backgroundColor: "#c53030",
      data: dataSetbcY1,
      fill: false,
      borderColor: "#c53030",
      borderWidth: 2
    },
    {
      type: "bar",
      label: "Real",
      backgroundColor: "#2b6cb0",
      data: dataSetbcY2
    }
  ]
});

// Data of N Bar Chart, prompt from service
let promediosNBar = [
  {
    horizonte: "A (Liquidez)",
    dataA: 0,
    dataB: 3.8,
    dataC: -6,
    dataD: 9.8
  },
  {
    horizonte: "B (Conservación)",
    dataA: 0,
    dataB: 4.2,
    dataC: 5.6,
    dataD: -6.9
  },
  {
    horizonte: "C (Equilibrio)",
    dataA: 0,
    dataB: -5.5,
    dataC: 7.8,
    dataD: 5.5
  },
  {
    horizonte: "D (Incremento)",
    dataA: 0,
    dataB: 7,
    dataC: 8,
    dataD: 10,
    dataE: 11
  },
  {
    horizonte: "E (Maximización)",
    dataA: 0,
    dataB: 9,
    dataC: 6
  }
];

let dataSetnbY1 = [];
let dataSetnbY2 = [];
let dataSetnbY3 = [];
let dataSetnbY4 = [];
let dataSetnbY5 = [];
let dataSetnbX = [];

for (let i = 0; i < promediosNBar.length; i++) {
  let data = promediosNBar[i];
  dataSetnbX.push(data.horizonte);
  dataSetnbY1.push(data.dataA);
  dataSetnbY2.push(data.dataB);
  dataSetnbY3.push(data.dataC);
  dataSetnbY4.push(data.dataD);
  dataSetnbY5.push(data.dataE);
}

barChartNBar({
  id: "barChartNBar",
  titleX: "Cifras de rendimientos, tasas e inflación con fines ilustrativos",
  titleY: "Rendimientos Promedio Anual",
  labels: dataSetnbX,
  tickMaxY: 15.0,
  tickMinY: -15,
  tickStepY: 1,
  width: "400px",
  height: "200px",
  dataSet: [
    {
      type: "line",
      label: "Promedio",
      backgroundColor: "#c53030",
      data: dataSetnbY1,
      fill: false,
      borderColor: "#c53030",
      borderWidth: 2
    },
    {
      type: "bar",
      label: "Real",
      backgroundColor: "#2b6cb0",
      data: dataSetnbY2
    },
    {
      type: "bar",
      label: "Real2",
      backgroundColor: "#ffb3b3",
      data: dataSetnbY3
    },
    {
      type: "bar",
      label: "Real3",
      backgroundColor: "#b3ffb3",
      data: dataSetnbY4
    },
    {
      type: "bar",
      label: "Real4",
      backgroundColor: "#ffff66",
      data: dataSetnbY5
    }
  ]
});

// Data of Line Chart, prompt from service
let rates = [
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:15:00",
    askClose: 1277.25,
    bidHigh: 1276.8,
    bidLow: 1276.55,
    askHigh: 1277.3,
    askLow: 1277.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:20:00",
    askClose: 1277.20001,
    bidHigh: 1276.8,
    bidLow: 1276.55,
    askHigh: 1277.3,
    askLow: 1277.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:25:00",
    bidOpen: 1276.6,
    bidClose: 1276.70001,
    askOpen: 1277.1,
    askClose: 1277.20001,
    bidHigh: 1276.90001,
    bidLow: 1276.45001,
    askHigh: 1277.40001,
    askLow: 1276.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:30:00",
    bidOpen: 1276.85,
    bidClose: 1277.1,
    askOpen: 1277.35,
    askClose: 1277.6,
    bidHigh: 1277.20001,
    bidLow: 1276.75,
    askHigh: 1277.70001,
    askLow: 1277.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:35:00",
    bidOpen: 1277.1,
    bidClose: 1276.95001,
    askOpen: 1277.6,
    askClose: 1277.45001,
    bidHigh: 1277.40001,
    bidLow: 1276.90001,
    askHigh: 1277.90001,
    askLow: 1277.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:40:00",
    bidOpen: 1276.95001,
    bidClose: 1277.1,
    askOpen: 1277.45001,
    askClose: 1277.6,
    bidHigh: 1277.1,
    bidLow: 1276.6,
    askHigh: 1277.6,
    askLow: 1277.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:45:00",
    bidOpen: 1277.1,
    bidClose: 1276.95001,
    askOpen: 1277.6,
    askClose: 1277.45001,
    bidHigh: 1277.1,
    bidLow: 1276.8,
    askHigh: 1277.6,
    askLow: 1277.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:50:00",
    bidOpen: 1276.95001,
    bidClose: 1277.40001,
    askOpen: 1277.45001,
    askClose: 1277.90001,
    bidHigh: 1277.40001,
    bidLow: 1276.95001,
    askHigh: 1277.90001,
    askLow: 1277.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:55:00",
    bidOpen: 1277.40001,
    bidClose: 1277.5,
    askOpen: 1277.90001,
    askClose: 1278,
    bidHigh: 1277.5,
    bidLow: 1277,
    askHigh: 1278,
    askLow: 1277.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:00:00",
    bidOpen: 1277.55,
    bidClose: 1277.05,
    askOpen: 1278.05,
    askClose: 1277.55,
    bidHigh: 1277.6,
    bidLow: 1276.90001,
    askHigh: 1278.1,
    askLow: 1277.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:05:00",
    bidOpen: 1277.05,
    bidClose: 1276.70001,
    askOpen: 1277.55,
    askClose: 1277.20001,
    bidHigh: 1277.05,
    bidLow: 1276.65001,
    askHigh: 1277.55,
    askLow: 1277.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:10:00",
    bidOpen: 1276.70001,
    bidClose: 1277.15001,
    askOpen: 1277.20001,
    askClose: 1277.65001,
    bidHigh: 1277.15001,
    bidLow: 1276.70001,
    askHigh: 1277.65001,
    askLow: 1277.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:15:00",
    bidOpen: 1277.1,
    bidClose: 1277.40001,
    askOpen: 1277.6,
    askClose: 1277.90001,
    bidHigh: 1277.65001,
    bidLow: 1277.1,
    askHigh: 1278.15001,
    askLow: 1277.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:20:00",
    bidOpen: 1277.40001,
    bidClose: 1277.8,
    askOpen: 1277.90001,
    askClose: 1278.3,
    bidHigh: 1277.90001,
    bidLow: 1277.40001,
    askHigh: 1278.40001,
    askLow: 1277.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:25:00",
    bidOpen: 1277.8,
    bidClose: 1277.8,
    askOpen: 1278.3,
    askClose: 1278.3,
    bidHigh: 1277.90001,
    bidLow: 1277.6,
    askHigh: 1278.40001,
    askLow: 1278.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:30:00",
    bidOpen: 1277.70001,
    bidClose: 1278.20001,
    askOpen: 1278.20001,
    askClose: 1278.70001,
    bidHigh: 1278.20001,
    bidLow: 1277.6,
    askHigh: 1278.70001,
    askLow: 1278.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:35:00",
    bidOpen: 1278.3,
    bidClose: 1278.40001,
    askOpen: 1278.8,
    askClose: 1278.90001,
    bidHigh: 1278.40001,
    bidLow: 1278.05,
    askHigh: 1278.90001,
    askLow: 1278.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:40:00",
    bidOpen: 1278.40001,
    bidClose: 1277.90001,
    askOpen: 1278.90001,
    askClose: 1278.40001,
    bidHigh: 1278.40001,
    bidLow: 1277.6,
    askHigh: 1278.90001,
    askLow: 1278.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:45:00",
    bidOpen: 1277.8,
    bidClose: 1277.6,
    askOpen: 1278.3,
    askClose: 1278.1,
    bidHigh: 1278,
    bidLow: 1277.5,
    askHigh: 1278.5,
    askLow: 1278
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:50:00",
    bidOpen: 1277.6,
    bidClose: 1278,
    askOpen: 1278.1,
    askClose: 1278.5,
    bidHigh: 1278.20001,
    bidLow: 1277.20001,
    askHigh: 1278.70001,
    askLow: 1277.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:55:00",
    bidOpen: 1278.1,
    bidClose: 1277.90001,
    askOpen: 1278.6,
    askClose: 1278.40001,
    bidHigh: 1278.3,
    bidLow: 1277.8,
    askHigh: 1278.8,
    askLow: 1278.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:00:00",
    bidOpen: 1277.90001,
    bidClose: 1279.05,
    askOpen: 1278.40001,
    askClose: 1279.55,
    bidHigh: 1279.75,
    bidLow: 1277.8,
    askHigh: 1280.25,
    askLow: 1278.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:05:00",
    bidOpen: 1279.05,
    bidClose: 1279.8,
    askOpen: 1279.55,
    askClose: 1280.3,
    bidHigh: 1279.8,
    bidLow: 1279.05,
    askHigh: 1280.3,
    askLow: 1279.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:10:00",
    bidOpen: 1279.75,
    bidClose: 1279.8,
    askOpen: 1280.25,
    askClose: 1280.3,
    bidHigh: 1280.1,
    bidLow: 1279.35,
    askHigh: 1280.6,
    askLow: 1279.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:15:00",
    bidOpen: 1279.85,
    bidClose: 1279.75,
    askOpen: 1280.35,
    askClose: 1280.25,
    bidHigh: 1280.25,
    bidLow: 1279.40001,
    askHigh: 1280.75,
    askLow: 1279.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:20:00",
    bidOpen: 1279.8,
    bidClose: 1282.35,
    askOpen: 1280.3,
    askClose: 1282.85,
    bidHigh: 1283.8,
    bidLow: 1279.45001,
    askHigh: 1284.3,
    askLow: 1279.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:25:00",
    bidOpen: 1282.40001,
    bidClose: 1281.65001,
    askOpen: 1282.90001,
    askClose: 1282.15001,
    bidHigh: 1283,
    bidLow: 1281.15001,
    askHigh: 1283.5,
    askLow: 1281.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:30:00",
    bidOpen: 1281.65001,
    bidClose: 1281.5,
    askOpen: 1282.15001,
    askClose: 1282,
    bidHigh: 1281.85,
    bidLow: 1281.25,
    askHigh: 1282.35,
    askLow: 1281.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:35:00",
    bidOpen: 1281.5,
    bidClose: 1281.90001,
    askOpen: 1282,
    askClose: 1282.40001,
    bidHigh: 1282.6,
    bidLow: 1281.20001,
    askHigh: 1283.1,
    askLow: 1281.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:40:00",
    bidOpen: 1281.85,
    bidClose: 1281.5,
    askOpen: 1282.35,
    askClose: 1282,
    bidHigh: 1282,
    bidLow: 1281.45001,
    askHigh: 1282.5,
    askLow: 1281.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:45:00",
    bidOpen: 1281.5,
    bidClose: 1281.3,
    askOpen: 1282,
    askClose: 1281.8,
    bidHigh: 1282.15001,
    bidLow: 1281.20001,
    askHigh: 1282.65001,
    askLow: 1281.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:50:00",
    bidOpen: 1281.25,
    bidClose: 1280.70001,
    askOpen: 1281.75,
    askClose: 1281.20001,
    bidHigh: 1281.25,
    bidLow: 1280.55,
    askHigh: 1281.75,
    askLow: 1281.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:55:00",
    bidOpen: 1280.70001,
    bidClose: 1281.45001,
    askOpen: 1281.20001,
    askClose: 1281.95001,
    bidHigh: 1281.65001,
    bidLow: 1280.70001,
    askHigh: 1282.15001,
    askLow: 1281.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:00:00",
    bidOpen: 1281.45001,
    bidClose: 1282.25,
    askOpen: 1281.95001,
    askClose: 1282.75,
    bidHigh: 1282.70001,
    bidLow: 1281.40001,
    askHigh: 1283.20001,
    askLow: 1281.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:05:00",
    bidOpen: 1282.25,
    bidClose: 1282,
    askOpen: 1282.75,
    askClose: 1282.5,
    bidHigh: 1282.45001,
    bidLow: 1281.65001,
    askHigh: 1282.95001,
    askLow: 1282.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:10:00",
    bidOpen: 1282,
    bidClose: 1280.70001,
    askOpen: 1282.5,
    askClose: 1281.20001,
    bidHigh: 1282.1,
    bidLow: 1280.35,
    askHigh: 1282.6,
    askLow: 1280.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:15:00",
    bidOpen: 1280.70001,
    bidClose: 1280.70001,
    askOpen: 1281.20001,
    askClose: 1281.20001,
    bidHigh: 1281.65001,
    bidLow: 1280.35,
    askHigh: 1282.15001,
    askLow: 1280.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:20:00",
    bidOpen: 1280.75,
    bidClose: 1281.25,
    askOpen: 1281.25,
    askClose: 1281.75,
    bidHigh: 1281.75,
    bidLow: 1280.70001,
    askHigh: 1282.25,
    askLow: 1281.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:25:00",
    bidOpen: 1281.35,
    bidClose: 1281.05,
    askOpen: 1281.85,
    askClose: 1281.55,
    bidHigh: 1281.65001,
    bidLow: 1281,
    askHigh: 1282.15001,
    askLow: 1281.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:30:00",
    bidOpen: 1281,
    bidClose: 1281,
    askOpen: 1281.5,
    askClose: 1281.5,
    bidHigh: 1281.25,
    bidLow: 1280.85,
    askHigh: 1281.75,
    askLow: 1281.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:35:00",
    bidOpen: 1281.05,
    bidClose: 1281.25,
    askOpen: 1281.55,
    askClose: 1281.75,
    bidHigh: 1281.45001,
    bidLow: 1280.65001,
    askHigh: 1281.95001,
    askLow: 1281.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:40:00",
    bidOpen: 1281.25,
    bidClose: 1281.20001,
    askOpen: 1281.75,
    askClose: 1281.70001,
    bidHigh: 1281.35,
    bidLow: 1281,
    askHigh: 1281.85,
    askLow: 1281.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:45:00",
    bidOpen: 1281.20001,
    bidClose: 1281.20001,
    askOpen: 1281.70001,
    askClose: 1281.70001,
    bidHigh: 1281.20001,
    bidLow: 1280.85,
    askHigh: 1281.70001,
    askLow: 1281.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:50:00",
    bidOpen: 1281.20001,
    bidClose: 1280.8,
    askOpen: 1281.70001,
    askClose: 1281.3,
    bidHigh: 1281.3,
    bidLow: 1280.70001,
    askHigh: 1281.8,
    askLow: 1281.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:55:00",
    bidOpen: 1280.8,
    bidClose: 1280.5,
    askOpen: 1281.3,
    askClose: 1281,
    bidHigh: 1280.85,
    bidLow: 1280.40001,
    askHigh: 1281.35,
    askLow: 1280.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:00:00",
    bidOpen: 1280.5,
    bidClose: 1280.3,
    askOpen: 1281,
    askClose: 1280.8,
    bidHigh: 1280.85,
    bidLow: 1279.90001,
    askHigh: 1281.35,
    askLow: 1280.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:05:00",
    bidOpen: 1280.25,
    bidClose: 1281,
    askOpen: 1280.75,
    askClose: 1281.5,
    bidHigh: 1281,
    bidLow: 1280,
    askHigh: 1281.5,
    askLow: 1280.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:10:00",
    bidOpen: 1281,
    bidClose: 1281.15001,
    askOpen: 1281.5,
    askClose: 1281.65001,
    bidHigh: 1281.15001,
    bidLow: 1280.75,
    askHigh: 1281.65001,
    askLow: 1281.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:15:00",
    bidOpen: 1281.15001,
    bidClose: 1280.40001,
    askOpen: 1281.65001,
    askClose: 1280.90001,
    bidHigh: 1281.55,
    bidLow: 1280.25,
    askHigh: 1282.05,
    askLow: 1280.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:20:00",
    bidOpen: 1280.40001,
    bidClose: 1281.8,
    askOpen: 1280.90001,
    askClose: 1282.3,
    bidHigh: 1282,
    bidLow: 1280.40001,
    askHigh: 1282.5,
    askLow: 1280.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:25:00",
    bidOpen: 1281.8,
    bidClose: 1282.05,
    askOpen: 1282.3,
    askClose: 1282.55,
    bidHigh: 1282.15001,
    bidLow: 1281.25,
    askHigh: 1282.65001,
    askLow: 1281.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:30:00",
    bidOpen: 1282,
    bidClose: 1281.25,
    askOpen: 1282.5,
    askClose: 1281.75,
    bidHigh: 1282.15001,
    bidLow: 1281.15001,
    askHigh: 1282.65001,
    askLow: 1281.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:35:00",
    bidOpen: 1281.25,
    bidClose: 1280.95001,
    askOpen: 1281.75,
    askClose: 1281.45001,
    bidHigh: 1281.45001,
    bidLow: 1280.85,
    askHigh: 1281.95001,
    askLow: 1281.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:40:00",
    bidOpen: 1280.95001,
    bidClose: 1281.25,
    askOpen: 1281.45001,
    askClose: 1281.75,
    bidHigh: 1281.3,
    bidLow: 1280.55,
    askHigh: 1281.8,
    askLow: 1281.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:45:00",
    bidOpen: 1281.3,
    bidClose: 1280.40001,
    askOpen: 1281.8,
    askClose: 1280.90001,
    bidHigh: 1281.3,
    bidLow: 1280.40001,
    askHigh: 1281.8,
    askLow: 1280.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:50:00",
    bidOpen: 1280.35,
    bidClose: 1280.45001,
    askOpen: 1280.85,
    askClose: 1280.95001,
    bidHigh: 1280.55,
    bidLow: 1278.8,
    askHigh: 1281.05,
    askLow: 1279.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:55:00",
    bidOpen: 1280.5,
    bidClose: 1281.40001,
    askOpen: 1281,
    askClose: 1281.90001,
    bidHigh: 1282.95001,
    bidLow: 1280.20001,
    askHigh: 1283.45001,
    askLow: 1280.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:00:00",
    bidOpen: 1281.40001,
    bidClose: 1281.6,
    askOpen: 1281.90001,
    askClose: 1282.1,
    bidHigh: 1281.90001,
    bidLow: 1281.40001,
    askHigh: 1282.40001,
    askLow: 1281.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:05:00",
    bidOpen: 1281.70001,
    bidClose: 1282.1,
    askOpen: 1282.20001,
    askClose: 1282.6,
    bidHigh: 1282.3,
    bidLow: 1281.6,
    askHigh: 1282.8,
    askLow: 1282.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:10:00",
    bidOpen: 1282.1,
    bidClose: 1281.6,
    askOpen: 1282.6,
    askClose: 1282.1,
    bidHigh: 1282.1,
    bidLow: 1281.5,
    askHigh: 1282.6,
    askLow: 1282
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:15:00",
    bidOpen: 1281.6,
    bidClose: 1282,
    askOpen: 1282.1,
    askClose: 1282.5,
    bidHigh: 1282,
    bidLow: 1281.55,
    askHigh: 1282.5,
    askLow: 1282.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:20:00",
    bidOpen: 1281.95001,
    bidClose: 1281.6,
    askOpen: 1282.45001,
    askClose: 1282.1,
    bidHigh: 1282.1,
    bidLow: 1281.5,
    askHigh: 1282.6,
    askLow: 1282
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:25:00",
    bidOpen: 1281.55,
    bidClose: 1281.55,
    askOpen: 1282.05,
    askClose: 1282.05,
    bidHigh: 1281.8,
    bidLow: 1281.20001,
    askHigh: 1282.3,
    askLow: 1281.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:30:00",
    bidOpen: 1281.55,
    bidClose: 1281.15001,
    askOpen: 1282.05,
    askClose: 1281.65001,
    bidHigh: 1281.65001,
    bidLow: 1280.90001,
    askHigh: 1282.15001,
    askLow: 1281.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:35:00",
    bidOpen: 1281,
    bidClose: 1281.1,
    askOpen: 1281.5,
    askClose: 1281.6,
    bidHigh: 1281.35,
    bidLow: 1280.85,
    askHigh: 1281.85,
    askLow: 1281.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:40:00",
    bidOpen: 1281.15001,
    bidClose: 1281.65001,
    askOpen: 1281.65001,
    askClose: 1282.15001,
    bidHigh: 1281.95001,
    bidLow: 1281.05,
    askHigh: 1282.45001,
    askLow: 1281.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:45:00",
    bidOpen: 1281.70001,
    bidClose: 1281.70001,
    askOpen: 1282.20001,
    askClose: 1282.20001,
    bidHigh: 1281.85,
    bidLow: 1281.45001,
    askHigh: 1282.35,
    askLow: 1281.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:50:00",
    bidOpen: 1281.8,
    bidClose: 1281.6,
    askOpen: 1282.3,
    askClose: 1282.1,
    bidHigh: 1281.8,
    bidLow: 1281.25,
    askHigh: 1282.3,
    askLow: 1281.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:55:00",
    bidOpen: 1281.6,
    bidClose: 1281.6,
    askOpen: 1282.1,
    askClose: 1282.1,
    bidHigh: 1281.70001,
    bidLow: 1281.45001,
    askHigh: 1282.20001,
    askLow: 1281.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:00:00",
    bidOpen: 1281.70001,
    bidClose: 1282.15001,
    askOpen: 1282.20001,
    askClose: 1282.65001,
    bidHigh: 1282.35,
    bidLow: 1281.45001,
    askHigh: 1282.85,
    askLow: 1281.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:05:00",
    bidOpen: 1282.05,
    bidClose: 1281.95001,
    askOpen: 1282.55,
    askClose: 1282.45001,
    bidHigh: 1282.35,
    bidLow: 1281.75,
    askHigh: 1282.85,
    askLow: 1282.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:10:00",
    bidOpen: 1281.95001,
    bidClose: 1281.35,
    askOpen: 1282.45001,
    askClose: 1281.85,
    bidHigh: 1281.95001,
    bidLow: 1281.25,
    askHigh: 1282.45001,
    askLow: 1281.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:15:00",
    bidOpen: 1281.3,
    bidClose: 1281.55,
    askOpen: 1281.8,
    askClose: 1282.05,
    bidHigh: 1281.70001,
    bidLow: 1280.95001,
    askHigh: 1282.20001,
    askLow: 1281.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:20:00",
    bidOpen: 1281.65001,
    bidClose: 1281.6,
    askOpen: 1282.15001,
    askClose: 1282.1,
    bidHigh: 1281.75,
    bidLow: 1281.55,
    askHigh: 1282.25,
    askLow: 1282.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:25:00",
    bidOpen: 1281.6,
    bidClose: 1281.75,
    askOpen: 1282.1,
    askClose: 1282.25,
    bidHigh: 1281.95001,
    bidLow: 1281.55,
    askHigh: 1282.45001,
    askLow: 1282.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:30:00",
    bidOpen: 1281.65001,
    bidClose: 1281.8,
    askOpen: 1282.15001,
    askClose: 1282.3,
    bidHigh: 1282.15001,
    bidLow: 1281.65001,
    askHigh: 1282.65001,
    askLow: 1282.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:35:00",
    bidOpen: 1281.85,
    bidClose: 1281.55,
    askOpen: 1282.35,
    askClose: 1282.05,
    bidHigh: 1281.95001,
    bidLow: 1281.45001,
    askHigh: 1282.45001,
    askLow: 1281.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:40:00",
    bidOpen: 1281.55,
    bidClose: 1281.35,
    askOpen: 1282.05,
    askClose: 1281.85,
    bidHigh: 1281.8,
    bidLow: 1281.25,
    askHigh: 1282.3,
    askLow: 1281.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:45:00",
    bidOpen: 1281.40001,
    bidClose: 1282.15001,
    askOpen: 1281.90001,
    askClose: 1282.65001,
    bidHigh: 1282.20001,
    bidLow: 1281.05,
    askHigh: 1282.70001,
    askLow: 1281.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:50:00",
    bidOpen: 1282.15001,
    bidClose: 1282.55,
    askOpen: 1282.65001,
    askClose: 1283.05,
    bidHigh: 1282.65001,
    bidLow: 1282.15001,
    askHigh: 1283.15001,
    askLow: 1282.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:55:00",
    bidOpen: 1282.5,
    bidClose: 1282.25,
    askOpen: 1283,
    askClose: 1282.75,
    bidHigh: 1282.6,
    bidLow: 1281.85,
    askHigh: 1283.1,
    askLow: 1282.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:00:00",
    bidOpen: 1282.3,
    bidClose: 1282.05,
    askOpen: 1282.8,
    askClose: 1282.55,
    bidHigh: 1282.35,
    bidLow: 1281.95001,
    askHigh: 1282.85,
    askLow: 1282.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:05:00",
    bidOpen: 1282.05,
    bidClose: 1282.45001,
    askOpen: 1282.55,
    askClose: 1282.95001,
    bidHigh: 1282.8,
    bidLow: 1282.05,
    askHigh: 1283.3,
    askLow: 1282.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:10:00",
    bidOpen: 1282.45001,
    bidClose: 1281.90001,
    askOpen: 1282.95001,
    askClose: 1282.40001,
    bidHigh: 1282.70001,
    bidLow: 1281.85,
    askHigh: 1283.20001,
    askLow: 1282.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:15:00",
    bidOpen: 1281.85,
    bidClose: 1281.8,
    askOpen: 1282.35,
    askClose: 1282.3,
    bidHigh: 1282.1,
    bidLow: 1281.65001,
    askHigh: 1282.6,
    askLow: 1282.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:20:00",
    bidOpen: 1281.85,
    bidClose: 1282,
    askOpen: 1282.35,
    askClose: 1282.5,
    bidHigh: 1282.15001,
    bidLow: 1281.70001,
    askHigh: 1282.65001,
    askLow: 1282.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:25:00",
    bidOpen: 1282.05,
    bidClose: 1282.05,
    askOpen: 1282.55,
    askClose: 1282.55,
    bidHigh: 1282.25,
    bidLow: 1281.95001,
    askHigh: 1282.75,
    askLow: 1282.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:30:00",
    bidOpen: 1281.85,
    bidClose: 1281,
    askOpen: 1282.35,
    askClose: 1281.5,
    bidHigh: 1282,
    bidLow: 1280.95001,
    askHigh: 1282.5,
    askLow: 1281.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:35:00",
    bidOpen: 1281.05,
    bidClose: 1281.45001,
    askOpen: 1281.55,
    askClose: 1281.95001,
    bidHigh: 1281.45001,
    bidLow: 1280.65001,
    askHigh: 1281.95001,
    askLow: 1281.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:40:00",
    bidOpen: 1281.40001,
    bidClose: 1281.6,
    askOpen: 1281.90001,
    askClose: 1282.1,
    bidHigh: 1281.65001,
    bidLow: 1281.15001,
    askHigh: 1282.15001,
    askLow: 1281.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:45:00",
    bidOpen: 1281.5,
    bidClose: 1281.45001,
    askOpen: 1282,
    askClose: 1281.95001,
    bidHigh: 1281.65001,
    bidLow: 1281.1,
    askHigh: 1282.15001,
    askLow: 1281.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:50:00",
    bidOpen: 1281.5,
    bidClose: 1281.5,
    askOpen: 1282,
    askClose: 1282,
    bidHigh: 1281.55,
    bidLow: 1281.15001,
    askHigh: 1282.05,
    askLow: 1281.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:55:00",
    bidOpen: 1281.55,
    bidClose: 1281.85,
    askOpen: 1282.05,
    askClose: 1282.35,
    bidHigh: 1281.85,
    bidLow: 1281.35,
    askHigh: 1282.35,
    askLow: 1281.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:00:00",
    bidOpen: 1281.8,
    bidClose: 1282.6,
    askOpen: 1282.3,
    askClose: 1283.1,
    bidHigh: 1282.65001,
    bidLow: 1281.8,
    askHigh: 1283.15001,
    askLow: 1282.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:05:00",
    bidOpen: 1282.6,
    bidClose: 1282.8,
    askOpen: 1283.1,
    askClose: 1283.3,
    bidHigh: 1283.15001,
    bidLow: 1282.5,
    askHigh: 1283.65001,
    askLow: 1283
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:10:00",
    bidOpen: 1282.6,
    bidClose: 1282.35,
    askOpen: 1283.1,
    askClose: 1282.85,
    bidHigh: 1282.85,
    bidLow: 1281.85,
    askHigh: 1283.35,
    askLow: 1282.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:15:00",
    bidOpen: 1282.3,
    bidClose: 1283.75,
    askOpen: 1282.8,
    askClose: 1284.25,
    bidHigh: 1283.75,
    bidLow: 1282.25,
    askHigh: 1284.25,
    askLow: 1282.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:20:00",
    bidOpen: 1284.35,
    bidClose: 1282.75,
    askOpen: 1284.85,
    askClose: 1283.25,
    bidHigh: 1284.55,
    bidLow: 1282.1,
    askHigh: 1285.05,
    askLow: 1282.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:25:00",
    bidOpen: 1282.75,
    bidClose: 1283.5,
    askOpen: 1283.25,
    askClose: 1284,
    bidHigh: 1283.95001,
    bidLow: 1282.55,
    askHigh: 1284.45001,
    askLow: 1283.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:30:00",
    bidOpen: 1284.6,
    bidClose: 1284.65001,
    askOpen: 1285.1,
    askClose: 1285.15001,
    bidHigh: 1285.40001,
    bidLow: 1283.40001,
    askHigh: 1285.90001,
    askLow: 1283.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:35:00",
    bidOpen: 1284.65001,
    bidClose: 1286.15001,
    askOpen: 1285.15001,
    askClose: 1286.65001,
    bidHigh: 1286.35,
    bidLow: 1284.45001,
    askHigh: 1286.85,
    askLow: 1284.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:40:00",
    bidOpen: 1286.20001,
    bidClose: 1287.45001,
    askOpen: 1286.70001,
    askClose: 1287.95001,
    bidHigh: 1287.55,
    bidLow: 1286.20001,
    askHigh: 1288.05,
    askLow: 1286.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:45:00",
    bidOpen: 1287.40001,
    bidClose: 1287.20001,
    askOpen: 1287.90001,
    askClose: 1287.70001,
    bidHigh: 1288.5,
    bidLow: 1286.75,
    askHigh: 1289,
    askLow: 1287.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:50:00",
    bidOpen: 1287.25,
    bidClose: 1286.75,
    askOpen: 1287.75,
    askClose: 1287.25,
    bidHigh: 1287.65001,
    bidLow: 1286.65001,
    askHigh: 1288.15001,
    askLow: 1287.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:55:00",
    bidOpen: 1286.70001,
    bidClose: 1286.40001,
    askOpen: 1287.20001,
    askClose: 1286.90001,
    bidHigh: 1287.05,
    bidLow: 1286.20001,
    askHigh: 1287.55,
    askLow: 1286.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:00:00",
    bidOpen: 1286.40001,
    bidClose: 1286.15001,
    askOpen: 1286.90001,
    askClose: 1286.65001,
    bidHigh: 1287.20001,
    bidLow: 1285.90001,
    askHigh: 1287.70001,
    askLow: 1286.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:05:00",
    bidOpen: 1286.20001,
    bidClose: 1286.3,
    askOpen: 1286.70001,
    askClose: 1286.8,
    bidHigh: 1287.20001,
    bidLow: 1286.1,
    askHigh: 1287.70001,
    askLow: 1286.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:10:00",
    bidOpen: 1286.3,
    bidClose: 1286,
    askOpen: 1286.8,
    askClose: 1286.5,
    bidHigh: 1286.40001,
    bidLow: 1285.3,
    askHigh: 1286.90001,
    askLow: 1285.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:15:00",
    bidOpen: 1285.90001,
    bidClose: 1287.5,
    askOpen: 1286.40001,
    askClose: 1288,
    bidHigh: 1287.6,
    bidLow: 1285.90001,
    askHigh: 1288.1,
    askLow: 1286.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:20:00",
    bidOpen: 1287.5,
    bidClose: 1286.3,
    askOpen: 1288,
    askClose: 1286.8,
    bidHigh: 1287.8,
    bidLow: 1286.3,
    askHigh: 1288.3,
    askLow: 1286.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:25:00",
    bidOpen: 1286.20001,
    bidClose: 1286.20001,
    askOpen: 1286.70001,
    askClose: 1286.70001,
    bidHigh: 1286.40001,
    bidLow: 1285.5,
    askHigh: 1286.90001,
    askLow: 1286
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:30:00",
    bidOpen: 1286.20001,
    bidClose: 1286.05,
    askOpen: 1286.70001,
    askClose: 1286.55,
    bidHigh: 1286.70001,
    bidLow: 1285.8,
    askHigh: 1287.20001,
    askLow: 1286.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:35:00",
    bidOpen: 1286.05,
    bidClose: 1285.05,
    askOpen: 1286.55,
    askClose: 1285.55,
    bidHigh: 1286.20001,
    bidLow: 1284.75,
    askHigh: 1286.70001,
    askLow: 1285.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:40:00",
    bidOpen: 1285.05,
    bidClose: 1286,
    askOpen: 1285.55,
    askClose: 1286.5,
    bidHigh: 1286.45001,
    bidLow: 1284.8,
    askHigh: 1286.95001,
    askLow: 1285.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:45:00",
    bidOpen: 1285.95001,
    bidClose: 1285.6,
    askOpen: 1286.45001,
    askClose: 1286.1,
    bidHigh: 1286.45001,
    bidLow: 1285.35,
    askHigh: 1286.95001,
    askLow: 1285.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:50:00",
    bidOpen: 1285.6,
    bidClose: 1285.45001,
    askOpen: 1286.1,
    askClose: 1285.95001,
    bidHigh: 1285.70001,
    bidLow: 1284.95001,
    askHigh: 1286.20001,
    askLow: 1285.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:55:00",
    bidOpen: 1285.40001,
    bidClose: 1285.1,
    askOpen: 1285.90001,
    askClose: 1285.6,
    bidHigh: 1285.65001,
    bidLow: 1284.75,
    askHigh: 1286.15001,
    askLow: 1285.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:00:00",
    bidOpen: 1284.95001,
    bidClose: 1285.55,
    askOpen: 1285.45001,
    askClose: 1286.05,
    bidHigh: 1285.6,
    bidLow: 1284.85,
    askHigh: 1286.1,
    askLow: 1285.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:05:00",
    bidOpen: 1285.6,
    bidClose: 1285.6,
    askOpen: 1286.1,
    askClose: 1286.1,
    bidHigh: 1286.35,
    bidLow: 1285.5,
    askHigh: 1286.85,
    askLow: 1286
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:10:00",
    bidOpen: 1285.6,
    bidClose: 1285.6,
    askOpen: 1286.1,
    askClose: 1286.1,
    bidHigh: 1285.6,
    bidLow: 1284.90001,
    askHigh: 1286.1,
    askLow: 1285.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:15:00",
    bidOpen: 1285.6,
    bidClose: 1285.6,
    askOpen: 1286.1,
    askClose: 1286.1,
    bidHigh: 1286,
    bidLow: 1285.20001,
    askHigh: 1286.5,
    askLow: 1285.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:20:00",
    bidOpen: 1285.6,
    bidClose: 1282.6,
    askOpen: 1286.1,
    askClose: 1283.1,
    bidHigh: 1285.90001,
    bidLow: 1281.15001,
    askHigh: 1286.40001,
    askLow: 1281.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:25:00",
    bidOpen: 1282.70001,
    bidClose: 1280.15001,
    askOpen: 1283.20001,
    askClose: 1280.65001,
    bidHigh: 1283.1,
    bidLow: 1279.90001,
    askHigh: 1283.6,
    askLow: 1280.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:30:00",
    bidOpen: 1280.1,
    bidClose: 1277.8,
    askOpen: 1280.6,
    askClose: 1278.3,
    bidHigh: 1280.20001,
    bidLow: 1276.75,
    askHigh: 1280.70001,
    askLow: 1277.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:35:00",
    bidOpen: 1277.8,
    bidClose: 1275.05,
    askOpen: 1278.3,
    askClose: 1275.55,
    bidHigh: 1277.90001,
    bidLow: 1274.8,
    askHigh: 1278.40001,
    askLow: 1275.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:40:00",
    bidOpen: 1275.1,
    bidClose: 1275.40001,
    askOpen: 1275.6,
    askClose: 1275.90001,
    bidHigh: 1276.1,
    bidLow: 1274,
    askHigh: 1276.6,
    askLow: 1274.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:45:00",
    bidOpen: 1275.3,
    bidClose: 1275.3,
    askOpen: 1275.8,
    askClose: 1275.8,
    bidHigh: 1275.5,
    bidLow: 1274.40001,
    askHigh: 1276,
    askLow: 1274.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:50:00",
    bidOpen: 1275.35,
    bidClose: 1274.15001,
    askOpen: 1275.85,
    askClose: 1274.65001,
    bidHigh: 1275.40001,
    bidLow: 1274.05,
    askHigh: 1275.90001,
    askLow: 1274.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:55:00",
    bidOpen: 1274.25,
    bidClose: 1273.85,
    askOpen: 1274.75,
    askClose: 1274.35,
    bidHigh: 1274.45001,
    bidLow: 1273.15001,
    askHigh: 1274.95001,
    askLow: 1273.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:00:00",
    bidOpen: 1273.85,
    bidClose: 1274.95001,
    askOpen: 1274.35,
    askClose: 1275.45001,
    bidHigh: 1275.05,
    bidLow: 1273.75,
    askHigh: 1275.55,
    askLow: 1274.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:05:00",
    bidOpen: 1274.95001,
    bidClose: 1275.25,
    askOpen: 1275.45001,
    askClose: 1275.75,
    bidHigh: 1275.25,
    bidLow: 1274.5,
    askHigh: 1275.75,
    askLow: 1275
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:10:00",
    bidOpen: 1275.20001,
    bidClose: 1275.15001,
    askOpen: 1275.70001,
    askClose: 1275.65001,
    bidHigh: 1275.55,
    bidLow: 1274.95001,
    askHigh: 1276.05,
    askLow: 1275.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:15:00",
    bidOpen: 1275.15001,
    bidClose: 1274.20001,
    askOpen: 1275.65001,
    askClose: 1274.70001,
    bidHigh: 1275.3,
    bidLow: 1274.20001,
    askHigh: 1275.8,
    askLow: 1274.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:20:00",
    bidOpen: 1274.15001,
    bidClose: 1274.85,
    askOpen: 1274.65001,
    askClose: 1275.35,
    bidHigh: 1275.5,
    bidLow: 1274.1,
    askHigh: 1276,
    askLow: 1274.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:25:00",
    bidOpen: 1274.8,
    bidClose: 1274.95001,
    askOpen: 1275.3,
    askClose: 1275.45001,
    bidHigh: 1274.95001,
    bidLow: 1274.40001,
    askHigh: 1275.45001,
    askLow: 1274.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:30:00",
    bidOpen: 1275.05,
    bidClose: 1275.15001,
    askOpen: 1275.55,
    askClose: 1275.65001,
    bidHigh: 1275.5,
    bidLow: 1274.85,
    askHigh: 1276,
    askLow: 1275.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:35:00",
    bidOpen: 1275.15001,
    bidClose: 1275.15001,
    askOpen: 1275.65001,
    askClose: 1275.65001,
    bidHigh: 1275.25,
    bidLow: 1274.65001,
    askHigh: 1275.75,
    askLow: 1275.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:40:00",
    bidOpen: 1275.15001,
    bidClose: 1275.55,
    askOpen: 1275.65001,
    askClose: 1276.05,
    bidHigh: 1275.90001,
    bidLow: 1274.85,
    askHigh: 1276.40001,
    askLow: 1275.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:45:00",
    bidOpen: 1275.5,
    bidClose: 1275.15001,
    askOpen: 1276,
    askClose: 1275.65001,
    bidHigh: 1275.5,
    bidLow: 1274.8,
    askHigh: 1276,
    askLow: 1275.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:50:00",
    bidOpen: 1275.15001,
    bidClose: 1275.5,
    askOpen: 1275.65001,
    askClose: 1276,
    bidHigh: 1275.65001,
    bidLow: 1274.95001,
    askHigh: 1276.15001,
    askLow: 1275.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:55:00",
    bidOpen: 1275.55,
    bidClose: 1275.25,
    askOpen: 1276.05,
    askClose: 1275.75,
    bidHigh: 1275.55,
    bidLow: 1275.15001,
    askHigh: 1276.05,
    askLow: 1275.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:00:00",
    bidOpen: 1275.25,
    bidClose: 1275.25,
    askOpen: 1275.75,
    askClose: 1275.75,
    bidHigh: 1275.3,
    bidLow: 1275.15001,
    askHigh: 1275.8,
    askLow: 1275.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:05:00",
    bidOpen: 1275.25,
    bidClose: 1274.6,
    askOpen: 1275.75,
    askClose: 1275.1,
    bidHigh: 1275.40001,
    bidLow: 1274.40001,
    askHigh: 1275.90001,
    askLow: 1274.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:10:00",
    bidOpen: 1274.55,
    bidClose: 1276.05,
    askOpen: 1275.05,
    askClose: 1276.55,
    bidHigh: 1276.05,
    bidLow: 1274.55,
    askHigh: 1276.55,
    askLow: 1275.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:15:00",
    bidOpen: 1276.05,
    bidClose: 1275.3,
    askOpen: 1276.55,
    askClose: 1275.8,
    bidHigh: 1276.05,
    bidLow: 1275.15001,
    askHigh: 1276.55,
    askLow: 1275.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:20:00",
    bidOpen: 1275.20001,
    bidClose: 1275.5,
    askOpen: 1275.70001,
    askClose: 1276,
    bidHigh: 1275.55,
    bidLow: 1275.1,
    askHigh: 1276.05,
    askLow: 1275.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:25:00",
    bidOpen: 1275.55,
    bidClose: 1275.5,
    askOpen: 1276.05,
    askClose: 1276,
    bidHigh: 1275.70001,
    bidLow: 1275.20001,
    askHigh: 1276.20001,
    askLow: 1275.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:30:00",
    bidOpen: 1275.55,
    bidClose: 1275.3,
    askOpen: 1276.05,
    askClose: 1275.8,
    bidHigh: 1275.70001,
    bidLow: 1275.3,
    askHigh: 1276.20001,
    askLow: 1275.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:35:00",
    bidOpen: 1275.3,
    bidClose: 1275.35,
    askOpen: 1275.8,
    askClose: 1275.85,
    bidHigh: 1275.5,
    bidLow: 1275,
    askHigh: 1276,
    askLow: 1275.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:40:00",
    bidOpen: 1275.3,
    bidClose: 1275.5,
    askOpen: 1275.8,
    askClose: 1276,
    bidHigh: 1275.90001,
    bidLow: 1275.20001,
    askHigh: 1276.40001,
    askLow: 1275.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:45:00",
    bidOpen: 1275.5,
    bidClose: 1275.6,
    askOpen: 1276,
    askClose: 1276.1,
    bidHigh: 1275.6,
    bidLow: 1275.40001,
    askHigh: 1276.1,
    askLow: 1275.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:50:00",
    bidOpen: 1275.6,
    bidClose: 1275.90001,
    askOpen: 1276.1,
    askClose: 1276.40001,
    bidHigh: 1276,
    bidLow: 1275.6,
    askHigh: 1276.5,
    askLow: 1276.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:55:00",
    bidOpen: 1275.90001,
    bidClose: 1275.5,
    askOpen: 1276.40001,
    askClose: 1276,
    bidHigh: 1275.90001,
    bidLow: 1275.3,
    askHigh: 1276.40001,
    askLow: 1275.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:00:00",
    bidOpen: 1275.5,
    bidClose: 1272.75,
    askOpen: 1276,
    askClose: 1273.25,
    bidHigh: 1275.5,
    bidLow: 1272.35,
    askHigh: 1276,
    askLow: 1272.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:05:00",
    bidOpen: 1272.85,
    bidClose: 1271.5,
    askOpen: 1273.35,
    askClose: 1272,
    bidHigh: 1272.85,
    bidLow: 1270.40001,
    askHigh: 1273.35,
    askLow: 1270.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:10:00",
    bidOpen: 1271.6,
    bidClose: 1272,
    askOpen: 1272.1,
    askClose: 1272.5,
    bidHigh: 1272.3,
    bidLow: 1271.5,
    askHigh: 1272.8,
    askLow: 1272
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:15:00",
    bidOpen: 1271.95001,
    bidClose: 1272.70001,
    askOpen: 1272.45001,
    askClose: 1273.20001,
    bidHigh: 1272.75,
    bidLow: 1271.8,
    askHigh: 1273.25,
    askLow: 1272.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:20:00",
    bidOpen: 1272.65001,
    bidClose: 1272.15001,
    askOpen: 1273.15001,
    askClose: 1272.65001,
    bidHigh: 1272.75,
    bidLow: 1272.1,
    askHigh: 1273.25,
    askLow: 1272.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:25:00",
    bidOpen: 1272.15001,
    bidClose: 1273.1,
    askOpen: 1272.65001,
    askClose: 1273.6,
    bidHigh: 1273.1,
    bidLow: 1271.8,
    askHigh: 1273.6,
    askLow: 1272.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:30:00",
    bidOpen: 1273.1,
    bidClose: 1272.90001,
    askOpen: 1273.6,
    askClose: 1273.40001,
    bidHigh: 1273.1,
    bidLow: 1272.55,
    askHigh: 1273.6,
    askLow: 1273.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:35:00",
    bidOpen: 1272.8,
    bidClose: 1273.05,
    askOpen: 1273.3,
    askClose: 1273.55,
    bidHigh: 1273.40001,
    bidLow: 1272.70001,
    askHigh: 1273.90001,
    askLow: 1273.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:40:00",
    bidOpen: 1273.05,
    bidClose: 1274.05,
    askOpen: 1273.55,
    askClose: 1274.55,
    bidHigh: 1274.05,
    bidLow: 1273.05,
    askHigh: 1274.55,
    askLow: 1273.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:45:00",
    bidOpen: 1274.05,
    bidClose: 1272.95001,
    askOpen: 1274.55,
    askClose: 1273.45001,
    bidHigh: 1274.05,
    bidLow: 1272.85,
    askHigh: 1274.55,
    askLow: 1273.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:50:00",
    bidOpen: 1273.05,
    bidClose: 1273.20001,
    askOpen: 1273.55,
    askClose: 1273.70001,
    bidHigh: 1273.55,
    bidLow: 1272.85,
    askHigh: 1274.05,
    askLow: 1273.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:55:00",
    bidOpen: 1273.20001,
    bidClose: 1273.20001,
    askOpen: 1273.70001,
    askClose: 1273.70001,
    bidHigh: 1273.65001,
    bidLow: 1273.05,
    askHigh: 1274.15001,
    askLow: 1273.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:00:00",
    bidOpen: 1273.20001,
    bidClose: 1271.85,
    askOpen: 1273.70001,
    askClose: 1272.35,
    bidHigh: 1273.20001,
    bidLow: 1271.8,
    askHigh: 1273.70001,
    askLow: 1272.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:05:00",
    bidOpen: 1271.85,
    bidClose: 1272.3,
    askOpen: 1272.35,
    askClose: 1272.8,
    bidHigh: 1272.55,
    bidLow: 1271.65001,
    askHigh: 1273.05,
    askLow: 1272.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:10:00",
    bidOpen: 1272.3,
    bidClose: 1271.90001,
    askOpen: 1272.8,
    askClose: 1272.40001,
    bidHigh: 1272.3,
    bidLow: 1271.70001,
    askHigh: 1272.8,
    askLow: 1272.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:15:00",
    bidOpen: 1271.90001,
    bidClose: 1271.40001,
    askOpen: 1272.40001,
    askClose: 1271.90001,
    bidHigh: 1271.90001,
    bidLow: 1271.40001,
    askHigh: 1272.40001,
    askLow: 1271.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:20:00",
    bidOpen: 1271.40001,
    bidClose: 1272.15001,
    askOpen: 1271.90001,
    askClose: 1272.65001,
    bidHigh: 1272.15001,
    bidLow: 1271.3,
    askHigh: 1272.65001,
    askLow: 1271.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:25:00",
    bidOpen: 1272.1,
    bidClose: 1272.90001,
    askOpen: 1272.6,
    askClose: 1273.40001,
    bidHigh: 1273.35,
    bidLow: 1272.05,
    askHigh: 1273.85,
    askLow: 1272.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:30:00",
    bidOpen: 1272.85,
    bidClose: 1272.40001,
    askOpen: 1273.35,
    askClose: 1272.90001,
    bidHigh: 1272.85,
    bidLow: 1272.20001,
    askHigh: 1273.35,
    askLow: 1272.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:35:00",
    bidOpen: 1272.55,
    bidClose: 1272.5,
    askOpen: 1273.05,
    askClose: 1273,
    bidHigh: 1272.75,
    bidLow: 1272.35,
    askHigh: 1273.25,
    askLow: 1272.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:40:00",
    bidOpen: 1272.45001,
    bidClose: 1272.1,
    askOpen: 1272.95001,
    askClose: 1272.6,
    bidHigh: 1272.70001,
    bidLow: 1272.1,
    askHigh: 1273.20001,
    askLow: 1272.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:45:00",
    bidOpen: 1272.05,
    bidClose: 1272.40001,
    askOpen: 1272.55,
    askClose: 1272.90001,
    bidHigh: 1272.70001,
    bidLow: 1272.05,
    askHigh: 1273.20001,
    askLow: 1272.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:50:00",
    bidOpen: 1272.35,
    bidClose: 1272.6,
    askOpen: 1272.85,
    askClose: 1273.1,
    bidHigh: 1272.90001,
    bidLow: 1272.20001,
    askHigh: 1273.40001,
    askLow: 1272.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:55:00",
    bidOpen: 1272.6,
    bidClose: 1272.65001,
    askOpen: 1273.1,
    askClose: 1273.15001,
    bidHigh: 1272.65001,
    bidLow: 1272.20001,
    askHigh: 1273.15001,
    askLow: 1272.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:00:00",
    bidOpen: 1272.6,
    bidClose: 1273.1,
    askOpen: 1273.1,
    askClose: 1273.6,
    bidHigh: 1273.1,
    bidLow: 1272.6,
    askHigh: 1273.6,
    askLow: 1273.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:05:00",
    bidOpen: 1273.05,
    bidClose: 1272.70001,
    askOpen: 1273.55,
    askClose: 1273.20001,
    bidHigh: 1273.1,
    bidLow: 1272.70001,
    askHigh: 1273.6,
    askLow: 1273.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:10:00",
    bidOpen: 1272.70001,
    bidClose: 1273.40001,
    askOpen: 1273.20001,
    askClose: 1273.90001,
    bidHigh: 1273.40001,
    bidLow: 1272.70001,
    askHigh: 1273.90001,
    askLow: 1273.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:15:00",
    bidOpen: 1273.40001,
    bidClose: 1274,
    askOpen: 1273.90001,
    askClose: 1274.5,
    bidHigh: 1274,
    bidLow: 1273.35,
    askHigh: 1274.5,
    askLow: 1273.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:20:00",
    bidOpen: 1274,
    bidClose: 1273.05,
    askOpen: 1274.5,
    askClose: 1273.55,
    bidHigh: 1274.1,
    bidLow: 1273.05,
    askHigh: 1274.6,
    askLow: 1273.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:25:00",
    bidOpen: 1273.05,
    bidClose: 1273.20001,
    askOpen: 1273.55,
    askClose: 1273.70001,
    bidHigh: 1273.20001,
    bidLow: 1272.90001,
    askHigh: 1273.70001,
    askLow: 1273.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:30:00",
    bidOpen: 1273.20001,
    bidClose: 1273.90001,
    askOpen: 1273.70001,
    askClose: 1274.6,
    bidHigh: 1273.90001,
    bidLow: 1273,
    askHigh: 1274.6,
    askLow: 1273.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:35:00",
    bidOpen: 1273.90001,
    bidClose: 1273.95001,
    askOpen: 1274.6,
    askClose: 1274.65001,
    bidHigh: 1274.3,
    bidLow: 1273.6,
    askHigh: 1275,
    askLow: 1274.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:40:00",
    bidOpen: 1273.95001,
    bidClose: 1274.15001,
    askOpen: 1274.65001,
    askClose: 1274.85,
    bidHigh: 1274.20001,
    bidLow: 1273.95001,
    askHigh: 1274.90001,
    askLow: 1274.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:45:00",
    bidOpen: 1274.20001,
    bidClose: 1274.15001,
    askOpen: 1274.90001,
    askClose: 1274.85,
    bidHigh: 1274.3,
    bidLow: 1274.05,
    askHigh: 1275,
    askLow: 1274.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:50:00",
    bidOpen: 1274.15001,
    bidClose: 1274.35,
    askOpen: 1274.85,
    askClose: 1275.05,
    bidHigh: 1274.45001,
    bidLow: 1273.95001,
    askHigh: 1275.15001,
    askLow: 1274.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:55:00",
    bidOpen: 1274.3,
    bidClose: 1274.40001,
    askOpen: 1275,
    askClose: 1275.1,
    bidHigh: 1274.8,
    bidLow: 1274.25,
    askHigh: 1275.5,
    askLow: 1274.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:00:00",
    bidOpen: 1274.3,
    bidClose: 1274.45001,
    askOpen: 1275,
    askClose: 1275.15001,
    bidHigh: 1274.6,
    bidLow: 1274,
    askHigh: 1275.3,
    askLow: 1274.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:05:00",
    bidOpen: 1274.45001,
    bidClose: 1274.25,
    askOpen: 1275.15001,
    askClose: 1274.95001,
    bidHigh: 1274.65001,
    bidLow: 1274.25,
    askHigh: 1275.35,
    askLow: 1274.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:10:00",
    bidOpen: 1274.25,
    bidClose: 1274.1,
    askOpen: 1274.95001,
    askClose: 1274.8,
    bidHigh: 1274.25,
    bidLow: 1274,
    askHigh: 1274.95001,
    askLow: 1274.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:15:00",
    bidOpen: 1274.1,
    bidClose: 1274.3,
    askOpen: 1274.8,
    askClose: 1275,
    bidHigh: 1274.3,
    bidLow: 1274,
    askHigh: 1275,
    askLow: 1274.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:20:00",
    bidOpen: 1274.35,
    bidClose: 1274.40001,
    askOpen: 1275.05,
    askClose: 1275.1,
    bidHigh: 1274.55,
    bidLow: 1274.25,
    askHigh: 1275.25,
    askLow: 1274.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:25:00",
    bidOpen: 1274.40001,
    bidClose: 1274.3,
    askOpen: 1275.1,
    askClose: 1275,
    bidHigh: 1274.45001,
    bidLow: 1274.3,
    askHigh: 1275.15001,
    askLow: 1275
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:30:00",
    bidOpen: 1274.3,
    bidClose: 1274,
    askOpen: 1275,
    askClose: 1274.70001,
    bidHigh: 1274.3,
    bidLow: 1273.85,
    askHigh: 1275,
    askLow: 1274.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:35:00",
    bidOpen: 1273.95001,
    bidClose: 1274.40001,
    askOpen: 1274.65001,
    askClose: 1275.1,
    bidHigh: 1274.5,
    bidLow: 1273.85,
    askHigh: 1275.20001,
    askLow: 1274.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:40:00",
    bidOpen: 1274.45001,
    bidClose: 1274.3,
    askOpen: 1275.15001,
    askClose: 1275,
    bidHigh: 1274.5,
    bidLow: 1274.20001,
    askHigh: 1275.20001,
    askLow: 1274.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:45:00",
    bidOpen: 1274.25,
    bidClose: 1273.8,
    askOpen: 1274.95001,
    askClose: 1274.5,
    bidHigh: 1274.40001,
    bidLow: 1273.70001,
    askHigh: 1275.1,
    askLow: 1274.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:50:00",
    bidOpen: 1273.75,
    bidClose: 1273.5,
    askOpen: 1274.45001,
    askClose: 1274.20001,
    bidHigh: 1273.85,
    bidLow: 1273.45001,
    askHigh: 1274.55,
    askLow: 1274.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:55:00",
    bidOpen: 1273.5,
    bidClose: 1273.6,
    askOpen: 1274.20001,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.5,
    askHigh: 1274.3,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:00:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:05:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:10:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:15:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:20:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:25:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:30:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:35:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:40:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:45:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:50:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:55:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:00:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:05:00",
    bidOpen: 1273.95001,
    bidClose: 1274.55,
    askOpen: 1274.95001,
    askClose: 1275.55,
    bidHigh: 1274.6,
    bidLow: 1273.85,
    askHigh: 1275.6,
    askLow: 1274.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:10:00",
    bidOpen: 1274.6,
    bidClose: 1274.6,
    askOpen: 1275.6,
    askClose: 1275.6,
    bidHigh: 1274.8,
    bidLow: 1274.45001,
    askHigh: 1275.8,
    askLow: 1275.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:15:00",
    bidOpen: 1274.6,
    bidClose: 1274.75,
    askOpen: 1275.6,
    askClose: 1275.75,
    bidHigh: 1274.90001,
    bidLow: 1274.5,
    askHigh: 1275.90001,
    askLow: 1275.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:20:00",
    bidOpen: 1274.75,
    bidClose: 1274.70001,
    askOpen: 1275.75,
    askClose: 1275.70001,
    bidHigh: 1274.90001,
    bidLow: 1274.5,
    askHigh: 1275.90001,
    askLow: 1275.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:25:00",
    bidOpen: 1274.75,
    bidClose: 1274.65001,
    askOpen: 1275.75,
    askClose: 1275.65001,
    bidHigh: 1274.90001,
    bidLow: 1274.5,
    askHigh: 1275.90001,
    askLow: 1275.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:30:00",
    bidOpen: 1274.65001,
    bidClose: 1274.75,
    askOpen: 1275.65001,
    askClose: 1275.75,
    bidHigh: 1275.15001,
    bidLow: 1274.55,
    askHigh: 1276.15001,
    askLow: 1275.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:35:00",
    bidOpen: 1274.70001,
    bidClose: 1274.8,
    askOpen: 1275.70001,
    askClose: 1275.8,
    bidHigh: 1275.1,
    bidLow: 1274.6,
    askHigh: 1276.1,
    askLow: 1275.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:40:00",
    bidOpen: 1274.8,
    bidClose: 1274.70001,
    askOpen: 1275.8,
    askClose: 1275.70001,
    bidHigh: 1274.90001,
    bidLow: 1274.65001,
    askHigh: 1275.90001,
    askLow: 1275.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:45:00",
    bidOpen: 1274.65001,
    bidClose: 1274.6,
    askOpen: 1275.65001,
    askClose: 1275.6,
    bidHigh: 1274.70001,
    bidLow: 1274.25,
    askHigh: 1275.70001,
    askLow: 1275.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:50:00",
    bidOpen: 1274.55,
    bidClose: 1274.45001,
    askOpen: 1275.55,
    askClose: 1275.45001,
    bidHigh: 1274.65001,
    bidLow: 1274.40001,
    askHigh: 1275.65001,
    askLow: 1275.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:55:00",
    bidOpen: 1274.45001,
    bidClose: 1274.55,
    askOpen: 1275.45001,
    askClose: 1275.55,
    bidHigh: 1274.55,
    bidLow: 1274.35,
    askHigh: 1275.55,
    askLow: 1275.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:00:00",
    bidOpen: 1274.55,
    bidClose: 1275.1,
    askOpen: 1275.55,
    askClose: 1276.1,
    bidHigh: 1275.15001,
    bidLow: 1274.55,
    askHigh: 1276.15001,
    askLow: 1275.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:05:00",
    bidOpen: 1275.15001,
    bidClose: 1274.70001,
    askOpen: 1276.15001,
    askClose: 1275.70001,
    bidHigh: 1275.15001,
    bidLow: 1274.5,
    askHigh: 1276.15001,
    askLow: 1275.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:10:00",
    bidOpen: 1274.6,
    bidClose: 1274.70001,
    askOpen: 1275.6,
    askClose: 1275.70001,
    bidHigh: 1274.75,
    bidLow: 1274.55,
    askHigh: 1275.75,
    askLow: 1275.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:15:00",
    bidOpen: 1274.75,
    bidClose: 1274.6,
    askOpen: 1275.75,
    askClose: 1275.6,
    bidHigh: 1274.75,
    bidLow: 1274.40001,
    askHigh: 1275.75,
    askLow: 1275.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:20:00",
    bidOpen: 1274.65001,
    bidClose: 1274.40001,
    askOpen: 1275.65001,
    askClose: 1275.40001,
    bidHigh: 1274.75,
    bidLow: 1274.3,
    askHigh: 1275.75,
    askLow: 1275.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:25:00",
    bidOpen: 1274.3,
    bidClose: 1274,
    askOpen: 1275.3,
    askClose: 1275,
    bidHigh: 1274.35,
    bidLow: 1273.90001,
    askHigh: 1275.35,
    askLow: 1274.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:30:00",
    bidOpen: 1274.05,
    bidClose: 1274.25,
    askOpen: 1275.05,
    askClose: 1275.25,
    bidHigh: 1274.25,
    bidLow: 1273.8,
    askHigh: 1275.25,
    askLow: 1274.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:35:00",
    bidOpen: 1274.25,
    bidClose: 1273.90001,
    askOpen: 1275.25,
    askClose: 1274.90001,
    bidHigh: 1274.25,
    bidLow: 1273.90001,
    askHigh: 1275.25,
    askLow: 1274.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:40:00",
    bidOpen: 1273.90001,
    bidClose: 1273.85,
    askOpen: 1274.90001,
    askClose: 1274.85,
    bidHigh: 1274,
    bidLow: 1273.70001,
    askHigh: 1275,
    askLow: 1274.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:45:00",
    bidOpen: 1273.85,
    bidClose: 1273.70001,
    askOpen: 1274.85,
    askClose: 1274.70001,
    bidHigh: 1274,
    bidLow: 1273.65001,
    askHigh: 1275,
    askLow: 1274.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:50:00",
    bidOpen: 1273.65001,
    bidClose: 1274.5,
    askOpen: 1274.65001,
    askClose: 1275.5,
    bidHigh: 1274.5,
    bidLow: 1273.65001,
    askHigh: 1275.5,
    askLow: 1274.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:55:00",
    bidOpen: 1274.40001,
    bidClose: 1275.1,
    askOpen: 1275.40001,
    askClose: 1275.6,
    bidHigh: 1275.20001,
    bidLow: 1274.25,
    askHigh: 1276,
    askLow: 1275.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:00:00",
    bidOpen: 1275.05,
    bidClose: 1274.45001,
    askOpen: 1275.55,
    askClose: 1274.95001,
    bidHigh: 1275.05,
    bidLow: 1274.25,
    askHigh: 1275.55,
    askLow: 1274.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:05:00",
    bidOpen: 1274.40001,
    bidClose: 1274.85,
    askOpen: 1274.90001,
    askClose: 1275.35,
    bidHigh: 1275.05,
    bidLow: 1274.40001,
    askHigh: 1275.55,
    askLow: 1274.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:10:00",
    bidOpen: 1274.85,
    bidClose: 1275.65001,
    askOpen: 1275.35,
    askClose: 1276.15001,
    bidHigh: 1275.65001,
    bidLow: 1274.85,
    askHigh: 1276.15001,
    askLow: 1275.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:15:00",
    bidOpen: 1275.65001,
    bidClose: 1275.3,
    askOpen: 1276.15001,
    askClose: 1275.8,
    bidHigh: 1276.15001,
    bidLow: 1275.20001,
    askHigh: 1276.65001,
    askLow: 1275.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:20:00",
    bidOpen: 1275.25,
    bidClose: 1275.55,
    askOpen: 1275.75,
    askClose: 1276.05,
    bidHigh: 1275.90001,
    bidLow: 1275.15001,
    askHigh: 1276.40001,
    askLow: 1275.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:25:00",
    bidOpen: 1275.5,
    bidClose: 1276.05,
    askOpen: 1276,
    askClose: 1276.55,
    bidHigh: 1276.05,
    bidLow: 1275.40001,
    askHigh: 1276.55,
    askLow: 1275.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:30:00",
    bidOpen: 1276.05,
    bidClose: 1276.20001,
    askOpen: 1276.55,
    askClose: 1276.70001,
    bidHigh: 1276.90001,
    bidLow: 1276,
    askHigh: 1277.40001,
    askLow: 1276.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:35:00",
    bidOpen: 1276.15001,
    bidClose: 1276.40001,
    askOpen: 1276.65001,
    askClose: 1276.90001,
    bidHigh: 1276.40001,
    bidLow: 1275.8,
    askHigh: 1276.90001,
    askLow: 1276.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:40:00",
    bidOpen: 1276.40001,
    bidClose: 1276.90001,
    askOpen: 1276.90001,
    askClose: 1277.40001,
    bidHigh: 1277,
    bidLow: 1276.3,
    askHigh: 1277.5,
    askLow: 1276.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:45:00",
    bidOpen: 1276.90001,
    bidClose: 1276.1,
    askOpen: 1277.40001,
    askClose: 1276.6,
    bidHigh: 1276.90001,
    bidLow: 1276.1,
    askHigh: 1277.40001,
    askLow: 1276.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:50:00",
    bidOpen: 1276.20001,
    bidClose: 1276.6,
    askOpen: 1276.70001,
    askClose: 1277.1,
    bidHigh: 1276.70001,
    bidLow: 1276.20001,
    askHigh: 1277.20001,
    askLow: 1276.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:55:00",
    bidOpen: 1276.65001,
    bidClose: 1276,
    askOpen: 1277.15001,
    askClose: 1276.5,
    bidHigh: 1276.75,
    bidLow: 1275.95001,
    askHigh: 1277.25,
    askLow: 1276.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:00:00",
    bidOpen: 1276.15001,
    bidClose: 1276.3,
    askOpen: 1276.65001,
    askClose: 1276.8,
    bidHigh: 1276.55,
    bidLow: 1275.8,
    askHigh: 1277.05,
    askLow: 1276.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:05:00",
    bidOpen: 1276.35,
    bidClose: 1275.70001,
    askOpen: 1276.85,
    askClose: 1276.20001,
    bidHigh: 1276.35,
    bidLow: 1275.6,
    askHigh: 1276.85,
    askLow: 1276.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:10:00",
    bidOpen: 1275.70001,
    bidClose: 1275.40001,
    askOpen: 1276.20001,
    askClose: 1275.90001,
    bidHigh: 1276.25,
    bidLow: 1275.25,
    askHigh: 1276.75,
    askLow: 1275.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:15:00",
    bidOpen: 1275.40001,
    bidClose: 1276,
    askOpen: 1275.90001,
    askClose: 1276.5,
    bidHigh: 1276.20001,
    bidLow: 1275.3,
    askHigh: 1276.70001,
    askLow: 1275.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:20:00",
    bidOpen: 1276,
    bidClose: 1276.40001,
    askOpen: 1276.5,
    askClose: 1276.90001,
    bidHigh: 1276.8,
    bidLow: 1276,
    askHigh: 1277.3,
    askLow: 1276.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:25:00",
    bidOpen: 1276.3,
    bidClose: 1276.45001,
    askOpen: 1276.8,
    askClose: 1276.95001,
    bidHigh: 1276.70001,
    bidLow: 1276.15001,
    askHigh: 1277.20001,
    askLow: 1276.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:30:00",
    bidOpen: 1276.45001,
    bidClose: 1277.6,
    askOpen: 1276.95001,
    askClose: 1278.1,
    bidHigh: 1277.6,
    bidLow: 1276.45001,
    askHigh: 1278.1,
    askLow: 1276.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:35:00",
    bidOpen: 1277.6,
    bidClose: 1277.65001,
    askOpen: 1278.1,
    askClose: 1278.15001,
    bidHigh: 1278.20001,
    bidLow: 1277.5,
    askHigh: 1278.70001,
    askLow: 1278
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:40:00",
    bidOpen: 1277.6,
    bidClose: 1277.95001,
    askOpen: 1278.1,
    askClose: 1278.45001,
    bidHigh: 1278.3,
    bidLow: 1277.55,
    askHigh: 1278.8,
    askLow: 1278.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:45:00",
    bidOpen: 1277.90001,
    bidClose: 1278,
    askOpen: 1278.40001,
    askClose: 1278.5,
    bidHigh: 1278.35,
    bidLow: 1277.70001,
    askHigh: 1278.85,
    askLow: 1278.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:50:00",
    bidOpen: 1278,
    bidClose: 1278.65001,
    askOpen: 1278.5,
    askClose: 1279.15001,
    bidHigh: 1279.6,
    bidLow: 1277.90001,
    askHigh: 1280.1,
    askLow: 1278.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:55:00",
    bidOpen: 1278.65001,
    bidClose: 1279.25,
    askOpen: 1279.15001,
    askClose: 1279.75,
    bidHigh: 1279.25,
    bidLow: 1278.65001,
    askHigh: 1279.75,
    askLow: 1279.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:00:00",
    bidOpen: 1279.25,
    bidClose: 1279.25,
    askOpen: 1279.75,
    askClose: 1279.75,
    bidHigh: 1279.35,
    bidLow: 1278.8,
    askHigh: 1279.85,
    askLow: 1279.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:05:00",
    bidOpen: 1279.3,
    bidClose: 1278.65001,
    askOpen: 1279.8,
    askClose: 1279.15001,
    bidHigh: 1279.35,
    bidLow: 1278.25,
    askHigh: 1279.85,
    askLow: 1278.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:10:00",
    bidOpen: 1278.65001,
    bidClose: 1278.5,
    askOpen: 1279.15001,
    askClose: 1279,
    bidHigh: 1278.8,
    bidLow: 1278.45001,
    askHigh: 1279.3,
    askLow: 1278.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:15:00",
    bidOpen: 1278.40001,
    bidClose: 1278.55,
    askOpen: 1278.90001,
    askClose: 1279.05,
    bidHigh: 1278.65001,
    bidLow: 1278.40001,
    askHigh: 1279.15001,
    askLow: 1278.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:20:00",
    bidOpen: 1278.55,
    bidClose: 1278.70001,
    askOpen: 1279.05,
    askClose: 1279.20001,
    bidHigh: 1278.8,
    bidLow: 1278.45001,
    askHigh: 1279.3,
    askLow: 1278.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:25:00",
    bidOpen: 1278.70001,
    bidClose: 1278.90001,
    askOpen: 1279.20001,
    askClose: 1279.40001,
    bidHigh: 1279.15001,
    bidLow: 1278.70001,
    askHigh: 1279.65001,
    askLow: 1279.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:30:00",
    bidOpen: 1278.90001,
    bidClose: 1279.90001,
    askOpen: 1279.40001,
    askClose: 1280.40001,
    bidHigh: 1280,
    bidLow: 1278.90001,
    askHigh: 1280.5,
    askLow: 1279.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:35:00",
    bidOpen: 1279.90001,
    bidClose: 1279.15001,
    askOpen: 1280.40001,
    askClose: 1279.65001,
    bidHigh: 1279.90001,
    bidLow: 1279.05,
    askHigh: 1280.40001,
    askLow: 1279.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:40:00",
    bidOpen: 1279.05,
    bidClose: 1279.25,
    askOpen: 1279.55,
    askClose: 1279.75,
    bidHigh: 1279.35,
    bidLow: 1278.95001,
    askHigh: 1279.85,
    askLow: 1279.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:45:00",
    bidOpen: 1279.35,
    bidClose: 1279.70001,
    askOpen: 1279.85,
    askClose: 1280.20001,
    bidHigh: 1279.95001,
    bidLow: 1279.20001,
    askHigh: 1280.45001,
    askLow: 1279.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:50:00",
    bidOpen: 1279.70001,
    bidClose: 1280.05,
    askOpen: 1280.20001,
    askClose: 1280.55,
    bidHigh: 1280.05,
    bidLow: 1279.65001,
    askHigh: 1280.55,
    askLow: 1280.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:55:00",
    bidOpen: 1280.15001,
    bidClose: 1279.85,
    askOpen: 1280.65001,
    askClose: 1280.35,
    bidHigh: 1280.85,
    bidLow: 1279.65001,
    askHigh: 1281.35,
    askLow: 1280.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:00:00",
    bidOpen: 1279.8,
    bidClose: 1278.95001,
    askOpen: 1280.3,
    askClose: 1279.45001,
    bidHigh: 1280.15001,
    bidLow: 1278.65001,
    askHigh: 1280.65001,
    askLow: 1279.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:05:00",
    bidOpen: 1278.90001,
    bidClose: 1278.55,
    askOpen: 1279.40001,
    askClose: 1279.05,
    bidHigh: 1278.90001,
    bidLow: 1277.95001,
    askHigh: 1279.40001,
    askLow: 1278.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:10:00",
    bidOpen: 1278.45001,
    bidClose: 1278.65001,
    askOpen: 1278.95001,
    askClose: 1279.15001,
    bidHigh: 1279.25,
    bidLow: 1278.25,
    askHigh: 1279.75,
    askLow: 1278.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:15:00",
    bidOpen: 1278.6,
    bidClose: 1278.45001,
    askOpen: 1279.1,
    askClose: 1278.95001,
    bidHigh: 1279.5,
    bidLow: 1278.45001,
    askHigh: 1280,
    askLow: 1278.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:20:00",
    bidOpen: 1278.45001,
    bidClose: 1278.65001,
    askOpen: 1278.95001,
    askClose: 1279.15001,
    bidHigh: 1278.75,
    bidLow: 1278.45001,
    askHigh: 1279.25,
    askLow: 1278.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:25:00",
    bidOpen: 1278.65001,
    bidClose: 1278.25,
    askOpen: 1279.15001,
    askClose: 1278.75,
    bidHigh: 1278.75,
    bidLow: 1278.15001,
    askHigh: 1279.25,
    askLow: 1278.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:30:00",
    bidOpen: 1278.20001,
    bidClose: 1278.45001,
    askOpen: 1278.70001,
    askClose: 1278.95001,
    bidHigh: 1278.75,
    bidLow: 1277.85,
    askHigh: 1279.25,
    askLow: 1278.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:35:00",
    bidOpen: 1278.45001,
    bidClose: 1278.85,
    askOpen: 1278.95001,
    askClose: 1279.35,
    bidHigh: 1278.95001,
    bidLow: 1278.45001,
    askHigh: 1279.45001,
    askLow: 1278.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:40:00",
    bidOpen: 1278.85,
    bidClose: 1278.45001,
    askOpen: 1279.35,
    askClose: 1278.95001,
    bidHigh: 1278.90001,
    bidLow: 1278.40001,
    askHigh: 1279.40001,
    askLow: 1278.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:45:00",
    bidOpen: 1278.45001,
    bidClose: 1278.85,
    askOpen: 1278.95001,
    askClose: 1279.35,
    bidHigh: 1279.05,
    bidLow: 1278.40001,
    askHigh: 1279.55,
    askLow: 1278.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:50:00",
    bidOpen: 1278.90001,
    bidClose: 1278.65001,
    askOpen: 1279.40001,
    askClose: 1279.15001,
    bidHigh: 1279.45001,
    bidLow: 1278.6,
    askHigh: 1279.95001,
    askLow: 1279.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:55:00",
    bidOpen: 1278.65001,
    bidClose: 1278.40001,
    askOpen: 1279.15001,
    askClose: 1278.90001,
    bidHigh: 1278.75,
    bidLow: 1278.25,
    askHigh: 1279.25,
    askLow: 1278.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 12:00:00",
    bidOpen: 1278.5,
    bidClose: 1278.90001,
    askOpen: 1279,
    askClose: 1279.40001,
    bidHigh: 1279.35,
    bidLow: 1278.5,
    askHigh: 1279.85,
    askLow: 1279
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 12:05:00",
    bidOpen: 1278.90001,
    bidClose: 1278.90001,
    askOpen: 1279.40001,
    askClose: 1279.40001,
    bidHigh: 1279.1,
    bidLow: 1278.6,
    askHigh: 1279.6,
    askLow: 1279.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 12:10:00",
    bidOpen: 1278.90001,
    bidClose: 1278.95001,
    askOpen: 1279.40001,
    askClose: 1279.45001,
    bidHigh: 1279,
    bidLow: 1278.55,
    askHigh: 1279.5,
    askLow: 1279.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 12:15:00",
    bidOpen: 1278.90001,
    bidClose: 1278.90001,
    askOpen: 1279.40001,
    askClose: 1279.40001,
    bidHigh: 1279,
    bidLow: 1278.65001,
    askHigh: 1279.5,
    askLow: 1279.15001
  }
];

let dataSetlcY = [];
let dataSetlcX = [];
for (let i = 0; i < rates.length; i++) {
  let data = rates[i];
  let priceDate = new Date(data.updatedDate.replace(" ", "T") + "Z");
  dataSetlcX.push(
    ("0" + priceDate.getHours()).slice(-2) +
      ":" +
      ("0" + priceDate.getMinutes()).slice(-2)
  );
  dataSetlcY.push(data.askClose);
}
lineChart({
  id: "lineChart",
  titleX: "X",
  titleY: "Y",
  labels: dataSetlcX,
  tickMaxY: 15.0,
  tickMinY: 0,
  tickStepY: 1,
  dataSet: [
    {
      type: "line",
      label: "Porcentaje",
      backgroundColor: "#2b6cb0",
      data: dataSetlcY,
      fill: false,
      borderColor: "#2b6cb0",
      borderWidth: 2
    }
  ],
  pointA: 56,
  pointB: 200,
  width: "600px",
  height: "200px"
});

// // var fillEstrategias = function(rates) {
var dataSetmlY1 = [];
var dataSetmlY2 = [];
var dataSetmlY3 = [];
var dataSetmlX = [];
for (let i = 0; i < rates.length; i++) {
  var data = rates[i];
  var priceDate = new Date(data.updatedDate.replace(" ", "T") + "Z");
  dataSetmlX.push(
    ("0" + priceDate.getHours()).slice(-2) +
      ":" +
      ("0" + priceDate.getMinutes()).slice(-2)
  );
  dataSetmlY1.push(data.askClose);
  dataSetmlY2.push(data.askLow);
  dataSetmlY3.push(data.bidOpen);
}

multiLineChart({
  id: "multiChart",
  titleX: "X",
  titleY: "Y",
  labels: dataSetmlX,
  tickMaxY: 15.0,
  tickMinY: 0,
  tickStepY: 1,
  dataSet: [
    {
      type: "line",
      label: "Largo Plazo",
      backgroundColor: "#c53030",
      data: dataSetmlY3,
      fill: false,
      borderColor: "#c53030",
      fontColor: "#c53030",
      borderWidth: 1
    },
    {
      type: "line",
      label: "Mediano Plazo",
      fill: false,
      data: dataSetmlY2,
      backgroundColor: "#2b6cb0",
      borderColor: "#2b6cb0",
      borderWidth: 1,
      fontColor: "#2b6cb0"
    },
    {
      type: "line",
      label: "Largo Plazo",
      fill: false,
      data: dataSetmlY1,
      borderColor: "#2f855a",
      borderWidth: 1,
      fontColor: "#2f855a",
      backgroundColor: "#2f855a"
    }
  ],
  width: "600px",
  height: "200px"
});

// Data of Pie Chart, prompt from service
let promedios = [
  {
    horizonte: "A (Liquidez)",
    dataA: 4,
    dataB: 3.8
  },
  {
    horizonte: "B (Conservación)",
    dataA: 4,
    dataB: 0
  },
  {
    horizonte: "C (Equilibrio)",
    dataA: 4,
    dataB: 5.5
  },
  {
    horizonte: "D (Incremento)",
    dataA: 4,
    dataB: 7
  },
  {
    horizonte: "E (Maximización)",
    dataA: 4,
    dataB: 9
  },
  {
    horizonte: "",
    dataA: 4
  },
  {
    horizonte: ""
  }
];

let charData = [];
for (let i = 0; i < promedios.length; i++) {
  let data_1 = promedios[i];
  charData.push({ name: data_1.horizonte, y: data_1.dataB });
}

// Pie Chart
pieHighchart({
  id: "container",
  title: "Promedios Pie Chart",
  format: "{series.name}: <b>{point.percentage:.1f}</b>",
  plotOptionsFormat: "<b>{point.name}</b>: {point.percentage:.1f}",
  labelsX: "Dato",
  dataSet: charData
});

// Pie Chart with border
pieBorderHighchart({
  id: "containerBorder",
  title: "Promedios Pie Chart Border",
  format: "{series.name}: <b>{point.percentage:.1f}</b>",
  plotOptionsFormat: "<b>{point.name}</b>: {point.percentage:.1f}",
  labelsX: "Porcentaje",
  dataSet: charData
});

// Data of Horizontal Bar Chart, prompt from service
let datos = [
  {
    mes: "Liquidez",
    data1: {
      x: "",
      y: 0
    },
    data2: {
      x: "Jane",
      y: 2
    },
    data3: {
      x: "Joe",
      y: 2
    },
    data4: {
      x: "",
      y: 0
    }
  }
];

let barCharData = [];
for (let i = 0; i < datos.length; i++) {
  let data_2 = datos[i];
  barCharData.push({
    title: data_2.mes,
    value: data_2.data1,
    radiusLeftTop: "",
    radiusLeftBottom: "",
    radiousRightTop: "",
    radiousRightBottom: ""
  });
  barCharData.push({
    title: data_2.mes,
    value: data_2.data2,
    radiusLeftTop: "",
    radiusLeftBottom: "",
    radiousRightTop: "30px",
    radiousRightBottom: "30px"
  });
  barCharData.push({
    title: data_2.mes,
    value: data_2.data3,
    radiusLeftTop: "30px",
    radiusLeftBottom: "30px",
    radiousRightTop: "",
    radiousRightBottom: ""
  });
  barCharData.push({
    title: data_2.mes,
    value: data_2.data4,
    radiusLeftTop: "",
    radiusLeftBottom: "",
    radiousRightTop: "",
    radiousRightBottom: ""
  });
}

// Call to Horizontal Bar Chart
barHighchart({
  id: "containerBar",
  title: "Bar Chart",
  dataSet: barCharData
});
