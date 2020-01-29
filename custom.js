$("#divContrato1").fieldInputPlusMinus();
$("#divContrato2").fieldInputPlusMinus();
$("#divContrato3").fieldInputPlusMinus();
$("#divContrato4").fieldInputPlusMinus();
$("#divContrato5").fieldInputPlusMinus();
$("#divContrato6").fieldInputPlusMinus();

$("#divContrato7").fieldSelectPlusMinus();
$("#divContrato8").fieldSelectPlusMinus();
$("#divContrato9").fieldSelectPlusMinus();
$("#divContrato10").fieldSelectPlusMinus();

$("#divContrato11").fieldSelectPlusMinusAutocomplete();
$("#divContrato12").fieldSelectPlusMinusAutocomplete();
$("#divContrato13").fieldSelectPlusMinusAutocomplete();
$("#divContrato14").fieldSelectPlusMinusAutocomplete();

$("#divButtonSave").button();
$("#divButtonSearchSmall").button();
$("#divButtonSearch").button();
$("#divButtonSearchMedium").button();
$("#divButtonImport").button();
$("#divGrid").grid();
$("#divGridRecordsCount").gridrecordscount();
$("#divTabUno").tabgroup();
$("#divTabDos").tabgroup();
$("#divSidebar").sidebarwrapper();
$("#divSwitch").fieldswitch();
$("#divSpinner").spinner();
$("#divTimePicker").fieldtimepicker();
$("#divMonthYear").fieldmonthyear();

// $("[data-component-type='text']").fieldInput();
$("#divTxtContrato").fieldInput();
$("#divTxtContratoFalse").fieldInput();
$("#divTxtContratoVertical").fieldInput();
$("#divTxtContratoFalseVertical").fieldInput();

$("#divFechaHorizontal").fielDate();
$("#divFechaVertical").fielDate();
$("#divFechaHorizontalDos").fielDate();
$("#divFechaVericalDos").fielDate();

$("#divNegocio").fieldOptions();

$("#divServicioInversion").fieldCheckBox();
$("#divFormContrato").form();

$("#divEjemploAccordion").customaccordion();

$("#divSplitter").fieldSplitter();
$("#divButtonSplitter").button();

$("#divPayment").select();

$("#divGraficasAccordion").customaccordion();

// HighChart
$("#divContainer").fieldChart();
$("#divContainerBorder").fieldChart();
$("#divContainerBar").fieldChart();

// ChartJs
$("#divStackChart").canvas();
$("#divBarChart").canvas();
$("#divBarChartNBar").canvas();
$("#divLineChart").canvas();
$("#divMultiChart").canvas();

// Swap List
$("#divListado").fieldSwaplist();

// Date Range
$("#divRango").fieldDateRange();
validateDateRage("divRango");
fieldBeginDateRangeClear("divRango");
fieldEndDateRangeClear("divRango");

// Quiz group 3
let encuesta_params = {};
// Name of json
httpFindAll("encuesta", encuesta_params, function(payload) {
  // Parameters: field name group, id of quiz, data
  fillQuiz("divEjemploQuiz", "encuesta", payload);

});
