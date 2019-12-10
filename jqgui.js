$.fn.fieldInputPlusMinus = function() {
  const fieldId = this.attr("id");
  const fieldWidth =
    "width: " +
    (this.data("componentWidth") ? this.data("componentWidth") : "8em") +
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
  if (this.data("componentTooltip")) {
    divControl.setAttribute("data-tooltip", this.data("componentTooltip"));
  }

  const divPlusMinus = document.createElement("div");
  divPlusMinus.setAttribute("class", "field-plus-minus has-addons flex");
  divControl.appendChild(divPlusMinus);
  this.append(divControl);

  const input = document.createElement("input");
  input.setAttribute("id", fieldId);
  input.setAttribute("class", "input");
  input.setAttribute("type", "text");
  input.setAttribute("style", fieldWidth);
  input.setAttribute("data-parsley-trigger", "keyup");
  input.setAttribute("data-parsley-maxlength", "32");
  input.setAttribute(
    "data-parsley-maxlength-message",
    "Solo puede ingresar 32 caracteres."
  );
  input.setAttribute("data-parsley-validation-threshold", "10");
  input.setAttribute(
    "data-parsley-errors-container",
    "field_error_block_" + fieldId
  );
  divPlusMinus.appendChild(input);

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

  fieldPlusMinus(fieldId, {});
};


$.fn.button = function() {
  const imagenames= [
                ["button-accept",      "btn-aceptar.png",        "reset"],
                ["button-search",      "btn-consultar_32x32.png","submit"],
                ["button-save",        "btn-enviar.png",         ""],
                ["button-send",        "btn-enviar.png",         ""],
                ["button-add",         "btn-agregar.png",        ""],
                ["button-cancel",      "btn-cancelar.png",       "reset"],
                ["button-clean",       "btn-limpiar_32x32.png",  "reset"],
                ["button-delete",      "btn-borrar.png",         "submit"],
                ["button-filter-clean","btn-filter-clean.png",   "reset"],
                ["button-filter",      "btn-filter.png",         "submit"],
                ["button-pdf",         "btn-pdf_32x32.png",      ""],
                ["button-reset",       "btn-reiniciar.png",      "submit"],
                ["button-validate",    "btn-validar.png",        ""],
                ["button-xls",         "btn-xls_32x32.png",      ""]
               ]

  var imgname=""
  var type=""

  for(i=0;i<imagenames.length;i++)
    if (imagenames[i][0] ===this.data("componentType")){
      imgname= imagenames[i][1];
      type   = imagenames[i][2];
      break;
    }


if (imgname!=="") {
  const label = this.data("componentLabel") ? this.data("componentLabel"):"";
  const tooltip = this.data("componentTooltip") ? this.data("componentTooltip"):"";

  var btnclass = "button big-button"
  if (this.data("componentSize")==="medium")
    btnclass="button medium-button flex items-center"
  if (this.data("componentSize")==="small")
    btnclass="button small-button"

  const divbutton = document.createElement("div");

  const button = document.createElement("button");
  button.setAttribute("id", this.data("componentType")+"_"+this.attr("id") );

  button.setAttribute("class", btnclass);

  if (type!=="" && btnclass === "button big-button") {
    button.setAttribute("type", type);
  }
  if (this.data("componentDisabled")==="true") {
    button.setAttribute("disabled","disabled");
  }

  if (tooltip !== "") {
    button.setAttribute("title",tooltip);
  }

  const img = document.createElement("img");
  img.setAttribute("src", "../../assets/images/"+imgname);
  button.appendChild(img);

  if (this.data("componentSize")!=="small"){
   const span = document.createElement("span");
   span.innerHTML = label;
   button.appendChild(span);
  }

  this.append(divbutton.appendChild(button));
 }
};

$.fn.fieldInput = function() {
  this.filter("[data-component-type='text']").each(function() {
    const c = $(this);
    const fieldId = c.attr("id");
    console.log("Id", fieldId);
    const fieldWidth =
      "width: " +
      (c.data("componentWidth") ? c.data("componentWidth") : "8em") +
      ";";
    const fieldClass =
      "is_" +
      (c.data("componentOrientation")
        ? c.data("componentOrientation")
        : "vertical");
    const spanRequiredClass =
      "pr-3 " + (c.data("componentRequired") == true ? "required" : "");

    c.attr("id", "field_" + fieldId);
    c.attr("class", "field " + fieldClass);

    const divLabel = document.createElement("div");
    divLabel.setAttribute("class", "field-label flex");

    const label = document.createElement("label");
    label.setAttribute("for", fieldId);
    label.innerHTML = c.data("componentLabel");
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

    const divFieldInput = document.createElement("div");
    divFieldInput.setAttribute("class", "field-input has-addons flex");
    if (c.data("componentTooltip")) {
      divFieldInput.setAttribute("data-tooltip", c.data("componentTooltip"));
    }
    divControl.appendChild(divFieldInput);
    c.append(divControl);

    const input = document.createElement("input");
    input.setAttribute("id", fieldId);
    input.setAttribute("class", "input");
    input.setAttribute("type", "text");
    input.setAttribute("style", fieldWidth);
    input.setAttribute("data-parsley-trigger", "keyup");
    input.setAttribute("data-parsley-maxlength", "32");
    input.setAttribute(
      "data-parsley-maxlength-message",
      "Solo puede ingresar 32 caracteres."
    );
    input.setAttribute("data-parsley-validation-threshold", "10");
    input.setAttribute(
      "data-parsley-errors-container",
      "field_error_block_" + fieldId
    );
    divFieldInput.appendChild(input);
  });
};
