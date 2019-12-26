$("#aside").sidebarwrapper();
$("#criterios-busqueda").form();
$("#fBanda").fielDate();
$("#operacion").select();
$("#emisora").select();
$("#tipo_valor").select();
$("#precio_banda").fieldInput();
$("#btn_consultar_banda").button();

$("#criterios-Filtros").form();
$("#contrato").fieldInputPlusMinus();
$("#digito").fieldInputPlusMinus();
$("#btn_consultar_filtros").button();
$("#titulos").fieldInput();
$("#precio_pactado").fieldInput();
$("#monto").fieldInput();
$("#btn_add").button();
$("#btn_clean").button();


$("#grupo_grids").tabgroup();
$("#captura").fieldInput();
$("#contratos_directos").grid();
$("#count_contratos_directos").gridrecordscount();
$("#btn_send").button();
$("#btn_validate").button();
$("#btn_clean").button();
$("#captura").fieldInput();


$("#envio").fieldInput();
$("#envios_directos").grid();
$("#count_envios_directos").gridrecordscount();
$("#boton_resert").button();
$("#buscaErroresInput").fieldInput();
$("#errores_directos").grid();
$("#count_errores_directos").gridrecordscount();


$("#table_contratos_directos").jqGrid({
    datatype: "local",
    colNames: [
        "Stat Envio",
        "Contrato",
        "Dígito",
        "Perfil del Contrato",
        "Saldo",
        "Posición",
        "Monto a Invertir",
        "Títulos",
        "Fecha Valor",
        "Orden",
        "Emisora/serie",
        "Tipo valor",
        "Precio Banda",
        "Precio Pactado",
        "Spread",
        "Servicio de Inversión",
        "Medio de cierre",
        "Red",
        "Prioridad",
        "Medio de Liquidación"
    ],
    colModel: [{
            name: "stat_envio",
            index: "stat_envio",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "contrato",
            index: "contrato",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "digito",
            index: "digito",
            align: "center",
            width: 200,
            sortable: true
        },
        {
            name: "perfil_del_contrato",
            index: "perfil_del_contrato",
            align: "center",
            width: 50,
            sortable: true
        },
        {
            name: "saldo",
            index: "saldo",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "posicion",
            index: "posicion",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "monto_a_invertir",
            index: "monto_a_invertir",
            align: "center",
            width: 200,
            sortable: true
        },
        {
            name: "titulos",
            index: "titulos",
            align: "center",
            width: 50,
            sortable: true
        },
        {
            name: "fecha_valor",
            index: "fecha_valor",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "orden",
            index: "orden",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "emisora_serie",
            index: "emisora_serie",
            align: "center",
            width: 200,
            sortable: true
        },
        {
            name: "tipo_valor",
            index: "tipo_valor",
            align: "center",
            width: 50,
            sortable: true
        },
        {
            name: "precio_banda",
            index: "precio_banda",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "precio_pactado",
            index: "precio_pactado",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "spread",
            index: "spread",
            align: "center",
            width: 200,
            sortable: true
        },
        {
            name: "servicio_de_inversion",
            index: "servicio_de_inversion",
            align: "center",
            width: 50,
            sortable: true
        },
        {
            name: "medio_de_cierre",
            index: "medio_de_cierre",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "red",
            index: "red",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "prioridad",
            index: "prioridad",
            align: "center",
            width: 200,
            sortable: true
        },
        {
            name: "medio_de_liquidacion",
            index: "medio_de_liquidacion",
            align: "center",
            width: 50,
            sortable: true
        }
    ],
    toppager: true,
    rowNum: 10,
    rowList: [10, 20, 30],
    sortorder: "desc",
    viewrecords: true,
});
$("#table_envios_directos").jqGrid({
    datatype: "local",
    colNames: [
        "Envíos",
        "Folío operación",
        "Contrato",
        "Nombre",
        "Dígito",
        "Monto",
        "Títulos",
        "Precio Pactado",
        "Spread",
        "Servicio de Inversión",
        "Medio de cierre",
        "Red",
        "Prioridad",
        "Medio de Liquidación",
        "Sts",
        "Fuera de precio",
        "Observación",
        "Flujo"
    ],
    colModel: [{
            name: "envios",
            index: "envios",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "folio_de_operacion",
            index: "folio_de_operacion",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "contrato",
            index: "contrato",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "nombre",
            index: "nombre",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "digito",
            index: "digito",
            align: "center",
            width: 200,
            sortable: true
        },
        {
            name: "monto",
            index: "monto",
            align: "center",
            width: 50,
            sortable: true
        },
        {
            name: "titulos",
            index: "titulos",
            align: "center",
            width: 50,
            sortable: true
        },
        {
            name: "precio_pactado",
            index: "precio_pactado",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "spread",
            index: "spread",
            align: "center",
            width: 200,
            sortable: true
        },
        {
            name: "servicio_de_inversion",
            index: "servicio_de_inversion",
            align: "center",
            width: 50,
            sortable: true
        },
        {
            name: "medio_de_cierre",
            index: "medio_de_cierre",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "red",
            index: "red",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "prioridad",
            index: "prioridad",
            align: "center",
            width: 200,
            sortable: true
        },
        {
            name: "medio_de_liquidacion",
            index: "medio_de_liquidacion",
            align: "center",
            width: 50,
            sortable: true
        },
        {
            name: "sts",
            index: "sts",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "fuera_de_precio",
            index: "fuera_de_precio",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "observacion",
            index: "observacion",
            align: "center",
            width: 200,
            sortable: true
        },
        {
            name: "flujo",
            index: "flujo",
            align: "center",
            width: 100,
            sortable: true
        }
    ],
    toppager: true,
    rowNum: 10,
    rowList: [10, 20, 30],
    sortorder: "desc",
    viewrecords: true,
});
$("#table_errores_directos").jqGrid({
    datatype: "local",
    height: 250,
    colNames: [
        "Observación",
        "Contrato",
        "Nombre",
        "Dígito",
        "Perfil del contrato",
        "Monto",
        "Títulos",
        "Precio pactado",
        "Spread",
        "Servicio de inversión",
        "Medio de cierre",
        "Red",
        "Prioridad",
        "Medio de liquidación"
    ],
    colModel: [{
            name: "observacion",
            index: "observacion",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "contrato",
            index: "contrato",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "nombre",
            index: "nombre",
            align: "center",
            width: 200,
            sortable: true
        },
        {
            name: "digito",
            index: "digito",
            align: "center",
            width: 50,
            sortable: true
        },
        {
            name: "perfil_del_contrato",
            index: "perfil_del_contrato",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "monto",
            index: "monto",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "titulos",
            index: "titulos",
            align: "center",
            width: 50,
            sortable: true
        },
        {
            name: "precio_pactado",
            index: "precio_pactado",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "spread",
            index: "spread",
            align: "center",
            width: 200,
            sortable: true
        },
        {
            name: "servicio_de_inversion",
            index: "servicio de_inversion",
            align: "center",
            width: 50,
            sortable: true
        },
        {
            name: "medio_de_cierre",
            index: "medio_de_cierre",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "red",
            index: "red",
            align: "center",
            width: 100,
            sortable: true
        },
        {
            name: "prioridad",
            index: "prioridad",
            align: "center",
            width: 200,
            sortable: true
        },
        {
            name: "medio_de_liquidacion",
            index: "medio_de_liquidacion",
            align: "center",
            width: 50,
            sortable: true
        }
    ],
    toppager: true,
    rowNum: 10,
    rowList: [10, 20, 30],
    sortorder: "desc",
    viewrecords: true
});