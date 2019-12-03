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

QUnit.test("InputPlusMinus agregar 10 elementos con botón +", function(assert) {
  // arrange
  const txtInput = $("#contrato");
  const btnPlus = $("#field_contrato #btn_plus_contrato");
  const lstTags = $("#field_contrato #tag_list_contrato li a");

  // act
  [...Array(10).keys()].forEach(element => {
    txtInput.val("Elemento " + (element + 1));
    btnPlus.click();
  });

  // assert
  let liCount = 0;
  lstTags.each(element => {
    console.log(element);
    if (element.val() != "") {
      liCount++;
    }
  });
  assert.equal(lstTags.length, 4);
  assert.equal(liCount, 1);
  assert.equal(txtInput.val(), "");
});
