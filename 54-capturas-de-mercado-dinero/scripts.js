/* ----------   Datos de la Orden  ----------  */
$("#divConsultasTabGroup").tabgroup();
$("#frmDatosOrden").form();
$("#divReset").fieldCheckBox();
$("#divOptionGrupoContrato").fieldOptions();
$("#divInputGrupo").fieldInput();
$("#divInputContrato").select();
$("#divFechaLiquidacion").fielDate();
$("#divInputOperacion").fieldInput();
$("#divInputEmisora").fieldInput();
$("#divInputTv").fieldInput();
$("#divInputPlazo").fieldInput();
$("#divInputTasa").fieldInput();
$("#divSwitchSobretasa").fieldswitch();
$("#divInputSpread").fieldInput();
$("#divOptionTitulosMonto").fieldOptions();
$("#divInputCantidad").fieldInput();
$("#divInputPrecio").fieldInput();
$("#divInputTipoCambio").fieldInput();
$("#divInputPosicion").fieldInput();
$("#divInputEfectivoDisponible").fieldInput();
$("#divBtnClean").button();
$("#divBtnAdd").button();

/* ----------   Lista de la Órdenes  ----------  */
$("#divTabgroupOrdenesEnviosOrdenes").tabgroup();
$("#divGridOrdenes").grid();
$("#divBtnSend").button();
$("#divBtnValidate").button();
$("#divBtnDelete").button();
$("#divBtnReset").button();

$("#dtgGridOrdenes").jqGrid({
  datatype: "local",
  height: "auto",
  shrinkToFit: false,
  height: 425,
  rowList: [10, 20, 30],
  colNames: [
    "Contrato",
    "ID Emisión",
    "Cantidad",
    "Emision",
    "Serie",
    "Cupon",
    "Dígito",
    "T.V.",
    "Precio",
    "Importe",
    "Descripción",
    "Fecha",
    "Descripción T.V.",
    "Lista Contrato",
    "Lista Dígito",
    "Usuario",
    "Reporte",
    "Lista libro",
    "ID Libro",
    "Cliente",
    "Promotor",
    "Folio",
    "Moneda",
    "Credito MX",
    "Aforo",
    "Tipo Moneda",
    "Fecha Producción",
    "I Libro",
    "Libro",
    "% Real",
    "Diferencia",
    "Fecha Antigua"
  ],
  colModel: [
    {
      name: "contrato",
      index: "contrato",
      width: 100,
      sortable: true,
      sorttype: "number",
      frozen: true
    },
    {
      name: "emisora",
      index: "emisora",
      width: 100,
      sortable: false
    },
    {
      name: "cantidad",
      index: "cantidad",
      width: 100,
      sortable: false
    },
    {
      name: "emision",
      index: "emision",
      width: 100,
      sortable: false
    },
    {
      name: "serie",
      index: "serie",
      width: 100,
      sortable: false
    },
    {
      name: "cupon",
      index: "cupon",
      width: 100,
      sortable: false
    },
    {
      name: "digito",
      index: "digito",
      width: 100,
      sortable: false
    },
    {
      name: "tv",
      index: "tv",
      width: 100,
      sortable: false
    },
    {
      name: "precioMdo",
      index: "precioMdo",
      width: 90,
      formatter: "currency",
      sortable: false,
      summaryType: "sum",
      formatoptions: {
        decimalPlaces: 2,
        prefix: "$",
        thousandsSeparator: ","
      }
    },
    {
      name: "importeValua",
      index: "importeValua",
      width: 90,
      formatter: "currency",
      sortable: false,
      summaryType: "sum",
      formatoptions: {
        decimalPlaces: 2,
        prefix: "$",
        thousandsSeparator: ","
      }
    },
    {
      name: "descripcion",
      index: "descripcion",
      width: 90,
      sortable: false
    },
    {
      name: "fecha",
      index: "fecha",
      width: 90,
      formatter: "date",
      sortable: false
    },
    {
      name: "descrTV",
      index: "descrTV",
      width: 90,
      sortable: false
    },
    {
      name: "listaContrato",
      index: "listaContrato",
      width: 90,
      sortable: false
    },
    {
      name: "listaDigito",
      index: "listaDigito",
      width: 90,
      sortable: false
    },
    {
      name: "usuario",
      index: "usuario",
      width: 90,
      sortable: false
    },
    {
      name: "reporte",
      index: "reporte",
      width: 90,
      sortable: false
    },
    {
      name: "listaLibro",
      index: "listaLibro",
      width: 90,
      sortable: false
    },
    {
      name: "idLibro",
      index: "idLibro",
      width: 90,
      sortable: false
    },
    {
      name: "cliente",
      index: "cliente",
      width: 90,
      sortable: false
    },
    {
      name: "promotor",
      index: "promotor",
      width: 90,
      sortable: false
    },
    {
      name: "folio",
      index: "folio",
      width: 90,
      sortable: false
    },
    {
      name: "moneda",
      index: "moneda",
      width: 90,
      sortable: false
    },
    {
      name: "creditoMX",
      index: "creditoMX",
      width: 90,
      sortable: false
    },
    {
      name: "aforo",
      index: "aforo",
      width: 90,
      sortable: false
    },
    {
      name: "monedaTipo",
      index: "monedaTipo",
      width: 90,
      sortable: false
    },
    {
      name: "fechaProducción",
      index: "fechaProducción",
      width: 90,
      sortable: false
    },
    {
      name: "iLibro",
      index: "iLibro",
      width: 90,
      sortable: false
    },
    {
      name: "libro",
      index: "libro",
      width: 90,
      sortable: false
    },
    {
      name: "porcentReal",
      index: "porcentReal",
      width: 90,
      sortable: false
    },
    {
      name: "diferencia",
      index: "diferencia",
      width: 90,
      sortable: false
    },
    {
      name: "fechaMasAntiua",
      index: "fechaMasAntiua",
      width: 90,
      formatter: "date",
      sortable: false
    }
  ]
});
