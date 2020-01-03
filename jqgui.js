$.fn.fieldSwaplist = function() {
  const fieldId = this.attr("id");
  const fieldTitleSource = this.data("componentTitleSource");
  const fieldTitleDestination = this.data("componentTitleDestination");
  const idSource = fieldId + "_source";
  const idDestination = fieldId + "_destination";

  const divListSwapWrapper = document.createElement("div");
  divListSwapWrapper.setAttribute("class", "listswap_wrapper");
  divListSwapWrapper.setAttribute("id", fieldId);

  const divRow = document.createElement("div");
  divRow.setAttribute("class", "row");
  divListSwapWrapper.appendChild(divRow);

  const divSwapList = document.createElement("div");
  divSwapList.setAttribute("id", "swaplist");
  divRow.appendChild(divSwapList);

  const divSwapListSource = document.createElement("div");
  divSwapListSource.setAttribute("id", "swaplist-source");
  divSwapList.appendChild(divSwapListSource);

  const divSwapListControl = document.createElement("div");
  divSwapListControl.setAttribute("class", "source_control");
  divSwapList.appendChild(divSwapListControl);

  const divUp = document.createElement("div");
  divUp.setAttribute("class", "up");
  divUp.setAttribute("style", "margin-top:3px;");
  divSwapListControl.appendChild(divUp);

  const buttonUp = document.createElement("button");
  buttonUp.setAttribute("class", "up-button");
  divUp.appendChild(buttonUp);

  const imgUp = document.createElement("img");
  imgUp.setAttribute("src", "../../assets/images/flecha-arriba.png");
  imgUp.setAttribute("style", "width:18px;");
  buttonUp.appendChild(imgUp);

  const divAdd = document.createElement("div");
  divAdd.setAttribute("class", "add");
  divAdd.setAttribute("style", "margin-top:3px;");
  divSwapListControl.appendChild(divAdd);

  const buttonAdd = document.createElement("button");
  buttonAdd.setAttribute("class", "right-button");
  divAdd.appendChild(buttonAdd);

  const imgAdd = document.createElement("img");
  imgAdd.setAttribute("src", "../../assets/images/flecha-derecha.png");
  imgAdd.setAttribute("style", "width:18px;");
  buttonAdd.appendChild(imgAdd);

  const divRemove = document.createElement("div");
  divRemove.setAttribute("class", "remove");
  divRemove.setAttribute("style", "margin-top:3px;");
  divSwapListControl.appendChild(divRemove);

  const buttonRemove = document.createElement("button");
  buttonRemove.setAttribute("class", "left-button");
  divRemove.appendChild(buttonRemove);

  const imgRemove = document.createElement("img");
  imgRemove.setAttribute("src", "../../assets/images/flecha-izquierda.png");
  imgRemove.setAttribute("style", "width:18px;");
  buttonRemove.appendChild(imgRemove);

  const divDown = document.createElement("div");
  divDown.setAttribute("class", "down");
  divDown.setAttribute("style", "margin-top:3px;");
  divSwapListControl.appendChild(divDown);

  const buttonDown = document.createElement("button");
  buttonDown.setAttribute("class", "down-button");
  divDown.appendChild(buttonDown);

  const imgDown = document.createElement("img");
  imgDown.setAttribute("src", "../../assets/images/flecha-abajo.png");
  imgDown.setAttribute("style", "width:18px;");
  buttonDown.appendChild(imgDown);

  const divSwapListDestination = document.createElement("div");
  divSwapListDestination.setAttribute("id", "swaplist-destination");
  divSwapList.appendChild(divSwapListDestination);

  const sourceTitle = document.createElement("p");
  sourceTitle.setAttribute("class", "title");
  sourceTitle.innerHTML = fieldTitleSource;
  divSwapListSource.appendChild(sourceTitle);

  const destinationTitle = document.createElement("p");
  destinationTitle.setAttribute("class", "title");
  destinationTitle.innerHTML = fieldTitleDestination;
  divSwapListDestination.appendChild(destinationTitle);

  const listSource = document.createElement("ul");
  listSource.setAttribute("class", "column source");
  listSource.setAttribute("id", idSource);
  divSwapListSource.appendChild(listSource);

  const listDestination = document.createElement("ul");
  listDestination.setAttribute("class", "column destination");
  listDestination.setAttribute("id", idDestination);
  divSwapListDestination.appendChild(listDestination);

  this.append(divListSwapWrapper);

  var sourceList = [
    { id: "1", value: "option_1_1", label: "Valor 1" },
    { id: "2", value: "option_1_2", label: "Valor 2" },
    { id: "3", value: "option_1_3", label: "Valor 3" },
    { id: "4", value: "option_1_4", label: "Valor 4" },
    { id: "5", value: "option_1_5", label: "Valor 5" }
  ];

  var destinationList = [
    { id: "6", value: "option_1_6", label: "Valor 6" },
    { id: "7", value: "option_1_7", label: "Valor 7" },
    { id: "8", value: "option_1_8", label: "Valor 8" }
  ];

  fillSwapList(idSource, sourceList);
  fillSwapList(idDestination, destinationList);

  $("ul.column").on("click", "li", function() {
    if (!$(this).hasClass("selected")) {
      console.log("selected");
      clearList();
      $(this).addClass("selected");
    }
  });

  const clearList = function() {
    $("ul.column li").removeClass("selected");
  };

  $(".up").click(function() {
    var currents = $(".portlet.selected");
    currents.prev().before(currents);
  });

  $(".down").click(function() {
    var currents = $(".portlet.selected");
    currents.next().after(currents);
  });

  $(".add").click(function() {
    var currents = $(".portlet.selected");
    $(".column.destination").append(currents);
    clearList();
  });

  $(".remove").click(function() {
    var currents = $(".portlet.selected");
    $(".column.source").append(currents);
    clearList();
  });

  $(".column").sortable({
    connectWith: ".column",
    handle: ".portlet-content",
    cancel: ".portlet-toggle",
    placeholder: "portlet-placeholder ui-corner-all"
  });

  $(".portlet")
    .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
    .find(".portlet-content")
    .addClass("ui-corner-all");
};

var fillSwapList = function(list_id, params) {
  var list = $("#" + list_id);

  for (var i = 0; i < params.length; i++) {
    var data = params[i];
    list.append(
      "<li class='portlet' value=" +
        data.value +
        "><div class='portlet-content'>" +
        data.label +
        "</div></li>"
    );
  }
};

$.fn.fieldInputPlusMinus = function() {
  const fieldId = this.attr("id");
  const fieldMaxsize = this.data("componentMaxsize");
  const fieldNodes = this.data("componentNodes");
  const fieldDisabled = this.data("componentDisabled");
  const fieldWidth =
    "width: " +
    (this.data("componentSize") ? this.data("componentSize") : "8em") +
    ";";
  const fieldClass =
    "is_" +
    (this.data("componentOrientation")
      ? this.data("componentOrientation")
      : "vertical");
  const spanRequiredClass =
    "pr-3 " + (this.data("componentRequired") == true ? "required" : "");

  this.attr("id", "field_" + fieldId);
  this.attr("class", "field " + fieldClass);

  const tooltip = this.data("componentTooltip")
    ? this.data("componentTooltip")
    : "";

  const divLabel = document.createElement("div");
  divLabel.setAttribute("class", "field-label flex");

  const label = document.createElement("label");
  label.setAttribute("for", fieldId);
  label.innerHTML = this.data("componentLabel");
  divLabel.appendChild(label);
  this.append(divLabel);

  const spanRequired = document.createElement("span");
  spanRequired.setAttribute("class", spanRequiredClass);
  if (this.data("componentRequired") == true) {
    spanRequired.innerHTML = "*";
  }
  label.appendChild(spanRequired);

  const divControl = document.createElement("div");
  divControl.setAttribute("class", "field-control");

  const divPlusMinus = document.createElement("div");
  divPlusMinus.setAttribute("class", "field-plus-minus has-addons flex");
  if (tooltip) {
    divPlusMinus.setAttribute("custom-tooltip", tooltip);
  }
  divControl.appendChild(divPlusMinus);
  this.append(divControl);

  const input = document.createElement("input");
  input.setAttribute("id", fieldId);
  input.setAttribute("class", "input");
  input.setAttribute("type", "text");
  input.setAttribute("style", fieldWidth);
  input.setAttribute("required", spanRequiredClass);
  input.setAttribute("data-parsley-trigger", "keyup");
  input.setAttribute("data-parsley-maxlength", "32");
  input.setAttribute(
    "data-parsley-maxlength-message",
    "Solo puede ingresar 32 caracteres."
  );
  input.setAttribute("data-parsley-validation-threshold", "10");
  input.setAttribute(
    "data-parsley-errors-container",
    "#field_error_block_" + fieldId
  );
  input.disabled = fieldDisabled;
  divPlusMinus.appendChild(input);

  const inputHidden = document.createElement("input");
  inputHidden.setAttribute("id", fieldId + "_hidden");
  inputHidden.setAttribute("type", "hidden");
  divPlusMinus.appendChild(inputHidden);

  const plusBtn = document.createElement("button");
  plusBtn.setAttribute("id", "btn_plus_" + fieldId);
  plusBtn.setAttribute("type", "button");
  plusBtn.setAttribute("class", "button-noborder");
  divPlusMinus.appendChild(plusBtn);

  const plusImg = document.createElement("img");
  plusImg.setAttribute("class", "plus-icon");
  plusImg.setAttribute("src", "../../assets/images/plus-icon.png");
  plusBtn.appendChild(plusImg);

  const minusBtn = document.createElement("button");
  minusBtn.setAttribute("id", "btn_minus_" + fieldId);
  minusBtn.setAttribute("type", "button");
  minusBtn.setAttribute("class", "button-noborder");
  divPlusMinus.appendChild(minusBtn);

  const minusImg = document.createElement("img");
  minusImg.setAttribute("class", "plus-icon");
  minusImg.setAttribute("src", "../../assets/images/minus-icon.png");
  minusBtn.appendChild(minusImg);

  const spanError = document.createElement("span");
  spanError.setAttribute("class", "field-error flex");
  divControl.appendChild(spanError);

  const divErrorTip = document.createElement("div");
  divErrorTip.setAttribute("class", "error-tip");
  spanError.appendChild(divErrorTip);

  const divErrorMsg = document.createElement("div");
  divErrorMsg.setAttribute("id", "field_error_block_" + fieldId);
  divErrorMsg.setAttribute("class", "error-msg");
  spanError.appendChild(divErrorMsg);

  const ulTagList = document.createElement("ul");
  ulTagList.setAttribute("id", "tag_list_" + fieldId);
  ulTagList.setAttribute("class", "tag-list");
  ulTagList.setAttribute("style", fieldWidth);
  divControl.appendChild(ulTagList);

  fieldPlusMinus(fieldId, { maxsize: fieldMaxsize, nodes: fieldNodes });
};

$.fn.fieldSelectPlusMinus = function() {
  const fieldId = this.attr("id");
  const fieldMaxsize = this.data("componentMaxsize");
  const fieldItems = this.data("componentItems");
  const fieldNodes = this.data("componentNodes");
  const fieldDisabled = this.data("componentDisabled");

  const fieldWidth =
    "width: " +
    (this.data("componentSize") ? this.data("componentSize") : "8em") +
    ";";
  const fieldClass =
    "is_" +
    (this.data("componentOrientation")
      ? this.data("componentOrientation")
      : "vertical");
  const spanRequiredClass =
    "pr-3 " + (this.data("componentRequired") == true ? "required" : "");
  const tooltip = this.data("componentTooltip")
    ? this.data("componentTooltip")
    : "";
  this.attr("id", "field_" + fieldId);
  this.attr("class", "field " + fieldClass);

  const divLabel = document.createElement("div");
  divLabel.setAttribute("class", "field-label flex");

  const label = document.createElement("label");
  label.setAttribute("for", fieldId);
  label.innerHTML = this.data("componentLabel");
  divLabel.appendChild(label);
  this.append(divLabel);

  const spanRequired = document.createElement("span");
  spanRequired.setAttribute("class", spanRequiredClass);
  if (this.data("componentRequired") == true) {
    spanRequired.innerHTML = "*";
  }
  label.appendChild(spanRequired);

  const divControl = document.createElement("div");
  divControl.setAttribute("class", "field-control");

  const divPlusMinus = document.createElement("div");
  divPlusMinus.setAttribute("class", "field-plus-minus has-addons flex");
  divControl.appendChild(divPlusMinus);
  if (tooltip) {
    divPlusMinus.setAttribute("custom-tooltip", tooltip);
  }
  this.append(divControl);

  const select = document.createElement("select");
  select.setAttribute("id", fieldId);
  select.setAttribute("class", "select2");
  select.setAttribute("type", "text");
  select.setAttribute("style", fieldWidth);
  select.setAttribute("required", spanRequiredClass);
  select.setAttribute("data-parsley-trigger", "keyup");
  select.setAttribute("data-parsley-maxlength", "32");
  select.setAttribute(
    "data-parsley-maxlength-message",
    "Solo puede ingresar 32 caracteres."
  );
  select.setAttribute("data-parsley-validation-threshold", "10");
  select.setAttribute(
    "data-parsley-errors-container",
    "#field_error_block_" + fieldId
  );

  let group = [{ key: "", value: "" }];
  this.children().each(function() {
    let id = $("#" + this.getAttribute("id")).attr("id");
    if (id) {
      group.push({ key: id, value: this.innerText });
      document.getElementById("field_" + fieldId).removeChild(this);
    }
  });

  var people = Object.keys(group);

  people.forEach(function(person) {
    const option = document.createElement("option");
    option.value = group[person]["key"];
    option.text = group[person]["value"];
    select.appendChild(option);
  });

  select.disabled = fieldDisabled;
  divPlusMinus.appendChild(select);

  const inputHidden = document.createElement("input");
  inputHidden.setAttribute("id", fieldId + "_hidden");
  inputHidden.setAttribute("type", "hidden");
  divPlusMinus.appendChild(inputHidden);

  const plusBtn = document.createElement("button");
  plusBtn.setAttribute("id", "btn_plus_" + fieldId);
  plusBtn.setAttribute("type", "button");
  plusBtn.setAttribute("class", "button-noborder");
  divPlusMinus.appendChild(plusBtn);

  const plusImg = document.createElement("img");
  plusImg.setAttribute("class", "plus-icon");
  plusImg.setAttribute("src", "../../assets/images/plus-icon.png");
  plusBtn.appendChild(plusImg);

  const minusBtn = document.createElement("button");
  minusBtn.setAttribute("id", "btn_minus_" + fieldId);
  minusBtn.setAttribute("type", "button");
  minusBtn.setAttribute("class", "button-noborder");
  divPlusMinus.appendChild(minusBtn);

  const minusImg = document.createElement("img");
  minusImg.setAttribute("class", "plus-icon");
  minusImg.setAttribute("src", "../../assets/images/minus-icon.png");
  minusBtn.appendChild(minusImg);

  const spanError = document.createElement("span");
  spanError.setAttribute("class", "field-error flex");
  divControl.appendChild(spanError);

  const divErrorTip = document.createElement("div");
  divErrorTip.setAttribute("class", "error-tip");
  spanError.appendChild(divErrorTip);

  const divErrorMsg = document.createElement("div");
  divErrorMsg.setAttribute("id", "field_error_block_" + fieldId);
  divErrorMsg.setAttribute("class", "error-msg");
  spanError.appendChild(divErrorMsg);

  const ulTagList = document.createElement("ul");
  ulTagList.setAttribute("id", "tag_list_" + fieldId);
  ulTagList.setAttribute("class", "tag-list");
  ulTagList.setAttribute("style", fieldWidth);
  divControl.appendChild(ulTagList);

  fieldSelectPlusMinus(fieldId, { maxsize: fieldMaxsize, nodes: fieldNodes });
};

$.fn.fieldSelectPlusMinusAutocomplete = function() {
  let fieldId = this.attr("id");
  let fieldMaxsize = this.data("componentMaxsize");
  let fieldItems = this.data("componentItems");
  let fieldNodes = this.data("componentNodes");
  let fieldDisabled = this.data("componentDisabled");

  const fieldWidth =
    "width: " +
    (this.data("componentSize") ? this.data("componentSize") : "8em") +
    ";";
  const fieldClass =
    "is_" +
    (this.data("componentOrientation")
      ? this.data("componentOrientation")
      : "vertical");
  const spanRequiredClass =
    "pr-3 " + (this.data("componentRequired") == true ? "required" : "");
  const tooltip = this.data("componentTooltip")
    ? this.data("componentTooltip")
    : "";

  this.attr("id", "field_" + fieldId);
  this.attr("class", "field " + fieldClass);

  const divLabel = document.createElement("div");
  divLabel.setAttribute("class", "field-label flex");

  const label = document.createElement("label");
  label.setAttribute("for", fieldId);
  label.innerHTML = this.data("componentLabel");
  divLabel.appendChild(label);
  this.append(divLabel);

  const spanRequired = document.createElement("span");
  spanRequired.setAttribute("class", spanRequiredClass);
  if (this.data("componentRequired") == true) {
    spanRequired.innerHTML = "*";
  }
  label.appendChild(spanRequired);

  const divControl = document.createElement("div");
  divControl.setAttribute("class", "field-control");

  const divPlusMinus = document.createElement("div");
  divPlusMinus.setAttribute("class", "field-plus-minus has-addons flex");
  if (tooltip) {
    divPlusMinus.setAttribute("custom-tooltip", tooltip);
  }
  divControl.appendChild(divPlusMinus);

  this.append(divControl);

  const select = document.createElement("select");
  select.setAttribute("id", fieldId);
  select.setAttribute("class", "select2");
  select.setAttribute("type", "text");
  select.setAttribute("style", fieldWidth);
  select.setAttribute("required", spanRequiredClass);
  select.setAttribute("data-parsley-trigger", "keyup");
  select.setAttribute("data-parsley-maxlength", "32");
  select.setAttribute(
    "data-parsley-maxlength-message",
    "Solo puede ingresar 32 caracteres."
  );
  select.setAttribute("data-parsley-validation-threshold", "10");
  select.setAttribute(
    "data-parsley-errors-container",
    "#field_error_block_" + fieldId
  );

  var group = [
    { key: "", value: "" },
    { key: "CONTRATO01", value: "Contrato 01" },
    { key: "CONTRATO02", value: "Contrato 02" },
    { key: "CONTRATO03", value: "Contrato 03" },
    { key: "CONTRATO04", value: "Contrato 04" },
    { key: "CONTRATO05", value: "Contrato 05" },
    { key: "CONTRATO06", value: "Contrato 06" },
    { key: "CONTRATO07", value: "Contrato 07" },
    { key: "CONTRATO08", value: "Contrato 08" },
    { key: "CONTRATO09", value: "Contrato 09" }
  ];

  var people = Object.keys(group);

  people.forEach(function(person) {
    const option = document.createElement("option");
    option.value = group[person]["key"];
    option.text = group[person]["value"];
    select.appendChild(option);
  });

  select.disabled = fieldDisabled;
  divPlusMinus.appendChild(select);

  const inputHidden = document.createElement("input");
  inputHidden.setAttribute("id", fieldId + "_hidden");
  inputHidden.setAttribute("type", "hidden");
  divPlusMinus.appendChild(inputHidden);

  const plusBtn = document.createElement("button");
  plusBtn.setAttribute("id", "btn_plus_" + fieldId);
  plusBtn.setAttribute("type", "button");
  plusBtn.setAttribute("class", "button-noborder");
  divPlusMinus.appendChild(plusBtn);

  const plusImg = document.createElement("img");
  plusImg.setAttribute("class", "plus-icon");
  plusImg.setAttribute("src", "../../assets/images/plus-icon.png");
  plusBtn.appendChild(plusImg);

  const minusBtn = document.createElement("button");
  minusBtn.setAttribute("id", "btn_minus_" + fieldId);
  minusBtn.setAttribute("type", "button");
  minusBtn.setAttribute("class", "button-noborder");
  divPlusMinus.appendChild(minusBtn);

  const minusImg = document.createElement("img");
  minusImg.setAttribute("class", "plus-icon");
  minusImg.setAttribute("src", "../../assets/images/minus-icon.png");
  minusBtn.appendChild(minusImg);

  const spanError = document.createElement("span");
  spanError.setAttribute("class", "field-error flex");
  divControl.appendChild(spanError);

  const divErrorTip = document.createElement("div");
  divErrorTip.setAttribute("class", "error-tip");
  spanError.appendChild(divErrorTip);

  const divErrorMsg = document.createElement("div");
  divErrorMsg.setAttribute("id", "field_error_block_" + fieldId);
  divErrorMsg.setAttribute("class", "error-msg");
  spanError.appendChild(divErrorMsg);

  const ulTagList = document.createElement("ul");
  ulTagList.setAttribute("id", "tag_list_" + fieldId);
  ulTagList.setAttribute("class", "tag-list");
  ulTagList.setAttribute("style", fieldWidth);
  divControl.appendChild(ulTagList);

  fieldSelectPlusAutocomplete(fieldId, {
    maxsize: fieldMaxsize,
    nodes: fieldNodes
  });
};

