QUnit.test("InputPlusMinus inicializado correctamente", function(assert) {
  // arrange
  const txtInput = $("#contrato");
  const btnPlus = $("#field_contrato #btn_plus_contrato");
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
  console.log(lstTags);

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

QUnit.skip("InputPlusMinus agregar 30 elementos con botón +", function(
  assert
) {});

QUnit.skip("InputPlusMinus agregar 3 elementos con Enter", function(assert) {});

QUnit.skip("InputPlusMinus agregar 30 elementos con Enter", function(
  assert
) {});

QUnit.skip("InputPlusMinus Eliminar 5 elementos con botón -", function(
  assert
) {});

QUnit.skip("InputPlusMinus Solo permitir agregar 4 elementos", function(
  assert
) {});
