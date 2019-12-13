function simulateKeydown(selector) {
  let e = jQuery.Event("keydown");
  e.which = 13;
  e.keyCode = 13;
  selector.trigger(e);
}

function cleanData(nelements, prueba) {
  console.log("Inicializando prueba... " + prueba);
  const txtInput = $("#contrato");
  const btnMinus = $("#field_contrato #btn_minus_contrato");

  let count = nelements;
  $.each($("ul#tag_list_contrato li a"), function() {
    txtInput.val($("ul#tag_list_contrato li:nth-child(" + count + ")").text());
    btnMinus.click();
    count--;
  });
}

QUnit.test("1 - InputPlusMinus inicializado correctamente", function(assert) {
  // arrange
  const txtInput = $("#contrato");
  const lstTags = $("#field_contrato #tag_list_contrato li a");

  // act

  // assert
  assert.equal(lstTags.length, 4);
  assert.equal(txtInput.val(), "");
});

QUnit.test("2 - InputPlusMinus agregar 3 elementos con botón +", function(
  assert
) {
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

QUnit.test(
  "3 - InputPlusMinus limpiar todos los elementos del componente +",
  function(assert) {
    // arrange
    const txtInput = $("#contrato");
    const btnPlus = $("#field_contrato #btn_plus_contrato");
    const lstTags = $("#field_contrato #tag_list_contrato li a");

    // act
    [...Array(3).keys()].forEach(element => {
      txtInput.val("Elemento " + (element + 1));
      btnPlus.click();
    });

    cleanData(3, 3);

    // assert
    let contratosSeleccionados = getList("contrato");
    assert.equal(lstTags.length, 4);
    assert.equal(contratosSeleccionados.length, 0);
    assert.equal(txtInput.val(), "");
  }
);

QUnit.test("4 - InputPlusMinus agregar 30 elementos con botón +", function(
  assert
) {
  // arrange
  const txtInput = $("#contrato");
  const btnPlus = $("#field_contrato #btn_plus_contrato");
  const lstTags = $("#field_contrato #tag_list_contrato li a");

  // act
  [...Array(30).keys()].forEach(element => {
    txtInput.val("Elemento " + (element + 1));
    btnPlus.click();
  });

  // assert
  let contratosSeleccionados = getList("contrato");
  assert.equal(lstTags.length, 4);
  assert.equal(contratosSeleccionados.length, 30);
  assert.equal(txtInput.val(), "");
  cleanData(30, 4);
});

QUnit.test("5 - InputPlusMinus agregar 3 elementos con Enter", function(
  assert
) {
  // arrange
  const txtInput = $("#contrato");
  const lstTags = $("#field_contrato #tag_list_contrato li a");

  // act
  [...Array(3).keys()].forEach(element => {
    txtInput.val("Elemento " + (element + 1));
    simulateKeydown(txtInput);
  });

  // assert
  let contratosSeleccionados = getList("contrato");
  assert.equal(lstTags.length, 4);
  assert.equal(contratosSeleccionados.length, 3);
  assert.equal(txtInput.val(), "");
  cleanData(3, 5);
});

QUnit.test("6 - InputPlusMinus agregar 30 elementos con Enter", function(
  assert
) {
  // arrange
  const txtInput = $("#contrato");
  const lstTags = $("#field_contrato #tag_list_contrato li a");

  // act
  [...Array(30).keys()].forEach(element => {
    txtInput.val("Elemento " + (element + 1));
    simulateKeydown(txtInput);
  });

  // assert
  let contratosSeleccionados = getList("contrato");
  assert.equal(lstTags.length, 4);
  assert.equal(contratosSeleccionados.length, 30);
  assert.equal(txtInput.val(), "");
  cleanData(30, 6);
});

QUnit.test(
  "7 - InputPlusMinus seleccionar elemento 1 de la lista de 5 elementos",
  function(assert) {
    // arrange
    const txtInput = $("#contrato");
    const lstTags = $("#field_contrato #tag_list_contrato li a");

    // act
    [...Array(5).keys()].forEach(element => {
      txtInput.val("Elemento " + (element + 1));
      simulateKeydown(txtInput);
    });

    txtInput.val($("ul#tag_list_contrato li:nth-child(1)").text());

    // assert
    let contratosSeleccionados = getList("contrato");
    assert.equal(lstTags.length, 4);
    assert.equal(contratosSeleccionados.length, 5);
    assert.equal(txtInput.val(), "Elemento 1");
    cleanData(5, 7);
  }
);

QUnit.test(
  "8 - InputPlusMinus Eliminar 5 elementos con botón - y ya no queden elementos en la lista",
  function(assert) {
    // arrange
    const txtInput = $("#contrato");
    const btnPlus = $("#field_contrato #btn_plus_contrato");
    const btnMinus = $("#field_contrato #btn_minus_contrato");
    const lstTags = $("#field_contrato #tag_list_contrato li a");

    // act
    [...Array(5).keys()].forEach(element => {
      txtInput.val("Elemento " + (element + 1));
      btnPlus.click();
    });

    let count = 5;
    $.each($("ul#tag_list_contrato li a"), function() {
      txtInput.val(
        $("ul#tag_list_contrato li:nth-child(" + count + ")").text()
      );
      btnMinus.click();
      count--;
    });

    // assert
    let contratosSeleccionados = getList("contrato");
    assert.equal(lstTags.length, 4);
    assert.equal(contratosSeleccionados.length, 0);
    assert.equal(txtInput.val(), "");
    cleanData(5, 8);
  }
);

QUnit.test(
  "9 - InputPlusMinus Eliminar 7 elementos con botón - y que queden elementos en la lista",
  function(assert) {
    // arrange
    const txtInput = $("#contrato");
    const btnPlus = $("#field_contrato #btn_plus_contrato");
    const lstTags = $("#field_contrato #tag_list_contrato li a");
    const btnMinus = $("#field_contrato #btn_minus_contrato");

    // act
    [...Array(10).keys()].forEach(element => {
      txtInput.val("Elemento " + (element + 1));
      btnPlus.click();
    });

    let count = 7;
    $.each($("ul#tag_list_contrato li a"), function() {
      txtInput.val(
        $("ul#tag_list_contrato li:nth-child(" + count + ")").text()
      );

      btnMinus.click();
      count--;
    });

    // assert
    let contratosSeleccionados = getList("contrato");
    assert.equal(lstTags.length, 4);
    assert.equal(contratosSeleccionados.length, 3);
    assert.equal(txtInput.val(), "");
    cleanData(10, 9);
  }
);

QUnit.test("10 - InputPlusMinus Solo permitir agregar 4 elementos", function(
  assert
) {
  // arrange
  const txtInput = $("#contrato2");
  const btnPlus = $("#field_contrato2 #btn_plus_contrato2");
  const lstTags = $("#field_contrato2 #tag_list_contrato2 li a");

  // act
  [...Array(5).keys()].forEach(element => {
    txtInput.val("Elemento " + (element + 1));
    btnPlus.click();
  });

  // assert
  let contratosSeleccionados = getList("contrato2");
  assert.equal(lstTags.length, 4);
  assert.equal(contratosSeleccionados.length, 4);
  assert.equal(txtInput.val(), "");
  cleanData(4, 10);
});

QUnit.skip("1 - SelectPlusMinus inicializado correctamente", function(assert) {
  // arrange
  const txtInput = $("#contrato");
  const lstTags = $("#field_contrato #tag_list_contrato li a");

  // act

  // assert
  assert.equal(lstTags.length, 4);
  assert.equal(txtInput.val(), "");
});

QUnit.skip("2 - SelectPlusMinus agregar 3 elementos con botón +", function(
  assert
) {
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

QUnit.skip(
  "3 - SelectPlusMinus limpiar todos los elementos del componente +",
  function(assert) {
    // arrange
    const txtInput = $("#contrato");
    const btnPlus = $("#field_contrato #btn_plus_contrato");
    const lstTags = $("#field_contrato #tag_list_contrato li a");

    // act
    [...Array(3).keys()].forEach(element => {
      txtInput.val("Elemento " + (element + 1));
      btnPlus.click();
    });

    cleanData(3, 3);

    // assert
    let contratosSeleccionados = getList("contrato");
    assert.equal(lstTags.length, 4);
    assert.equal(contratosSeleccionados.length, 0);
    assert.equal(txtInput.val(), "");
  }
);

QUnit.skip("4 - SelectPlusMinus agregar 30 elementos con botón +", function(
  assert
) {
  // arrange
  const txtInput = $("#contrato");
  const btnPlus = $("#field_contrato #btn_plus_contrato");
  const lstTags = $("#field_contrato #tag_list_contrato li a");

  // act
  [...Array(30).keys()].forEach(element => {
    txtInput.val("Elemento " + (element + 1));
    btnPlus.click();
  });

  // assert
  let contratosSeleccionados = getList("contrato");
  assert.equal(lstTags.length, 4);
  assert.equal(contratosSeleccionados.length, 30);
  assert.equal(txtInput.val(), "");
  cleanData(30, 4);
});

QUnit.skip("5 - SelectPlusMinus agregar 3 elementos con Enter", function(
  assert
) {
  // arrange
  const txtInput = $("#contrato");
  const lstTags = $("#field_contrato #tag_list_contrato li a");

  // act
  [...Array(3).keys()].forEach(element => {
    txtInput.val("Elemento " + (element + 1));
    simulateKeydown(txtInput);
  });

  // assert
  let contratosSeleccionados = getList("contrato");
  assert.equal(lstTags.length, 4);
  assert.equal(contratosSeleccionados.length, 3);
  assert.equal(txtInput.val(), "");
  cleanData(3, 5);
});

QUnit.skip("6 - SelectPlusMinus agregar 30 elementos con Enter", function(
  assert
) {
  // arrange
  const txtInput = $("#contrato");
  const lstTags = $("#field_contrato #tag_list_contrato li a");

  // act
  [...Array(30).keys()].forEach(element => {
    txtInput.val("Elemento " + (element + 1));
    simulateKeydown(txtInput);
  });

  // assert
  let contratosSeleccionados = getList("contrato");
  assert.equal(lstTags.length, 4);
  assert.equal(contratosSeleccionados.length, 30);
  assert.equal(txtInput.val(), "");
  cleanData(30, 6);
});

QUnit.skip(
  "7 - SelectPlusMinus seleccionar elemento 1 de la lista de 5 elementos",
  function(assert) {
    // arrange
    const txtInput = $("#contrato");
    const lstTags = $("#field_contrato #tag_list_contrato li a");

    // act
    [...Array(5).keys()].forEach(element => {
      txtInput.val("Elemento " + (element + 1));
      simulateKeydown(txtInput);
    });

    txtInput.val($("ul#tag_list_contrato li:nth-child(1)").text());

    // assert
    let contratosSeleccionados = getList("contrato");
    assert.equal(lstTags.length, 4);
    assert.equal(contratosSeleccionados.length, 5);
    assert.equal(txtInput.val(), "Elemento 1");
    cleanData(5, 7);
  }
);

QUnit.skip(
  "8 - SelectPlusMinus Eliminar 5 elementos con botón - y ya no queden elementos en la lista",
  function(assert) {
    // arrange
    const txtInput = $("#contrato");
    const btnPlus = $("#field_contrato #btn_plus_contrato");
    const btnMinus = $("#field_contrato #btn_minus_contrato");
    const lstTags = $("#field_contrato #tag_list_contrato li a");

    // act
    [...Array(5).keys()].forEach(element => {
      txtInput.val("Elemento " + (element + 1));
      btnPlus.click();
    });

    let count = 5;
    $.each($("ul#tag_list_contrato li a"), function() {
      txtInput.val(
        $("ul#tag_list_contrato li:nth-child(" + count + ")").text()
      );
      btnMinus.click();
      count--;
    });

    // assert
    let contratosSeleccionados = getList("contrato");
    assert.equal(lstTags.length, 4);
    assert.equal(contratosSeleccionados.length, 0);
    assert.equal(txtInput.val(), "");
    cleanData(5, 8);
  }
);

QUnit.skip(
  "9 - SelectPlusMinus Eliminar 7 elementos con botón - y que queden elementos en la lista",
  function(assert) {
    // arrange
    const txtInput = $("#contrato");
    const btnPlus = $("#field_contrato #btn_plus_contrato");
    const lstTags = $("#field_contrato #tag_list_contrato li a");
    const btnMinus = $("#field_contrato #btn_minus_contrato");

    // act
    [...Array(10).keys()].forEach(element => {
      txtInput.val("Elemento " + (element + 1));
      btnPlus.click();
    });

    let count = 7;
    $.each($("ul#tag_list_contrato li a"), function() {
      txtInput.val(
        $("ul#tag_list_contrato li:nth-child(" + count + ")").text()
      );

      btnMinus.click();
      count--;
    });

    // assert
    let contratosSeleccionados = getList("contrato");
    assert.equal(lstTags.length, 4);
    assert.equal(contratosSeleccionados.length, 3);
    assert.equal(txtInput.val(), "");
    cleanData(10, 9);
  }
);

QUnit.skip("10 - SelectPlusMinus Solo permitir agregar 4 elementos", function(
  assert
) {
  // arrange
  const txtInput = $("#contrato2");
  const btnPlus = $("#field_contrato2 #btn_plus_contrato2");
  const lstTags = $("#field_contrato2 #tag_list_contrato2 li a");

  // act
  [...Array(5).keys()].forEach(element => {
    txtInput.val("Elemento " + (element + 1));
    btnPlus.click();
  });

  // assert
  let contratosSeleccionados = getList("contrato2");
  assert.equal(lstTags.length, 4);
  assert.equal(contratosSeleccionados.length, 4);
  assert.equal(txtInput.val(), "");
  cleanData(4, 10);
});

//----------------------------------------------------------
var QUnitDate = QUnit.test("SELECTED OPTIONS - First option selected", function(
  assert
) {
  //arrange
  const options = $("#field_negocio")
    .children(".field-control")
    .children("label");
  const optionExpected = options[0];
  const optionSelectedValueExpected = optionExpected.childNodes[1].value;

  //act
  const optionSelected = options[0];
  const optionSelectedCN = optionSelected.childNodes;
  optionSelectedCN[1].click();

  var optionSelectedValue;
  for (var i = 0; i < options.length; i++) {
    if ($("#" + options[i].childNodes[1].id).is(":checked")) {
      optionSelectedValue = options[i].childNodes[1].value;
    }
  }

  // assert
  assert.equal(optionSelectedValue, optionSelectedValueExpected);
});

var QUnitDate = QUnit.test(
  "SELECTED OPTIONS - Second option selected",
  function(assert) {
    //arrange
    const options = $("#field_negocio")
      .children(".field-control")
      .children("label");
    const optionExpected = options[1];
    const optionSelectedValueExpected = optionExpected.childNodes[1].value;

    //act
    const optionSelected = options[1];
    const optionSelectedCN = optionSelected.childNodes;
    optionSelectedCN[1].click();

    var optionSelectedValue;
    for (var i = 0; i < options.length; i++) {
      if ($("#" + options[i].childNodes[1].id).is(":checked")) {
        optionSelectedValue = options[i].childNodes[1].value;
      }
    }

    // assert
    assert.equal(optionSelectedValue, optionSelectedValueExpected);
  }
);

var QUnitDate = QUnit.test("SELECTED OPTIONS - Third option selected", function(
  assert
) {
  //arrange
  const options = $("#field_negocio")
    .children(".field-control")
    .children("label");
  const optionExpected = options[2];
  const optionSelectedValueExpected = optionExpected.childNodes[1].value;

  //act
  const optionSelected = options[2];
  const optionSelectedCN = optionSelected.childNodes;
  optionSelectedCN[1].click();

  var optionSelectedValue;
  for (var i = 0; i < options.length; i++) {
    if ($("#" + options[i].childNodes[1].id).is(":checked")) {
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
  const fechaEsperada =
    actualDate.getDay() +
    "-" +
    actualDate.getMonth() +
    "-" +
    actualDate.getFullYear();

  console.log("************ diaSeleccionadoCalendario: " + diaSeleccionadoCalendario); 
  // act
  txtInputFecha.val(fechaIngresada);
  txtInputFecha.blur();

  // assert
  assert.equal(txtInputFecha.val(), fechaEsperada);
});
*/
