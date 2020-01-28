// Parte del acordion

$("#divCriteriosBusquedaAccordion").customaccordion();
$("#frmCriteriosBusqueda").form();
$("#divContrato").fieldInput();
$("#divDigito").fieldInput();
$("#divDv").fieldInput();
$("#divEstatus").fieldInput();
$("#divPerfil").fieldInput();
$("#divPerfilDos").fieldInput();
$("#divPortafolio").fieldInput();

$("#divPortafolioUuid").fieldInput();
$("#divClabe").fieldInput();
$("#divClabeDos").fieldInput();
$("#divSTipoPort").fieldInput();
$("#divLibro").fieldInput();
$("#divBtnSearch").button();
$("#divBtnPdf").button();
$("#divBtnXls").button();

// tabs

$("#divTitularCotitularTabGroup").tabgroup();
$("#divTabDos").tabgroup();
$("#divCotitularDosClasificacionContratoTabGroup").tabgroup();
$("#divConocimientoExperiencia").tabgroup();
$("#divLimitantesInvertir").tabgroup();

// tab clasificacion contrato , primer tab

$("#divAsesorInversion").fieldInput();
$("#divTipoManifiesto").fieldInput();
$("#divServicioInversion").fieldInput();
$("#divCartaEjecucion").fieldInput();
$("#divFechaCartaEjecucion").fieldInput();
$("#divCartaEjecucionDos").fieldInput();
$("#divFechaCartaEjecucionDos").fieldInput();
$("#divInstitucionalPractVta").fieldInput();
$("#divJustificacionInstitucionalPractVta").fieldInput();
$("#divFechaInstitucionalPractVta").fieldInput();
$("#divSofisticadoNosofisticado").fieldInput();
$("#divJustificacionSofisticadoNosofisticado").fieldInput();
$("#divFechaSofisticadoNosofisticado").fieldInput();
$("#divElegibleNoelegible").fieldInput();
$("#divJustificacionElegibleNoelegible").fieldInput();
$("#divFechaElegibleNoelegible").fieldInput();
$("#divCalificadoNocalificado").fieldInput();
$("#divJustificacionCalificadoNocalificado").fieldInput();
$("#divFechaCalificadoNocalificado").fieldInput();
$("#divDiscrecionalNodiscrecional").fieldInput();
$("#divJustificacionDiscrecionalNodiscrecional").fieldInput();
$("#divFechaDiscrecionalNodiscrecional").fieldInput();
$("#divAnexoDescriptivo").fieldInput();

// nacional

$("#divPfiNombre").fieldInput();
$("#divPfiActividad").fieldInput();
$("#divRfc").fieldInput();
$("#divPfiSexo").fieldInput();
$("#divPfiNacionalidad").fieldInput();
$("#divPfiCuenta").fieldInput();
$("#divPfiFechaNacimiento").fieldInput();
$("#divPfiCurp").fieldInput();
$("#divPfiCalidadMigratoria").fieldInput();

$("#divPersonaFisicaInt").grid();
$("#dtgPersonaFisicaInt").jqGrid({
  datatype: "local",
  height: "auto",
  colNames: ["Nombre", "Apellido Paterno", "Apellido Materno", "Porcentaje %"],
  colModel: [
    {
      name: "nombre_persona_int",
      width: 220
    },
    {
      name: "apellido_pat_persona_int",
      width: 220
    },
    {
      name: "apellido_mat_persona_int",
      width: 220
    },
    {
      name: "porcentaje_persona_int",
      width: 220
    }
  ],
  rowNum: 10,
  rowList: [10, 20, 30],
  sortname: "nombre_persona_int",
  sortorder: "desc",
  viewrecords: true,
  gridview: true,
  autoencode: true,
  caption: ""
});

