QUnit.test("InputPlusMinus inicializado correctamente", function(assert) {
  // arrange
  const txtInput = $("#contrato");
  const lstTags = $("#field_contrato #tag_list_contrato li a");

  // act

  // assert
  assert.equal(lstTags.length, 4);
  assert.equal(txtInput.val(), "");
});

QUnit.test("InputPlusMinus agregar 3 elementos con botón +", function(assert) {
  // arrange
  const txtInput = $("#contrato");
  const btnPlus = $("#field_contrato #btn_plus_contrato");
  const lstTags = $("#field_contrato #tag_list_contrato li a");

  // act
  [...Array(3).keys()].forEach(element => {
    txtInput.val("Elemento " + (element + 1));
    btnPlus.click();
  });

  // assert
  let contratosSeleccionados = getList("contrato");
  assert.equal(lstTags.length, 4);
  assert.equal(contratosSeleccionados.length, 3);
  assert.equal(txtInput.val(), "");
});


QUnit.test("QUnit DATE -- FORMAT <dd-mm-yyyy> -- DATE <31-12-2019>", function(assert){
  var formatDate = 'dd-mm-yy';
  
  //****** FECHA A GENERAR TEST ******/
  var date = "31-12-2019";

  var inptFecha = $("#fecha");
  inptFecha.val(date);
  $("#inpt-fecha").val(date);
  
  try {
    var testdate = $.datepicker.parseDate(formatDate, inptFecha.val());
    assert.ok(true, "El formato de la fecha es OK.");
  } catch (e){
    throw "\n\n <<" + inptFecha.val() + ">> IS NOT VALID.  FORMAT MUST BE <<dd-mm-yyyy>> AND THE DATE VALUE MUST BE VALID FOR THE CALENDAR \n\n";  
  }  
});

QUnit.test("QUnit DATE -- FORMAT <dd-mm-yyyy> -- DATE <12-13-2019>", function(assert){
  var formatDate = 'dd-mm-yy';
  
  //****** FECHA A GENERAR TEST ******/
  var date = "12-13-2019";

  var inptFecha = $("#fecha");
  inptFecha.val(date);
  $("#inpt-fecha").val(date);
  
  try {
    var testdate = $.datepicker.parseDate(formatDate, inptFecha.val());
    assert.ok(true, "El formato de la fecha es OK.");
  } catch (e){
    throw "\n\n <<" + inptFecha.val() + ">> IS NOT VALID.  FORMAT MUST BE <<dd-mm-yyyy>> AND THE DATE VALUE MUST BE VALID FOR THE CALENDAR \n\n";
  }  
  
});

QUnit.test("QUnit DATE -- FORMAT <dd-mm-yyyy> -- DATE <12-13-20BC>", function(assert){
  var formatDate = 'dd-mm-yy';
  
  //****** FECHA A GENERAR TEST ******/
  var date = "12-13-20BC";

  var inptFecha = $("#fecha");
  inptFecha.val(date);
  $("#inpt-fecha").val(date);
  
  try {
    var testdate = $.datepicker.parseDate(formatDate, inptFecha.val());
    assert.ok(true, "El formato de la fecha es OK.");
  } catch (e){
    throw "\n\n <<" + inptFecha.val() + ">> IS NOT VALID.  FORMAT MUST BE <<dd-mm-yyyy>> AND THE DATE VALUE MUST BE VALID FOR THE CALENDAR \n\n";
  }  
  
});

