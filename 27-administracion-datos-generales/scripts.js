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


// conocimiento y experiencia

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
    colModel: [{
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
    colModel: [{
        name: "emisor",
        width: 350
    }, {
        name: "relacion",
        width: 200
    }],
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
    colModel: [{
        name: "tipo",
        width: 350
    }, {
        name: "porcentaje",
        width: 500
    }],
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
    colModel: [{
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
    colModel: [{
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
    colModel: [{
            name: "custodio",
            width: 150
        },
        {
            name: "w8_ben",
            width: 150,
            // formatter: valores
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
    colModel: [{
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
    colModel: [{
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