//  nacional fisica internacional
$("#divNombre").fieldInput();
$("#divActividad").fieldInput();
$("#divPfiRfc").fieldInput();
$("#divSexo").fieldInput();
$("#divCurp").fieldInput();
$("#divFechaNacimiento").fieldInput();
$("#divCuenta").fieldInput();
$("#divNacionalidad").fieldInput();
$("#divCalidadMigratoria").fieldInput();
$("#divPfiPaisNac").fieldInput();
$("#divPfiEdoNac").fieldInput();

$("#divPersonaFisicaNac").grid();
$("#dtgPersonaFisicaNac").jqGrid({
  datatype: "local",
  height: "auto",
  colNames: ["Nombre", "Apellido Paterno", "Apellido Materno", "Porcentaje %"],
  colModel: [
    {
      name: "nombre_persona_nac",
      width: 220
    },
    {
      name: "apellido_pat_persona_nac",
      width: 220
    },
    {
      name: "apellido_mat_persona_nac",
      width: 220
    },
    {
      name: "porcentaje_persona_nac",
      width: 220
    }
  ],
  rowNum: 10,
  rowList: [10, 20, 30],
  sortname: "nombre_persona_nac",
  sortorder: "desc",
  viewrecords: true,
  gridview: true,
  autoencode: true,
  caption: ""
});

// moral extranjera
$("#divPmeNombreCorto").fieldInput();
$("#divPmePais").fieldInput();
$("#divPmeRfcGpoPertenencia").fieldInput();
$("#divPmeNacionalidad").fieldInput();
$("#divPmeGpoNacional").fieldInput();
$("#divPmeCustLocal").fieldInput();
$("#divPmeRecompra").fieldInput();
$("#divPmeCteBnmx").fieldInput();
$("#divPmeClasificacion").fieldInput();

// moral nacional
$("#divNombreCorto").fieldInput();
$("#divTipoUnidad").fieldInput();
$("#divRFC").fieldInput();
$("#divNumNotario").fieldInput();
$("#divNomNotario").fieldInput();
$("#divNumEscConst").fieldInput();
$("#divFechaEscCons").fieldInput();
$("#divRegPubComer").fieldInput();
$("#divFechaRegPubComer").fieldInput();
$("#divRecompra").fieldInput();

$("#divCteBnmx").fieldInput();
$("#divObsEscritura").fieldInput();
$("#divClasificacion").fieldInput();
$("#divClasificacionBanxico").fieldInput();

// conocimiento y experiencia

// Quiz group 3
let encuesta_params = {};
// Name of json
httpFindAll("encuesta", encuesta_params, function(payload) {
  // Parameters: field name group, id of quiz, data
  fillQuiz("divEjemploQuiz", "encuesta", payload);
});

// limitantes a invertir

$("#divCotitularDosClasificacionContratoLimitantesIntervenir").grid();

$("#dtgCotitularDosClasificacionContratoLimitantesIntervenir").jqGrid({
  datatype: "local",
  height: "auto",
  colNames: [
    "Grupo Insrumento",
    "Tipo Valor",
    "Emisoras",
    "Tipo Valor Emisoras"
  ],
  colModel: [
    {
      name: "grupo_instrumentos",
      width: 300
    },
    {
      name: "tipo_valor",
      width: 150
    },
    {
      name: "emisoras",
      width: 150
    },
    {
      name: "tipo_valor_emisora",
      width: 180
    }
  ],
  rowNum: 10,
  rowList: [10, 20, 30],
  sortname: "grupo_instrumentos",
  sortorder: "desc",
  viewrecords: true,
  gridview: true,
  autoencode: true,
  caption: ""
});

// relacion emisor

$("#divCotitularDosClasificacionContratoRelacionEmisor").grid();
$("#dtgCotitularDosClasificacionContratoRelacionEmisor").jqGrid({
  datatype: "local",
  height: "auto",
  colNames: ["Emisor", "Relación"],
  colModel: [
    {
      name: "emisor",
      width: 350
    },
    {
      name: "relacion",
      width: 200
    }
  ],
  rowNum: 10,
  rowList: [10, 20, 30],
  sortname: "relacion",
  sortorder: "desc",
  viewrecords: true,
  gridview: true,
  autoencode: true,
  caption: ""
});