var QUnitDate = QUnit.test("--- QUnit DATE -- FORMAT <dd-mm-yyyy> -- DATE <12-13-19>", function(assert){
  var formatDate = 'dd/mm/yyyy';

  //****** FECHA A GENERAR TEST ******/
  var date = "12-13-19";

  var inptFecha = $("#fecha");
  inptFecha.val(date);
  $("#inpt-fecha").val(date);
  
  try {
    var testdate = $.datepicker.parseDate(formatDate, inptFecha.val());
    console.log("------>>> testdate: " + testdate);
    assert.ok(true, "El formato de la fecha es OK.");
  } catch (e){
    throw "\n\n <<" + inptFecha.val() + ">> IS NOT VALID.  FORMAT MUST BE <<dd-mm-yyyy>> AND THE DATE VALUE MUST BE VALID FOR THE CALENDAR \n\n";
  }  
});


  //----------------------------------------------------------
  /* */
  var $body = $( "#inpt-fecha" );
  //var dateTemp = null;

  //$body.on( "change", function() {
    $body.on( "blur", function() {  
  
    var date = $body.val();

    //--------------------------------------------------
    var formatDate = 'dd-mm-yy';
    //var date = "12-12-2019";

    var inptFecha = $("#fecha");
    inptFecha.val(date);    
    
    //--------------------------------------------------
       
    QUnit.module("<---> QUnit DATE -- FORMAT <dd-mm-yyyy> -- DATE <12-13-19>", function(assert){
      QUnit.test("--- QUnit DATE -- FORMAT <dd-mm-yyyy> -- DATE <12-13-19>", function(assert){
        try{
          var testdate = $.datepicker.parseDate(formatDate, inptFecha.val());
          console.log("---->> testdate: " + date + " -- testdate: " + testdate);

          var dateee = $('#inpt-fecha').datepicker({ dateFormat: 'dd-mm-yy' }).val();
          console.log("***** dateee: " + dateee);
          
          assert.ok(true, "El formato de la fecha es OK. dateTemp: " + date);
          //assert.equal(inptFecha.val(), testdate);
        } catch (e){
          throw "\n\n <<" + inptFecha.val() + ">> IS NOT VALID.  FORMAT MUST BE <<dd-mm-yyyy>> AND THE DATE VALUE MUST BE VALID FOR THE CALENDAR \n\n";
        }  
      });
    });
  });
 
  //$body.trigger( "click" );
  /* */
  //----------------------------------------------------------

  var QUnitDate = QUnit.test("SELECTED OPTIONS - First option selected", function(assert){
    //arrange
    const options = $("#field_negocio").children(".field-control").children("label");
    const optionExpected = options[0];
    const optionSelectedIdExpected = optionExpected.id;

    //act
    const optionSelected = options[0];
    const optionSelectedCN = optionSelected.childNodes;
    optionSelectedCN[1].click();

    var optionSelectedId;
    for(var i=0; i<options.length; i++){
      if( $("#"+options[i].childNodes[1].id).is(":checked") ){
        optionSelectedId = options[i].id;
      }
    }

    // assert
    assert.equal(optionSelectedId, optionSelectedIdExpected);
  });  

  var QUnitDate = QUnit.test("SELECTED OPTIONS - Second option selected", function(assert){
    //arrange
    const options = $("#field_negocio").children(".field-control").children("label");
    const optionExpected = options[1];
    const optionSelectedIdExpected = optionExpected.id;

    //act
    const optionSelected = options[1];
    const optionSelectedCN = optionSelected.childNodes;
    optionSelectedCN[1].click();

    var optionSelectedId;
    for(var i=0; i<options.length; i++){
      if( $("#"+options[i].childNodes[1].id).is(":checked") ){
        optionSelectedId = options[i].id;
      }
    }

    // assert
    assert.equal(optionSelectedId, optionSelectedIdExpected);
  });  

/*
QUnit.skip("InputPlusMinus agregar 30 elementos con botón +", function(
  assert
) {});

QUnit.skip("InputPlusMinus agregar 3 elementos con Enter", function(assert) {});

QUnit.skip("InputPlusMinus agregar 30 elementos con Enter", function(
  assert
) {});

QUnit.skip(
  "InputPlusMinus Eliminar 5 elementos con botón - y ya no queden elementos en la lista",
  function(assert) {}
);

QUnit.skip(
  "InputPlusMinus Eliminar 5 elementos con botón - y que queden elementos en la lista",
  function(assert) {}
);

QUnit.skip("InputPlusMinus Solo permitir agregar 4 elementos", function(
  assert
) {});
*/

QUnit.test("Datepicker captura de fecha válida", function(assert) {
  // arrange
  const fechaIngresada = "01-01-2020";
  const txtInputFecha = $("#inpt-fecha");

  // act
  txtInputFecha.val(fechaIngresada);
  txtInputFecha.blur();

  // assert
  assert.equal(txtInputFecha.val(), fechaIngresada);
});

QUnit.test("Datepicker captura de fecha inválida por dia", function(assert) {
  // arrange
  const fechaIngresada = "35-01-2020";
  const fechaEsperada = "04-02-2020";
  const txtInputFecha = $("#inpt-fecha");

  // act
  txtInputFecha.val(fechaIngresada);
  txtInputFecha.blur();

  // assert
  assert.equal(txtInputFecha.val(), fechaEsperada);
});

QUnit.test("Datepicker captura de fecha inválida por mes", function(assert) {
  // arrange
  const fechaIngresada = "01-15-2020";
  const fechaEsperada = "01-03-2021";
  const txtInputFecha = $("#inpt-fecha");

  // act
  txtInputFecha.val(fechaIngresada);
  txtInputFecha.blur();

  // assert
  assert.equal(txtInputFecha.val(), fechaEsperada);
});

QUnit.test("Datepicker captura de fecha inválida por año", function(assert) {
  // arrange
  const fechaIngresada = "01-01-1900";
  const actualYear = new Date().getFullYear();
  const fechaEsperada = "01-01-" + actualYear;
  const txtInputFecha = $("#inpt-fecha");

  // act
  txtInputFecha.val(fechaIngresada);
  txtInputFecha.blur();

  // assert
  assert.equal(txtInputFecha.val(), fechaEsperada);
});


QUnit.test("Datepicker seleccionando una fecha con el calendario", function(assert) {
  // arrange
  const txtInputFecha = $("#inpt-fecha");
  txtInputFecha.val("");
  const iconoCalendario = $("#fecha .ui-datepicker-trigger");
  const diaSeleccionadoCalendario = $("#.ui-state-highlight");
  const actualDate = new Date();
  const fechaEsperada = actualDate.getDay() + "-" + actualDate.getMonth() + "-" + actualDate.getFullYear();

  // act
  txtInputFecha.val(fechaIngresada);
  txtInputFecha.blur();

  // assert
  assert.equal(txtInputFecha.val(), fechaEsperada);
});