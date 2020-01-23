$("#aside").sidebarwrapper();

// ----------------------   COMPONENTES baraLateral   ----------------------
$("#criterios-busqueda").form();
$("#fBanda").fielDate();
$("#cboGrupo").select();
$("#cboInstrumento").select();
$("#btnsearchbandas").button();
$("#criterios-Filtros").form();
$("#contrato").fieldInputPlusMinus();
$("#digito").fieldInputPlusMinus();
$("#btnsearchbandas2").button();
$("#Criterios-Datos").form();
$("#tazaPactada").fieldInput();
$("#plazo").fieldInput();
$("#montoInvertir").fieldInput();
$("#btnadd").button();
$("#btnclean").button();
// ----------------------   COMPONENTES mainDiv   ----------------------
$("#grupo_grids").tabgroup();
$("#buscaBandasInput").fieldInput();
$("#gridBandas").grid();
$("#btnreset").button();
$("#buscaContratosInput").fieldInput();
$("#gridContratos").grid();
$("#btnsend").button();
$("#btnvalidate").button();
$("#btnclean").button();
$("#totales").fieldInput();
$("#buscaEnviosInput").fieldInput();
$("#gridEnviados").grid();
$("#btnresetenviados").button();
$("#buscaErroresInput").fieldInput();
$("#gridErrores").grid();
// ----------------------   GRID table_gridBandas   ----------------------
var captura_reportos_params = {};
httpFindAll("captura_reportos", captura_reportos_params, function(payload) {
  llenaGridCapturaReporto(payload);
});

var llenaGridCapturaReporto = function(captura_reportos) {
  $("#table_gridBandas").jqGrid({
    data: captura_reportos,
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
var contratos_reportos_params = {};
httpFindAll("contratos_reportos", contratos_reportos_params, function(
  payload
) {
  llenaGridContratosReportos(payload);
});
var llenaGridContratosReportos = function(contratos_reportos) {
  $("#table_gridContratos").jqGrid({
    data: contratos_reportos,
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
var envios_reportos_params = {};
httpFindAll("envios_reportos", contratos_reportos_params, function(payload) {
  llenaGridErroresReportos(payload);
});
var llenaGridEnviosReportos = function(envios_reportos) {
  $("#table_gridEnviados").jqGrid({
    data: envios_reportos,
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
var errores_reportos_params = {};
httpFindAll("envios_reportos", contratos_reportos_params, function(payload) {
  llenaGridEnviosReportos(payload);
});
var llenaGridErroresReportos = function(envios_reportos) {
  $("#table_gridErrores").jqGrid({
    data: envios_reportos,
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
