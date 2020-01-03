// Parte del acordion

$("#criterios_busqueda_accordion").customaccordion();
$("#criterios-busqueda").form();
$("#contrato").fieldInput();
$("#digito").fieldInput();
$("#dv").fieldInput();
$("#estatus").fieldInput();
$("#perfil").fieldInput();
$("#perfil2").fieldInput();
$("#portafolio").fieldInput();

$("#portafolio_uuid").fieldInput();
$("#clabe").fieldInput();
$("#clabe2").fieldInput();
$("#stipo_port").fieldInput();
$("#libro").fieldInput();
$("#btn_search").button();
$("#btn_pdf").button();
$("#btn_xls").button();

// tabs

$("#titular_cotitular_tabgroup").tabgroup();
$("#tab2").tabgroup();
$("#cotitular2_clasificacion_contrato_tab_group").tabgroup();
$("#conocimiento_experiencia").tabgroup();
$("#limitantes_invertir").tabgroup();

// tab clasificacion contrato , primer tab

$("#asesor_inversion").fieldInput();
$("#tipo_manifiesto").fieldInput();
$("#servicio_inversion").fieldInput();
$("#carta_ejecucion").fieldInput();
$("#fecha_carta_ejecucion").fieldInput();
$("#carta_ejecucion_2").fieldInput();
$("#fecha_carta_ejecucion_2").fieldInput();
$("#institucional_pract_vta").fieldInput();
$("#justificacion_institucional_pract_vta").fieldInput();
$("#fecha_institucional_pract_vta").fieldInput();
$("#sofisticado_nosofisticado").fieldInput();
$("#justificacion_sofisticado_nosofisticado").fieldInput();
$("#fecha_sofisticado_nosofisticado").fieldInput();
$("#elegible_noelegible").fieldInput();
$("#justificacion_elegible_noelegible").fieldInput();
$("#fecha_elegible_noelegible").fieldInput();
$("#calificado_nocalificado").fieldInput();
$("#justificacion_calificado_nocalificado").fieldInput();
$("#fecha_calificado_nocalificado").fieldInput();
$("#discrecional_nodiscrecional").fieldInput();
$("#justificacion_discrecional_nodiscrecional").fieldInput();
$("#fecha_discrecional_nodiscrecional").fieldInput();
$("#anexo_descriptivo").fieldInput();

// nacional

$("#pfi_nombre").fieldInput();
$("#pfi_actividad").fieldInput();
$("#rfc").fieldInput();
$("#pfi_sexo").fieldInput();
$("#pfi_nacionalidad").fieldInput();
$("#pfi_cuenta").fieldInput();
$("#pfi_fechaNacimiento").fieldInput();
$("#pfi_curp").fieldInput();
$("#pfi_calidadMigratoria").fieldInput();