$.fn.button = function() {
  const imagenames = [
    ["button-accept", "btn-aceptar.png", "reset"],
    ["button-search", "btn-consultar_32x32.png", "submit"],
    ["button-save", "btn-enviar.png", ""],
    ["button-send", "btn-enviar.png", ""],
    ["button-add", "btn-agregar.png", ""],
    ["button-cancel", "btn-cancelar.png", "reset"],
    ["button-clean", "btn-limpiar_32x32.png", "reset"],
    ["button-delete", "btn-borrar.png", "submit"],
    ["button-filter-clean", "btn-filter-clean.png", "reset"],
    ["button-filter", "btn-filter.png", "submit"],
    ["button-pdf", "btn-pdf_32x32.png", ""],
    ["button-reset", "btn-reiniciar.png", "submit"],
    ["button-validate", "btn-validar.png", ""],
    ["button-xls", "btn-xls_32x32.png", ""]
  ];

  var imgname = "";
  var type = "";

  for (i = 0; i < imagenames.length; i++)
    if (imagenames[i][0] === this.data("componentType")) {
      imgname = imagenames[i][1];
      type = imagenames[i][2];
      break;
    }

  if (imgname !== "") {
    const label = this.data("componentLabel")
      ? this.data("componentLabel")
      : "";
    const tooltip = this.data("componentTooltip")
      ? this.data("componentTooltip")
      : "";

    var btnclass = "button big-button";
    if (this.data("componentSize") === "medium")
      btnclass = "button medium-button flex items-center";
    if (this.data("componentSize") === "small")
      btnclass = "button small-button";

    const button = document.createElement("button");
    button.setAttribute(
      "id",
      this.data("componentType") + "_" + this.attr("id")
    );

    button.setAttribute("class", btnclass);

    if (type !== "" && btnclass === "button big-button")
      button.setAttribute("type", type);

    if (this.data("componentDisabled") === true)
      button.setAttribute("disabled", "disabled");

    if (tooltip !== "") button.setAttribute("custom-tooltip", tooltip);

    const img = document.createElement("img");
    img.setAttribute("src", "../../assets/images/" + imgname);
    button.appendChild(img);

    if (this.data("componentSize") !== "small") {
      const span = document.createElement("span");
      span.innerHTML = label;
      button.appendChild(span);
    }

    this.append(button);
    $("#" + this.data("componentType") + "_" + this.attr("id")).unwrap();
  }
};

$.fn.grid = function() {
  if (this.data("componentType") === "grid") {
    const divgrid = document.createElement("div");
    const table = document.createElement("table");
    table.setAttribute("id", "table_" + this.attr("id"));
    const tr = document.createElement("tr");
    table.appendChild(tr);
    const td = document.createElement("td");
    tr.appendChild(td);
    const pager = document.createElement("div");
    pager.setAttribute("id", "pager_" + this.attr("id"));
    divgrid.appendChild(table);
    divgrid.appendChild(pager);
    this.append(divgrid);
  }
};

$.fn.gridrecordscount = function() {
  if (this.data("componentType") === "grid-records-count") {
    const divgrid = document.createElement("div");
    divgrid.setAttribute("class", "ui-jqgrid-count-rec");
    const span = document.createElement("span");
    span.innerHTML = this.data("componentLabel")
      ? this.data("componentLabel")
      : "Total registros:";
    const spancount = document.createElement("span");
    spancount.setAttribute("id", "count_" + this.attr("id"));
    span.appendChild(spancount);
    divgrid.appendChild(span);
    this.append(divgrid);
  }
};

$.fn.fieldInput = function() {
  // this.filter("[data-component-type='text']").each(function() {
  const c = $(this);
  const fieldId = c.attr("id");
  // console.log("Id", fieldId);
  const fieldLabel = c.data("componentLabel") ? c.data("componentLabel") : "";
  let fieldType = "";
  if (c.data("componentInputType") === "integer") {
    fieldType = "integer";
  } else if (c.data("componentInputType") === "number") {
    fieldType = "number";
  } else if (c.data("componentInputType") === "currency") {
    fieldType = "currency";
  } else {
    fieldType = "alphanum";
  }
  const fieldMaxLength = c.data("componentMaxLength")
    ? c.data("componentMaxLength")
    : "32";
  const fieldWidth =
    "width: " +
    (c.data("componentSize") ? c.data("componentSize") : "8em") +
    ";";
  let fieldClass =
    "is_" +
    (c.data("componentOrientation")
      ? c.data("componentOrientation")
      : "vertical");
  const spanRequiredClass =
    "pr-3 " + (c.data("componentRequired") == true ? "required" : "");

  c.attr("id", "field_" + fieldId);
  if (fieldClass === "is_horizontal") {
    fieldClass += " items-center";
  }
  c.attr("class", "field " + fieldClass);

  const divLabel = document.createElement("div");
  divLabel.setAttribute("class", "field-label flex");

  const label = document.createElement("label");
  label.setAttribute("for", fieldId);
  label.innerHTML = fieldLabel;
  divLabel.appendChild(label);
  c.append(divLabel);

  const spanRequired = document.createElement("span");
  spanRequired.setAttribute("class", spanRequiredClass);
  if (c.data("componentRequired") == true) {
    spanRequired.innerHTML = "*";
  }
  label.appendChild(spanRequired);

  const divControl = document.createElement("div");
  divControl.setAttribute("class", "field-control");
  if (c.data("componentTooltip")) {
    divControl.setAttribute("custom-tooltip", c.data("componentTooltip"));
  }

  // const divFieldInput = document.createElement("div");
  // divFieldInput.setAttribute("class", "field-input has-addons flex");
  // divControl.appendChild(divFieldInput);

  const input = document.createElement("input");
  input.setAttribute("id", fieldId);
  input.setAttribute("class", "input " + fieldType);
  input.setAttribute("type", "text");
  input.setAttribute("style", fieldWidth);
  input.setAttribute("data-parsley-trigger", "keyup");
  input.setAttribute("data-parsley-maxlength", fieldMaxLength);
  input.setAttribute(
    "data-parsley-maxlength-message",
    "Solo puede ingresar " + fieldMaxLength + " caracteres."
  );
  input.setAttribute("data-parsley-validation-threshold", "10");
  input.setAttribute(
    "data-parsley-errors-container",
    "field_error_block_" + fieldId
  );

  if (c.data("componentDisabled") === true) {
    input.setAttribute("disabled", "disabled");
  }
  3;
  if (c.data("componentDefaultValue")) {
    input.value = c.data("componentDefaultValue");
  }

  if (fieldType === "currency") {
    const spanCurrency = document.createElement("span");
    spanCurrency.setAttribute("class", "currency-prefix");
    spanCurrency.innerText = "$";
    divControl.appendChild(spanCurrency);
  }
  divControl.appendChild(input);
  c.append(divControl);

  c.removeAttr("data-component-type");
  c.removeAttr("data-component-label");
  c.removeAttr("data-component-required");
  c.removeAttr("data-component-orientation");
  c.removeAttr("data-component-type-input");
  c.removeAttr("data-component-max-length");
  c.removeAttr("data-component-disabled");
  c.removeAttr("data-component-tooltip");
  c.removeAttr("data-component-default-value");
  c.removeAttr("data-component-input-type");
  // });
};

$.fn.tabgroup = function() {
  if (this.data("componentType") === "tab-group") {
    let id = this.attr("id");
    let divtabgroup = document.createElement("div");
    divtabgroup.setAttribute("class", "tab-group");
    divtabgroup.setAttribute("id", id + "_tabgroup");
    let items = $("#" + id).children("div");
    let ul = document.createElement("ul");

    this.children().each(function() {
      let id = $("#" + this.getAttribute("id")).attr("id");
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.setAttribute("href", "#" + id);
      if ($("#" + this.getAttribute("id")).attr("data-component-img")) {
        let containerimage = document.createElement("div");
        containerimage.setAttribute("class", "container-imgtxt");
        let image = document.createElement("img");
        image.setAttribute("class", "container-img_image");
        image.setAttribute(
          "src",
          "../../assets/images/" +
            $("#" + this.getAttribute("id")).attr("data-component-img")
        );
        image.setAttribute("align", "middle");
        let containertext = document.createElement("div");
        containertext.setAttribute("class", "container-img_text");
        containertext.innerHTML = $("#" + this.getAttribute("id")).attr(
          "data-component-label"
        );
        containerimage.appendChild(image);
        containerimage.appendChild(containertext);
        a.appendChild(containerimage);
      } else {
        let span = document.createElement("span");
        span.innerHTML = $("#" + this.getAttribute("id")).attr(
          "data-component-label"
        );
        a.appendChild(span);
      }
      li.appendChild(a);
      ul.appendChild(li);
    });

    divtabgroup.appendChild(ul);
    for (i = 0; i < items.length; i++) {
      divtabgroup.appendChild(items[i]);
    }

    this.append(divtabgroup);

    if (this.data("componentOrientation") === "horizontal") {
      $("#" + id + "_tabgroup")
        .tabs()
        .addClass("ui-tabs-vertical ui-helper-clearfix");
      $("#" + id + "_tabgroup > ul > li")
        .removeClass("ui-corner-top")
        .addClass("ui-corner-left");
    } else {
      $("#" + id + "_tabgroup").tabs();
    }
  }
};

$.fn.sidebarwrapper = function() {
  if (this.data("componentType") === "sidebar-wrapper") {
    var id = this.attr("id");

    $("[data-component-type=sidebar-wrapper]").attr("class", "sidebar-wrapper");
    $("[data-component-type=sidebar-wrapper]").removeAttr(
      "data-component-type"
    );
    let expanded = "";

    if ($("[data-component-type=sidebar]").data("componentExpanded") === false)
      expanded = " isClosed";

    $("[data-component-type=sidebar]").attr("class", "sidebar" + expanded);
    $("[data-component-type=sidebar]").removeAttr("data-component-type");
    $("[data-component-type=sidebar-content]").attr("class", "sidebar-content");
    $("[data-component-type=sidebar-content]").removeAttr(
      "data-component-type"
    );
    $("[data-component-type=sidebar-collapsible-button]").attr(
      "class",
      "sidebar-collapsible-button"
    );
    $("[data-component-type=sidebar-collapsible-button]").removeAttr(
      "data-component-type"
    );

    // $("#" + id + " *").removeAttr("data-component-type");
    $("#" + id).removeAttr("data-component-type");
  }

  $(".sidebar-collapsible-button").on("click", function() {
    $("#" + id + " .sidebar").toggleClass("isClosed");
  });

  var expandSideBar = $(".sidebar").attr("expand") == "true";
  if (expandSideBar) {
    $(".sidebar_content")
      .parent()
      .attr("style", "width: 250px !important;");
    $(".sidebar_content").addClass("is_open");
    $(".sidebar_button").addClass("is_open");
    $(".content").addClass("is_sidebar_open");
  }
};

$.fn.fieldDateRange = function() {
  console.log("Entra ----- > ");
  const fieldId = this.attr("id");
  console.log("ID :" + fieldId);
  const fieldBeginLabel = this.data("componentBeginLabel");
  const fieldEndLabel = this.data("componentEndLabel");
  const fieldClass = this.data("componentOrientation")
    ? this.data("componentOrientation")
    : "vertical";
  const fieldRequired =
    this.data("componentRequired") == true ? "required" : "";
  const tooltip = this.data("componentTooltip")
    ? this.data("componentTooltip")
    : "";
  const spanRequiredClass =
    "pr-3 " + (this.data("componentRequired") == true ? "required" : "");
  const fieldWidth =
    "width: " +
    (this.data("componentSize") ? this.data("componentSize") : "8em") +
    ";";

  this.attr("id", "field_" + fieldId);
  this.attr("class", "field " + fieldClass);

  const divControl = document.createElement("div");
  divControl.setAttribute("class", "field-control flex");
  if (tooltip) {
    divControl.setAttribute("custom-tooltip", tooltip);
  }
  this.append(divControl);

  // Begin
  const divBeginDate = document.createElement("div");
  divBeginDate.setAttribute("id", "field_" + fieldId + "_begin_date");

  const divLabelBeginDate = document.createElement("div");
  divLabelBeginDate.setAttribute("class", "field-label flex");
  divBeginDate.append(divLabelBeginDate);

  const labelBeginDate = document.createElement("label");
  labelBeginDate.setAttribute("for", fieldId + "_begin_date");
  labelBeginDate.innerHTML = fieldBeginLabel;

  const spanBeginDateRequired = document.createElement("span");
  spanBeginDateRequired.setAttribute("class", spanRequiredClass);
  if (this.data("componentRequired") == true) {
    spanBeginDateRequired.innerHTML = "*";
  }
  labelBeginDate.appendChild(spanBeginDateRequired);

  divLabelBeginDate.append(labelBeginDate);

  const divControlInput = document.createElement("div");
  divControlInput.setAttribute("class", "field-control flex");
  if (tooltip) {
    divControlInput.setAttribute("custom-tooltip", tooltip);
  }
  divBeginDate.append(divControlInput);

  const divControlFieldInput = document.createElement("div");
  divControlFieldInput.setAttribute("class", "field-input flex items-center");

  const inputBegin = document.createElement("input");
  inputBegin.setAttribute("class", "input datepicker_range");
  inputBegin.setAttribute("id", fieldId + "_begin_date");
  inputBegin.setAttribute("required", fieldRequired);
  inputBegin.setAttribute("style", fieldWidth);
  inputBegin.setAttribute("readonly", "readonly");
  inputBegin.setAttribute(
    "data-parsley-errors-container",
    "#field_error_block_" + fieldId + "_begin_date"
  );
  divControlFieldInput.append(inputBegin);

  const inputBeginImage = document.createElement("input");
  inputBeginImage.setAttribute("class", "pl-1");
  inputBeginImage.setAttribute("type", "image");
  inputBeginImage.setAttribute("id", "clear_" + fieldId + "_begin_date");
  inputBeginImage.setAttribute("src", "../../assets/images/meddelete.png");
  inputBeginImage.setAttribute("style", "width:15px;height:15px;");
  divControlFieldInput.append(inputBeginImage);

  const spanBegin = document.createElement("span");
  spanBegin.setAttribute("class", "field-error flex");

  const divSpanBeginError = document.createElement("div");
  divSpanBeginError.setAttribute("class", "error-tip");
  spanBegin.append(divSpanBeginError);

  const divSpanMsgBeginError = document.createElement("div");
  divSpanMsgBeginError.setAttribute("class", "error-msg");
  divSpanMsgBeginError.setAttribute(
    "id",
    "field_error_block_" + fieldId + "_begin_date"
  );
  spanBegin.append(divSpanMsgBeginError);
  divControlFieldInput.append(spanBegin);
  divControlInput.append(divControlFieldInput);

  this.append(divBeginDate);

  // End
  const divEndDate = document.createElement("div");
  divEndDate.setAttribute("id", "field_" + fieldId + "_end_date");

  const divLabelEndDate = document.createElement("div");
  divLabelEndDate.setAttribute("class", "field-label flex");
  divEndDate.append(divLabelEndDate);

  const labelEndDate = document.createElement("label");
  labelEndDate.setAttribute("for", fieldId + "_end_date");
  labelEndDate.innerHTML = fieldEndLabel;

  const spanEndDateRequired = document.createElement("span");
  spanEndDateRequired.setAttribute("class", spanRequiredClass);
  if (this.data("componentRequired") == true) {
    spanEndDateRequired.innerHTML = "*";
  }
  labelEndDate.appendChild(spanEndDateRequired);

  divLabelEndDate.append(labelEndDate);

  const divControlEndInput = document.createElement("div");
  divControlEndInput.setAttribute("class", "field-control flex");
  if (tooltip) {
    divControlEndInput.setAttribute("custom-tooltip", tooltip);
  }
  divEndDate.append(divControlEndInput);

  const divControlFieldEndInput = document.createElement("div");
  divControlFieldEndInput.setAttribute(
    "class",
    "field-input flex items-center"
  );

  const inputEnd = document.createElement("input");
  inputEnd.setAttribute("class", "input datepicker_range");
  inputEnd.setAttribute("id", fieldId + "_end_date");
  inputEnd.setAttribute("required", fieldRequired);
  inputEnd.setAttribute("style", fieldWidth);
  inputEnd.setAttribute("readonly", "readonly");
  inputEnd.setAttribute(
    "data-parsley-errors-container",
    "#field_error_block_" + fieldId + "_end_date"
  );
  divControlFieldEndInput.append(inputEnd);

  const inputEndImage = document.createElement("input");
  inputEndImage.setAttribute("class", "pl-1");
  inputEndImage.setAttribute("type", "image");
  inputEndImage.setAttribute("id", "clear_" + fieldId + "_end_date");
  inputEndImage.setAttribute("src", "../../assets/images/meddelete.png");
  inputEndImage.setAttribute("style", "width:15px;height:15px;");
  divControlFieldEndInput.append(inputEndImage);

  const spanEnd = document.createElement("span");
  spanEnd.setAttribute("class", "field-error flex");

  const divSpanEndError = document.createElement("div");
  divSpanEndError.setAttribute("class", "error-tip");
  spanEnd.append(divSpanEndError);

  const divSpanMsgEndError = document.createElement("div");
  divSpanMsgEndError.setAttribute("class", "error-msg");
  divSpanMsgEndError.setAttribute(
    "id",
    "field_error_block_" + fieldId + "_end_date"
  );
  spanEnd.append(divSpanMsgEndError);
  divControlFieldEndInput.append(spanEnd);
  divControlEndInput.append(divControlFieldEndInput);

  this.append(divEndDate);
};

