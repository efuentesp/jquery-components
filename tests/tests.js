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

QUnit.test("1 - InputPlusMinus - Inicializado correctamente", function(assert) {
  // arrange
  const txtInput = $("#contrato");
  const lstTags = $("#field_contrato #tag_list_contrato li a");

  // act

  // assert
  assert.equal(lstTags.length, 4);
  assert.equal(txtInput.val(), "");
});

QUnit.test("2 - InputPlusMinus - Agregar 3 elementos con botón +", function(
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
  "3 - InputPlusMinus - Limpiar todos los elementos del componente +",
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

QUnit.test("4 - InputPlusMinus - Agregar 30 elementos con botón +", function(
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

QUnit.test("5 - InputPlusMinus - Agregar 3 elementos con Enter", function(
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

QUnit.test("6 - InputPlusMinus - Agregar 30 elementos con Enter", function(
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
  "7 - InputPlusMinus - Seleccionar elemento 1 de la lista de 5 elementos",
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
  "8 - InputPlusMinus - Eliminar 5 elementos con botón (-) y ya no queden elementos en la lista",
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
  "9 - InputPlusMinus - Eliminar 7 elementos con botón (-) y que queden elementos en la lista",
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

QUnit.test("10 - InputPlusMinus - Solo permitir agregar 4 elementos", function(
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

QUnit.test("1 - SelectPlusMinus - Inicializado correctamente", function(
  assert
) {
  // arrange
  const selectInput = $("#contrato3");
  const lstTags = $("#field_contrato3 #tag_list_contrato3 li a");

  // act

  // assert
  assert.equal(lstTags.length, 4);
  assert.equal(selectInput.val(), "");
});

QUnit.skip("2 - SelectPlusMinus - agregar 3 elementos con botón (+)", function(
  assert
) {
  // arrange
  const selectInput = $("select#contrato3");
  const btnPlus = $("#field_contrato3 #btn_plus_contrato3");
  const lstTags = $("#field_contrato3 #tag_list_contrato3 li a");

  // // act
  // // [...Array(3).keys()].forEach(element => {
  // //   txtInput.val("Elemento " + (element + 1));
  // //   btnPlus.click();
  // // });
  // selectInput.click();

  // assert
  let contratosSeleccionados = getList("contrato3");
  assert.equal(lstTags.length, 4);
  assert.equal(contratosSeleccionados.length, 3);
  assert.equal(txtInput.val(), "");
});

QUnit.skip(
  "3 - SelectPlusMinus - limpiar todos los elementos del componente +",
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

QUnit.skip("4 - SelectPlusMinus - agregar 30 elementos con botón +", function(
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

QUnit.skip("5 - SelectPlusMinus - agregar 3 elementos con Enter", function(
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

QUnit.skip("6 - SelectPlusMinus - agregar 30 elementos con Enter", function(
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
  "7 - SelectPlusMinus - seleccionar elemento 1 de la lista de 5 elementos",
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
  "8 - SelectPlusMinus - Eliminar 5 elementos con botón - y ya no queden elementos en la lista",
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
  "9 - SelectPlusMinus - Eliminar 7 elementos con botón - y que queden elementos en la lista",
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

QUnit.skip("10 - SelectPlusMinus - Solo permitir agregar 4 elementos", function(
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

QUnit.test(
  "1 - SelectPlusMinusAutocomplete - Inicializado correctamente",
  function(assert) {
    // arrange
    const txtInput = $("#contrato5");
    const lstTags = $("#field_contrato5 #tag_list_contrato5 li a");

    // act

    // assert
    assert.equal(lstTags.length, 4);
    assert.equal(txtInput.val(), "");
  }
);

QUnit.test(
  "1a - SelectPlusMinusAutocomplete - Inicializado correctamente sin nodos",
  function(assert) {
    // arrange
    const txtInput = $("#contrato4");
    const lstTags = $("#field_contrato4 #tag_list_contrato4 li a");

    // act

    // assert
    assert.equal(lstTags.length, 0);
    assert.equal(txtInput.val(), "");
  }
);

QUnit.skip(
  "2 - SelectPlusMinusAutocomplete - agregar 3 elementos con botón +",
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

    // assert
    let contratosSeleccionados = getList("contrato");
    assert.equal(lstTags.length, 4);
    assert.equal(contratosSeleccionados.length, 3);
    assert.equal(txtInput.val(), "");
  }
);

QUnit.skip(
  "3 - SelectPlusMinusAutocomplete - limpiar todos los elementos del componente +",
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

QUnit.skip(
  "4 - SelectPlusMinusAutocomplete - agregar 30 elementos con botón +",
  function(assert) {
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
  }
);

QUnit.skip(
  "5 - SelectPlusMinusAutocomplete - agregar 3 elementos con Enter",
  function(assert) {
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
  }
);

QUnit.skip(
  "6 - SelectPlusMinusAutocomplete - agregar 30 elementos con Enter",
  function(assert) {
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
  }
);

QUnit.skip(
  "7 - SelectPlusMinusAutocomplete - seleccionar elemento 1 de la lista de 5 elementos",
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
  "8 - SelectPlusMinusAutocomplete - Eliminar 5 elementos con botón - y ya no queden elementos en la lista",
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
  "9 - SelectPlusMinusAutocomplete - Eliminar 7 elementos con botón - y que queden elementos en la lista",
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

QUnit.skip(
  "10 - SelectPlusMinusAutocomplete - Solo permitir agregar 4 elementos",
  function(assert) {
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
  }
);

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

QUnit.test("DATEPICKER botón clear", function(assert) {
  // arrange
  const fechaIngresada = "16-11-2019";
  const txtInputFecha = $("#inpt-fecha");
  const btnClear = $("#clear_fecha");

  // act
  txtInputFecha.val(fechaIngresada);
  txtInputFecha.blur();
  if (btnClear != null) {
    btnClear.click();
  }

  // assert
  assert.equal(txtInputFecha.val(), fechaIngresada);
});

QUnit.test("CHECKBOX Select first option", function(assert) {
  // arrange
  const index = 0;
  const checksBox = $("#field_bancos")
    .children("div .field-control")
    .children("div")
    .children("label");
  const checkBoxExpected = checksBox[index];
  const checkBoxSelectedValueExpected = checkBoxExpected.childNodes[1].value;

  // act
  for (var i = 0; i < checksBox.length; i++) {
    $("#" + checksBox[i].childNodes[1].id).prop("checked", false);
  }
  const checkBoxSelected = checksBox[index];
  const checkBoxSelectedCN = checkBoxSelected.childNodes;
  checkBoxSelectedCN[1].click();

  var checkBoxSelectedValue;
  for (var i = 0; i < checksBox.length; i++) {
    if ($("#" + checksBox[i].childNodes[1].id).is(":checked")) {
      checkBoxSelectedValue = checksBox[i].childNodes[1].value;
    }
  }

  // assert
  assert.equal(checkBoxSelectedValue, checkBoxSelectedValueExpected);
});

QUnit.test("CHECKBOX Select second option", function(assert) {
  // arrange
  const index = 1;
  const checksBox = $("#field_bancos")
    .children("div .field-control")
    .children("div")
    .children("label");
  const checkBoxExpected = checksBox[index];
  const checkBoxSelectedValueExpected = checkBoxExpected.childNodes[1].value;

  // act
  for (var i = 0; i < checksBox.length; i++) {
    $("#" + checksBox[i].childNodes[1].id).prop("checked", false);
  }
  const checkBoxSelected = checksBox[index];
  const checkBoxSelectedCN = checkBoxSelected.childNodes;
  checkBoxSelectedCN[1].click();

  var checkBoxSelectedValue;
  for (var i = 0; i < checksBox.length; i++) {
    if ($("#" + checksBox[i].childNodes[1].id).is(":checked")) {
      checkBoxSelectedValue = checksBox[i].childNodes[1].value;
    }
  }

  // assert
  assert.equal(checkBoxSelectedValue, checkBoxSelectedValueExpected);
});

QUnit.test("CHECKBOX Select third option", function(assert) {
  // arrange
  const index = 2;
  const checksBox = $("#field_bancos")
    .children("div .field-control")
    .children("div")
    .children("label");
  const checkBoxExpected = checksBox[index];
  const checkBoxSelectedValueExpected = checkBoxExpected.childNodes[1].value;

  // act
  for (var i = 0; i < checksBox.length; i++) {
    $("#" + checksBox[i].childNodes[1].id).prop("checked", false);
  }
  const checkBoxSelected = checksBox[index];
  const checkBoxSelectedCN = checkBoxSelected.childNodes;
  checkBoxSelectedCN[1].click();

  var checkBoxSelectedValue;
  for (var i = 0; i < checksBox.length; i++) {
    if ($("#" + checksBox[i].childNodes[1].id).is(":checked")) {
      checkBoxSelectedValue = checksBox[i].childNodes[1].value;
    }
  }

  // assert
  assert.equal(checkBoxSelectedValue, checkBoxSelectedValueExpected);
});

QUnit.test("CHECKBOX Select first and second options", function(assert) {
  // arrange
  const index_1 = 0;
  const index_2 = 1;
  const checksBox = $("#field_bancos")
    .children("div .field-control")
    .children("div")
    .children("label");
  const checkBoxExpected1 = checksBox[index_1];
  const checkBoxExpected2 = checksBox[index_2];
  const checkBoxSelectedValueExpected =
    checkBoxExpected1.childNodes[1].value +
    checkBoxExpected2.childNodes[1].value;

  // act
  for (var i = 0; i < checksBox.length; i++) {
    $("#" + checksBox[i].childNodes[1].id).prop("checked", false);
  }
  const checkBoxSelected1 = checksBox[index_1];
  const checkBoxSelectedCN1 = checkBoxSelected1.childNodes;
  checkBoxSelectedCN1[1].click();

  const checkBoxSelected2 = checksBox[index_2];
  const checkBoxSelectedCN2 = checkBoxSelected2.childNodes;
  checkBoxSelectedCN2[1].click();

  var checkBoxSelectedValue = "";
  for (var i = 0; i < checksBox.length; i++) {
    if ($("#" + checksBox[i].childNodes[1].id).is(":checked")) {
      checkBoxSelectedValue += checksBox[i].childNodes[1].value;
    }
  }

  // assert
  assert.equal(checkBoxSelectedValue, checkBoxSelectedValueExpected);
});

QUnit.test("CHECKBOX Select first and third options", function(assert) {
  // arrange
  const index_1 = 0;
  const index_2 = 2;
  const checksBox = $("#field_bancos")
    .children("div .field-control")
    .children("div")
    .children("label");
  const checkBoxExpected1 = checksBox[index_1];
  const checkBoxExpected2 = checksBox[index_2];
  const checkBoxSelectedValueExpected =
    checkBoxExpected1.childNodes[1].value +
    checkBoxExpected2.childNodes[1].value;

  // act
  for (var i = 0; i < checksBox.length; i++) {
    $("#" + checksBox[i].childNodes[1].id).prop("checked", false);
  }
  const checkBoxSelected1 = checksBox[index_1];
  const checkBoxSelectedCN1 = checkBoxSelected1.childNodes;
  checkBoxSelectedCN1[1].click();

  const checkBoxSelected2 = checksBox[index_2];
  const checkBoxSelectedCN2 = checkBoxSelected2.childNodes;
  checkBoxSelectedCN2[1].click();

  var checkBoxSelectedValue = "";
  for (var i = 0; i < checksBox.length; i++) {
    if ($("#" + checksBox[i].childNodes[1].id).is(":checked")) {
      checkBoxSelectedValue += checksBox[i].childNodes[1].value;
    }
  }

  // assert
  assert.equal(checkBoxSelectedValue, checkBoxSelectedValueExpected);
});

QUnit.test("CHECKBOX Select first, second and third options", function(assert) {
  // arrange
  const index_1 = 0;
  const index_2 = 1;
  const index_3 = 2;
  const checksBox = $("#field_bancos")
    .children("div .field-control")
    .children("div")
    .children("label");
  const checkBoxExpected1 = checksBox[index_1];
  const checkBoxExpected2 = checksBox[index_2];
  const checkBoxExpected3 = checksBox[index_3];
  const checkBoxSelectedValueExpected =
    checkBoxExpected1.childNodes[1].value +
    checkBoxExpected2.childNodes[1].value +
    checkBoxExpected3.childNodes[1].value;

  // act
  for (var i = 0; i < checksBox.length; i++) {
    $("#" + checksBox[i].childNodes[1].id).prop("checked", false);
  }
  const checkBoxSelected1 = checksBox[index_1];
  const checkBoxSelectedCN1 = checkBoxSelected1.childNodes;
  checkBoxSelectedCN1[1].click();

  const checkBoxSelected2 = checksBox[index_2];
  const checkBoxSelectedCN2 = checkBoxSelected2.childNodes;
  checkBoxSelectedCN2[1].click();

  const checkBoxSelected3 = checksBox[index_3];
  const checkBoxSelectedCN3 = checkBoxSelected3.childNodes;
  checkBoxSelectedCN3[1].click();

  var checkBoxSelectedValue = "";
  for (var i = 0; i < checksBox.length; i++) {
    if ($("#" + checksBox[i].childNodes[1].id).is(":checked")) {
      console.log("checksBox[i]: ", checksBox[i].childNodes);
      checkBoxSelectedValue += checksBox[i].childNodes[1].value;
    }
  }

  // assert
  assert.equal(checkBoxSelectedValue, checkBoxSelectedValueExpected);
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

QUnit.test("FORM - Sin atributos", function(assert) {
  // arrange
  const formmethod = $("#formcontrato").prop("method");
  const formparsley = $("#formcontrato").attr("data-parsley-validate");
  const formenctype = $("#formcontrato").attr("enctype");
  // act
  // assert
  assert.notEqual(formmethod, undefined);
  assert.notEqual(formparsley, undefined);
  assert.notEqual(formenctype, undefined);
});

QUnit.test("FORM - Atributos con valores no estandarizados ", function(assert) {
  // arrange
  const formmethod = $("#formcontrato2").attr("method");
  const formenctype = $("#formcontrato2").attr("enctype");
  // act
  // assert
  assert.equal(formmethod, "POST");
  assert.equal(formenctype, "multipart/form-data");
});

QUnit.test("ACCORDION - Inicializado correctamente", function(assert) {
  // arrange
  const role = $("#testaccordion").attr("role");
  const uiclass = $("#testaccordion").hasClass("ui-accordion");
  const headers = $("#testaccordion").children("h3.ui-accordion-header");
  const content = $("#testaccordion").children("div.accordion-content");
  // act
  // assert
  assert.equal(role, "tablist");
  assert.equal(uiclass, true);
  assert.equal(headers.length === content.length, true);
});

QUnit.test("ACCORDION - Colapsar accordion", function(assert) {
  //arrage
  var active0 = $("#testaccordion").accordion("option", "active");
  //act
  $("#testaccordion").accordion({ active: 1 });
  var active1 = $("#testaccordion").accordion("option", "active");
  //assert
  assert.equal(active0, 0);
  assert.equal(active1, 1);
});

QUnit.test("SELECT - Inicializado correctamente", function(assert) {
  // arrange
  const select2 = $("#payment2").attr("class");
  const opt2 = $('option[value ="ET2"]').text();
  const opt3 = $('option[value ="CHK2"]').text();
  // act
  // assert
  assert.equal(select2, "select2 select2-hidden-accessible");
  assert.equal(opt2, "Electronic transfer");
  assert.equal(opt3, "Check");
});

QUnit.test("SELECT - Primer elemento seleccionado", function(assert) {
  // arrange
  const selected = $("#payment2").val();
  // act
  // assert
  assert.equal(selected, "ET2");
});

QUnit.test("SELECT - Segundo elemento seleccionado", function(assert) {
  // arrange
  // act
  $("#payment2")
    .val("CHK2")
    .trigger("change");
  // assert
  assert.equal($("#payment2").val(), "CHK2");
});
