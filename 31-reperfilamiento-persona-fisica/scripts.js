$("#criterios_busqueda_accordion").customaccordion();
$("#criterios_busqueda").form();
$("#contrato").fieldInput();
$("#nombre").fieldInput();
$("#perfil").fieldInput();
$("#personaPerfilar").select();
$("#liquidezPor").fieldInput();
$("#liquidezMonto").fieldInput();
$("#cortoPlazoPor").fieldInput();
$("#cortoPlazoMonto").fieldInput();
$("#medianoPlazoPor").fieldInput();
$("#medianoPlazoMonto").fieldInput();
$("#largoPlazoPor").fieldInput();
$("#largoPlazoMonto").fieldInput();
$("#patrimonioPor").fieldInput();
$("#patrimonioMonto").fieldInput();

//grupo2
$("#edad").select();
$("#estudios").select();
$("#ocupacion").select();
$("#anterior").select();
$("#actual").select();
$("#inversiones").fieldOptions();
$("#estrategia").select();
$("#asesoria").select();

//grupo3
let encuesta_params = {};
// Name of json
httpFindAll("encuesta", encuesta_params, payload => {
  // Parameters: field name group, id of quiz, data
  fillQuiz("grupoTres", "encuesta", payload);
});

//grupo4
$("#proposito").select();
$("#tolerancia").select();
$("#horizonteInversion").select();
$("#limitantes").fieldOptions();
$("#grupoInstrumento").fieldSelectPlusMinus();
$("#grupoInstrumentoValor").fieldSelectPlusMinus();
$("#emisoras").fieldSelectPlusMinus();
$("#emisora").grid();

$("#grupoInstrumentos").hide();

$("input[name='limitantes']").change(() => {
  var opcion = $("input[name='limitantes']:checked").val();
  console.log(opcion);
  if (opcion == "true") {
    $("#grupoInstrumentos").show();
  } else {
    $("#grupoInstrumentos").hide();
  }
});

$("#boton").click(() => {
  var parametros = '[{ "emisora": "Emi", "tipoValor": "1" }]';
  $("#table_emisora")
    .jqGrid("addRow", { data: parametros })
    .trigger("reloadGrid");
});

$("#table_emisora").jqGrid({
  datatype: "local",
  height: 100,
  width: 305,
  colNames: ["Emisoras", "Tipo Valor"],
  colModel: [{ name: "emisora" }, { name: "tipoValor" }],
  rowNum: 10,
  rowList: [10, 20, 30],
  sortname: "tipo",
  sortorder: "desc",
  shrinkToFit: false
});

//grupo5
let encuesta2_params = {};
// Name of json
httpFindAll("encuesta2", encuesta2_params, payload => {
  // Parameters: field name group, id of quiz, data
  fillQuiz("grupoCinco", "encuesta2", payload);
});

//grupo6
$("#origen_uno").fieldCheckBox();
$("#otros").fieldInput();
$("#perfilDoc").fieldInput();
$("#btnimport").button();
$("#buttonsend").button();

$("#chk_origen_uno_9").click(() => {
  if ($("#chk_origen_uno_9").is(":checked")) {
    $("#field_otros").show();
  } else {
    $("#field_otros").hide();
  }
});

$(document).ready(function() {
  mostrarOcultar(true);
  var element = document.getElementById("datosInfo_group");
  element.classList.remove("flex");
  $("#field_otros").hide();
});

function mostrarOcultar(tipo) {
  if (tipo) {
    $("#mesaggePerfil").show();
    $("#rowPerfilar").show();
    $("#grupoTodo").show();
    $("#grupoAsesor").hide();
    $("#sticky-action-bar").show();
  } else {
    $("#mesaggePerfil").html(
      "El contrato tiene asociado un Asesor en Inversión, por lo tanto se le debe asignar por default el Perfil de Inversión P7 (NO APLICA)."
    );
    $("#downloadPerfil").html(
      "Clic en el boton PDF para descargar la documentacion. "
    );
    $("#rowPerfilar").hide();
    $("#grupoTodo").hide();
    $("#grupoAsesor").show();
    $("#sticky-action-bar").hide();
  }
}

// ----------     SERVICIOS     ---------- //

let select_params = {};
httpFindAll("edadesService", select_params, function(payload) {
  $("#edad").select2({
    placeholder: "--Seleccione--",
    minimumResultsForSearch: Infinity,
    data: payload
  });
});

httpFindAll("estudiosService", select_params, function(payload) {
  $("#estudios").select2({
    placeholder: "--Seleccione--",
    minimumResultsForSearch: Infinity,
    data: payload
  });
});

httpFindAll("ocupacionService", select_params, function(payload) {
  $("#ocupacion").select2({
    placeholder: "--Seleccione--",
    minimumResultsForSearch: Infinity,
    data: payload
  });
});

httpFindAll("estrategiaService", select_params, function(payload) {
  $("#estrategia").select2({
    placeholder: "--Seleccione--",
    minimumResultsForSearch: Infinity,
    data: payload
  });
});

httpFindAll("asesoriaService", select_params, function(payload) {
  $("#asesoria").select2({
    placeholder: "--Seleccione--",
    minimumResultsForSearch: Infinity,
    data: payload
  });
});

httpFindAll("propositoService", select_params, function(payload) {
  $("#proposito").select2({
    placeholder: "--Seleccione--",
    minimumResultsForSearch: Infinity,
    data: payload
  });
});

httpFindAll("toleranciaService", select_params, function(payload) {
  $("#tolerancia").select2({
    placeholder: "--Seleccione--",
    minimumResultsForSearch: Infinity,
    data: payload
  });
});

httpFindAll("horizonteInversion", select_params, function(payload) {
  $("#horizonteInversion")
    .select2({
      placeholder: "--Seleccione--",
      minimumResultsForSearch: Infinity,
      data: payload
    })
    .change(function() {
      var element = document.getElementById("textoPortafolio");
      element.innerHTML = $(this)
        .find("option:selected")
        .text();
      select_params = {};
      select_params.id = $(this)
        .find("option:selected")
        .val();
      obtienRangos(select_params);
    });
});

function obtienRangos(select_params) {
  httpFindAll("detallePortaFolio", select_params, payload => {
    if (payload.length > 0) {
      document.getElementById("menorDeUno").innerHTML =
        payload[0].menorDeUn + "%";
      document.getElementById("deUnoaTres").innerHTML =
        payload[0].deUnoaTres + "%";
      document.getElementById("mayorDeTres").innerHTML =
        payload[0].mayorDeTres + "%";
      document.getElementById("totalInver").innerHTML =
        +payload[0].menorDeUn +
        +payload[0].deUnoaTres +
        +payload[0].mayorDeTres +
        "%";
    } else {
      document.getElementById("menorDeUno").innerHTML = "";
      document.getElementById("deUnoaTres").innerHTML = "";
      document.getElementById("mayorDeTres").innerHTML = "";
      document.getElementById("totalInver").innerHTML = "";
    }
  });
}