$("#persona_fisica_int").grid();
$("#table_persona_fisica_int").jqGrid({
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
$("#nombre").fieldInput();
$("#actividad").fieldInput();
$("#pfi_rfc").fieldInput();
$("#sexo").fieldInput();
$("#curp").fieldInput();
$("#fechaNacimiento").fieldInput();
$("#cuenta").fieldInput();
$("#nacionalidad").fieldInput();
$("#calidadMigratoria").fieldInput();
$("#pfi_paisnac").fieldInput();
$("#pfi_edonac").fieldInput();

$("#persona_fisica_nac").grid();
$("#table_persona_fisica_nac").jqGrid({
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
$("#pme_nombreCorto").fieldInput();
$("#pme_pais").fieldInput();
$("#pme_rfcgpoPertenencia").fieldInput();
$("#pme_nacionalidad").fieldInput();
$("#pme_gpoNacional").fieldInput();
$("#pme_custLocal").fieldInput();
$("#pme_recompra").fieldInput();
$("#pme_cteBnmx").fieldInput();
$("#pme_clasificacion").fieldInput();

// moral nacional
$("#nombreCorto").fieldInput();
$("#tipoUnidad").fieldInput();
$("#RFC").fieldInput();
$("#numNotario").fieldInput();
$("#nomNotario").fieldInput();
$("#numEscConst").fieldInput();
$("#fechaEscCons").fieldInput();
$("#regPubComer").fieldInput();
$("#fechaRegPubComer").fieldInput();
$("#recompra").fieldInput();

$("#cteBnmx").fieldInput();
$("#obsEscritura").fieldInput();
$("#clasificacion").fieldInput();
$("#clasificacionBanxico").fieldInput();

// conocimiento y experiencia

// Quiz group 3
let encuesta_params = {};
// Name of json
http_findAll("encuesta", encuesta_params, payload => {
  // Parameters: field name group, id of quiz, data
  fillQuiz("ejemploQuiz", "encuesta", payload);
});

// limitantes a invertir

$("#cotitular2_clasificacion_contrato_limitantes_intervenir").grid();

$("#table_cotitular2_clasificacion_contrato_limitantes_intervenir").jqGrid({
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

$("#cotitular2_clasificacion_contrato_relacion_emisor").grid();
$("#table_cotitular2_clasificacion_contrato_relacion_emisor").jqGrid({
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

$("#cotitular2_comisiones").grid();
$("#table_cotitular2_comisiones").jqGrid({
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

$("#documentacion_flags").fieldCheckBox();
// $("#horizontal-splitter").fieldSplitter();

// domicilio
$("#cotitular2_domicilio").grid();
$("#table_cotitular2_domicilio").jqGrid({
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

$("#cotitular2_firmas_autorizadas").grid();
$("#table_cotitular2_firmas_autorizadas").jqGrid({
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
$("#horizontal-splitter").fieldSplitter();

$("#cotitular2_documentacion_contrato").grid();
$("#table_cotitular2_documentacion_contrato").jqGrid({
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

$("#cotitular2_documentacion_cliente").grid();
$("#table_cotitular2_documentacion_cliente").jqGrid({
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

$("#formatos_fiscales_flags").fieldCheckBox();
$("#cotitular2_formatos_fiscales").grid();

$("#table_cotitular2_formatos_fiscales").jqGrid({
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
$("#cotitular2_medio_comunicacion").grid();

$("#table_cotitular2_medio_comunicacion").jqGrid({
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
$("#cotitular2_medio_liquidacion").grid();
$("#table_cotitular2_medio_liquidacion").jqGrid({
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

$("#text_area_observaciones").fieldInput();
$("#fecha_apertura").fieldInput();
$("#monto_inicial").fieldInput();
$("#sector").fieldInput();
$("#residencia").fieldInput();
$("#envio_correspondencia").fieldInput();
$("#tipo_cuenta").fieldInput();
$("#manejo_cuenta").fieldInput();
$("#custodia_admon").fieldInput();
$("#lim_max_operacion").fieldInput();
$("#isr_mdo_din").fieldInput();
$("#fecha_ult_mov").fieldInput();
$("#porcentaje_acum_isr").fieldInput();
$("#porcentaje_acum_ide").fieldInput();
$("#imprime_estado_cuenta").fieldInput();

const form_buscar_contrato = $("#criterios-busqueda")
  .parsley()
  .on("field:validated", function() {
    const ok = $(".parsley-error").length === 0;
  })
  .on("form:submit", function() {
    const contrato = String($("#contrato").val());
    http_findOne("contratos", contrato, payload => {
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

const llenarInfoContrato = payload => {
  $("#digito").val(payload.digito);
  $("#dv").val(payload.dv);
  $("#estatus").val(payload.estatus);
  $("#perfil").val(payload.perfil);
  $("#perfil2").val(payload.perfil2);
  $("#portafolio").val(payload.portafolio);
  $("#portafolio_uuid").val(payload.portafolio_uuid);
  $("#clabe").val(payload.clabe);
  $("#clabe2").val(payload.clabe2);
  $("#stipo_port").val(payload.stipo_port);
  $("#libro").val(payload.libro);
};

const llenarTabContrato = (payload, i) => {
  $("#servicio_inversion").val(
    payload.cotitulares[i].clasificacion_contrato.servicio_inversion
  );
  $("#carta_ejecucion").val(
    payload.cotitulares[i].clasificacion_contrato.carta_ejecucion
  );
  $("#fecha_carta_ejecucion").val(
    payload.cotitulares[i].clasificacion_contrato.fecha_carta_ejecucion
  );
  $("#carta_ejecucion_2").val(
    payload.cotitulares[i].clasificacion_contrato.carta_ejecucion_2
  );
  $("#fecha_carta_ejecucion_2").val(
    payload.cotitulares[i].clasificacion_contrato.fecha_carta_ejecucion_2
  );
  $("#institucional_pract_vta").val(
    payload.cotitulares[i].clasificacion_contrato.institucional_pract_vta
  );
  $("#justificacion_institucional_pract_vta").val(
    payload.cotitulares[i].clasificacion_contrato
      .justificacion_institucional_pract_vta
  );
  $("#fecha_institucional_pract_vta").val(
    payload.cotitulares[i].clasificacion_contrato.fecha_institucional_pract_vta
  );
  $("#sofisticado_nosofisticado").val(
    payload.cotitulares[i].clasificacion_contrato.sofisticado_nosofisticado
  );
  $("#justificacion_sofisticado_nosofisticado").val(
    payload.cotitulares[i].clasificacion_contrato
      .justificacion_sofisticado_nosofisticado
  );

  $("#fecha_sofisticado_nosofisticado").val(
    payload.cotitulares[i].clasificacion_contrato
      .fecha_sofisticado_nosofisticado
  );
  $("#elegible_noelegible").val(
    payload.cotitulares[i].clasificacion_contrato.elegible_noelegible
  );
  $("#justificacion_elegible_noelegible").val(
    payload.cotitulares[i].clasificacion_contrato
      .justificacion_elegible_noelegible
  );
  $("#fecha_elegible_noelegible").val(
    payload.cotitulares[i].clasificacion_contrato.fecha_elegible_noelegible
  );
  $("#calificado_nocalificado").val(
    payload.cotitulares[i].clasificacion_contrato.calificado_nocalificado
  );
  $("#justificacion_calificado_nocalificado").val(
    payload.cotitulares[i].clasificacion_contrato
      .justificacion_calificado_nocalificado
  );
  $("#fecha_calificado_nocalificado").val(
    payload.cotitulares[i].clasificacion_contrato
      .justificacion_institucional_pract_vta
  );
  $("#fecha_institucional_pract_vta").val(
    payload.cotitulares[i].clasificacion_contrato.fecha_calificado_nocalificado
  );
  $("#discrecional_nodiscrecional").val(
    payload.cotitulares[i].clasificacion_contrato.discrecional_nodiscrecional
  );
  $("#justificacion_discrecional_nodiscrecional").val(
    payload.cotitulares[i].clasificacion_contrato
      .justificacion_discrecional_nodiscrecional
  );
  $("#fecha_discrecional_nodiscrecional").val(
    payload.cotitulares[i].clasificacion_contrato
      .fecha_discrecional_nodiscrecional
  );
};

const llenarObservacionesContrato = (payload, i) => {
  $("#fecha_apertura").val(payload.cotitulares[i].observaciones.fecha_apertura);
  $("#monto_inicial").val(payload.cotitulares[i].observaciones.monto_inicial);
  $("#sector").val(payload.cotitulares[i].observaciones.sector);
  $("#residencia").val(payload.cotitulares[i].observaciones.residencia);
  $("#envio_correspondencia").val(
    payload.cotitulares[i].observaciones.envio_correspondencia
  );

  $("#tipo_cuenta").val(payload.cotitulares[i].observaciones.tipo_cuenta);
  $("#manejo_cuenta").val(payload.cotitulares[i].observaciones.manejo_cuenta);
  $("#custodia_admon").val(payload.cotitulares[i].observaciones.custodia_admon);
  $("#lim_max_operacion").val(
    payload.cotitulares[i].observaciones.lim_max_operacion
  );

  $("#isr_mdo_din").val(payload.cotitulares[i].observaciones.isr_mdo_din);
  $("#fecha_ult_mov").val(payload.cotitulares[i].observaciones.fecha_ult_mov);
  $("#porcentaje_acum_isr").val(
    payload.cotitulares[i].observaciones.porcentaje_acum_isr
  );
  $("#porcentaje_acum_ide").val(
    payload.cotitulares[i].observaciones.porcentaje_acum_ide
  );
  $("#imprime_estado_cuenta").val(
    payload.cotitulares[i].observaciones.imprime_estado_cuenta
  );
};

const llenarCotitular_LimitantesInvertir = (payload, i) => {
  const limitantesInvertirArray =
    payload.cotitulares[i].clasificacion_contrato.limitantes_invertitr;
  fillJqGrid(
    "#table_cotitular2_clasificacion_contrato_limitantes_intervenir",
    limitantesInvertirArray
  );
};

const llenarCotitular_RelacionEmisor = (payload, i) => {
  const relacionEmisorArray =
    payload.cotitulares[i].clasificacion_contrato.relacion_emisor;
  fillJqGrid(
    "#table_cotitular2_clasificacion_contrato_relacion_emisor",
    relacionEmisorArray
  );
};

const llenarCotitular_Comisiones = (payload, i) => {
  const comisionesArray = payload.cotitulares[i].comisiones;
  fillJqGrid("#table_cotitular2_comisiones", comisionesArray);
};
//  documentacion

const llenarCotitular_Documentacion = (payload, i) => {
  const documentacionContratoArray =
    payload.cotitulares[i].documentacion.contrato;
  $("#table_cotitular2_documentacion_contrato").jqGrid("clearGridData");
  $("#table_cotitular2_documentacion_contrato").jqGrid("setGridParam", {
    data: documentacionContratoArray
  });
  $("#table_cotitular2_documentacion_contrato").trigger("reloadGrid");
  const documentacionClienteArray =
    payload.cotitulares[i].documentacion.cliente;
  $("#table_cotitular2_documentacion_cliente").jqGrid("clearGridData");
  $("#table_cotitular2_documentacion_cliente").jqGrid("setGridParam", {
    data: documentacionClienteArray
  });
  $("#table_cotitular2_documentacion_cliente").trigger("reloadGrid");
};
//
const llenarCotitular_Domicilio = (payload, i) => {
  const domicilioArray = payload.cotitulares[i].domicilio;
  fillJqGrid("#table_cotitular2_domicilio", domicilioArray);
};

const llenarCotitular_FirmasAutorizadas = (payload, i) => {
  const firmasAutorizadasArray = payload.cotitulares[i].firmas_autorizadas;
  fillJqGrid("#table_cotitular2_firmas_autorizadas", firmasAutorizadasArray);
};

const llenarCotitular_FormatosFiscales = (payload, i) => {
  const formatosFiscalesArray = payload.cotitulares[i].formatos_fiscales;
  fillJqGrid("#table_cotitular2_formatos_fiscales", formatosFiscalesArray);
  $("#table_cotitular2_formatos_fiscales").jqGrid("clearGridData");
  $("#table_cotitular2_formatos_fiscales").jqGrid("setGridParam", {
    data: formatosFiscalesArray
  });
  $("#table_cotitular2_formatos_fiscales").trigger("reloadGrid");
};

const llenarCotitular_MediosComunicacion = (payload, i) => {
  const mediosComunicacionArray = payload.cotitulares[i].medio_comunicacion;
  fillJqGrid("#table_cotitular2_medio_comunicacion", mediosComunicacionArray);
};

const llenarCotitular_MedioLiquidacion = (payload, i) => {
  const mediosComunicacionArray = payload.cotitulares[i].medio_liquidacion;
  fillJqGrid("#table_cotitular2_medio_liquidacion", mediosComunicacionArray);
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
