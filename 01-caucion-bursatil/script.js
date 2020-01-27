console.log("01-caucion-bursatil");

$("#divCriteriosBusquedaAccordion").customaccordion();
$("#frmCriteriosBusqueda").form();
$("#divFecha").fielDate();
$("#divContrato").fieldInputPlusMinus();
$("#divDigito").fieldInputPlusMinus();
$("#divNegocio").fieldOptions();
$("#divBtnSearch").button();
$("#divBtnClean").button();
$("#divBtnPdf").button();
$("#divBtnXls").button();
$("#divProducts").fieldCheckBox();
$("#divPayment").select();
$("#divEjemplo").fieldSelectPlusMinusAutocomplete();
$("#divGridContratos").grid();
$("#divCountContratos").gridrecordscount();

$("#btnBtnClean").click(function() {

  $(".form-group")
    .parsley()
    .reset();
  $(".form-group .tag-list li a").text("");
  $("#cmbPayment")
    .val([])
    .trigger("change");
  $("#cmbPayment")
    .parsley()
    .reset();
  // $("#payment").parsley();
  contratosParams = {};
  httpFindAll("contratos", contratosParams, function(payload) {
    $("#dtgGridContratos").jqGrid("clearGridData");
    $("#dtgGridContratos").jqGrid("setGridParam", { data: payload });
    $("#dtgGridContratos").trigger("reloadGrid");
    var recCount = payload.length;
    $("#spnCountCountContratos").html(recCount);
  });
});

var contratosParams = {};
httpFindAll("contratos", contratosParams, function(payload) {
  llenaGridContratos(payload);
  var recCount = payload.length;
  $("#spnCountCountContratos").html(recCount);
});

var llenaGridContratos = function(contratos) {
  $("#dtgGridContratos").jqGrid({
    data: contratos,
    datatype: "local",
    height: "auto",
    shrinkToFit: false,
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
      { name: "emisora", index: "emisora", width: 100, sortable: false },
      { name: "cantidad", index: "cantidad", width: 100, sortable: false },
      { name: "emision", index: "emision", width: 100, sortable: false },
      { name: "serie", index: "serie", width: 100, sortable: false },
      { name: "cupon", index: "cupon", width: 100, sortable: false },
      { name: "digito", index: "digito", width: 100, sortable: false },
      { name: "tv", index: "tv", width: 100, sortable: false },
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
      { name: "descripcion", index: "descripcion", width: 90, sortable: false },
      {
        name: "fecha",
        index: "fecha",
        width: 90,
        formatter: "date",
        sortable: false
      },
      { name: "descrTV", index: "descrTV", width: 90, sortable: false },
      {
        name: "listaContrato",
        index: "listaContrato",
        width: 90,
        sortable: false
      },
      { name: "listaDigito", index: "listaDigito", width: 90, sortable: false },
      { name: "usuario", index: "usuario", width: 90, sortable: false },
      { name: "reporte", index: "reporte", width: 90, sortable: false },
      { name: "listaLibro", index: "listaLibro", width: 90, sortable: false },
      { name: "idLibro", index: "idLibro", width: 90, sortable: false },
      { name: "cliente", index: "cliente", width: 90, sortable: false },
      { name: "promotor", index: "promotor", width: 90, sortable: false },
      { name: "folio", index: "folio", width: 90, sortable: false },
      { name: "moneda", index: "moneda", width: 90, sortable: false },
      { name: "creditoMX", index: "creditoMX", width: 90, sortable: false },
      { name: "aforo", index: "aforo", width: 90, sortable: false },
      { name: "monedaTipo", index: "monedaTipo", width: 90, sortable: false },
      {
        name: "fechaProducción",
        index: "fechaProducción",
        width: 90,
        sortable: false
      },
      { name: "iLibro", index: "iLibro", width: 90, sortable: false },
      { name: "libro", index: "libro", width: 90, sortable: false },
      { name: "porcentReal", index: "porcentReal", width: 90, sortable: false },
      { name: "diferencia", index: "diferencia", width: 90, sortable: false },
      {
        name: "fechaMasAntiua",
        index: "fechaMasAntiua",
        width: 90,
        formatter: "date",
        sortable: false
      }
    ]
  });
};

var form = $("#frmCriteriosBusqueda")
  .parsley()
  .on("field:success", function(e) {
    removeErrorsInAttrTitle(e);
  })
  .on("field:error", function(e) {
    putErrorsInAttrTitle(e);
  })
  .on("form:submit", function(e) {
    contratosParams = {};
    let fecha = $("#txtDivFecha").val();
    let listContrato = getList("contrato");
    let listDigito = getList("digito");
    let negocio = getOptionSelected("negocio");
    let productTypes = getChecked("products");
    let paymentmethod = $("#divPayment").val();
    let listejemplo = getList("ejemplo");
    console.log("---> fecha: ", fecha);
    console.log("---> listContrato: ", listContrato);
    console.log("---> listDigito: ", listDigito);
    console.log("---> negocio: ", negocio);
    console.log("---> productTypes: ", productTypes);
    console.log("---> paymentmethod: ", paymentmethod);
    console.log("---> listejemplo: ", listejemplo);

    if (fecha) {
      contratosParams.fecha = fecha;
      console.log("--> contratosParams.fecha ", contratosParams.fecha);
    }
    if (listContrato.length > 0) {
      contratosParams.contrato = listContrato;
      console.log("--> contratosParams.contrato ", contratosParams.contrato);
    }
    if (listDigito.length > 0) {
      contratosParams.digito = listDigito;
      console.log("--> contratosParams.digito ", contratosParams.digito);
    }
    if (negocio) {
      contratosParams.negocio = negocio;
      console.log("--> contratosParams.negocio ", contratosParams.negocio);
    }
    if (productTypes.length > 0) {
      contratosParams.estatus = productTypes;
      console.log("--> contratosParams.estatus ", contratosParams.estatus);
    }
    if (paymentmethod) {
      contratosParams.perfil2 = paymentmethod;
      console.log(
        "--> contratosParams.perfil2 (paymentmethod)",
        contratosParams.perfil2
      );
    }
    if (listejemplo.length > 0) {
      contratosParams.contrato = listejemplo;
      console.log("--> contratosParams.contrato ", contratosParams.contrato);
    }
    httpFindAll("contratos", contratosParams, function(payload) {
      $("#dtgGridContratos").jqGrid("clearGridData");
      $("#dtgGridContratos").jqGrid("setGridParam", { data: payload });
      $("#dtgGridContratos").trigger("reloadGrid");
      var recCount = payload.length;
      $("#spnCountCountContratos").html(recCount);
    });
    return false;
  });