// tab comisiones

$("#divCotitularDosComisiones").grid();
$("#dtgCotitularDosComisiones").jqGrid({
  datatype: "local",
  height: "auto",
  colNames: ["Tipo", "Porcentaje %"],
  colModel: [
    {
      name: "tipo",
      width: 350
    },
    {
      name: "porcentaje",
      width: 500
    }
  ],
  rowNum: 10,
  rowList: [10, 20, 30],
  sortname: "porcentaje",
  sortorder: "desc",
  viewrecords: true,
  gridview: true,
  autoencode: true,
  caption: ""
});

//

$("#divDocumentacionFlags").fieldCheckBox();
// $("#horizontal-splitter").fieldSplitter();

// domicilio
$("#divCotitularDosDomicilio").grid();
$("#dtgCotitularDosDomicilio").jqGrid({
  datatype: "local",
  height: "auto",
  colNames: [
    "Tipo Dom.",
    "Dirección",
    "Colonia",
    "Municipio/Del.",
    "C.P.",
    "Ciudad",
    "Estado",
    "Pais",
    "Apto. Postal"
  ],
  colModel: [
    {
      name: "tipo_dom",
      width: 150
    },
    {
      name: "direccion",
      width: 150
    },
    {
      name: "colonia",
      width: 150
    },
    {
      name: "municipio_del",
      width: 150
    },
    {
      name: "cp",
      width: 150
    },
    {
      name: "ciudad",
      width: 150
    },
    {
      name: "estado",
      width: 150
    },
    {
      name: "pais",
      width: 150
    },
    {
      name: "apto_postal",
      width: 150
    }
  ],
  rowNum: 10,
  rowList: [10, 20, 30],
  sortname: "tipo_dom",
  sortorder: "desc",
  viewrecords: true,
  gridview: true,
  autoencode: true,
  caption: ""
});

// firmas autorizadas

$("#divCotitularDosFirmasAutorizadas").grid();
$("#dtgCotitularDosFirmasAutorizadas").jqGrid({
  datatype: "local",
  height: "auto",
  colNames: [
    "Tipo",
    "Nombre",
    "Apellido Paterno",
    "Apellido  Materno",
    "No Escri",
    "No Not",
    "Reg Pub Comer",
    "Obs Firma"
  ],
  colModel: [
    {
      name: "tipo",
      width: 150
    },
    {
      name: "nombre",
      width: 150
    },
    {
      name: "ap_paterno",
      width: 150
    },
    {
      name: "ap_materno",
      width: 150
    },
    {
      name: "no_escri",
      width: 150
    },
    {
      name: "no_not",
      width: 150
    },
    {
      name: "reg_pub_comer",
      width: 150
    },
    {
      name: "obs_firma",
      width: 150
    }
  ],
  rowNum: 10,
  rowList: [10, 20, 30],
  sortname: "tipo",
  sortorder: "desc",
  viewrecords: true,
  gridview: true,
  autoencode: true,
  caption: ""
});

// documentacion
$("#divSplitter").fieldSplitter();

$("#divCotitularDosDocumentacionContrato").grid();
$("#dtgCotitularDosDocumentacionContrato").jqGrid({
  datatype: "local",
  height: "auto",
  colNames: ["Sts", "Documentación", "Tipo", "Observaciones"],
  colModel: [
    {
      name: "sts",
      width: 50,
      formatter: valores
    },
    {
      name: "documentacion",
      width: 400
    },
    {
      name: "tipo",
      width: 400
    },
    {
      name: "observaciones",
      width: 200
    }
  ],
  rowNum: 10,
  rowList: [10, 20, 30],
  sortname: "tipo",
  sortorder: "desc",
  viewrecords: true,
  gridview: true,
  autoencode: true,
  caption: ""
});