var fieldBeginDateRangeClear = function(id) {
  var _id = $("#" + id + "_begin_date");
  var $dates = $(_id).datepicker();
  $("#clear_" + id + "_begin_date").on("click", function() {
    $dates.datepicker("setDate", null);
  });
};

var fieldEndDateRangeClear = function(id) {
  var _id = $("#" + id + "_end_date");
  var $dates = $(_id).datepicker();
  $("#clear_" + id + "_end_date").on("click", function() {
    $dates.datepicker("setDate", null);
  });
};

// Dates
var validateDateRage = function(id) {
  $("#" + id + "_begin_date").datepicker(
    __assign(__assign({}, ui_datepicker_settings), {
      onClose: function(selectedDate, instance) {
        if (selectedDate != "") {
          $("#" + id + "_end_date").datepicker(
            "option",
            "minDate",
            selectedDate
          );
          var date = $.datepicker.parseDate(
            instance.settings.dateFormat,
            selectedDate,
            instance.settings
          );
          date.setMonth(date.getMonth() + 3);
          $("#" + id + "_end_date").datepicker(
            "option",
            "minDate",
            selectedDate
          );
          $("#" + id + "_end_date").datepicker("option", "maxDate", date);
        }
      }
    })
  );
  $("#" + id + "_end_date").datepicker(
    __assign(__assign({}, ui_datepicker_settings), {
      onClose: function(selectedDate) {
        $("#" + id + "_begin_date").datepicker(
          "option",
          "maxDate",
          selectedDate
        );
      }
    })
  );
};

var DATE_FORMAT = "dd-mm-yy";

$(".datepicker").mask("99-99-9999");

$(".datepicker")
  .datepicker(ui_datepicker_settings)
  .prop("readonly", false);

var ui_datepicker_settings = {
  showOn: "both",
  buttonImage: "../../assets/images/btn-calendario.png",
  buttonImageOnly: true,
  buttonText: "",
  dateFormat: DATE_FORMAT,
  changeMonth: true,
  changeYear: true,
  showButtonPanel: true,
  currentText: "Hoy",
  closeText: "Limpiar",
  onClose: function(dateText, inst) {
    if ($(window.event.srcElement).hasClass("ui-datepicker-close")) {
      document.getElementById(this.id).value = "";
    }
  }
};

//----------------------------------------- SECCION FECHAS -----------------------------------------
$.fn.fielDate = function() {
  const fieldId = this.attr("id");
  const fieldLabel = this.attr("data-component-label");
  const spanRequiredClass =
    "pr-3 " + (this.data("componentRequired") == true ? "required" : "");
  const fieldClassOrientation =
    "is_" +
    (this.data("componentOrientation")
      ? this.data("componentOrientation")
      : "vertical");
  const isWithBotonClear = this.data("componentClear") == true ? true : false;
  const toolTip = this.data("componentTooltip")
    ? this.data("componentTooltip")
    : "";
  const fieldSize = this.data("componentSize")
    ? this.data("componentSize")
    : "8em";

  this.attr("id", "field_" + fieldId);
  this.attr("class", "field " + fieldClassOrientation);
  const divLbl = document.createElement("div");
  divLbl.setAttribute("class", "field-label flex");
  const label = document.createElement("label");
  label.setAttribute("for", fieldId);
  var t = document.createTextNode(fieldLabel);
  label.appendChild(t);
  const spanRequired = document.createElement("span");
  spanRequired.setAttribute("class", spanRequiredClass);
  if (this.data("componentRequired") == true) {
    spanRequired.innerHTML = "*";
  }
  label.appendChild(spanRequired);
  divLbl.appendChild(label);
  this.append(divLbl);
  const divDateTT = document.createElement("div");
  divDateTT.setAttribute("class", "field-control");
  divDateTT.setAttribute("custom-tooltip", toolTip);

  const divDate = document.createElement("div");
  divDate.setAttribute("class", "field-input flex items-center");
  const inpt = document.createElement("input");
  //inpt.setAttribute("class", "input datepicker hasDatepicker");
  inpt.setAttribute("class", "input datepicker");
  inpt.setAttribute("id", "inpt-" + fieldId);
  if (this.data("componentRequired") == true) {
    inpt.setAttribute("required", "required");
  }
  inpt.setAttribute("style", "width: " + fieldSize + ";");
  inpt.setAttribute(
    "data-parsley-errors-container",
    "#field_error_block_" + fieldId
  );
  inpt.setAttribute("maxlength", "10");
  if (this.data("componentDisabled") === true) {
    inpt.setAttribute("disabled", "disabled");
  }

  divDate.appendChild(inpt);
  /*

        const image = document.createElement("img");
        image.setAttribute("class", "ui-datepicker-trigger");
        image.setAttribute("src", "./images/btn-calendario.svg");
        image.setAttribute("alt", "");
        image.setAttribute("title", "");
        divDate.appendChild(image);//divDate.append(image);
        */
  if (isWithBotonClear) {
    const inpt2 = document.createElement("input");
    inpt2.setAttribute("class", "pl-1");
    inpt2.setAttribute("type", "image");
    inpt2.setAttribute("id", "clear_" + fieldId);
    inpt2.setAttribute("src", "../../assets/images/meddelete.png");
    inpt2.setAttribute("style", "width:15px;height:15px;");
    //inpt2.setAttribute("value", " ");

    divDate.appendChild(inpt2);
  }
  const span = document.createElement("span");
  span.setAttribute("class", "field-error flex");
  const divErrorTip = document.createElement("div");
  divErrorTip.setAttribute("class", "error-tip");
  span.appendChild(divErrorTip);
  const divErrorMsg = document.createElement("div");
  divErrorMsg.setAttribute("class", "error-msg");
  divErrorMsg.setAttribute("id", "field_error_block_" + fieldId);
  span.appendChild(divErrorMsg);
  divDate.appendChild(span);
  divDateTT.appendChild(divDate);

  this.append(divDateTT);
  this.removeAttr("data-component-type");
  this.removeAttr("data-component-label");
  this.removeAttr("data-component-required");
  this.removeAttr("data-component-orientation");
  this.removeAttr("data-component-clear");
  this.removeAttr("data-component-tooltip");
  this.removeAttr("data-component-size");
  //-----------------------------------------------------------------------------
  fieldDateClear(fieldId);

  $(".datepicker").mask("99-99-9999");

  $(function() {
    $("#inpt-" + fieldId).datepicker({
      showOn: "button",
      buttonImage: "../../assets/images/btn-calendario.svg",
      buttonImageOnly: true,
      buttonText: "Select date"
    });
  });
  //-----------------------------------------------------------------------------
  $(".datepicker").focusout(function() {
    let date = $(this)
      .val()
      .toString();
    if (date != "") {
      verifyDate(date, $(this));
    }
  });

  const verifyDate = function(data, obj) {
    let array = [];
    array = data.split("-");
    let day = parseInt(array[0]);
    let month = parseInt(array[1]);
    let year = parseInt(array[2]);

    let nMonth = 0;
    let nDay = 0;
    let nYear = 0;

    nDay = verifyDay(day, month, year);
    nMonth = verifyMonth(day, month, year);
    nYear = verifyYear(day, month, year);

    $(obj).val("" + pad(nDay, 2, "") + "-" + pad(nMonth, 2, "") + "-" + nYear);
  };

  $(".datepicker").on("keydown", function(e) {
    let date = $(this)
      .val()
      .toString();

    if (e.which == 13) {
      e.preventDefault();
      if (date != "") {
        verifyDate(date, $(this));
      }
    }
  });
  //========================================================================================================
  var DATE_FORMAT = "dd-mm-yy";
  var DATE_FORMAT_MONTH_YEAR = "MM yy";
  var ui_datepicker_settings = {
    showOn: "both",
    buttonImage: "../../assets/images/btn-calendario.png",
    buttonImageOnly: true,
    buttonText: "",
    dateFormat: DATE_FORMAT,
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    currentText: "Hoy",
    closeText: "Limpiar",
    onClose: function(dateText, inst) {
      if ($(window.event.srcElement).hasClass("ui-datepicker-close")) {
        document.getElementById(this.id).value = "";
      }
    }
  };

  $.datepicker.regional["es"] = {
    monthNames: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ],
    monthNamesShort: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic"
    ],
    dayNames: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado"
    ],
    dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    dayNamesMin: ["D", "L ", "M ", "M ", "J ", "V ", "S "]
  };

  $.datepicker.setDefaults($.datepicker.regional["es"]);
  var ui_datepicker_month_year_settings = {
    changeMonth: true,
    changeYear: true,
    showButtonPanel: false,
    dateFormat: DATE_FORMAT_MONTH_YEAR,
    onChangeMonthYear: function(year, month, inst) {
      $(this).datepicker(
        "setDate",
        new Date(inst.selectedYear, inst.selectedMonth, 1)
      );
    }
  };

  $(".monthpicker").datepicker(ui_datepicker_month_year_settings);

  // DatePicker
  $(".datepicker")
    .datepicker(ui_datepicker_settings)
    .prop("readonly", false);

  /*
  var fieldDateClear = function (id) {
    var btn_calendar_id = "#clear_" + id;
    var input_date_id = "#inpt-" + id;

    $(btn_calendar_id).on("click", function() {
        $(input_date_id).datepicker("setDate", null);
    });
  };*/
};

$.fn.fieldOptions = function() {
  const fieldId = this.attr("id");
  const fieldLabel = this.attr("data-component-label");
  const spanRequiredClass =
    "pr-5 " + (this.data("componentRequired") == true ? "required" : "");
  const fieldClassOrientation =
    "is_" +
    (this.data("componentOrientation")
      ? this.data("componentOrientation")
      : "vertical");
  const toolTip = this.data("componentTooltip")
    ? this.data("componentTooltip")
    : "";
  const childrenDIV = this.children("div");

  //Se indica id y orientacion del div principal
  this.attr("id", "field_" + fieldId);
  this.attr("class", "field " + fieldClassOrientation);
  //Se agrega div vacio
  const div1 = document.createElement("div");
  div1.setAttribute("class", "field-label flex");
  const label = document.createElement("label");
  label.setAttribute("class", "field-label");
  var t = document.createTextNode(fieldLabel);
  label.appendChild(t);
  div1.appendChild(label);
  const spanRequired = document.createElement("span");
  spanRequired.setAttribute("class", spanRequiredClass);
  if (this.data("componentRequired") == true) {
    spanRequired.innerHTML = "*";
  }
  div1.appendChild(spanRequired);

  const span = document.createElement("span");
  span.setAttribute("class", "pr-5");
  div1.appendChild(span);
  this.append(div1);

  //Se anexan las opciones del componente Options
  const divOpt = document.createElement("div");
  divOpt.setAttribute("class", "field-control");
  if (toolTip) {
    //divOpt.setAttribute("data-tooltip", toolTip);
    divOpt.setAttribute("custom-tooltip", toolTip);
  }

  for (var i = 0; i < childrenDIV.length; i++) {
    var divChild = childrenDIV[i];

    const labelOpt = document.createElement("label");
    labelOpt.setAttribute("class", "radio_button");
    var t = document.createTextNode(divChild.innerHTML);
    labelOpt.appendChild(t);
    const inptOpt = document.createElement("input");
    inptOpt.setAttribute("id", "radio_" + fieldId + "_" + i);
    inptOpt.setAttribute("type", "radio");
    inptOpt.setAttribute("name", fieldId);
    inptOpt.setAttribute("value", divChild.id);
    if (this.data("componentRequired") == true) {
      inptOpt.setAttribute("required", "required");
    }

    //if (divChild.attributes.checked && divChild.attributes.checked.value == "true") {
    if (
      divChild.getAttribute("data-component-checked") != null &&
      divChild.getAttribute("data-component-checked") == "true"
    ) {
      inptOpt.setAttribute("checked", "checked");
    }

    inptOpt.setAttribute("data-parsley-class-handler", "#field_" + fieldId);

    inptOpt.setAttribute(
      "data-parsley-errors-container",
      "#field_error_block_" + fieldId
    );

    inptOpt.setAttribute("data-parsley-multiple", fieldId);
    //inptOpt.setAttribute("data-parsley-id", "22");
    labelOpt.appendChild(inptOpt);
    const span = document.createElement("span");
    span.setAttribute("class", "checkmark");
    labelOpt.appendChild(span);

    divOpt.appendChild(labelOpt);

    //Se remueve el i-esimo div
    $("#" + divChild.id).remove();
  }

  //Se agrega div para errores
  const divError = document.createElement("div");
  divError.setAttribute("class", "field-error");
  const divFieldError = document.createElement("div");
  divFieldError.setAttribute("id", "field_error_block_" + fieldId);
  divError.appendChild(divFieldError);
  divOpt.appendChild(divError);
  this.append(divOpt);
  this.removeAttr("data-component-type");
  this.removeAttr("data-component-label");
  this.removeAttr("data-component-required");
  this.removeAttr("data-component-orientation");
};

$.fn.fieldCheckBox = function() {
  const fieldId = this.attr("id");
  const fieldLabel = this.data("componentLabel")
    ? this.data("componentLabel")
    : "";
  const spanRequiredClass =
    "pr-5 " + (this.data("componentRequired") == true ? "required" : "");
  const fieldClassOrientation =
    "is_" +
    (this.data("componentOrientation")
      ? this.data("componentOrientation")
      : "vertical");
  const toolTip = this.data("componentTooltip")
    ? this.data("componentTooltip")
    : "";
  const checkBoxOptionsDIV = this.children("div");

  //Se indica id y orientacion del div principal
  this.attr("id", "field_" + fieldId);
  this.attr("class", "field " + fieldClassOrientation);

  //Se genera componente para la leyenda del componente.
  const divLbl = document.createElement("div");
  divLbl.setAttribute("class", "field-label flex");
  const label = document.createElement("label");
  label.setAttribute("for", "chk_" + fieldId);
  var t = document.createTextNode(fieldLabel);
  label.appendChild(t);
  divLbl.appendChild(label);
  const spanRequired = document.createElement("span");
  spanRequired.setAttribute("class", spanRequiredClass);
  if (this.data("componentRequired") == true) {
    spanRequired.innerHTML = "*";
  }
  divLbl.appendChild(spanRequired);
  this.append(divLbl);

  const divTT = document.createElement("div");
  divTT.setAttribute("class", "field-control");
  if (toolTip) {
    //divTT.setAttribute("data-tooltip", toolTip);
    divTT.setAttribute("custom-tooltip", toolTip);
  }
  const divOptionsCheckBox = document.createElement("div");
  if (fieldClassOrientation == "is_horizontal") {
    divOptionsCheckBox.setAttribute("class", "flex");
  }
  for (var i = 0; i < checkBoxOptionsDIV.length; i++) {
    var checkOption = checkBoxOptionsDIV[i];

    const labelOpt = document.createElement("label");
    labelOpt.setAttribute("class", "checkbox_input pr-5");
    var t = document.createTextNode(checkOption.innerText);
    labelOpt.appendChild(t);
    const inptChckBox = document.createElement("input");
    inptChckBox.setAttribute("type", "checkbox");
    inptChckBox.setAttribute("name", "chk_" + fieldId);
    inptChckBox.setAttribute("id", "chk_" + fieldId + "_" + i);
    inptChckBox.setAttribute("value", checkOption.id);
    if (this.data("componentRequired") == true) {
      inptChckBox.setAttribute("required", "required");
    }
    inptChckBox.setAttribute("data-parsley-class-handler", "#field_" + fieldId);
    inptChckBox.setAttribute(
      "data-parsley-errors-container",
      "#field_error_block_" + fieldId
    );
    inptChckBox.setAttribute("data-parsley-multiple", "chk_" + fieldId);
    labelOpt.appendChild(inptChckBox);
    const spanColor = document.createElement("span");
    if (
      checkOption.attributes.color == null ||
      checkOption.attributes.color.value.length == 0
    ) {
      spanColor.setAttribute("class", "checkmark");
    } else {
      spanColor.setAttribute(
        "class",
        "checkmark with_color is_" + checkOption.attributes.color.value
      );
    }
    labelOpt.appendChild(spanColor);
    divOptionsCheckBox.appendChild(labelOpt);

    //Se remueve el i-esimo div
    $("#" + checkOption.id).remove();
  }
  divTT.appendChild(divOptionsCheckBox);

  const divError = document.createElement("div");
  divError.setAttribute("class", "field-error");
  const divErrorBlk = document.createElement("div");
  divErrorBlk.setAttribute("id", "field_error_block_" + fieldId);
  divError.appendChild(divErrorBlk);
  divTT.appendChild(divError);

  this.append(divTT);
  this.removeAttr("data-component-type");
  this.removeAttr("data-component-label");
  this.removeAttr("data-component-required");
  this.removeAttr("data-component-orientation");
};

// --------------------   FORM   --------------------
$.fn.form = function() {
  const formmethod = $(this).attr("method");
  const formparsley = $(this).attr("data-parsley-validate");
  const formenctype = $(this).attr("enctype");
  if (typeof formmethod === typeof undefined || formmethod === false) {
    this.attr("method", "POST");
  } else if (formmethod !== "POST") {
    this.attr("method", "POST");
  }

  if (typeof formparsley === typeof undefined) {
    this.attr("data-parsley-validate", "");
  }

  if (typeof formenctype === typeof undefined || formenctype === false) {
    this.attr("enctype", "multipart/form-data");
  } else if (formenctype !== "multipart/form-data") {
    this.attr("enctype", "multipart/form-data");
  }
};

// --------------------   ACCORDION   --------------------

$.fn.customaccordion = function() {
  if (this.data("componentType") === "accordion") {
    this.attr("class", "accordion");
    this.attr("data-component-type", null);
    this.children().each(function() {
      let item = $("#" + this.getAttribute("id"));
      let label = item.data("componentLabel")
        ? item.data("componentLabel")
        : "";
      $("<h3>" + label + "</h3>").insertBefore("#" + this.getAttribute("id"));
      $("#" + this.getAttribute("id")).attr("class", "accordion-content");
      item.attr("id", null);
      item.attr("data-component-type", null);
      item.attr("data-component-label", null);
    });

    var icons = { header: "plus-icon", activeHeader: "minus-icon" };
    var ui_accordion_settings = {
      collapsible: true,
      icons: icons,
      heightStyle: "content"
    };
    this.accordion(ui_accordion_settings);
  }
};

