$("#aside").sidebarwrapper();

// ----------------------   COMPONENTES baraLateral   ----------------------
$("#frmCriteriosBusqueda").form();
$("#divFBanda").fielDate();
$("#divCboGrupo").select();
$("#divCboInstrumento").select();
$("#divBtnSearchBandas").button();
$("#frmCriteriosFiltros").form();
$("#divContrato").fieldInputPlusMinus();
$("#divDigito").fieldInputPlusMinus();
$("#divBtnsearchBandasDos").button();
$("#frmCriteriosDatos").form();
$("#divTazaPactada").fieldInput();
$("#divPlazo").fieldInput();
$("#divMontoInvertir").fieldInput();
$("#divBtnAdd").button();
$("#divBtnClean").button();
// ----------------------   COMPONENTES mainDiv   ----------------------
$("#divGrupoGrids").tabgroup();
$("#divBuscaBandasInput").fieldInput();
$("#divGridBandas").grid();
$("#divBtnReset").button();
$("#divBuscaContratosInput").fieldInput();
$("#divGridContratos").grid();
$("#divBtnSend").button();
$("#divBtnValidate").button();
$("#divBtnClean").button();
$("#divTotales").fieldInput();
$("#divBuscaEnviosInput").fieldInput();
$("#divGridEnviados").grid();
$("#divBtnResetEnviados").button();
$("#divBuscaErroresInput").fieldInput();
$("#divGridErrores").grid();
// ----------------------   GRID table_gridBandas   ----------------------
var capturaReportosParams = {};
httpFindAll("captura_reportos", capturaReportosParams, function(payload) {
  llenaGridCapturaReporto(payload);
});

var llenaGridCapturaReporto = function(capturaReportos) {
  $("#dtgGridBandas").jqGrid({
    data: capturaReportos,
    datatype: "local",
    height: "auto",
    toppager: true,
    gridview: true,
    pgtext: "P\u00E1gina {0} de {1}",
    recordtext: "Mostrando {0} - {1} de {2}",
    pagerpos: "center",
    viewrecords: true,
    forceFit: true,
    rowNum: 20,
    rowList: [10, 20, 30],
    colNames: ["Grupo", "Instrumento", "Plazo", "Tasa"],
    colModel: [
      {
        name: "grupo",
        index: "grupo",
        align: "center",
        width: 170,
        sortable: true
      },
      {
        name: "instrumento",
        index: "instrumento",
        align: "center",
        width: 100,
        sortable: true
      },
      {
        name: "plazo",
        index: "plazo",
        align: "center",
        width: 100,
        sortable: true
      },
      {
        name: "tasa",
        index: "tasa",
        align: "center",
        width: 150,
        sortable: true
      }
    ]
  });
};

// ----------------------   GRID table_gridContratos   ----------------------
var contratosReportosParams = {};
httpFindAll("contratos_reportos", contratosReportosParams, function(
  payload
) {
  llenaGridContratosReportos(payload);
});
var llenaGridContratosReportos = function(contratosReportos) {
  $("#dtgGridContratos").jqGrid({
    data: contratosReportos,
    datatype: "local",
    shrinkToFit: false,
    toppager: true,
    gridview: true,
    pgtext: "P\u00E1gina {0} de {1}",
    recordtext: "Mostrando {0} - {1} de {2}",
    pagerpos: "center",
    viewrecords: true,
    forceFit: true,
    rowNum: 20,
    rowList: [10, 20, 30],
    colNames: [
      "id_Renglon",
      "status Envio",
      "contrato",
      "nombre",
      "digito",
      "perfil_del_Contrato",
      "saldo_Disponible",
      "fecha_Banda",
      "grupo",
      "instrumento",
      "fecha_Vencimiento",
      "monto_a_Invertir",
      "tasa_Pactada",
      "plazo_Operacion",
      "servicio_de_Inversion",
      "tasa_Maxima",
      "spread",
      "prioridad",
      "medio_de_Liquidacion_Inicio(Cargos)",
      "medio_de_Liquidacion_Inicio(Abonos)",
      "art.194",
      "fechaLiq",
      "idClasif",
      "idDescParamTipoTasa",
      "idUsrGpo",
      "isGpoUser",
      "plazo_Ini",
      "plazo_Fin",
      "saldo_Banda",
      "arrayServicioInversion",
      "idBanda",
      "descripCortaLinea",
      "recomend"
    ],
    colModel: [
      {
        name: "grupo",
        index: "grupo",
        align: "center",
        width: 100,
        sortable: true
      },
      {
        name: "id_Renglon",
        index: "id_Renglon",
        align: "center",
        width: 100,
        sortable: true
      },
      {
        name: "status_Envio",
        index: "status Envio",
        align: "center",
        width: 100,
        sortable: true
      },
      {
        name: "contrato",
        index: "contrato",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "nombre",
        index: "nombre",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "Digito",
        index: "Digito",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "Perfil_Contrato",
        index: "Perfil_Contrato",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "saldo_Disponible",
        index: "saldo_Disponible",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "fecha_Banda",
        index: "fecha_Banda",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "grupo",
        index: "grupo",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "instrumento",
        index: "instrumento",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "fecha_Vencimiento",
        index: "fecha_Vencimiento",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "monto_a_Invertir",
        index: "monto_a_Invertir",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "tasa_Pactada",
        index: "tasa_Pactada",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "plazo_Operacion",
        index: "plazo_Operacion",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "servicio_de_Inversion",
        index: "servicio_de_Inversion",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "tasa_Maxima",
        index: "tasa_Maxima",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "spread",
        index: "spread",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "prioridad",
        index: "prioridad",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "liquidacion(Cargos)",
        index: "liquidacion(Cargos)",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "liquidacion(Abonos)",
        index: "liquidacion(Abonos)",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "art.194",
        index: "art.194",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "fechaLiq",
        index: "fechaLiq",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "idClasif",
        index: "idClasif",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "idDescParamTipoTasa",
        index: "idDescParamTipoTasa",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "idUsrGpo",
        index: "idUsrGpo",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "plazo_Ini",
        index: "plazo_Ini",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "plazo_Fin",
        index: "plazo_Fin",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "saldo_Banda",
        index: "saldo_Banda",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "arrayServicioInversion",
        index: "arrayServicioInversion",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "idBanda",
        index: "idBanda",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "descripCortaLinea",
        index: "descripCortaLinea",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "recomend",
        index: "recomend",
        align: "center",
        width: 50,
        sortable: true
      }
    ]
  });
};

