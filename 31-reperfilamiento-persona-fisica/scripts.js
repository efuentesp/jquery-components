$("#divCriteriosBusquedaAccordion").customaccordion();
$("#frmCriteriosBusqueda").form();
$("#divContrato").fieldInput();
$("#divNombre").fieldInput();
$("#divPerfil").fieldInput();
$("#divPersonaPerfilar").select();
$("#divLiquidezPor").fieldInput();
$("#divLiquidezMonto").fieldInput();
$("#divCortoPlazoPor").fieldInput();
$("#divCortoPlazoMonto").fieldInput();
$("#divMedianoPlazoPor").fieldInput();
$("#divMedianoPlazoMonto").fieldInput();
$("#divLargoPlazoPor").fieldInput();
$("#divLargoPlazoMonto").fieldInput();
$("#divPatrimonioPor").fieldInput();
$("#divPatrimonioMonto").fieldInput();

//grupo2
$("#divEdad").select();
$("#divEstudios").select();
$("#divOcupacion").select();
$("#divAnterior").select();
$("#divAtual").select();
$("#divInversiones").fieldOptions();
$("#divEstrategia").select();
$("#divAsesoria").select();

//grupo3
let encuesta_params = {};
// Name of json
httpFindAll("encuesta", encuesta_params, payload => {
  // Parameters: field name group, id of quiz, data
  fillQuiz("divGrupoTres", "encuesta", payload);
});

//grupo4
$("#divProposito").select();
$("#divTolerancia").select();
$("#divHorizonteInversion").select();
$("#divLimitantes").fieldOptions();
$("#divGrupoInstrumento").fieldSelectPlusMinus();
$("#divGrupoInstrumentoValor").fieldSelectPlusMinus();
$("#divEmisoras").fieldSelectPlusMinus();
$("#divEmisora").grid();

$("#divGrupoInstrumentos").hide();

$("input[name='divLimitantes']").change(() => {
  var opcion = $("input[name='divLimitantes']:checked").val();
  console.log(opcion);
  if (opcion == "divSi") {
    $("#divGrupoInstrumentos").show();
  } else {
    $("#divGrupoInstrumentos").hide();
  }
});

$("#pBoton").click(() => {
  var parametros = '[{ "emisora": "Emi", "tipoValor": "1" }]';
  $("#dtgEemisora")
    .jqGrid("addRow", { data: parametros })
    .trigger("reloadGrid");
});

$("#dtgEmisora").jqGrid({
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
  fillQuiz("divGrupoCinco", "encuesta2", payload);
});

//grupo6
$("#divOrigenUno").fieldCheckBox();
$("#divOtros").fieldInput();
$("#divPerfilDoc").fieldInput();
$("#divBtnImport").button();
$("#divButtonSend").button();

$("#chkOrigenUno9").click(() => {
  if ($("#chkOrigenUno9").is(":checked")) {
    $("#divFieldOtros").show();
  } else {
    $("#divFieldOtros").hide();
  }
});

$(document).ready(function() {
  mostrarOcultar(true);
  var element = document.getElementById("divDatosInfoGroup");
  element.classList.remove("flex");
  $("#divFieldOtros").hide();
});

function mostrarOcultar(tipo) {
  if (tipo) {
    $("#divMesaggePerfil").show();
    $("#divRowPerfilar").show();
    $("#divGrupoTodo").show();
    $("#divGrupoAsesor").hide();
    $("#divStickyActionBar").show();
  } else {
    $("#divMesaggePerfil").html(
      "El contrato tiene asociado un Asesor en Inversión, por lo tanto se le debe asignar por default el Perfil de Inversión P7 (NO APLICA)."
    );
    $("#divDownloadPerfil").html(
      "Clic en el boton PDF para descargar la documentacion. "
    );
    $("#divRowPerfilar").hide();
    $("#divGrupoTodo").hide();
    $("#divGrupoAsesor").show();
    $("#divStickyActionBar").hide();
  }
}

// ----------     SERVICIOS     ---------- //

let select_params = {};
httpFindAll("edadesService", select_params, function(payload) {
  $("#cmbEdad").select2({
    placeholder: "--Seleccione--",
    minimumResultsForSearch: Infinity,
    data: payload
  });
});

httpFindAll("estudiosService", select_params, function(payload) {
  $("#cmbEstudios").select2({
    placeholder: "--Seleccione--",
    minimumResultsForSearch: Infinity,
    data: payload
  });
});

httpFindAll("ocupacionService", select_params, function(payload) {
  $("#cmbOcupacion").select2({
    placeholder: "--Seleccione--",
    minimumResultsForSearch: Infinity,
    data: payload
  });
});

httpFindAll("estrategiaService", select_params, function(payload) {
  $("#cmbEstrategia").select2({
    placeholder: "--Seleccione--",
    minimumResultsForSearch: Infinity,
    data: payload
  });
});

httpFindAll("asesoriaService", select_params, function(payload) {
  $("#cmbAsesoria").select2({
    placeholder: "--Seleccione--",
    minimumResultsForSearch: Infinity,
    data: payload
  });
});

httpFindAll("propositoService", select_params, function(payload) {
  $("#cmbProposito").select2({
    placeholder: "--Seleccione--",
    minimumResultsForSearch: Infinity,
    data: payload
  });
});

httpFindAll("toleranciaService", select_params, function(payload) {
  $("#cmbTolerancia").select2({
    placeholder: "--Seleccione--",
    minimumResultsForSearch: Infinity,
    data: payload
  });
});

httpFindAll("horizonteInversion", select_params, function(payload) {
  $("#combHorizonteInversion")
    .select2({
      placeholder: "--Seleccione--",
      minimumResultsForSearch: Infinity,
      data: payload
    })
    .change(function() {
      var element = document.getElementById("pTextoPortafolio");
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
      document.getElementById("pMenorDeUno").innerHTML =
        payload[0].menorDeUn + "%";
      document.getElementById("pMeUnoaTres").innerHTML =
        payload[0].deUnoaTres + "%";
      document.getElementById("pMayorDeTres").innerHTML =
        payload[0].mayorDeTres + "%";
      document.getElementById("pTotalInver").innerHTML =
        +payload[0].menorDeUn +
        +payload[0].deUnoaTres +
        +payload[0].mayorDeTres +
        "%";
    } else {
      document.getElementById("pMenorDeUno").innerHTML = "";
      document.getElementById("pDeUnoaTres").innerHTML = "";
      document.getElementById("pMayorDeTres").innerHTML = "";
      document.getElementById("pTotalInver").innerHTML = "";
    }
  });
}