$("#divCotitularDosDocumentacionCliente").grid();
$("#dtgCotitularDosDocumentacionCliente").jqGrid({
  datatype: "local",
  height: "auto",
  colNames: ["Sts", "Documentación", "Tipo", "Observaciones"],
  colModel: [
    { name: "sts", width: 50, formatter: valores },
    { name: "documentacion", width: 400 },
    { name: "tipo", width: 400 },
    { name: "observaciones", width: 200 }
  ],
  rowNum: 10,
  rowList: [10, 20, 30],
  sortname: "tipo",
  sortorder: "desc",
  viewrecords: true,
  gridview: true,
  autoencode: true,
  caption: ""
});
// formatos fiscales

$("#divFormatosFiscalesFlags").fieldCheckBox();
$("#divCotitularDosFormatosFiscales").grid();

$("#dtgCotitularDosFormatosFiscales").jqGrid({
  datatype: "local",
  height: "auto",
  colNames: [
    "Custodio",
    "W-8 BEN",
    "W-8 IMY",
    "W9",
    "PRUEBA2",
    "PRUEBA JQUERY",
    "JQUERY",
    "JQUER",
    "Fecha Formato",
    "Fecha Vencimiento",
    "OUI"
  ],
  colModel: [
    {
      name: "custodio",
      width: 150
    },
    {
      name: "w8_ben",
      width: 150,
      formatter: valores
    },
    {
      name: "w8_imy",
      width: 150
    },
    {
      name: "w9",
      width: 150
    },
    {
      name: "prueba2",
      width: 150
    },
    {
      name: "pruebajquery",
      width: 150
    },
    {
      name: "jquery",
      width: 150
    },
    {
      name: "jquer",
      width: 150
    },
    {
      name: "fecha_formato",
      width: 150
    },
    {
      name: "fecha_vencimiento",
      width: 150
    },
    {
      name: "oui",
      width: 150
    }
  ],
  rowNum: 10,
  rowList: [10, 20, 30],
  sortname: "fecha_vencimiento",
  sortorder: "desc",
  viewrecords: true,
  gridview: true,
  autoencode: true,
  caption: ""
});

// medio de comunicacion
$("#divCotitularDosMedioComunicacion").grid();

$("#dtgCotitularDosMedioComunicacion").jqGrid({
  datatype: "local",
  height: "auto",
  colNames: ["Tipo", "Descripción", "Observaciones"],
  colModel: [
    {
      name: "tipo",
      width: 250
    },
    {
      name: "descripcion",
      width: 250
    },
    {
      name: "observaciones",
      width: 560
    }
  ],
  rowNum: 10,
  rowList: [10, 20, 30],
  sortname: "tipo",
  sortorder: "desc",
  viewrecords: true,
  gridview: true,
  autoencode: true,
  caption: ""
});

// medio liquidación
$("#divCotitularDosMedioLiquidacion").grid();
$("#dtgCotitularDosMedioLiquidacion").jqGrid({
  datatype: "local",
  height: "auto",
  colNames: [
    "Sts",
    "Titular Cuenta",
    "Medio Liq",
    "Inst Financiera",
    "No Cta",
    "No Cliente Banco",
    "No Succ",
    "Plaza",
    "Fut Cta",
    "Fut Benef"
  ],
  colModel: [
    {
      name: "sts",
      width: 150
    },
    {
      name: "titular_cuenta",
      width: 150
    },
    {
      name: "medio_liq",
      width: 150
    },
    {
      name: "inst_financiera",
      width: 150
    },
    {
      name: "no_cuenta",
      width: 150
    },
    {
      name: "no_cliente_banco",
      width: 150
    },
    {
      name: "no_succ",
      width: 150
    },
    {
      name: "plaza",
      width: 150
    },
    {
      name: "fut_cta",
      width: 150
    },
    {
      name: "fut_benef",
      width: 150
    }
  ],
  rowNum: 10,
  rowList: [10, 20, 30],
  sortname: "tipo",
  sortorder: "desc",
  viewrecords: true,
  gridview: true,
  autoencode: true,
  caption: ""
});

