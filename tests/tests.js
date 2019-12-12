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

  var QUnitDate = QUnit.test("SELECTED OPTIONS - First option selected", function(assert){
    //arrange
    const options = $("#field_negocio").children(".field-control").children("label");
    const optionExpected = options[0];
    const optionSelectedValueExpected = optionExpected.childNodes[1].value;

    //act
    const optionSelected = options[0];
    const optionSelectedCN = optionSelected.childNodes;
    optionSelectedCN[1].click();

    var optionSelectedValue;
    for(var i=0; i<options.length; i++){
      if( $("#"+options[i].childNodes[1].id).is(":checked") ){
        optionSelectedValue = options[i].childNodes[1].value;
      }
    }

    // assert
    assert.equal(optionSelectedValue, optionSelectedValueExpected);
  });  

  var QUnitDate = QUnit.test("SELECTED OPTIONS - Second option selected", function(assert){
    //arrange
    const options = $("#field_negocio").children(".field-control").children("label");
    const optionExpected = options[1];
    const optionSelectedValueExpected = optionExpected.childNodes[1].value;

    //act
    const optionSelected = options[1];
    const optionSelectedCN = optionSelected.childNodes;
    optionSelectedCN[1].click();

    var optionSelectedValue;
    for(var i=0; i<options.length; i++){
      if( $("#"+options[i].childNodes[1].id).is(":checked") ){
        optionSelectedValue = options[i].childNodes[1].value;
      }
    }

    // assert
    assert.equal(optionSelectedValue, optionSelectedValueExpected);
  }); 

  var QUnitDate = QUnit.test("SELECTED OPTIONS - Third option selected", function(assert){
    //arrange
    const options = $("#field_negocio").children(".field-control").children("label");
    const optionExpected = options[2];
    const optionSelectedValueExpected = optionExpected.childNodes[1].value;

    //act
    const optionSelected = options[2];
    const optionSelectedCN = optionSelected.childNodes;
    optionSelectedCN[1].click();

    var optionSelectedValue;
    for(var i=0; i<options.length; i++){
      if( $("#"+options[i].childNodes[1].id).is(":checked") ){
        optionSelectedValue = options[i].childNodes[1].value;
      }
    }

    // assert
    assert.equal(optionSelectedValue, optionSelectedValueExpected);
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

QUnit.test("DATEPICKER captura de fecha válida", function(assert) {
  // arrange
  const fechaIngresada = "01-01-2020";
  const txtInputFecha = $("#inpt-fecha");

  // act
  txtInputFecha.val(fechaIngresada);
  txtInputFecha.blur();

  // assert
  assert.equal(txtInputFecha.val(), fechaIngresada);
});

QUnit.test("DATEPICKER captura de fecha inválida por dia", function(assert) {
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

QUnit.test("DATEPICKER captura de fecha inválida por mes", function(assert) {
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

QUnit.test("DATEPICKER captura de fecha inválida por año", function(assert) {
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

/*
QUnit.test("1-DATEPICKER seleccionando una fecha con el calendario", function(assert) {
  // arrange
  const txtInputFecha = $("#inpt-fecha");
  txtInputFecha.val("");
  const iconoCalendario = $("#fecha .ui-datepicker-trigger");
  const diaSeleccionadoCalendario = $(".ui-state-highlight");
  const actualDate = new Date();
  const fechaEsperada = actualDate.getDay() + "-" + actualDate.getMonth() + "-" + actualDate.getFullYear();

  console.log("************ diaSeleccionadoCalendario: " + diaSeleccionadoCalendario); 
  // act
  txtInputFecha.val(fechaIngresada);
  txtInputFecha.blur();

  // assert
  assert.equal(txtInputFecha.val(), fechaEsperada);
});
*/