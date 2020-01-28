$("#divAside").sidebarwrapper();
$("#frmCriteriosBusqueda").form();
$("#divGrupo").select();
$("#divInstrumento").select();
$("#divMontoInvertir").fieldInput();
$("#divPlazo").fieldInput();
$("#divButton").button();
$("#divBtnSearch").button();
$("#divBtnClean").button();
$("#divFechaBanda").fielDate();


$("#divTabsResultadosBusqueda").tabgroup();

$("#divCotizacionReportosGrid").grid();
$("#divGridCotizacion").grid();
$("#divGridCountCotizacion").gridrecordscount();

let cotizacionReportoParams = {};
httpFindAll("cotizacion_reporto", cotizacionReportoParams, function (payload) {
    console.log(payload);
    llenaGridCotizacionReporto(payload);
    let recCount = payload.length;
    $("#spnCountGridCountCotizacion").html(recCount);
});

let llenaGridCotizacionReporto = function (cotizacionReporto) {
    $("#dtgGridCotizacion").jqGrid({
        data: cotizacionReporto,
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