// ----------------------   GRID table_gridEnviados   ----------------------
var enviosReportosParams = {};
httpFindAll("envios_reportos", contratosReportosParams, function(payload) {
  llenaGridErroresReportos(payload);
});
var llenaGridEnviosReportos = function(enviosReportos) {
  $("#dtgGridEnviados").jqGrid({
    data: enviosReportos,
    datatype: "local",
    shrinkToFit: false,
    toppager: true,
    gridview: true,
    pgtext: "P\u00E1gina {0} de {1}",
    recordtext: "Mostrando {0} - {1} de {2}",
    pagerpos: "center",
    viewrecords: true,
    forceFit: true,
    rowNum: 20,
    rowList: [10, 20, 30],
    colNames: [
      "id_Renglon",
      "status Envio",
      "contrato",
      "nombre",
      "digito",
      "perfil_del_Contrato",
      "saldo_Disponible",
      "fecha_Banda",
      "grupo",
      "instrumento",
      "fecha_Vencimiento",
      "monto_a_Invertir",
      "tasa_Pactada",
      "plazo_Operacion",
      "servicio_de_Inversion",
      "tasa_Maxima",
      "spread",
      "prioridad",
      "medio_de_Liquidacion_Inicio(Cargos)",
      "medio_de_Liquidacion_Inicio(Abonos)",
      "art.194",
      "fechaLiq",
      "idClasif",
      "idDescParamTipoTasa",
      "idUsrGpo",
      "isGpoUser",
      "plazo_Ini",
      "plazo_Fin",
      "saldo_Banda",
      "arrayServicioInversion",
      "idBanda",
      "descripCortaLinea",
      "recomend"
    ],
    colModel: [
      {
        name: "grupo",
        index: "grupo",
        align: "center",
        width: 100,
        sortable: true
      },
      {
        name: "id_Renglon",
        index: "id_Renglon",
        align: "center",
        width: 100,
        sortable: true
      },
      {
        name: "status_Envio",
        index: "status Envio",
        align: "center",
        width: 100,
        sortable: true
      },
      {
        name: "contrato",
        index: "contrato",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "nombre",
        index: "nombre",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "Digito",
        index: "Digito",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "Perfil_Contrato",
        index: "Perfil_Contrato",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "saldo_Disponible",
        index: "saldo_Disponible",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "fecha_Banda",
        index: "fecha_Banda",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "grupo",
        index: "grupo",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "instrumento",
        index: "instrumento",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "fecha_Vencimiento",
        index: "fecha_Vencimiento",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "monto_a_Invertir",
        index: "monto_a_Invertir",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "tasa_Pactada",
        index: "tasa_Pactada",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "plazo_Operacion",
        index: "plazo_Operacion",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "servicio_de_Inversion",
        index: "servicio_de_Inversion",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "tasa_Maxima",
        index: "tasa_Maxima",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "spread",
        index: "spread",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "prioridad",
        index: "prioridad",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "liquidacion(Cargos)",
        index: "liquidacion(Cargos)",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "liquidacion(Abonos)",
        index: "liquidacion(Abonos)",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "art.194",
        index: "art.194",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "fechaLiq",
        index: "fechaLiq",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "idClasif",
        index: "idClasif",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "idDescParamTipoTasa",
        index: "idDescParamTipoTasa",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "idUsrGpo",
        index: "idUsrGpo",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "plazo_Ini",
        index: "plazo_Ini",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "plazo_Fin",
        index: "plazo_Fin",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "saldo_Banda",
        index: "saldo_Banda",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "arrayServicioInversion",
        index: "arrayServicioInversion",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "idBanda",
        index: "idBanda",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "descripCortaLinea",
        index: "descripCortaLinea",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "recomend",
        index: "recomend",
        align: "center",
        width: 50,
        sortable: true
      }
    ]
  });
};