// observaciones

$("#divTextAreaObservaciones").fieldInput();
$("#divFechaApertura").fieldInput();
$("#divMontoInicial").fieldInput();
$("#divSector").fieldInput();
$("#divResidencia").fieldInput();
$("#divEnvioCorrespondencia").fieldInput();
$("#divTipoCuenta").fieldInput();
$("#divManejoCuenta").fieldInput();
$("#divCustodiaAdmon").fieldInput();
$("#divLimMaxOperacion").fieldInput();
$("#divIsrMdoDin").fieldInput();
$("#divFechaUltMov").fieldInput();
$("#divPorcentajeAcumIsr").fieldInput();
$("#divPorcentajeAcumIde").fieldInput();
$("#divImprimeEstadoCuenta").fieldInput();

const form_buscar_contrato = $("#frmCriteriosBusqueda")
  .parsley()
  .on("field:validated", function() {
    const ok = $(".parsley-error").length === 0;
  })
  .on("form:submit", function() {
    const contrato = String($("#txtContrato").val());
    httpFindOne("contratos", contrato, function(payload) {
      console.log(
        "-------> ",
        payload.cotitulares[0].clasificacion_contrato.servicio_inversion
      );
      llenarInfoContrato(payload);
      llenarTabContrato(payload, 0);
      llenarObservacionesContrato(payload, 0);
      llenarCotitular_LimitantesInvertir(payload, 0);
      llenarCotitular_RelacionEmisor(payload, 0);
      llenarCotitular_Comisiones(payload, 0);
      llenarCotitular_Documentacion(payload, 0);
      llenarCotitular_Domicilio(payload, 0);
      llenarCotitular_FirmasAutorizadas(payload, 0);
      llenarCotitular_FormatosFiscales(payload, 0);
      llenarCotitular_MediosComunicacion(payload, 0);
      llenarCotitular_MedioLiquidacion(payload, 0);
    });
    return false;
  });

const llenarInfoContrato = function(payload) {
  $("#txtDigito").val(payload.digito);
  $("#txtDv").val(payload.dv);
  $("#txtEstatus").val(payload.estatus);
  $("#txtPerfil").val(payload.perfil);
  $("#txtPerfilDos").val(payload.perfil2);
  $("#txtPortafolio").val(payload.portafolio);
  $("#txtPortafolioUuid").val(payload.portafolio_uuid);
  $("#txtClabe").val(payload.clabe);
  $("#txtClabeDos").val(payload.clabe2);
  $("#txtSTipoPort").val(payload.stipo_port);
  $("#txtLibro").val(payload.libro);
};

