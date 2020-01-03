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
$("#tab2").tabgroup();
$("#sidebar1").sidebarwrapper();

// $("[data-component-type='text']").fieldInput();
$("#contratoTxt").fieldInput();
$("#contratoTxtFalse").fieldInput();
$("#contratoTxtVertical").fieldInput();
$("#contratoTxtFalseVertical").fieldInput();

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

// HighChart
$("#container").fieldChart();
$("#containerBorder").fieldChart();
$("#containerBar").fieldChart();

// ChartJs
$("#stackChart").canvas();
$("#barChart").canvas();
$("#barChartNBar").canvas();
$("#lineChart").canvas();
$("#multiChart").canvas();

// Swap List
$("#listado").fieldSwaplist();

// Date Range
$("#rango").fieldDateRange();

// Quiz group 3
let encuesta_params = {};
// Name of json
http_findAll("encuesta", encuesta_params, payload => {
  // Parameters: field name group, id of quiz, data
  fillQuiz("ejemploQuiz", "encuesta", payload);
});