$.fn.fieldSplitter = function() {
  const fieldId = this.attr("id");
  const fieldClassOrientation = this.data("componentOrientation")
    ? this.data("componentOrientation")
    : "vertical";
  const splitterDIV = this.children("div");

  //Se indica id y orientacion del div principal
  this.attr("id", "splitter_container");
  this.attr("class", "div");
  const divSimple = document.createElement("div");

  divSimple.setAttribute(
    "class",
    "splitter splitter-" +
      fieldClassOrientation +
      " ui-widget ui-widget-content"
  );

  if (fieldClassOrientation == "vertical") {
    divSimple.setAttribute("id", "simple");
  } else {
    divSimple.setAttribute("id", fieldClassOrientation + "-splitter");
  }

  divSimple.setAttribute("data-splitter-initialized", true);
  divSimple.setAttribute("style", "position: relative;");
  const divPanel1 = document.createElement("div");
  divPanel1.setAttribute("class", "pane splitter-pane");
  if (fieldClassOrientation == "vertical") {
    divPanel1.setAttribute(
      "style",
      "position: absolute; z-index: 1; left: 0px; width: 856px; height: 400px;"
    );
  } else {
    divPanel1.setAttribute(
      "style",
      "position: relative; z-index: 1; top: 0px; height: 183px; width: 1439px; user-select: text;"
    );
  }

  const labelOpt1 = document.createElement("label");
  var t1 = document.createTextNode("Aquí va el contenido del panel 1");
  labelOpt1.appendChild(t1);
  divPanel1.appendChild(labelOpt1);
  divSimple.appendChild(divPanel1);
  /*
  const divSplitter = document.createElement("div");
  divSplitter.setAttribute("class", "splitter-bar splitter-bar-" + fieldClassOrientation + " ui-state-default  splitter-pane");
  divSplitter.setAttribute("unselectable", "on");
  divSplitter.setAttribute("style", "position: absolute; user-select: none; z-index: 100; cursor: col-resize; left: 856px; height: 400px;");

  const a = document.createElement("a");
  a.setAttribute("href", "javascript:void(0)");
  a.setAttribute("accesskey", "");
  a.setAttribute("tabindex", "0");
  divSplitter.appendChild(a);
  divSimple.appendChild(divSplitter);
  */

  const divPanel2 = document.createElement("div");
  divPanel2.setAttribute("class", "pane splitter-pane");
  if (fieldClassOrientation == "vertical") {
    divPanel2.setAttribute("id", "pane-right");
    divPanel2.setAttribute(
      "style",
      "position: absolute; z-index: 1; left: 868px; width: 631px; height: 400px;"
    );
  } else {
    divPanel2.setAttribute(
      "style",
      "position: relative; z-index: 1; top: 0px; width: 1439px; height: 207px; user-select: text;"
    );
  }
  const labelOpt2 = document.createElement("label");
  var t2 = document.createTextNode("Aquí va el contenido del panel 2");

  labelOpt2.appendChild(t2);
  divPanel2.appendChild(labelOpt2);
  divSimple.appendChild(divPanel2);
  this.append(divSimple);
  this.removeAttr("data-component-orientation");
  this.removeAttr("data-component-type");
  for (var i = 0; i < splitterDIV.length; i++) {
    var paneSplitter = splitterDIV[i];

    //Se remueve el i-esimo div
    $("#" + paneSplitter.id).remove();
    $("#" + paneSplitter.id).remove();
  }
  //=================================================================================
  //$(".splitter-bar-vertical").dblclick(function () {
  //console.log("===========================>>> Al menos ya escucha el evento dblclick...");
  //$(".splitter-vertical").splitter();
  //});

  $(".splitter-vertical").splitter();
  $(".splitter-horizontal").splitter({ type: "h" });

  /******
  var responsiveEffect = function(
    widthTable,
    numColumnsBase,
    selectedColumns,
    idTable,
    idSplitterContainer
  ) {
    var colModel = $("#" + idTable).jqGrid("getGridParam", "colModel");
    var numColumnas = selectedColumns.length + numColumnsBase;
    var gridWidth = $("#splitter-container")
      .parent()
      .width();
    if (gridWidth > widthTable) {
      gridWidth = widthTable;
    }
    widthColumns = gridWidth / numColumnas;
    $("#" + idTable).jqGrid("setGridWidth", gridWidth, true);
    for (var j = 0; j < colModel.length; j++) {
      $("#" + idTable).jqGrid("resizeColumn", colModel[j].name, 0);
      if (j < 2 || isSelectedColumnn(colModel[j].name, selectedColumns)) {
        $("#" + idTable).jqGrid("resizeColumn", colModel[j].name, widthColumns);
      }
    }
    $("#gbox_" + idTable).attr("style", "width: " + gridWidth + "px;");
    $("#gview_" + idTable).attr("style", "width: " + gridWidth + "px;");
    windowResize(widthTable, idTable, idSplitterContainer);
  };
  var windowResize = function (widthTable, idTable, idSplitterContainer) {
      $(window).on("resize", function () {
          var gridWidth = $("#" + idSplitterContainer).parent().width();
          if (gridWidth > widthTable) {
              gridWidth = widthTable;
          }
          $("#" + idTable).jqGrid("setGridWidth", gridWidth, true);
      });
  };
  */
};

// --------------------   SELECT   -------------------- //
$.fn.select = function() {
  if (this.data("componentType") === "select") {
    const id = this.attr("id");
    const label = this.data("componentLabel")
      ? this.data("componentLabel")
      : "";
    const orientation = this.data("componentOrientation")
      ? this.data("componentOrientation")
      : "vertical";
    const size = this.data("componentSize")
      ? this.data("componentSize")
      : "8em";
    const tooltip = this.data("componentTooltip")
      ? this.data("componentTooltip")
      : "";
    const placeholder = this.data("componentPlaceholder")
      ? this.data("componentPlaceholder")
      : "";
    const required = this.data("componentRequired") ? true : false;
    const disabled = this.data("componentDisabled")
      ? this.data("componentDisabled")
      : false;
    let value = "";
    this.each(function() {
      var attributes = this.attributes;
      var i = attributes.length;
      while (i--) {
        this.removeAttributeNode(attributes[i]);
      }
    });
    this.attr("class", "field is_" + orientation);
    this.attr("id", "field_" + id);

    const spanlabeltag = document.createElement("span");
    if (required) {
      spanlabeltag.setAttribute("class", "pr-3 required");
      spanlabeltag.innerText = "*";
    } else {
      spanlabeltag.setAttribute("class", "pr-3");
    }
    const labeltag = document.createElement("label");
    labeltag.setAttribute("for", id);
    labeltag.innerText = label;
    labeltag.appendChild(spanlabeltag);

    const labeldiv = document.createElement("div");
    labeldiv.setAttribute("class", "field-label flex");
    labeldiv.appendChild(labeltag);

    const selecttag = document.createElement("select");
    selecttag.setAttribute("class", "select2");
    selecttag.setAttribute("id", id);
    selecttag.setAttribute("name", id);
    selecttag.setAttribute("style", "width: " + size + ";");
    selecttag.setAttribute("data-parsley-trigger", "change");
    selecttag.setAttribute(
      "data-parsley-errors-container",
      "#field_error_block_" + id
    );
    if (required) {
      selecttag.setAttribute("required", "required");
    }

    const optiontag = document.createElement("option");
    selecttag.appendChild(optiontag);
    this.children().each(function() {
      let optiontag = document.createElement("option");
      optiontag.setAttribute("value", this.id);
      optiontag.innerText = this.innerText;
      if (
        this.getAttribute("data-component-selected") &&
        this.getAttribute("data-component-selected") === "true"
      ) {
        value = this.id;
      }
      selecttag.appendChild(optiontag);
    });
    this.empty();

    const diverror = document.createElement("div");
    diverror.setAttribute("class", "field-error");
    diverror.innerHTML = '<div id="field_error_block_' + id + '"></div>';

    const tooltipdiv = document.createElement("div");
    tooltipdiv.setAttribute("class", "field-control");
    if (tooltip) {
      tooltipdiv.setAttribute("custom-tooltip", tooltip);
    }

    tooltipdiv.appendChild(selecttag);
    tooltipdiv.appendChild(diverror);

    this.append(labeldiv);
    this.append(tooltipdiv);

    $("#" + id).select2({
      language: "es",
      placeholder: placeholder,
      minimumResultsForSearch: Infinity
    });
    if (disabled) {
      $("#" + id).prop("disabled", true);
    }
    if (value) {
      $("#" + id)
        .val(value)
        .trigger("change");
    }
  }
};

// FieldChart function
$.fn.fieldChart = function() {
  const id = this.attr("id");
  const typeChart = this.data("componentType");
  const titleChart = this.data("componentTitle");
  const labelChart = this.data("componentLabel");
  const formatChart = this.data("componentFormat");
  const formatPlotChart = this.data("componentPlotFormat");

  // Data of Pie Chart, prompt from service
  let promedios = [
    {
      horizonte: "A (Liquidez)",
      dataA: 4,
      dataB: 3.8
    },
    {
      horizonte: "B (Conservación)",
      dataA: 4,
      dataB: 0
    },
    {
      horizonte: "C (Equilibrio)",
      dataA: 4,
      dataB: 5.5
    },
    {
      horizonte: "D (Incremento)",
      dataA: 4,
      dataB: 7
    },
    {
      horizonte: "E (Maximización)",
      dataA: 4,
      dataB: 9
    },
    {
      horizonte: "",
      dataA: 4
    },
    {
      horizonte: ""
    }
  ];

  let charData = [];
  for (let i = 0; i < promedios.length; i++) {
    let data_1 = promedios[i];
    charData.push({ name: data_1.horizonte, y: data_1.dataB });
  }

  // Data of Horizontal Bar Chart, prompt from service
  let datos = [
    {
      mes: "Liquidez",
      data1: {
        x: "",
        y: 0
      },
      data2: {
        x: "Jane",
        y: 2
      },
      data3: {
        x: "Joe",
        y: 2
      },
      data4: {
        x: "",
        y: 0
      }
    }
  ];

  const sizeLeft1 = this.data("componentRoundedSizeLeftOne");
  const sizeRight1 = this.data("componentRoundedSizeRightOne");
  const sizeLeft2 = this.data("componentRoundedSizeLeftTwo");
  const sizeRight2 = this.data("componentRoundedSizeRightTwo");
  const sizeLeft3 = this.data("componentRoundedSizeLeftThree");
  const sizeRight3 = this.data("componentRoundedSizeRightThree");
  const sizeLeft4 = this.data("componentRoundedSizeLeftFour");
  const sizeRight4 = this.data("componentRoundedSizeRightFour");

  let barCharData = [];
  for (let i = 0; i < datos.length; i++) {
    let data_2 = datos[i];
    barCharData.push({
      title: data_2.mes,
      value: data_2.data1,
      radiusLeftTop: sizeLeft4,
      radiusLeftBottom: sizeLeft4,
      radiousRightTop: sizeRight4,
      radiousRightBottom: sizeRight4
    });
    barCharData.push({
      title: data_2.mes,
      value: data_2.data2,
      radiusLeftTop: sizeLeft3,
      radiusLeftBottom: sizeLeft3,
      radiousRightTop: sizeRight3,
      radiousRightBottom: sizeRight3
    });
    barCharData.push({
      title: data_2.mes,
      value: data_2.data3,
      radiusLeftTop: sizeLeft2,
      radiusLeftBottom: sizeLeft2,
      radiousRightTop: sizeRight2,
      radiousRightBottom: sizeRight2
    });
    barCharData.push({
      title: data_2.mes,
      value: data_2.data4,
      radiusLeftTop: sizeLeft1,
      radiusLeftBottom: sizeLeft1,
      radiousRightTop: sizeRight1,
      radiousRightBottom: sizeRight1
    });
  }

  if (typeChart == "piechart") {
    // Pie Chart
    pieHighchart({
      id: id,
      title: titleChart,
      format: formatChart,
      plotOptionsFormat: formatPlotChart,
      labelsX: labelChart,
      dataSet: charData
    });
  } else if (typeChart == "pieborderchart") {
    // Pie Chart with border
    pieBorderHighchart({
      id: id,
      title: titleChart,
      format: formatPlotChart,
      plotOptionsFormat: formatPlotChart,
      labelsX: labelChart,
      dataSet: charData
    });
  } else if (typeChart == "barhorizontalchart") {
    // Call to Horizontal Bar Chart
    barHighchart({
      id: id,
      title: titleChart,
      dataSet: barCharData
    });
  }
};

// Canvas function
$.fn.canvas = function() {
  const id = this.attr("id");
  const typeChart = this.data("componentType");

  if (typeChart == "stackchart") {
    stackChart({
      id: id,
      titleX:
        "Cifras de rendimientos, tasas e inflación con fines ilustrativos",
      titleY: "Tasa Efectiva del Mejor y Peor Mes",
      labels: dataSetstcX,
      tickMaxY: 8.0,
      tickMinY: -8.0,
      tickStepY: 2.0,
      dataSet: [
        {
          label: "Peor Mes",
          backgroundColor: "#2b6cb0",
          data: dataSetstcY1
        },
        {
          label: "Mejor Mes",
          backgroundColor: "#c53030",
          data: dataSetstcY2
        }
      ],
      width: "400px",
      height: "200px"
    });
  } else if (typeChart == "barchart") {
    barChart({
      id: id,
      titleX:
        "Cifras de rendimientos, tasas e inflación con fines ilustrativos",
      titleY: "Rendimientos Promedio Anual",
      labels: dataSetbcX,
      tickMaxY: 15.0,
      tickMinY: 0,
      tickStepY: 1,
      width: "400px",
      height: "200px",
      dataSet: [
        {
          type: "line",
          label: "Promedio",
          backgroundColor: "#c53030",
          data: dataSetbcY1,
          fill: false,
          borderColor: "#c53030",
          borderWidth: 2
        },
        {
          type: "bar",
          label: "Real",
          backgroundColor: "#2b6cb0",
          data: dataSetbcY2
        }
      ]
    });
  } else if (typeChart == "barNchart") {
    barChartNBar({
      id: id,
      titleX:
        "Cifras de rendimientos, tasas e inflación con fines ilustrativos",
      titleY: "Rendimientos Promedio Anual",
      labels: dataSetnbX,
      tickMaxY: 15.0,
      tickMinY: -15,
      tickStepY: 1,
      width: "400px",
      height: "200px",
      dataSet: [
        {
          type: "line",
          label: "Promedio",
          backgroundColor: "#c53030",
          data: dataSetnbY1,
          fill: false,
          borderColor: "#c53030",
          borderWidth: 2
        },
        {
          type: "bar",
          label: "Real",
          backgroundColor: "#2b6cb0",
          data: dataSetnbY2
        },
        {
          type: "bar",
          label: "Real2",
          backgroundColor: "#ffb3b3",
          data: dataSetnbY3
        },
        {
          type: "bar",
          label: "Real3",
          backgroundColor: "#b3ffb3",
          data: dataSetnbY4
        },
        {
          type: "bar",
          label: "Real4",
          backgroundColor: "#ffff66",
          data: dataSetnbY5
        }
      ]
    });
  } else if (typeChart == "linechart") {
    lineChart({
      id: id,
      titleX: "X",
      titleY: "Y",
      labels: dataSetlcX,
      tickMaxY: 15.0,
      tickMinY: 0,
      tickStepY: 1,
      dataSet: [
        {
          type: "line",
          label: "Porcentaje",
          backgroundColor: "#2b6cb0",
          data: dataSetlcY,
          fill: false,
          borderColor: "#2b6cb0",
          borderWidth: 2
        }
      ],
      pointA: 56,
      pointB: 200,
      width: "600px",
      height: "200px"
    });
  } else if (typeChart == "multilinechart") {
    multiLineChart({
      id: id,
      titleX: "X",
      titleY: "Y",
      labels: dataSetmlX,
      tickMaxY: 15.0,
      tickMinY: 0,
      tickStepY: 1,
      dataSet: [
        {
          type: "line",
          label: "Largo Plazo",
          backgroundColor: "#c53030",
          data: dataSetmlY3,
          fill: false,
          borderColor: "#c53030",
          fontColor: "#c53030",
          borderWidth: 1
        },
        {
          type: "line",
          label: "Mediano Plazo",
          fill: false,
          data: dataSetmlY2,
          backgroundColor: "#2b6cb0",
          borderColor: "#2b6cb0",
          borderWidth: 1,
          fontColor: "#2b6cb0"
        },
        {
          type: "line",
          label: "Largo Plazo",
          fill: false,
          data: dataSetmlY1,
          borderColor: "#2f855a",
          borderWidth: 1,
          fontColor: "#2f855a",
          backgroundColor: "#2f855a"
        }
      ],
      width: "600px",
      height: "200px"
    });
  }
};

// Chart Data
// Data of Stack Chart, prompt from service
let rendimientos = [
  {
    mes: "January",
    dataA: 0.5,
    dataB: 0.23
  },
  {
    mes: "February",
    dataA: 1,
    dataB: -0.5
  },
  {
    mes: "March",
    dataA: 2.2,
    dataB: -1.6
  },
  {
    mes: "April",
    dataA: 4.5,
    dataB: -3.5
  },
  {
    mes: "May",
    dataA: 7.5,
    dataB: -5.5
  }
];

let dataSetstcY1 = [];
let dataSetstcY2 = [];
let dataSetstcX = [];
for (let i = 0; i < rendimientos.length; i++) {
  let data = rendimientos[i];
  dataSetstcX.push(data.mes);
  dataSetstcY1.push(data.dataA);
  dataSetstcY2.push(data.dataB);
}

// Data of Bar Chart, prompt from service
let promediosbc = [
  {
    horizonte: "A (Liquidez)",
    dataA: 4,
    dataB: 3.8
  },
  {
    horizonte: "B (Conservación)",
    dataA: 4,
    dataB: 0
  },
  {
    horizonte: "C (Equilibrio)",
    dataA: 4,
    dataB: 5.5
  },
  {
    horizonte: "D (Incremento)",
    dataA: 4,
    dataB: 7
  },
  {
    horizonte: "E (Maximización)",
    dataA: 4,
    dataB: 9
  },
  {
    horizonte: "",
    dataA: 4
  },
  {
    horizonte: ""
  }
];

let dataSetbcY1 = [];
let dataSetbcY2 = [];
let dataSetbcX = [];
for (let i = 0; i < promediosbc.length; i++) {
  let data = promediosbc[i];
  dataSetbcX.push(data.horizonte);
  dataSetbcY1.push(data.dataA);
  dataSetbcY2.push(data.dataB);
}

// Data of N Bar Chart, prompt from service
let promediosNBar = [
  {
    horizonte: "A (Liquidez)",
    dataA: 0,
    dataB: 3.8,
    dataC: -6,
    dataD: 9.8
  },
  {
    horizonte: "B (Conservación)",
    dataA: 0,
    dataB: 4.2,
    dataC: 5.6,
    dataD: -6.9
  },
  {
    horizonte: "C (Equilibrio)",
    dataA: 0,
    dataB: -5.5,
    dataC: 7.8,
    dataD: 5.5
  },
  {
    horizonte: "D (Incremento)",
    dataA: 0,
    dataB: 7,
    dataC: 8,
    dataD: 10,
    dataE: 11
  },
  {
    horizonte: "E (Maximización)",
    dataA: 0,
    dataB: 9,
    dataC: 6
  }
];