const llenarTabContrato = function(payload, i) {
  $("#txtServicioInversion").val(
    payload.cotitulares[i].clasificacion_contrato.servicio_inversion
  );
  $("#txtCartaEjecucion").val(
    payload.cotitulares[i].clasificacion_contrato.carta_ejecucion
  );
  $("#txtFechaCartaEjecucion").val(
    payload.cotitulares[i].clasificacion_contrato.fecha_carta_ejecucion
  );
  $("#txtCartaEjecucionDos").val(
    payload.cotitulares[i].clasificacion_contrato.carta_ejecucion_2
  );
  $("#txtFechaCartaEjecucionDos").val(
    payload.cotitulares[i].clasificacion_contrato.fecha_carta_ejecucion_2
  );
  $("#txtInstitucionalPractVta").val(
    payload.cotitulares[i].clasificacion_contrato.institucional_pract_vta
  );
  $("#txtJustificacionInstitucionalPractVta").val(
    payload.cotitulares[i].clasificacion_contrato
      .justificacion_institucional_pract_vta
  );
  $("#txtFechaInstitucionalPractVta").val(
    payload.cotitulares[i].clasificacion_contrato.fecha_institucional_pract_vta
  );
  $("#txtSofisticadoNosofisticado").val(
    payload.cotitulares[i].clasificacion_contrato.sofisticado_nosofisticado
  );
  $("#txtJustificacionSofisticadoNosofisticado").val(
    payload.cotitulares[i].clasificacion_contrato
      .justificacion_sofisticado_nosofisticado
  );

  $("#txtFechaSofisticadoNosofisticado").val(
    payload.cotitulares[i].clasificacion_contrato
      .fecha_sofisticado_nosofisticado
  );
  $("#txtElegibleNoelegible").val(
    payload.cotitulares[i].clasificacion_contrato.elegible_noelegible
  );
  $("#txtJustificacionElegibleNoelegible").val(
    payload.cotitulares[i].clasificacion_contrato
      .justificacion_elegible_noelegible
  );
  $("#txtFechaElegibleNoElegible").val(
    payload.cotitulares[i].clasificacion_contrato.fecha_elegible_noelegible
  );
  $("#txtCalificadoNocalificado").val(
    payload.cotitulares[i].clasificacion_contrato.calificado_nocalificado
  );
  $("#txtJustificacionCalificadoNocalificado").val(
    payload.cotitulares[i].clasificacion_contrato
      .justificacion_calificado_nocalificado
  );
  $("#txtFechaCalificadoNocalificado").val(
    payload.cotitulares[i].clasificacion_contrato
      .justificacion_institucional_pract_vta
  );
  $("#txtFechaInstitucionalPractVta").val(
    payload.cotitulares[i].clasificacion_contrato.fecha_calificado_nocalificado
  );
  $("#txtDiscrecionalNodiscrecional").val(
    payload.cotitulares[i].clasificacion_contrato.discrecional_nodiscrecional
  );
  $("#txtJustificacionDiscrecionalNodiscrecional").val(
    payload.cotitulares[i].clasificacion_contrato
      .justificacion_discrecional_nodiscrecional
  );
  $("#txtFechaDiscrecionalNodiscrecional").val(
    payload.cotitulares[i].clasificacion_contrato
      .fecha_discrecional_nodiscrecional
  );
};

const llenarObservacionesContrato = function(payload, i) {
  $("#txtFechaApertura").val(payload.cotitulares[i].observaciones.fecha_apertura);
  $("#txtMontoInicial").val(payload.cotitulares[i].observaciones.monto_inicial);
  $("#txtSector").val(payload.cotitulares[i].observaciones.sector);
  $("#txtResidencia").val(payload.cotitulares[i].observaciones.residencia);
  $("#txtEnvioCorrespondencia").val(
    payload.cotitulares[i].observaciones.envio_correspondencia
  );

  $("#txtTipoCuenta").val(payload.cotitulares[i].observaciones.tipo_cuenta);
  $("#txtManejoCuenta").val(payload.cotitulares[i].observaciones.manejo_cuenta);
  $("#txtCustodiaAdmon").val(payload.cotitulares[i].observaciones.custodia_admon);
  $("#txtLimMaxOperacion").val(
    payload.cotitulares[i].observaciones.lim_max_operacion
  );

  $("#txtIsrMdoDin").val(payload.cotitulares[i].observaciones.isr_mdo_din);
  $("#txtFechaUltMov").val(payload.cotitulares[i].observaciones.fecha_ult_mov);
  $("#txtPorcentajeAcumIsr").val(
    payload.cotitulares[i].observaciones.porcentaje_acum_isr
  );
  $("#txtPorcentajeAcumIde").val(
    payload.cotitulares[i].observaciones.porcentaje_acum_ide
  );
  $("#txtImprimeEstadoCuenta").val(
    payload.cotitulares[i].observaciones.imprime_estado_cuenta
  );
};