// ----------------------   GRID table_gridErrores   ----------------------
var erroresReportosParams = {};
httpFindAll("envios_reportos", contratosReportosParams, function(payload) {
  llenaGridEnviosReportos(payload);
});
var llenaGridErroresReportos = function(enviosReportos) {
  $("#dtgGridErrores").jqGrid({
    data: enviosReportos,
    datatype: "local",
    shrinkToFit: false,
    toppager: true,
    gridview: true,
    pgtext: "P\u00E1gina {0} de {1}",
    recordtext: "Mostrando {0} - {1} de {2}",
    pagerpos: "center",
    viewrecords: true,
    forceFit: true,
    rowNum: 20,
    rowList: [10, 20, 30],
    colNames: [
      "id_Renglon",
      "status Envio",
      "contrato",
      "nombre",
      "digito",
      "perfil_del_Contrato",
      "saldo_Disponible",
      "fecha_Banda",
      "grupo",
      "instrumento",
      "fecha_Vencimiento",
      "monto_a_Invertir",
      "tasa_Pactada",
      "plazo_Operacion",
      "servicio_de_Inversion",
      "tasa_Maxima",
      "spread",
      "prioridad",
      "medio_de_Liquidacion_Inicio(Cargos)",
      "medio_de_Liquidacion_Inicio(Abonos)",
      "art.194",
      "fechaLiq",
      "idClasif",
      "idDescParamTipoTasa",
      "idUsrGpo",
      "isGpoUser",
      "plazo_Ini",
      "plazo_Fin",
      "saldo_Banda",
      "arrayServicioInversion",
      "idBanda",
      "descripCortaLinea",
      "recomend"
    ],
    colModel: [
      {
        name: "grupo",
        index: "grupo",
        align: "center",
        width: 100,
        sortable: true
      },
      {
        name: "id_Renglon",
        index: "id_Renglon",
        align: "center",
        width: 100,
        sortable: true
      },
      {
        name: "status_Envio",
        index: "status Envio",
        align: "center",
        width: 100,
        sortable: true
      },
      {
        name: "contrato",
        index: "contrato",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "nombre",
        index: "nombre",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "Digito",
        index: "Digito",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "Perfil_Contrato",
        index: "Perfil_Contrato",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "saldo_Disponible",
        index: "saldo_Disponible",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "fecha_Banda",
        index: "fecha_Banda",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "grupo",
        index: "grupo",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "instrumento",
        index: "instrumento",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "fecha_Vencimiento",
        index: "fecha_Vencimiento",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "monto_a_Invertir",
        index: "monto_a_Invertir",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "tasa_Pactada",
        index: "tasa_Pactada",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "plazo_Operacion",
        index: "plazo_Operacion",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "servicio_de_Inversion",
        index: "servicio_de_Inversion",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "tasa_Maxima",
        index: "tasa_Maxima",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "spread",
        index: "spread",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "prioridad",
        index: "prioridad",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "liquidacion(Cargos)",
        index: "liquidacion(Cargos)",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "liquidacion(Abonos)",
        index: "liquidacion(Abonos)",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "art.194",
        index: "art.194",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "fechaLiq",
        index: "fechaLiq",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "idClasif",
        index: "idClasif",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "idDescParamTipoTasa",
        index: "idDescParamTipoTasa",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "idUsrGpo",
        index: "idUsrGpo",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "plazo_Ini",
        index: "plazo_Ini",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "plazo_Fin",
        index: "plazo_Fin",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "saldo_Banda",
        index: "saldo_Banda",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "arrayServicioInversion",
        index: "arrayServicioInversion",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "idBanda",
        index: "idBanda",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "descripCortaLinea",
        index: "descripCortaLinea",
        align: "center",
        width: 50,
        sortable: true
      },
      {
        name: "recomend",
        index: "recomend",
        align: "center",
        width: 50,
        sortable: true
      }
    ]
  });
};