let dataSetnbY1 = [];
let dataSetnbY2 = [];
let dataSetnbY3 = [];
let dataSetnbY4 = [];
let dataSetnbY5 = [];
let dataSetnbX = [];

for (let i = 0; i < promediosNBar.length; i++) {
  let data = promediosNBar[i];
  dataSetnbX.push(data.horizonte);
  dataSetnbY1.push(data.dataA);
  dataSetnbY2.push(data.dataB);
  dataSetnbY3.push(data.dataC);
  dataSetnbY4.push(data.dataD);
  dataSetnbY5.push(data.dataE);
}

// Data of Line Chart, prompt from service
let rates = [
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:15:00",
    askClose: 1277.25,
    bidHigh: 1276.8,
    bidLow: 1276.55,
    askHigh: 1277.3,
    askLow: 1277.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:20:00",
    askClose: 1277.20001,
    bidHigh: 1276.8,
    bidLow: 1276.55,
    askHigh: 1277.3,
    askLow: 1277.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:25:00",
    bidOpen: 1276.6,
    bidClose: 1276.70001,
    askOpen: 1277.1,
    askClose: 1277.20001,
    bidHigh: 1276.90001,
    bidLow: 1276.45001,
    askHigh: 1277.40001,
    askLow: 1276.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:30:00",
    bidOpen: 1276.85,
    bidClose: 1277.1,
    askOpen: 1277.35,
    askClose: 1277.6,
    bidHigh: 1277.20001,
    bidLow: 1276.75,
    askHigh: 1277.70001,
    askLow: 1277.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:35:00",
    bidOpen: 1277.1,
    bidClose: 1276.95001,
    askOpen: 1277.6,
    askClose: 1277.45001,
    bidHigh: 1277.40001,
    bidLow: 1276.90001,
    askHigh: 1277.90001,
    askLow: 1277.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:40:00",
    bidOpen: 1276.95001,
    bidClose: 1277.1,
    askOpen: 1277.45001,
    askClose: 1277.6,
    bidHigh: 1277.1,
    bidLow: 1276.6,
    askHigh: 1277.6,
    askLow: 1277.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:45:00",
    bidOpen: 1277.1,
    bidClose: 1276.95001,
    askOpen: 1277.6,
    askClose: 1277.45001,
    bidHigh: 1277.1,
    bidLow: 1276.8,
    askHigh: 1277.6,
    askLow: 1277.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:50:00",
    bidOpen: 1276.95001,
    bidClose: 1277.40001,
    askOpen: 1277.45001,
    askClose: 1277.90001,
    bidHigh: 1277.40001,
    bidLow: 1276.95001,
    askHigh: 1277.90001,
    askLow: 1277.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 12:55:00",
    bidOpen: 1277.40001,
    bidClose: 1277.5,
    askOpen: 1277.90001,
    askClose: 1278,
    bidHigh: 1277.5,
    bidLow: 1277,
    askHigh: 1278,
    askLow: 1277.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:00:00",
    bidOpen: 1277.55,
    bidClose: 1277.05,
    askOpen: 1278.05,
    askClose: 1277.55,
    bidHigh: 1277.6,
    bidLow: 1276.90001,
    askHigh: 1278.1,
    askLow: 1277.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:05:00",
    bidOpen: 1277.05,
    bidClose: 1276.70001,
    askOpen: 1277.55,
    askClose: 1277.20001,
    bidHigh: 1277.05,
    bidLow: 1276.65001,
    askHigh: 1277.55,
    askLow: 1277.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:10:00",
    bidOpen: 1276.70001,
    bidClose: 1277.15001,
    askOpen: 1277.20001,
    askClose: 1277.65001,
    bidHigh: 1277.15001,
    bidLow: 1276.70001,
    askHigh: 1277.65001,
    askLow: 1277.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:15:00",
    bidOpen: 1277.1,
    bidClose: 1277.40001,
    askOpen: 1277.6,
    askClose: 1277.90001,
    bidHigh: 1277.65001,
    bidLow: 1277.1,
    askHigh: 1278.15001,
    askLow: 1277.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:20:00",
    bidOpen: 1277.40001,
    bidClose: 1277.8,
    askOpen: 1277.90001,
    askClose: 1278.3,
    bidHigh: 1277.90001,
    bidLow: 1277.40001,
    askHigh: 1278.40001,
    askLow: 1277.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:25:00",
    bidOpen: 1277.8,
    bidClose: 1277.8,
    askOpen: 1278.3,
    askClose: 1278.3,
    bidHigh: 1277.90001,
    bidLow: 1277.6,
    askHigh: 1278.40001,
    askLow: 1278.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:30:00",
    bidOpen: 1277.70001,
    bidClose: 1278.20001,
    askOpen: 1278.20001,
    askClose: 1278.70001,
    bidHigh: 1278.20001,
    bidLow: 1277.6,
    askHigh: 1278.70001,
    askLow: 1278.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:35:00",
    bidOpen: 1278.3,
    bidClose: 1278.40001,
    askOpen: 1278.8,
    askClose: 1278.90001,
    bidHigh: 1278.40001,
    bidLow: 1278.05,
    askHigh: 1278.90001,
    askLow: 1278.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:40:00",
    bidOpen: 1278.40001,
    bidClose: 1277.90001,
    askOpen: 1278.90001,
    askClose: 1278.40001,
    bidHigh: 1278.40001,
    bidLow: 1277.6,
    askHigh: 1278.90001,
    askLow: 1278.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:45:00",
    bidOpen: 1277.8,
    bidClose: 1277.6,
    askOpen: 1278.3,
    askClose: 1278.1,
    bidHigh: 1278,
    bidLow: 1277.5,
    askHigh: 1278.5,
    askLow: 1278
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:50:00",
    bidOpen: 1277.6,
    bidClose: 1278,
    askOpen: 1278.1,
    askClose: 1278.5,
    bidHigh: 1278.20001,
    bidLow: 1277.20001,
    askHigh: 1278.70001,
    askLow: 1277.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 13:55:00",
    bidOpen: 1278.1,
    bidClose: 1277.90001,
    askOpen: 1278.6,
    askClose: 1278.40001,
    bidHigh: 1278.3,
    bidLow: 1277.8,
    askHigh: 1278.8,
    askLow: 1278.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:00:00",
    bidOpen: 1277.90001,
    bidClose: 1279.05,
    askOpen: 1278.40001,
    askClose: 1279.55,
    bidHigh: 1279.75,
    bidLow: 1277.8,
    askHigh: 1280.25,
    askLow: 1278.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:05:00",
    bidOpen: 1279.05,
    bidClose: 1279.8,
    askOpen: 1279.55,
    askClose: 1280.3,
    bidHigh: 1279.8,
    bidLow: 1279.05,
    askHigh: 1280.3,
    askLow: 1279.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:10:00",
    bidOpen: 1279.75,
    bidClose: 1279.8,
    askOpen: 1280.25,
    askClose: 1280.3,
    bidHigh: 1280.1,
    bidLow: 1279.35,
    askHigh: 1280.6,
    askLow: 1279.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:15:00",
    bidOpen: 1279.85,
    bidClose: 1279.75,
    askOpen: 1280.35,
    askClose: 1280.25,
    bidHigh: 1280.25,
    bidLow: 1279.40001,
    askHigh: 1280.75,
    askLow: 1279.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:20:00",
    bidOpen: 1279.8,
    bidClose: 1282.35,
    askOpen: 1280.3,
    askClose: 1282.85,
    bidHigh: 1283.8,
    bidLow: 1279.45001,
    askHigh: 1284.3,
    askLow: 1279.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:25:00",
    bidOpen: 1282.40001,
    bidClose: 1281.65001,
    askOpen: 1282.90001,
    askClose: 1282.15001,
    bidHigh: 1283,
    bidLow: 1281.15001,
    askHigh: 1283.5,
    askLow: 1281.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:30:00",
    bidOpen: 1281.65001,
    bidClose: 1281.5,
    askOpen: 1282.15001,
    askClose: 1282,
    bidHigh: 1281.85,
    bidLow: 1281.25,
    askHigh: 1282.35,
    askLow: 1281.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:35:00",
    bidOpen: 1281.5,
    bidClose: 1281.90001,
    askOpen: 1282,
    askClose: 1282.40001,
    bidHigh: 1282.6,
    bidLow: 1281.20001,
    askHigh: 1283.1,
    askLow: 1281.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:40:00",
    bidOpen: 1281.85,
    bidClose: 1281.5,
    askOpen: 1282.35,
    askClose: 1282,
    bidHigh: 1282,
    bidLow: 1281.45001,
    askHigh: 1282.5,
    askLow: 1281.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:45:00",
    bidOpen: 1281.5,
    bidClose: 1281.3,
    askOpen: 1282,
    askClose: 1281.8,
    bidHigh: 1282.15001,
    bidLow: 1281.20001,
    askHigh: 1282.65001,
    askLow: 1281.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:50:00",
    bidOpen: 1281.25,
    bidClose: 1280.70001,
    askOpen: 1281.75,
    askClose: 1281.20001,
    bidHigh: 1281.25,
    bidLow: 1280.55,
    askHigh: 1281.75,
    askLow: 1281.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 14:55:00",
    bidOpen: 1280.70001,
    bidClose: 1281.45001,
    askOpen: 1281.20001,
    askClose: 1281.95001,
    bidHigh: 1281.65001,
    bidLow: 1280.70001,
    askHigh: 1282.15001,
    askLow: 1281.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:00:00",
    bidOpen: 1281.45001,
    bidClose: 1282.25,
    askOpen: 1281.95001,
    askClose: 1282.75,
    bidHigh: 1282.70001,
    bidLow: 1281.40001,
    askHigh: 1283.20001,
    askLow: 1281.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:05:00",
    bidOpen: 1282.25,
    bidClose: 1282,
    askOpen: 1282.75,
    askClose: 1282.5,
    bidHigh: 1282.45001,
    bidLow: 1281.65001,
    askHigh: 1282.95001,
    askLow: 1282.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:10:00",
    bidOpen: 1282,
    bidClose: 1280.70001,
    askOpen: 1282.5,
    askClose: 1281.20001,
    bidHigh: 1282.1,
    bidLow: 1280.35,
    askHigh: 1282.6,
    askLow: 1280.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:15:00",
    bidOpen: 1280.70001,
    bidClose: 1280.70001,
    askOpen: 1281.20001,
    askClose: 1281.20001,
    bidHigh: 1281.65001,
    bidLow: 1280.35,
    askHigh: 1282.15001,
    askLow: 1280.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:20:00",
    bidOpen: 1280.75,
    bidClose: 1281.25,
    askOpen: 1281.25,
    askClose: 1281.75,
    bidHigh: 1281.75,
    bidLow: 1280.70001,
    askHigh: 1282.25,
    askLow: 1281.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:25:00",
    bidOpen: 1281.35,
    bidClose: 1281.05,
    askOpen: 1281.85,
    askClose: 1281.55,
    bidHigh: 1281.65001,
    bidLow: 1281,
    askHigh: 1282.15001,
    askLow: 1281.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:30:00",
    bidOpen: 1281,
    bidClose: 1281,
    askOpen: 1281.5,
    askClose: 1281.5,
    bidHigh: 1281.25,
    bidLow: 1280.85,
    askHigh: 1281.75,
    askLow: 1281.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:35:00",
    bidOpen: 1281.05,
    bidClose: 1281.25,
    askOpen: 1281.55,
    askClose: 1281.75,
    bidHigh: 1281.45001,
    bidLow: 1280.65001,
    askHigh: 1281.95001,
    askLow: 1281.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:40:00",
    bidOpen: 1281.25,
    bidClose: 1281.20001,
    askOpen: 1281.75,
    askClose: 1281.70001,
    bidHigh: 1281.35,
    bidLow: 1281,
    askHigh: 1281.85,
    askLow: 1281.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:45:00",
    bidOpen: 1281.20001,
    bidClose: 1281.20001,
    askOpen: 1281.70001,
    askClose: 1281.70001,
    bidHigh: 1281.20001,
    bidLow: 1280.85,
    askHigh: 1281.70001,
    askLow: 1281.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:50:00",
    bidOpen: 1281.20001,
    bidClose: 1280.8,
    askOpen: 1281.70001,
    askClose: 1281.3,
    bidHigh: 1281.3,
    bidLow: 1280.70001,
    askHigh: 1281.8,
    askLow: 1281.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 15:55:00",
    bidOpen: 1280.8,
    bidClose: 1280.5,
    askOpen: 1281.3,
    askClose: 1281,
    bidHigh: 1280.85,
    bidLow: 1280.40001,
    askHigh: 1281.35,
    askLow: 1280.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:00:00",
    bidOpen: 1280.5,
    bidClose: 1280.3,
    askOpen: 1281,
    askClose: 1280.8,
    bidHigh: 1280.85,
    bidLow: 1279.90001,
    askHigh: 1281.35,
    askLow: 1280.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:05:00",
    bidOpen: 1280.25,
    bidClose: 1281,
    askOpen: 1280.75,
    askClose: 1281.5,
    bidHigh: 1281,
    bidLow: 1280,
    askHigh: 1281.5,
    askLow: 1280.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:10:00",
    bidOpen: 1281,
    bidClose: 1281.15001,
    askOpen: 1281.5,
    askClose: 1281.65001,
    bidHigh: 1281.15001,
    bidLow: 1280.75,
    askHigh: 1281.65001,
    askLow: 1281.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:15:00",
    bidOpen: 1281.15001,
    bidClose: 1280.40001,
    askOpen: 1281.65001,
    askClose: 1280.90001,
    bidHigh: 1281.55,
    bidLow: 1280.25,
    askHigh: 1282.05,
    askLow: 1280.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:20:00",
    bidOpen: 1280.40001,
    bidClose: 1281.8,
    askOpen: 1280.90001,
    askClose: 1282.3,
    bidHigh: 1282,
    bidLow: 1280.40001,
    askHigh: 1282.5,
    askLow: 1280.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:25:00",
    bidOpen: 1281.8,
    bidClose: 1282.05,
    askOpen: 1282.3,
    askClose: 1282.55,
    bidHigh: 1282.15001,
    bidLow: 1281.25,
    askHigh: 1282.65001,
    askLow: 1281.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:30:00",
    bidOpen: 1282,
    bidClose: 1281.25,
    askOpen: 1282.5,
    askClose: 1281.75,
    bidHigh: 1282.15001,
    bidLow: 1281.15001,
    askHigh: 1282.65001,
    askLow: 1281.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:35:00",
    bidOpen: 1281.25,
    bidClose: 1280.95001,
    askOpen: 1281.75,
    askClose: 1281.45001,
    bidHigh: 1281.45001,
    bidLow: 1280.85,
    askHigh: 1281.95001,
    askLow: 1281.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:40:00",
    bidOpen: 1280.95001,
    bidClose: 1281.25,
    askOpen: 1281.45001,
    askClose: 1281.75,
    bidHigh: 1281.3,
    bidLow: 1280.55,
    askHigh: 1281.8,
    askLow: 1281.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:45:00",
    bidOpen: 1281.3,
    bidClose: 1280.40001,
    askOpen: 1281.8,
    askClose: 1280.90001,
    bidHigh: 1281.3,
    bidLow: 1280.40001,
    askHigh: 1281.8,
    askLow: 1280.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:50:00",
    bidOpen: 1280.35,
    bidClose: 1280.45001,
    askOpen: 1280.85,
    askClose: 1280.95001,
    bidHigh: 1280.55,
    bidLow: 1278.8,
    askHigh: 1281.05,
    askLow: 1279.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 16:55:00",
    bidOpen: 1280.5,
    bidClose: 1281.40001,
    askOpen: 1281,
    askClose: 1281.90001,
    bidHigh: 1282.95001,
    bidLow: 1280.20001,
    askHigh: 1283.45001,
    askLow: 1280.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:00:00",
    bidOpen: 1281.40001,
    bidClose: 1281.6,
    askOpen: 1281.90001,
    askClose: 1282.1,
    bidHigh: 1281.90001,
    bidLow: 1281.40001,
    askHigh: 1282.40001,
    askLow: 1281.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:05:00",
    bidOpen: 1281.70001,
    bidClose: 1282.1,
    askOpen: 1282.20001,
    askClose: 1282.6,
    bidHigh: 1282.3,
    bidLow: 1281.6,
    askHigh: 1282.8,
    askLow: 1282.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:10:00",
    bidOpen: 1282.1,
    bidClose: 1281.6,
    askOpen: 1282.6,
    askClose: 1282.1,
    bidHigh: 1282.1,
    bidLow: 1281.5,
    askHigh: 1282.6,
    askLow: 1282
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:15:00",
    bidOpen: 1281.6,
    bidClose: 1282,
    askOpen: 1282.1,
    askClose: 1282.5,
    bidHigh: 1282,
    bidLow: 1281.55,
    askHigh: 1282.5,
    askLow: 1282.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:20:00",
    bidOpen: 1281.95001,
    bidClose: 1281.6,
    askOpen: 1282.45001,
    askClose: 1282.1,
    bidHigh: 1282.1,
    bidLow: 1281.5,
    askHigh: 1282.6,
    askLow: 1282
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:25:00",
    bidOpen: 1281.55,
    bidClose: 1281.55,
    askOpen: 1282.05,
    askClose: 1282.05,
    bidHigh: 1281.8,
    bidLow: 1281.20001,
    askHigh: 1282.3,
    askLow: 1281.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:30:00",
    bidOpen: 1281.55,
    bidClose: 1281.15001,
    askOpen: 1282.05,
    askClose: 1281.65001,
    bidHigh: 1281.65001,
    bidLow: 1280.90001,
    askHigh: 1282.15001,
    askLow: 1281.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:35:00",
    bidOpen: 1281,
    bidClose: 1281.1,
    askOpen: 1281.5,
    askClose: 1281.6,
    bidHigh: 1281.35,
    bidLow: 1280.85,
    askHigh: 1281.85,
    askLow: 1281.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:40:00",
    bidOpen: 1281.15001,
    bidClose: 1281.65001,
    askOpen: 1281.65001,
    askClose: 1282.15001,
    bidHigh: 1281.95001,
    bidLow: 1281.05,
    askHigh: 1282.45001,
    askLow: 1281.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:45:00",
    bidOpen: 1281.70001,
    bidClose: 1281.70001,
    askOpen: 1282.20001,
    askClose: 1282.20001,
    bidHigh: 1281.85,
    bidLow: 1281.45001,
    askHigh: 1282.35,
    askLow: 1281.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:50:00",
    bidOpen: 1281.8,
    bidClose: 1281.6,
    askOpen: 1282.3,
    askClose: 1282.1,
    bidHigh: 1281.8,
    bidLow: 1281.25,
    askHigh: 1282.3,
    askLow: 1281.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 17:55:00",
    bidOpen: 1281.6,
    bidClose: 1281.6,
    askOpen: 1282.1,
    askClose: 1282.1,
    bidHigh: 1281.70001,
    bidLow: 1281.45001,
    askHigh: 1282.20001,
    askLow: 1281.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:00:00",
    bidOpen: 1281.70001,
    bidClose: 1282.15001,
    askOpen: 1282.20001,
    askClose: 1282.65001,
    bidHigh: 1282.35,
    bidLow: 1281.45001,
    askHigh: 1282.85,
    askLow: 1281.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:05:00",
    bidOpen: 1282.05,
    bidClose: 1281.95001,
    askOpen: 1282.55,
    askClose: 1282.45001,
    bidHigh: 1282.35,
    bidLow: 1281.75,
    askHigh: 1282.85,
    askLow: 1282.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:10:00",
    bidOpen: 1281.95001,
    bidClose: 1281.35,
    askOpen: 1282.45001,
    askClose: 1281.85,
    bidHigh: 1281.95001,
    bidLow: 1281.25,
    askHigh: 1282.45001,
    askLow: 1281.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:15:00",
    bidOpen: 1281.3,
    bidClose: 1281.55,
    askOpen: 1281.8,
    askClose: 1282.05,
    bidHigh: 1281.70001,
    bidLow: 1280.95001,
    askHigh: 1282.20001,
    askLow: 1281.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:20:00",
    bidOpen: 1281.65001,
    bidClose: 1281.6,
    askOpen: 1282.15001,
    askClose: 1282.1,
    bidHigh: 1281.75,
    bidLow: 1281.55,
    askHigh: 1282.25,
    askLow: 1282.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:25:00",
    bidOpen: 1281.6,
    bidClose: 1281.75,
    askOpen: 1282.1,
    askClose: 1282.25,
    bidHigh: 1281.95001,
    bidLow: 1281.55,
    askHigh: 1282.45001,
    askLow: 1282.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:30:00",
    bidOpen: 1281.65001,
    bidClose: 1281.8,
    askOpen: 1282.15001,
    askClose: 1282.3,
    bidHigh: 1282.15001,
    bidLow: 1281.65001,
    askHigh: 1282.65001,
    askLow: 1282.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:35:00",
    bidOpen: 1281.85,
    bidClose: 1281.55,
    askOpen: 1282.35,
    askClose: 1282.05,
    bidHigh: 1281.95001,
    bidLow: 1281.45001,
    askHigh: 1282.45001,
    askLow: 1281.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:40:00",
    bidOpen: 1281.55,
    bidClose: 1281.35,
    askOpen: 1282.05,
    askClose: 1281.85,
    bidHigh: 1281.8,
    bidLow: 1281.25,
    askHigh: 1282.3,
    askLow: 1281.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:45:00",
    bidOpen: 1281.40001,
    bidClose: 1282.15001,
    askOpen: 1281.90001,
    askClose: 1282.65001,
    bidHigh: 1282.20001,
    bidLow: 1281.05,
    askHigh: 1282.70001,
    askLow: 1281.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:50:00",
    bidOpen: 1282.15001,
    bidClose: 1282.55,
    askOpen: 1282.65001,
    askClose: 1283.05,
    bidHigh: 1282.65001,
    bidLow: 1282.15001,
    askHigh: 1283.15001,
    askLow: 1282.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 18:55:00",
    bidOpen: 1282.5,
    bidClose: 1282.25,
    askOpen: 1283,
    askClose: 1282.75,
    bidHigh: 1282.6,
    bidLow: 1281.85,
    askHigh: 1283.1,
    askLow: 1282.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:00:00",
    bidOpen: 1282.3,
    bidClose: 1282.05,
    askOpen: 1282.8,
    askClose: 1282.55,
    bidHigh: 1282.35,
    bidLow: 1281.95001,
    askHigh: 1282.85,
    askLow: 1282.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:05:00",
    bidOpen: 1282.05,
    bidClose: 1282.45001,
    askOpen: 1282.55,
    askClose: 1282.95001,
    bidHigh: 1282.8,
    bidLow: 1282.05,
    askHigh: 1283.3,
    askLow: 1282.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:10:00",
    bidOpen: 1282.45001,
    bidClose: 1281.90001,
    askOpen: 1282.95001,
    askClose: 1282.40001,
    bidHigh: 1282.70001,
    bidLow: 1281.85,
    askHigh: 1283.20001,
    askLow: 1282.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:15:00",
    bidOpen: 1281.85,
    bidClose: 1281.8,
    askOpen: 1282.35,
    askClose: 1282.3,
    bidHigh: 1282.1,
    bidLow: 1281.65001,
    askHigh: 1282.6,
    askLow: 1282.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:20:00",
    bidOpen: 1281.85,
    bidClose: 1282,
    askOpen: 1282.35,
    askClose: 1282.5,
    bidHigh: 1282.15001,
    bidLow: 1281.70001,
    askHigh: 1282.65001,
    askLow: 1282.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:25:00",
    bidOpen: 1282.05,
    bidClose: 1282.05,
    askOpen: 1282.55,
    askClose: 1282.55,
    bidHigh: 1282.25,
    bidLow: 1281.95001,
    askHigh: 1282.75,
    askLow: 1282.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:30:00",
    bidOpen: 1281.85,
    bidClose: 1281,
    askOpen: 1282.35,
    askClose: 1281.5,
    bidHigh: 1282,
    bidLow: 1280.95001,
    askHigh: 1282.5,
    askLow: 1281.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:35:00",
    bidOpen: 1281.05,
    bidClose: 1281.45001,
    askOpen: 1281.55,
    askClose: 1281.95001,
    bidHigh: 1281.45001,
    bidLow: 1280.65001,
    askHigh: 1281.95001,
    askLow: 1281.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:40:00",
    bidOpen: 1281.40001,
    bidClose: 1281.6,
    askOpen: 1281.90001,
    askClose: 1282.1,
    bidHigh: 1281.65001,
    bidLow: 1281.15001,
    askHigh: 1282.15001,
    askLow: 1281.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:45:00",
    bidOpen: 1281.5,
    bidClose: 1281.45001,
    askOpen: 1282,
    askClose: 1281.95001,
    bidHigh: 1281.65001,
    bidLow: 1281.1,
    askHigh: 1282.15001,
    askLow: 1281.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:50:00",
    bidOpen: 1281.5,
    bidClose: 1281.5,
    askOpen: 1282,
    askClose: 1282,
    bidHigh: 1281.55,
    bidLow: 1281.15001,
    askHigh: 1282.05,
    askLow: 1281.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 19:55:00",
    bidOpen: 1281.55,
    bidClose: 1281.85,
    askOpen: 1282.05,
    askClose: 1282.35,
    bidHigh: 1281.85,
    bidLow: 1281.35,
    askHigh: 1282.35,
    askLow: 1281.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:00:00",
    bidOpen: 1281.8,
    bidClose: 1282.6,
    askOpen: 1282.3,
    askClose: 1283.1,
    bidHigh: 1282.65001,
    bidLow: 1281.8,
    askHigh: 1283.15001,
    askLow: 1282.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:05:00",
    bidOpen: 1282.6,
    bidClose: 1282.8,
    askOpen: 1283.1,
    askClose: 1283.3,
    bidHigh: 1283.15001,
    bidLow: 1282.5,
    askHigh: 1283.65001,
    askLow: 1283
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:10:00",
    bidOpen: 1282.6,
    bidClose: 1282.35,
    askOpen: 1283.1,
    askClose: 1282.85,
    bidHigh: 1282.85,
    bidLow: 1281.85,
    askHigh: 1283.35,
    askLow: 1282.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:15:00",
    bidOpen: 1282.3,
    bidClose: 1283.75,
    askOpen: 1282.8,
    askClose: 1284.25,
    bidHigh: 1283.75,
    bidLow: 1282.25,
    askHigh: 1284.25,
    askLow: 1282.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:20:00",
    bidOpen: 1284.35,
    bidClose: 1282.75,
    askOpen: 1284.85,
    askClose: 1283.25,
    bidHigh: 1284.55,
    bidLow: 1282.1,
    askHigh: 1285.05,
    askLow: 1282.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:25:00",
    bidOpen: 1282.75,
    bidClose: 1283.5,
    askOpen: 1283.25,
    askClose: 1284,
    bidHigh: 1283.95001,
    bidLow: 1282.55,
    askHigh: 1284.45001,
    askLow: 1283.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:30:00",
    bidOpen: 1284.6,
    bidClose: 1284.65001,
    askOpen: 1285.1,
    askClose: 1285.15001,
    bidHigh: 1285.40001,
    bidLow: 1283.40001,
    askHigh: 1285.90001,
    askLow: 1283.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:35:00",
    bidOpen: 1284.65001,
    bidClose: 1286.15001,
    askOpen: 1285.15001,
    askClose: 1286.65001,
    bidHigh: 1286.35,
    bidLow: 1284.45001,
    askHigh: 1286.85,
    askLow: 1284.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:40:00",
    bidOpen: 1286.20001,
    bidClose: 1287.45001,
    askOpen: 1286.70001,
    askClose: 1287.95001,
    bidHigh: 1287.55,
    bidLow: 1286.20001,
    askHigh: 1288.05,
    askLow: 1286.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:45:00",
    bidOpen: 1287.40001,
    bidClose: 1287.20001,
    askOpen: 1287.90001,
    askClose: 1287.70001,
    bidHigh: 1288.5,
    bidLow: 1286.75,
    askHigh: 1289,
    askLow: 1287.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:50:00",
    bidOpen: 1287.25,
    bidClose: 1286.75,
    askOpen: 1287.75,
    askClose: 1287.25,
    bidHigh: 1287.65001,
    bidLow: 1286.65001,
    askHigh: 1288.15001,
    askLow: 1287.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 20:55:00",
    bidOpen: 1286.70001,
    bidClose: 1286.40001,
    askOpen: 1287.20001,
    askClose: 1286.90001,
    bidHigh: 1287.05,
    bidLow: 1286.20001,
    askHigh: 1287.55,
    askLow: 1286.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:00:00",
    bidOpen: 1286.40001,
    bidClose: 1286.15001,
    askOpen: 1286.90001,
    askClose: 1286.65001,
    bidHigh: 1287.20001,
    bidLow: 1285.90001,
    askHigh: 1287.70001,
    askLow: 1286.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:05:00",
    bidOpen: 1286.20001,
    bidClose: 1286.3,
    askOpen: 1286.70001,
    askClose: 1286.8,
    bidHigh: 1287.20001,
    bidLow: 1286.1,
    askHigh: 1287.70001,
    askLow: 1286.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:10:00",
    bidOpen: 1286.3,
    bidClose: 1286,
    askOpen: 1286.8,
    askClose: 1286.5,
    bidHigh: 1286.40001,
    bidLow: 1285.3,
    askHigh: 1286.90001,
    askLow: 1285.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:15:00",
    bidOpen: 1285.90001,
    bidClose: 1287.5,
    askOpen: 1286.40001,
    askClose: 1288,
    bidHigh: 1287.6,
    bidLow: 1285.90001,
    askHigh: 1288.1,
    askLow: 1286.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:20:00",
    bidOpen: 1287.5,
    bidClose: 1286.3,
    askOpen: 1288,
    askClose: 1286.8,
    bidHigh: 1287.8,
    bidLow: 1286.3,
    askHigh: 1288.3,
    askLow: 1286.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:25:00",
    bidOpen: 1286.20001,
    bidClose: 1286.20001,
    askOpen: 1286.70001,
    askClose: 1286.70001,
    bidHigh: 1286.40001,
    bidLow: 1285.5,
    askHigh: 1286.90001,
    askLow: 1286
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:30:00",
    bidOpen: 1286.20001,
    bidClose: 1286.05,
    askOpen: 1286.70001,
    askClose: 1286.55,
    bidHigh: 1286.70001,
    bidLow: 1285.8,
    askHigh: 1287.20001,
    askLow: 1286.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:35:00",
    bidOpen: 1286.05,
    bidClose: 1285.05,
    askOpen: 1286.55,
    askClose: 1285.55,
    bidHigh: 1286.20001,
    bidLow: 1284.75,
    askHigh: 1286.70001,
    askLow: 1285.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:40:00",
    bidOpen: 1285.05,
    bidClose: 1286,
    askOpen: 1285.55,
    askClose: 1286.5,
    bidHigh: 1286.45001,
    bidLow: 1284.8,
    askHigh: 1286.95001,
    askLow: 1285.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:45:00",
    bidOpen: 1285.95001,
    bidClose: 1285.6,
    askOpen: 1286.45001,
    askClose: 1286.1,
    bidHigh: 1286.45001,
    bidLow: 1285.35,
    askHigh: 1286.95001,
    askLow: 1285.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:50:00",
    bidOpen: 1285.6,
    bidClose: 1285.45001,
    askOpen: 1286.1,
    askClose: 1285.95001,
    bidHigh: 1285.70001,
    bidLow: 1284.95001,
    askHigh: 1286.20001,
    askLow: 1285.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 21:55:00",
    bidOpen: 1285.40001,
    bidClose: 1285.1,
    askOpen: 1285.90001,
    askClose: 1285.6,
    bidHigh: 1285.65001,
    bidLow: 1284.75,
    askHigh: 1286.15001,
    askLow: 1285.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:00:00",
    bidOpen: 1284.95001,
    bidClose: 1285.55,
    askOpen: 1285.45001,
    askClose: 1286.05,
    bidHigh: 1285.6,
    bidLow: 1284.85,
    askHigh: 1286.1,
    askLow: 1285.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:05:00",
    bidOpen: 1285.6,
    bidClose: 1285.6,
    askOpen: 1286.1,
    askClose: 1286.1,
    bidHigh: 1286.35,
    bidLow: 1285.5,
    askHigh: 1286.85,
    askLow: 1286
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:10:00",
    bidOpen: 1285.6,
    bidClose: 1285.6,
    askOpen: 1286.1,
    askClose: 1286.1,
    bidHigh: 1285.6,
    bidLow: 1284.90001,
    askHigh: 1286.1,
    askLow: 1285.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:15:00",
    bidOpen: 1285.6,
    bidClose: 1285.6,
    askOpen: 1286.1,
    askClose: 1286.1,
    bidHigh: 1286,
    bidLow: 1285.20001,
    askHigh: 1286.5,
    askLow: 1285.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:20:00",
    bidOpen: 1285.6,
    bidClose: 1282.6,
    askOpen: 1286.1,
    askClose: 1283.1,
    bidHigh: 1285.90001,
    bidLow: 1281.15001,
    askHigh: 1286.40001,
    askLow: 1281.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:25:00",
    bidOpen: 1282.70001,
    bidClose: 1280.15001,
    askOpen: 1283.20001,
    askClose: 1280.65001,
    bidHigh: 1283.1,
    bidLow: 1279.90001,
    askHigh: 1283.6,
    askLow: 1280.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:30:00",
    bidOpen: 1280.1,
    bidClose: 1277.8,
    askOpen: 1280.6,
    askClose: 1278.3,
    bidHigh: 1280.20001,
    bidLow: 1276.75,
    askHigh: 1280.70001,
    askLow: 1277.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:35:00",
    bidOpen: 1277.8,
    bidClose: 1275.05,
    askOpen: 1278.3,
    askClose: 1275.55,
    bidHigh: 1277.90001,
    bidLow: 1274.8,
    askHigh: 1278.40001,
    askLow: 1275.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:40:00",
    bidOpen: 1275.1,
    bidClose: 1275.40001,
    askOpen: 1275.6,
    askClose: 1275.90001,
    bidHigh: 1276.1,
    bidLow: 1274,
    askHigh: 1276.6,
    askLow: 1274.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:45:00",
    bidOpen: 1275.3,
    bidClose: 1275.3,
    askOpen: 1275.8,
    askClose: 1275.8,
    bidHigh: 1275.5,
    bidLow: 1274.40001,
    askHigh: 1276,
    askLow: 1274.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:50:00",
    bidOpen: 1275.35,
    bidClose: 1274.15001,
    askOpen: 1275.85,
    askClose: 1274.65001,
    bidHigh: 1275.40001,
    bidLow: 1274.05,
    askHigh: 1275.90001,
    askLow: 1274.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 22:55:00",
    bidOpen: 1274.25,
    bidClose: 1273.85,
    askOpen: 1274.75,
    askClose: 1274.35,
    bidHigh: 1274.45001,
    bidLow: 1273.15001,
    askHigh: 1274.95001,
    askLow: 1273.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:00:00",
    bidOpen: 1273.85,
    bidClose: 1274.95001,
    askOpen: 1274.35,
    askClose: 1275.45001,
    bidHigh: 1275.05,
    bidLow: 1273.75,
    askHigh: 1275.55,
    askLow: 1274.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:05:00",
    bidOpen: 1274.95001,
    bidClose: 1275.25,
    askOpen: 1275.45001,
    askClose: 1275.75,
    bidHigh: 1275.25,
    bidLow: 1274.5,
    askHigh: 1275.75,
    askLow: 1275
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:10:00",
    bidOpen: 1275.20001,
    bidClose: 1275.15001,
    askOpen: 1275.70001,
    askClose: 1275.65001,
    bidHigh: 1275.55,
    bidLow: 1274.95001,
    askHigh: 1276.05,
    askLow: 1275.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:15:00",
    bidOpen: 1275.15001,
    bidClose: 1274.20001,
    askOpen: 1275.65001,
    askClose: 1274.70001,
    bidHigh: 1275.3,
    bidLow: 1274.20001,
    askHigh: 1275.8,
    askLow: 1274.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:20:00",
    bidOpen: 1274.15001,
    bidClose: 1274.85,
    askOpen: 1274.65001,
    askClose: 1275.35,
    bidHigh: 1275.5,
    bidLow: 1274.1,
    askHigh: 1276,
    askLow: 1274.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:25:00",
    bidOpen: 1274.8,
    bidClose: 1274.95001,
    askOpen: 1275.3,
    askClose: 1275.45001,
    bidHigh: 1274.95001,
    bidLow: 1274.40001,
    askHigh: 1275.45001,
    askLow: 1274.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:30:00",
    bidOpen: 1275.05,
    bidClose: 1275.15001,
    askOpen: 1275.55,
    askClose: 1275.65001,
    bidHigh: 1275.5,
    bidLow: 1274.85,
    askHigh: 1276,
    askLow: 1275.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:35:00",
    bidOpen: 1275.15001,
    bidClose: 1275.15001,
    askOpen: 1275.65001,
    askClose: 1275.65001,
    bidHigh: 1275.25,
    bidLow: 1274.65001,
    askHigh: 1275.75,
    askLow: 1275.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:40:00",
    bidOpen: 1275.15001,
    bidClose: 1275.55,
    askOpen: 1275.65001,
    askClose: 1276.05,
    bidHigh: 1275.90001,
    bidLow: 1274.85,
    askHigh: 1276.40001,
    askLow: 1275.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:45:00",
    bidOpen: 1275.5,
    bidClose: 1275.15001,
    askOpen: 1276,
    askClose: 1275.65001,
    bidHigh: 1275.5,
    bidLow: 1274.8,
    askHigh: 1276,
    askLow: 1275.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:50:00",
    bidOpen: 1275.15001,
    bidClose: 1275.5,
    askOpen: 1275.65001,
    askClose: 1276,
    bidHigh: 1275.65001,
    bidLow: 1274.95001,
    askHigh: 1276.15001,
    askLow: 1275.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-16 23:55:00",
    bidOpen: 1275.55,
    bidClose: 1275.25,
    askOpen: 1276.05,
    askClose: 1275.75,
    bidHigh: 1275.55,
    bidLow: 1275.15001,
    askHigh: 1276.05,
    askLow: 1275.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:00:00",
    bidOpen: 1275.25,
    bidClose: 1275.25,
    askOpen: 1275.75,
    askClose: 1275.75,
    bidHigh: 1275.3,
    bidLow: 1275.15001,
    askHigh: 1275.8,
    askLow: 1275.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:05:00",
    bidOpen: 1275.25,
    bidClose: 1274.6,
    askOpen: 1275.75,
    askClose: 1275.1,
    bidHigh: 1275.40001,
    bidLow: 1274.40001,
    askHigh: 1275.90001,
    askLow: 1274.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:10:00",
    bidOpen: 1274.55,
    bidClose: 1276.05,
    askOpen: 1275.05,
    askClose: 1276.55,
    bidHigh: 1276.05,
    bidLow: 1274.55,
    askHigh: 1276.55,
    askLow: 1275.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:15:00",
    bidOpen: 1276.05,
    bidClose: 1275.3,
    askOpen: 1276.55,
    askClose: 1275.8,
    bidHigh: 1276.05,
    bidLow: 1275.15001,
    askHigh: 1276.55,
    askLow: 1275.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:20:00",
    bidOpen: 1275.20001,
    bidClose: 1275.5,
    askOpen: 1275.70001,
    askClose: 1276,
    bidHigh: 1275.55,
    bidLow: 1275.1,
    askHigh: 1276.05,
    askLow: 1275.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:25:00",
    bidOpen: 1275.55,
    bidClose: 1275.5,
    askOpen: 1276.05,
    askClose: 1276,
    bidHigh: 1275.70001,
    bidLow: 1275.20001,
    askHigh: 1276.20001,
    askLow: 1275.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:30:00",
    bidOpen: 1275.55,
    bidClose: 1275.3,
    askOpen: 1276.05,
    askClose: 1275.8,
    bidHigh: 1275.70001,
    bidLow: 1275.3,
    askHigh: 1276.20001,
    askLow: 1275.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:35:00",
    bidOpen: 1275.3,
    bidClose: 1275.35,
    askOpen: 1275.8,
    askClose: 1275.85,
    bidHigh: 1275.5,
    bidLow: 1275,
    askHigh: 1276,
    askLow: 1275.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:40:00",
    bidOpen: 1275.3,
    bidClose: 1275.5,
    askOpen: 1275.8,
    askClose: 1276,
    bidHigh: 1275.90001,
    bidLow: 1275.20001,
    askHigh: 1276.40001,
    askLow: 1275.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:45:00",
    bidOpen: 1275.5,
    bidClose: 1275.6,
    askOpen: 1276,
    askClose: 1276.1,
    bidHigh: 1275.6,
    bidLow: 1275.40001,
    askHigh: 1276.1,
    askLow: 1275.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:50:00",
    bidOpen: 1275.6,
    bidClose: 1275.90001,
    askOpen: 1276.1,
    askClose: 1276.40001,
    bidHigh: 1276,
    bidLow: 1275.6,
    askHigh: 1276.5,
    askLow: 1276.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 00:55:00",
    bidOpen: 1275.90001,
    bidClose: 1275.5,
    askOpen: 1276.40001,
    askClose: 1276,
    bidHigh: 1275.90001,
    bidLow: 1275.3,
    askHigh: 1276.40001,
    askLow: 1275.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:00:00",
    bidOpen: 1275.5,
    bidClose: 1272.75,
    askOpen: 1276,
    askClose: 1273.25,
    bidHigh: 1275.5,
    bidLow: 1272.35,
    askHigh: 1276,
    askLow: 1272.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:05:00",
    bidOpen: 1272.85,
    bidClose: 1271.5,
    askOpen: 1273.35,
    askClose: 1272,
    bidHigh: 1272.85,
    bidLow: 1270.40001,
    askHigh: 1273.35,
    askLow: 1270.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:10:00",
    bidOpen: 1271.6,
    bidClose: 1272,
    askOpen: 1272.1,
    askClose: 1272.5,
    bidHigh: 1272.3,
    bidLow: 1271.5,
    askHigh: 1272.8,
    askLow: 1272
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:15:00",
    bidOpen: 1271.95001,
    bidClose: 1272.70001,
    askOpen: 1272.45001,
    askClose: 1273.20001,
    bidHigh: 1272.75,
    bidLow: 1271.8,
    askHigh: 1273.25,
    askLow: 1272.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:20:00",
    bidOpen: 1272.65001,
    bidClose: 1272.15001,
    askOpen: 1273.15001,
    askClose: 1272.65001,
    bidHigh: 1272.75,
    bidLow: 1272.1,
    askHigh: 1273.25,
    askLow: 1272.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:25:00",
    bidOpen: 1272.15001,
    bidClose: 1273.1,
    askOpen: 1272.65001,
    askClose: 1273.6,
    bidHigh: 1273.1,
    bidLow: 1271.8,
    askHigh: 1273.6,
    askLow: 1272.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:30:00",
    bidOpen: 1273.1,
    bidClose: 1272.90001,
    askOpen: 1273.6,
    askClose: 1273.40001,
    bidHigh: 1273.1,
    bidLow: 1272.55,
    askHigh: 1273.6,
    askLow: 1273.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:35:00",
    bidOpen: 1272.8,
    bidClose: 1273.05,
    askOpen: 1273.3,
    askClose: 1273.55,
    bidHigh: 1273.40001,
    bidLow: 1272.70001,
    askHigh: 1273.90001,
    askLow: 1273.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:40:00",
    bidOpen: 1273.05,
    bidClose: 1274.05,
    askOpen: 1273.55,
    askClose: 1274.55,
    bidHigh: 1274.05,
    bidLow: 1273.05,
    askHigh: 1274.55,
    askLow: 1273.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:45:00",
    bidOpen: 1274.05,
    bidClose: 1272.95001,
    askOpen: 1274.55,
    askClose: 1273.45001,
    bidHigh: 1274.05,
    bidLow: 1272.85,
    askHigh: 1274.55,
    askLow: 1273.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:50:00",
    bidOpen: 1273.05,
    bidClose: 1273.20001,
    askOpen: 1273.55,
    askClose: 1273.70001,
    bidHigh: 1273.55,
    bidLow: 1272.85,
    askHigh: 1274.05,
    askLow: 1273.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 01:55:00",
    bidOpen: 1273.20001,
    bidClose: 1273.20001,
    askOpen: 1273.70001,
    askClose: 1273.70001,
    bidHigh: 1273.65001,
    bidLow: 1273.05,
    askHigh: 1274.15001,
    askLow: 1273.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:00:00",
    bidOpen: 1273.20001,
    bidClose: 1271.85,
    askOpen: 1273.70001,
    askClose: 1272.35,
    bidHigh: 1273.20001,
    bidLow: 1271.8,
    askHigh: 1273.70001,
    askLow: 1272.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:05:00",
    bidOpen: 1271.85,
    bidClose: 1272.3,
    askOpen: 1272.35,
    askClose: 1272.8,
    bidHigh: 1272.55,
    bidLow: 1271.65001,
    askHigh: 1273.05,
    askLow: 1272.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:10:00",
    bidOpen: 1272.3,
    bidClose: 1271.90001,
    askOpen: 1272.8,
    askClose: 1272.40001,
    bidHigh: 1272.3,
    bidLow: 1271.70001,
    askHigh: 1272.8,
    askLow: 1272.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:15:00",
    bidOpen: 1271.90001,
    bidClose: 1271.40001,
    askOpen: 1272.40001,
    askClose: 1271.90001,
    bidHigh: 1271.90001,
    bidLow: 1271.40001,
    askHigh: 1272.40001,
    askLow: 1271.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:20:00",
    bidOpen: 1271.40001,
    bidClose: 1272.15001,
    askOpen: 1271.90001,
    askClose: 1272.65001,
    bidHigh: 1272.15001,
    bidLow: 1271.3,
    askHigh: 1272.65001,
    askLow: 1271.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:25:00",
    bidOpen: 1272.1,
    bidClose: 1272.90001,
    askOpen: 1272.6,
    askClose: 1273.40001,
    bidHigh: 1273.35,
    bidLow: 1272.05,
    askHigh: 1273.85,
    askLow: 1272.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:30:00",
    bidOpen: 1272.85,
    bidClose: 1272.40001,
    askOpen: 1273.35,
    askClose: 1272.90001,
    bidHigh: 1272.85,
    bidLow: 1272.20001,
    askHigh: 1273.35,
    askLow: 1272.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:35:00",
    bidOpen: 1272.55,
    bidClose: 1272.5,
    askOpen: 1273.05,
    askClose: 1273,
    bidHigh: 1272.75,
    bidLow: 1272.35,
    askHigh: 1273.25,
    askLow: 1272.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:40:00",
    bidOpen: 1272.45001,
    bidClose: 1272.1,
    askOpen: 1272.95001,
    askClose: 1272.6,
    bidHigh: 1272.70001,
    bidLow: 1272.1,
    askHigh: 1273.20001,
    askLow: 1272.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:45:00",
    bidOpen: 1272.05,
    bidClose: 1272.40001,
    askOpen: 1272.55,
    askClose: 1272.90001,
    bidHigh: 1272.70001,
    bidLow: 1272.05,
    askHigh: 1273.20001,
    askLow: 1272.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:50:00",
    bidOpen: 1272.35,
    bidClose: 1272.6,
    askOpen: 1272.85,
    askClose: 1273.1,
    bidHigh: 1272.90001,
    bidLow: 1272.20001,
    askHigh: 1273.40001,
    askLow: 1272.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 02:55:00",
    bidOpen: 1272.6,
    bidClose: 1272.65001,
    askOpen: 1273.1,
    askClose: 1273.15001,
    bidHigh: 1272.65001,
    bidLow: 1272.20001,
    askHigh: 1273.15001,
    askLow: 1272.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:00:00",
    bidOpen: 1272.6,
    bidClose: 1273.1,
    askOpen: 1273.1,
    askClose: 1273.6,
    bidHigh: 1273.1,
    bidLow: 1272.6,
    askHigh: 1273.6,
    askLow: 1273.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:05:00",
    bidOpen: 1273.05,
    bidClose: 1272.70001,
    askOpen: 1273.55,
    askClose: 1273.20001,
    bidHigh: 1273.1,
    bidLow: 1272.70001,
    askHigh: 1273.6,
    askLow: 1273.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:10:00",
    bidOpen: 1272.70001,
    bidClose: 1273.40001,
    askOpen: 1273.20001,
    askClose: 1273.90001,
    bidHigh: 1273.40001,
    bidLow: 1272.70001,
    askHigh: 1273.90001,
    askLow: 1273.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:15:00",
    bidOpen: 1273.40001,
    bidClose: 1274,
    askOpen: 1273.90001,
    askClose: 1274.5,
    bidHigh: 1274,
    bidLow: 1273.35,
    askHigh: 1274.5,
    askLow: 1273.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:20:00",
    bidOpen: 1274,
    bidClose: 1273.05,
    askOpen: 1274.5,
    askClose: 1273.55,
    bidHigh: 1274.1,
    bidLow: 1273.05,
    askHigh: 1274.6,
    askLow: 1273.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:25:00",
    bidOpen: 1273.05,
    bidClose: 1273.20001,
    askOpen: 1273.55,
    askClose: 1273.70001,
    bidHigh: 1273.20001,
    bidLow: 1272.90001,
    askHigh: 1273.70001,
    askLow: 1273.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:30:00",
    bidOpen: 1273.20001,
    bidClose: 1273.90001,
    askOpen: 1273.70001,
    askClose: 1274.6,
    bidHigh: 1273.90001,
    bidLow: 1273,
    askHigh: 1274.6,
    askLow: 1273.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:35:00",
    bidOpen: 1273.90001,
    bidClose: 1273.95001,
    askOpen: 1274.6,
    askClose: 1274.65001,
    bidHigh: 1274.3,
    bidLow: 1273.6,
    askHigh: 1275,
    askLow: 1274.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:40:00",
    bidOpen: 1273.95001,
    bidClose: 1274.15001,
    askOpen: 1274.65001,
    askClose: 1274.85,
    bidHigh: 1274.20001,
    bidLow: 1273.95001,
    askHigh: 1274.90001,
    askLow: 1274.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:45:00",
    bidOpen: 1274.20001,
    bidClose: 1274.15001,
    askOpen: 1274.90001,
    askClose: 1274.85,
    bidHigh: 1274.3,
    bidLow: 1274.05,
    askHigh: 1275,
    askLow: 1274.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:50:00",
    bidOpen: 1274.15001,
    bidClose: 1274.35,
    askOpen: 1274.85,
    askClose: 1275.05,
    bidHigh: 1274.45001,
    bidLow: 1273.95001,
    askHigh: 1275.15001,
    askLow: 1274.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 03:55:00",
    bidOpen: 1274.3,
    bidClose: 1274.40001,
    askOpen: 1275,
    askClose: 1275.1,
    bidHigh: 1274.8,
    bidLow: 1274.25,
    askHigh: 1275.5,
    askLow: 1274.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:00:00",
    bidOpen: 1274.3,
    bidClose: 1274.45001,
    askOpen: 1275,
    askClose: 1275.15001,
    bidHigh: 1274.6,
    bidLow: 1274,
    askHigh: 1275.3,
    askLow: 1274.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:05:00",
    bidOpen: 1274.45001,
    bidClose: 1274.25,
    askOpen: 1275.15001,
    askClose: 1274.95001,
    bidHigh: 1274.65001,
    bidLow: 1274.25,
    askHigh: 1275.35,
    askLow: 1274.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:10:00",
    bidOpen: 1274.25,
    bidClose: 1274.1,
    askOpen: 1274.95001,
    askClose: 1274.8,
    bidHigh: 1274.25,
    bidLow: 1274,
    askHigh: 1274.95001,
    askLow: 1274.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:15:00",
    bidOpen: 1274.1,
    bidClose: 1274.3,
    askOpen: 1274.8,
    askClose: 1275,
    bidHigh: 1274.3,
    bidLow: 1274,
    askHigh: 1275,
    askLow: 1274.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:20:00",
    bidOpen: 1274.35,
    bidClose: 1274.40001,
    askOpen: 1275.05,
    askClose: 1275.1,
    bidHigh: 1274.55,
    bidLow: 1274.25,
    askHigh: 1275.25,
    askLow: 1274.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:25:00",
    bidOpen: 1274.40001,
    bidClose: 1274.3,
    askOpen: 1275.1,
    askClose: 1275,
    bidHigh: 1274.45001,
    bidLow: 1274.3,
    askHigh: 1275.15001,
    askLow: 1275
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:30:00",
    bidOpen: 1274.3,
    bidClose: 1274,
    askOpen: 1275,
    askClose: 1274.70001,
    bidHigh: 1274.3,
    bidLow: 1273.85,
    askHigh: 1275,
    askLow: 1274.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:35:00",
    bidOpen: 1273.95001,
    bidClose: 1274.40001,
    askOpen: 1274.65001,
    askClose: 1275.1,
    bidHigh: 1274.5,
    bidLow: 1273.85,
    askHigh: 1275.20001,
    askLow: 1274.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:40:00",
    bidOpen: 1274.45001,
    bidClose: 1274.3,
    askOpen: 1275.15001,
    askClose: 1275,
    bidHigh: 1274.5,
    bidLow: 1274.20001,
    askHigh: 1275.20001,
    askLow: 1274.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:45:00",
    bidOpen: 1274.25,
    bidClose: 1273.8,
    askOpen: 1274.95001,
    askClose: 1274.5,
    bidHigh: 1274.40001,
    bidLow: 1273.70001,
    askHigh: 1275.1,
    askLow: 1274.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:50:00",
    bidOpen: 1273.75,
    bidClose: 1273.5,
    askOpen: 1274.45001,
    askClose: 1274.20001,
    bidHigh: 1273.85,
    bidLow: 1273.45001,
    askHigh: 1274.55,
    askLow: 1274.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 04:55:00",
    bidOpen: 1273.5,
    bidClose: 1273.6,
    askOpen: 1274.20001,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.5,
    askHigh: 1274.3,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:00:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:05:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:10:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:15:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:20:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:25:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:30:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:35:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:40:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:45:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:50:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 05:55:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:00:00",
    bidOpen: 1273.6,
    bidClose: 1273.6,
    askOpen: 1274.1,
    askClose: 1274.1,
    bidHigh: 1273.6,
    bidLow: 1273.6,
    askHigh: 1274.1,
    askLow: 1274.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:05:00",
    bidOpen: 1273.95001,
    bidClose: 1274.55,
    askOpen: 1274.95001,
    askClose: 1275.55,
    bidHigh: 1274.6,
    bidLow: 1273.85,
    askHigh: 1275.6,
    askLow: 1274.85
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:10:00",
    bidOpen: 1274.6,
    bidClose: 1274.6,
    askOpen: 1275.6,
    askClose: 1275.6,
    bidHigh: 1274.8,
    bidLow: 1274.45001,
    askHigh: 1275.8,
    askLow: 1275.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:15:00",
    bidOpen: 1274.6,
    bidClose: 1274.75,
    askOpen: 1275.6,
    askClose: 1275.75,
    bidHigh: 1274.90001,
    bidLow: 1274.5,
    askHigh: 1275.90001,
    askLow: 1275.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:20:00",
    bidOpen: 1274.75,
    bidClose: 1274.70001,
    askOpen: 1275.75,
    askClose: 1275.70001,
    bidHigh: 1274.90001,
    bidLow: 1274.5,
    askHigh: 1275.90001,
    askLow: 1275.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:25:00",
    bidOpen: 1274.75,
    bidClose: 1274.65001,
    askOpen: 1275.75,
    askClose: 1275.65001,
    bidHigh: 1274.90001,
    bidLow: 1274.5,
    askHigh: 1275.90001,
    askLow: 1275.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:30:00",
    bidOpen: 1274.65001,
    bidClose: 1274.75,
    askOpen: 1275.65001,
    askClose: 1275.75,
    bidHigh: 1275.15001,
    bidLow: 1274.55,
    askHigh: 1276.15001,
    askLow: 1275.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:35:00",
    bidOpen: 1274.70001,
    bidClose: 1274.8,
    askOpen: 1275.70001,
    askClose: 1275.8,
    bidHigh: 1275.1,
    bidLow: 1274.6,
    askHigh: 1276.1,
    askLow: 1275.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:40:00",
    bidOpen: 1274.8,
    bidClose: 1274.70001,
    askOpen: 1275.8,
    askClose: 1275.70001,
    bidHigh: 1274.90001,
    bidLow: 1274.65001,
    askHigh: 1275.90001,
    askLow: 1275.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:45:00",
    bidOpen: 1274.65001,
    bidClose: 1274.6,
    askOpen: 1275.65001,
    askClose: 1275.6,
    bidHigh: 1274.70001,
    bidLow: 1274.25,
    askHigh: 1275.70001,
    askLow: 1275.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:50:00",
    bidOpen: 1274.55,
    bidClose: 1274.45001,
    askOpen: 1275.55,
    askClose: 1275.45001,
    bidHigh: 1274.65001,
    bidLow: 1274.40001,
    askHigh: 1275.65001,
    askLow: 1275.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 06:55:00",
    bidOpen: 1274.45001,
    bidClose: 1274.55,
    askOpen: 1275.45001,
    askClose: 1275.55,
    bidHigh: 1274.55,
    bidLow: 1274.35,
    askHigh: 1275.55,
    askLow: 1275.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:00:00",
    bidOpen: 1274.55,
    bidClose: 1275.1,
    askOpen: 1275.55,
    askClose: 1276.1,
    bidHigh: 1275.15001,
    bidLow: 1274.55,
    askHigh: 1276.15001,
    askLow: 1275.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:05:00",
    bidOpen: 1275.15001,
    bidClose: 1274.70001,
    askOpen: 1276.15001,
    askClose: 1275.70001,
    bidHigh: 1275.15001,
    bidLow: 1274.5,
    askHigh: 1276.15001,
    askLow: 1275.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:10:00",
    bidOpen: 1274.6,
    bidClose: 1274.70001,
    askOpen: 1275.6,
    askClose: 1275.70001,
    bidHigh: 1274.75,
    bidLow: 1274.55,
    askHigh: 1275.75,
    askLow: 1275.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:15:00",
    bidOpen: 1274.75,
    bidClose: 1274.6,
    askOpen: 1275.75,
    askClose: 1275.6,
    bidHigh: 1274.75,
    bidLow: 1274.40001,
    askHigh: 1275.75,
    askLow: 1275.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:20:00",
    bidOpen: 1274.65001,
    bidClose: 1274.40001,
    askOpen: 1275.65001,
    askClose: 1275.40001,
    bidHigh: 1274.75,
    bidLow: 1274.3,
    askHigh: 1275.75,
    askLow: 1275.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:25:00",
    bidOpen: 1274.3,
    bidClose: 1274,
    askOpen: 1275.3,
    askClose: 1275,
    bidHigh: 1274.35,
    bidLow: 1273.90001,
    askHigh: 1275.35,
    askLow: 1274.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:30:00",
    bidOpen: 1274.05,
    bidClose: 1274.25,
    askOpen: 1275.05,
    askClose: 1275.25,
    bidHigh: 1274.25,
    bidLow: 1273.8,
    askHigh: 1275.25,
    askLow: 1274.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:35:00",
    bidOpen: 1274.25,
    bidClose: 1273.90001,
    askOpen: 1275.25,
    askClose: 1274.90001,
    bidHigh: 1274.25,
    bidLow: 1273.90001,
    askHigh: 1275.25,
    askLow: 1274.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:40:00",
    bidOpen: 1273.90001,
    bidClose: 1273.85,
    askOpen: 1274.90001,
    askClose: 1274.85,
    bidHigh: 1274,
    bidLow: 1273.70001,
    askHigh: 1275,
    askLow: 1274.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:45:00",
    bidOpen: 1273.85,
    bidClose: 1273.70001,
    askOpen: 1274.85,
    askClose: 1274.70001,
    bidHigh: 1274,
    bidLow: 1273.65001,
    askHigh: 1275,
    askLow: 1274.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:50:00",
    bidOpen: 1273.65001,
    bidClose: 1274.5,
    askOpen: 1274.65001,
    askClose: 1275.5,
    bidHigh: 1274.5,
    bidLow: 1273.65001,
    askHigh: 1275.5,
    askLow: 1274.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 07:55:00",
    bidOpen: 1274.40001,
    bidClose: 1275.1,
    askOpen: 1275.40001,
    askClose: 1275.6,
    bidHigh: 1275.20001,
    bidLow: 1274.25,
    askHigh: 1276,
    askLow: 1275.25
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:00:00",
    bidOpen: 1275.05,
    bidClose: 1274.45001,
    askOpen: 1275.55,
    askClose: 1274.95001,
    bidHigh: 1275.05,
    bidLow: 1274.25,
    askHigh: 1275.55,
    askLow: 1274.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:05:00",
    bidOpen: 1274.40001,
    bidClose: 1274.85,
    askOpen: 1274.90001,
    askClose: 1275.35,
    bidHigh: 1275.05,
    bidLow: 1274.40001,
    askHigh: 1275.55,
    askLow: 1274.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:10:00",
    bidOpen: 1274.85,
    bidClose: 1275.65001,
    askOpen: 1275.35,
    askClose: 1276.15001,
    bidHigh: 1275.65001,
    bidLow: 1274.85,
    askHigh: 1276.15001,
    askLow: 1275.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:15:00",
    bidOpen: 1275.65001,
    bidClose: 1275.3,
    askOpen: 1276.15001,
    askClose: 1275.8,
    bidHigh: 1276.15001,
    bidLow: 1275.20001,
    askHigh: 1276.65001,
    askLow: 1275.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:20:00",
    bidOpen: 1275.25,
    bidClose: 1275.55,
    askOpen: 1275.75,
    askClose: 1276.05,
    bidHigh: 1275.90001,
    bidLow: 1275.15001,
    askHigh: 1276.40001,
    askLow: 1275.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:25:00",
    bidOpen: 1275.5,
    bidClose: 1276.05,
    askOpen: 1276,
    askClose: 1276.55,
    bidHigh: 1276.05,
    bidLow: 1275.40001,
    askHigh: 1276.55,
    askLow: 1275.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:30:00",
    bidOpen: 1276.05,
    bidClose: 1276.20001,
    askOpen: 1276.55,
    askClose: 1276.70001,
    bidHigh: 1276.90001,
    bidLow: 1276,
    askHigh: 1277.40001,
    askLow: 1276.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:35:00",
    bidOpen: 1276.15001,
    bidClose: 1276.40001,
    askOpen: 1276.65001,
    askClose: 1276.90001,
    bidHigh: 1276.40001,
    bidLow: 1275.8,
    askHigh: 1276.90001,
    askLow: 1276.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:40:00",
    bidOpen: 1276.40001,
    bidClose: 1276.90001,
    askOpen: 1276.90001,
    askClose: 1277.40001,
    bidHigh: 1277,
    bidLow: 1276.3,
    askHigh: 1277.5,
    askLow: 1276.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:45:00",
    bidOpen: 1276.90001,
    bidClose: 1276.1,
    askOpen: 1277.40001,
    askClose: 1276.6,
    bidHigh: 1276.90001,
    bidLow: 1276.1,
    askHigh: 1277.40001,
    askLow: 1276.6
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:50:00",
    bidOpen: 1276.20001,
    bidClose: 1276.6,
    askOpen: 1276.70001,
    askClose: 1277.1,
    bidHigh: 1276.70001,
    bidLow: 1276.20001,
    askHigh: 1277.20001,
    askLow: 1276.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 08:55:00",
    bidOpen: 1276.65001,
    bidClose: 1276,
    askOpen: 1277.15001,
    askClose: 1276.5,
    bidHigh: 1276.75,
    bidLow: 1275.95001,
    askHigh: 1277.25,
    askLow: 1276.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:00:00",
    bidOpen: 1276.15001,
    bidClose: 1276.3,
    askOpen: 1276.65001,
    askClose: 1276.8,
    bidHigh: 1276.55,
    bidLow: 1275.8,
    askHigh: 1277.05,
    askLow: 1276.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:05:00",
    bidOpen: 1276.35,
    bidClose: 1275.70001,
    askOpen: 1276.85,
    askClose: 1276.20001,
    bidHigh: 1276.35,
    bidLow: 1275.6,
    askHigh: 1276.85,
    askLow: 1276.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:10:00",
    bidOpen: 1275.70001,
    bidClose: 1275.40001,
    askOpen: 1276.20001,
    askClose: 1275.90001,
    bidHigh: 1276.25,
    bidLow: 1275.25,
    askHigh: 1276.75,
    askLow: 1275.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:15:00",
    bidOpen: 1275.40001,
    bidClose: 1276,
    askOpen: 1275.90001,
    askClose: 1276.5,
    bidHigh: 1276.20001,
    bidLow: 1275.3,
    askHigh: 1276.70001,
    askLow: 1275.8
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:20:00",
    bidOpen: 1276,
    bidClose: 1276.40001,
    askOpen: 1276.5,
    askClose: 1276.90001,
    bidHigh: 1276.8,
    bidLow: 1276,
    askHigh: 1277.3,
    askLow: 1276.5
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:25:00",
    bidOpen: 1276.3,
    bidClose: 1276.45001,
    askOpen: 1276.8,
    askClose: 1276.95001,
    bidHigh: 1276.70001,
    bidLow: 1276.15001,
    askHigh: 1277.20001,
    askLow: 1276.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:30:00",
    bidOpen: 1276.45001,
    bidClose: 1277.6,
    askOpen: 1276.95001,
    askClose: 1278.1,
    bidHigh: 1277.6,
    bidLow: 1276.45001,
    askHigh: 1278.1,
    askLow: 1276.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:35:00",
    bidOpen: 1277.6,
    bidClose: 1277.65001,
    askOpen: 1278.1,
    askClose: 1278.15001,
    bidHigh: 1278.20001,
    bidLow: 1277.5,
    askHigh: 1278.70001,
    askLow: 1278
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:40:00",
    bidOpen: 1277.6,
    bidClose: 1277.95001,
    askOpen: 1278.1,
    askClose: 1278.45001,
    bidHigh: 1278.3,
    bidLow: 1277.55,
    askHigh: 1278.8,
    askLow: 1278.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:45:00",
    bidOpen: 1277.90001,
    bidClose: 1278,
    askOpen: 1278.40001,
    askClose: 1278.5,
    bidHigh: 1278.35,
    bidLow: 1277.70001,
    askHigh: 1278.85,
    askLow: 1278.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:50:00",
    bidOpen: 1278,
    bidClose: 1278.65001,
    askOpen: 1278.5,
    askClose: 1279.15001,
    bidHigh: 1279.6,
    bidLow: 1277.90001,
    askHigh: 1280.1,
    askLow: 1278.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 09:55:00",
    bidOpen: 1278.65001,
    bidClose: 1279.25,
    askOpen: 1279.15001,
    askClose: 1279.75,
    bidHigh: 1279.25,
    bidLow: 1278.65001,
    askHigh: 1279.75,
    askLow: 1279.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:00:00",
    bidOpen: 1279.25,
    bidClose: 1279.25,
    askOpen: 1279.75,
    askClose: 1279.75,
    bidHigh: 1279.35,
    bidLow: 1278.8,
    askHigh: 1279.85,
    askLow: 1279.3
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:05:00",
    bidOpen: 1279.3,
    bidClose: 1278.65001,
    askOpen: 1279.8,
    askClose: 1279.15001,
    bidHigh: 1279.35,
    bidLow: 1278.25,
    askHigh: 1279.85,
    askLow: 1278.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:10:00",
    bidOpen: 1278.65001,
    bidClose: 1278.5,
    askOpen: 1279.15001,
    askClose: 1279,
    bidHigh: 1278.8,
    bidLow: 1278.45001,
    askHigh: 1279.3,
    askLow: 1278.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:15:00",
    bidOpen: 1278.40001,
    bidClose: 1278.55,
    askOpen: 1278.90001,
    askClose: 1279.05,
    bidHigh: 1278.65001,
    bidLow: 1278.40001,
    askHigh: 1279.15001,
    askLow: 1278.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:20:00",
    bidOpen: 1278.55,
    bidClose: 1278.70001,
    askOpen: 1279.05,
    askClose: 1279.20001,
    bidHigh: 1278.8,
    bidLow: 1278.45001,
    askHigh: 1279.3,
    askLow: 1278.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:25:00",
    bidOpen: 1278.70001,
    bidClose: 1278.90001,
    askOpen: 1279.20001,
    askClose: 1279.40001,
    bidHigh: 1279.15001,
    bidLow: 1278.70001,
    askHigh: 1279.65001,
    askLow: 1279.20001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:30:00",
    bidOpen: 1278.90001,
    bidClose: 1279.90001,
    askOpen: 1279.40001,
    askClose: 1280.40001,
    bidHigh: 1280,
    bidLow: 1278.90001,
    askHigh: 1280.5,
    askLow: 1279.40001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:35:00",
    bidOpen: 1279.90001,
    bidClose: 1279.15001,
    askOpen: 1280.40001,
    askClose: 1279.65001,
    bidHigh: 1279.90001,
    bidLow: 1279.05,
    askHigh: 1280.40001,
    askLow: 1279.55
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:40:00",
    bidOpen: 1279.05,
    bidClose: 1279.25,
    askOpen: 1279.55,
    askClose: 1279.75,
    bidHigh: 1279.35,
    bidLow: 1278.95001,
    askHigh: 1279.85,
    askLow: 1279.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:45:00",
    bidOpen: 1279.35,
    bidClose: 1279.70001,
    askOpen: 1279.85,
    askClose: 1280.20001,
    bidHigh: 1279.95001,
    bidLow: 1279.20001,
    askHigh: 1280.45001,
    askLow: 1279.70001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:50:00",
    bidOpen: 1279.70001,
    bidClose: 1280.05,
    askOpen: 1280.20001,
    askClose: 1280.55,
    bidHigh: 1280.05,
    bidLow: 1279.65001,
    askHigh: 1280.55,
    askLow: 1280.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 10:55:00",
    bidOpen: 1280.15001,
    bidClose: 1279.85,
    askOpen: 1280.65001,
    askClose: 1280.35,
    bidHigh: 1280.85,
    bidLow: 1279.65001,
    askHigh: 1281.35,
    askLow: 1280.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:00:00",
    bidOpen: 1279.8,
    bidClose: 1278.95001,
    askOpen: 1280.3,
    askClose: 1279.45001,
    bidHigh: 1280.15001,
    bidLow: 1278.65001,
    askHigh: 1280.65001,
    askLow: 1279.15001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:05:00",
    bidOpen: 1278.90001,
    bidClose: 1278.55,
    askOpen: 1279.40001,
    askClose: 1279.05,
    bidHigh: 1278.90001,
    bidLow: 1277.95001,
    askHigh: 1279.40001,
    askLow: 1278.45001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:10:00",
    bidOpen: 1278.45001,
    bidClose: 1278.65001,
    askOpen: 1278.95001,
    askClose: 1279.15001,
    bidHigh: 1279.25,
    bidLow: 1278.25,
    askHigh: 1279.75,
    askLow: 1278.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:15:00",
    bidOpen: 1278.6,
    bidClose: 1278.45001,
    askOpen: 1279.1,
    askClose: 1278.95001,
    bidHigh: 1279.5,
    bidLow: 1278.45001,
    askHigh: 1280,
    askLow: 1278.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:20:00",
    bidOpen: 1278.45001,
    bidClose: 1278.65001,
    askOpen: 1278.95001,
    askClose: 1279.15001,
    bidHigh: 1278.75,
    bidLow: 1278.45001,
    askHigh: 1279.25,
    askLow: 1278.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:25:00",
    bidOpen: 1278.65001,
    bidClose: 1278.25,
    askOpen: 1279.15001,
    askClose: 1278.75,
    bidHigh: 1278.75,
    bidLow: 1278.15001,
    askHigh: 1279.25,
    askLow: 1278.65001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:30:00",
    bidOpen: 1278.20001,
    bidClose: 1278.45001,
    askOpen: 1278.70001,
    askClose: 1278.95001,
    bidHigh: 1278.75,
    bidLow: 1277.85,
    askHigh: 1279.25,
    askLow: 1278.35
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:35:00",
    bidOpen: 1278.45001,
    bidClose: 1278.85,
    askOpen: 1278.95001,
    askClose: 1279.35,
    bidHigh: 1278.95001,
    bidLow: 1278.45001,
    askHigh: 1279.45001,
    askLow: 1278.95001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:40:00",
    bidOpen: 1278.85,
    bidClose: 1278.45001,
    askOpen: 1279.35,
    askClose: 1278.95001,
    bidHigh: 1278.90001,
    bidLow: 1278.40001,
    askHigh: 1279.40001,
    askLow: 1278.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:45:00",
    bidOpen: 1278.45001,
    bidClose: 1278.85,
    askOpen: 1278.95001,
    askClose: 1279.35,
    bidHigh: 1279.05,
    bidLow: 1278.40001,
    askHigh: 1279.55,
    askLow: 1278.90001
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:50:00",
    bidOpen: 1278.90001,
    bidClose: 1278.65001,
    askOpen: 1279.40001,
    askClose: 1279.15001,
    bidHigh: 1279.45001,
    bidLow: 1278.6,
    askHigh: 1279.95001,
    askLow: 1279.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 11:55:00",
    bidOpen: 1278.65001,
    bidClose: 1278.40001,
    askOpen: 1279.15001,
    askClose: 1278.90001,
    bidHigh: 1278.75,
    bidLow: 1278.25,
    askHigh: 1279.25,
    askLow: 1278.75
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 12:00:00",
    bidOpen: 1278.5,
    bidClose: 1278.90001,
    askOpen: 1279,
    askClose: 1279.40001,
    bidHigh: 1279.35,
    bidLow: 1278.5,
    askHigh: 1279.85,
    askLow: 1279
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 12:05:00",
    bidOpen: 1278.90001,
    bidClose: 1278.90001,
    askOpen: 1279.40001,
    askClose: 1279.40001,
    bidHigh: 1279.1,
    bidLow: 1278.6,
    askHigh: 1279.6,
    askLow: 1279.1
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 12:10:00",
    bidOpen: 1278.90001,
    bidClose: 1278.95001,
    askOpen: 1279.40001,
    askClose: 1279.45001,
    bidHigh: 1279,
    bidLow: 1278.55,
    askHigh: 1279.5,
    askLow: 1279.05
  },
  {
    symbol: "XAUUSD",
    updatedDate: "2016-05-17 12:15:00",
    bidOpen: 1278.90001,
    bidClose: 1278.90001,
    askOpen: 1279.40001,
    askClose: 1279.40001,
    bidHigh: 1279,
    bidLow: 1278.65001,
    askHigh: 1279.5,
    askLow: 1279.15001
  }
];

let dataSetlcY = [];
let dataSetlcX = [];
for (let i = 0; i < rates.length; i++) {
  let data = rates[i];
  let priceDate = new Date(data.updatedDate.replace(" ", "T") + "Z");
  dataSetlcX.push(
    ("0" + priceDate.getHours()).slice(-2) +
      ":" +
      ("0" + priceDate.getMinutes()).slice(-2)
  );
  dataSetlcY.push(data.askClose);
}

// // var fillEstrategias = function(rates) {
var dataSetmlY1 = [];
var dataSetmlY2 = [];
var dataSetmlY3 = [];
var dataSetmlX = [];
for (let i = 0; i < rates.length; i++) {
  var data = rates[i];
  var priceDate = new Date(data.updatedDate.replace(" ", "T") + "Z");
  dataSetmlX.push(
    ("0" + priceDate.getHours()).slice(-2) +
      ":" +
      ("0" + priceDate.getMinutes()).slice(-2)
  );
  dataSetmlY1.push(data.askClose);
  dataSetmlY2.push(data.askLow);
  dataSetmlY3.push(data.bidOpen);
}
