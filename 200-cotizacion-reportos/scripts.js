$("#aside").sidebarwrapper();
$("#criterios-busqueda").form();
$("#grupo").select();
$("#instrumento").select();
$("#monto_invertir").fieldInput();
$("#plazo").fieldInput();
$("#button").button();
$("#btnsearch").button();
$("#btnclean").button();
$("#fecha_banda").fielDate();


$("#tabs_resultados_busqueda").tabgroup();

$("#div-cotizacion-reportos-grid").grid();
$("#gridCotizacion").grid();
$("#gridCountCotizacion").gridrecordscount();

let cotizacion_reporto_params = {};
http_findAll("cotizacion_reporto", cotizacion_reporto_params, function (payload) {
    console.log(payload);
    llenaGridCotizacionReporto(payload);
    let rec_count = payload.length;
    $("#count_gridCountCotizacion").html(rec_count);
});

let llenaGridCotizacionReporto = function (cotizacion_reporto) {
    $("#table_gridCotizacion").jqGrid({
        data: cotizacion_reporto,
        datatype: "local",
        toppager: true,
        gridview: true,
        pgtext: "P\u00E1gina {0} de {1}",
        viewrecords: true,
        autowidth: true,
        height: 600,
        rowNum: 20,
        colNames: [
            "Grupo",
            "Instrumento",
            "Plazo",
            "Rango",
            "Tasa"
        ],
        colModel: [{
                name: "grupo",
                index: "grupo",
                align: "center",
                width: 100,
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
                name: "rango",
                index: "rango",
                align: "center",
                width: 200,
                sortable: true
            },
            {
                name: "tasa",
                index: "tasa",
                align: "center",
                width: 50,
                sortable: true
            }
        ]
    });
};