const llenarCotitular_LimitantesInvertir = function(payload, i) {
  const limitantesInvertirArray =
    payload.cotitulares[i].clasificacion_contrato.limitantes_invertitr;
  fillJqGrid(
    "#dtgCotitularDosClasificacionContratoLimitantesIntervenir",
    limitantesInvertirArray
  );
};

const llenarCotitular_RelacionEmisor = function(payload, i) {
  const relacionEmisorArray =
    payload.cotitulares[i].clasificacion_contrato.relacion_emisor;
  fillJqGrid(
    "#dtgCotitularDosClasificacionContratoRelacionEmisor",
    relacionEmisorArray
  );
};

const llenarCotitular_Comisiones = function(payload, i) {
  const comisionesArray = payload.cotitulares[i].comisiones;
  fillJqGrid("#dtgCotitularDosComisiones", comisionesArray);
};
//  documentacion

const llenarCotitular_Documentacion = function(payload, i) {
  const documentacionContratoArray =
    payload.cotitulares[i].documentacion.contrato;
  $("#dtgCotitularDosDocumentacionContrato").jqGrid("clearGridData");
  $("#dtgCotitularDosDocumentacionContrato").jqGrid("setGridParam", {
    data: documentacionContratoArray
  });
  $("#dtgCotitularDosDocumentacionContrato").trigger("reloadGrid");
  const documentacionClienteArray =
    payload.cotitulares[i].documentacion.cliente;
  $("#dtgCotitularDosDocumentacionCliente").jqGrid("clearGridData");
  $("#dtgCotitularDosDocumentacionCliente").jqGrid("setGridParam", {
    data: documentacionClienteArray
  });
  $("#dtgCotitularDosDocumentacionCliente").trigger("reloadGrid");
};
//
const llenarCotitular_Domicilio = function(payload, i) {
  const domicilioArray = payload.cotitulares[i].domicilio;
  fillJqGrid("#dtgCotitularDosDomicilio", domicilioArray);
};

const llenarCotitular_FirmasAutorizadas = function(payload, i) {
  const firmasAutorizadasArray = payload.cotitulares[i].firmas_autorizadas;
  fillJqGrid("#dtgCotitularDosFirmasAutorizadas", firmasAutorizadasArray);
};

const llenarCotitular_FormatosFiscales = function(payload, i) {
  const formatosFiscalesArray = payload.cotitulares[i].formatos_fiscales;
  fillJqGrid("#dtgCotitularDosFormatosFiscales", formatosFiscalesArray);
  $("#dtgCotitularDosFormatosFiscales").jqGrid("clearGridData");
  $("#dtgCotitularDosFormatosFiscales").jqGrid("setGridParam", {
    data: formatosFiscalesArray
  });
  $("#dtgCotitularDosFormatosFiscales").trigger("reloadGrid");
};

const llenarCotitular_MediosComunicacion = function(payload, i) {
  const mediosComunicacionArray = payload.cotitulares[i].medio_comunicacion;
  fillJqGrid("#dtgCotitularDosMedioComunicacion", mediosComunicacionArray);
};

const llenarCotitular_MedioLiquidacion = function(payload, i) {
  const mediosComunicacionArray = payload.cotitulares[i].medio_liquidacion;
  fillJqGrid("#dtgCotitularDosMedioLiquidacion", mediosComunicacionArray);
};

function valores(cellvalue, options, rowObject) {
  if (cellvalue == "yellow check" || cellvalue == "check yellow") {
    return '<div class="w-5 h-5 bg-yellow-500 ml-6"></div>';
  } else if (cellvalue == "green check" || cellvalue == "check green") {
    return '<div class="w-5 h-5 bg-green-500 ml-6"></div>';
  } else if (cellvalue == "red check" || cellvalue == "check red") {
    return '<div class="w-5 h-5 bg-red-500 ml-6"></div>';
  } else if (cellvalue == "black check" || cellvalue == "check black") {
    return '<div class="w-5 h-5 bg-black-500 ml-6"></div>';
  } else {
    return "";
  }
}
