$.fn.fieldInputPlusMinus = function() {
  const fieldId = this.attr("id");
  const fieldMaxsize = this.data("componentMaxsize");
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

  fieldPlusMinus(fieldId, { maxsize: fieldMaxsize });
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

    const divbutton = document.createElement("div");

    const button = document.createElement("button");
    button.setAttribute(
      "id",
      this.data("componentType") + "_" + this.attr("id")
    );

    button.setAttribute("class", btnclass);

    if (type !== "" && btnclass === "button big-button") {
      button.setAttribute("type", type);
    }
    if (this.data("componentDisabled") === "true") {
      button.setAttribute("disabled", "disabled");
    }

    if (tooltip !== "") {
      button.setAttribute("title", tooltip);
    }

    const img = document.createElement("img");
    img.setAttribute("src", "../../assets/images/" + imgname);
    button.appendChild(img);

    if (this.data("componentSize") !== "small") {
      const span = document.createElement("span");
      span.innerHTML = label;
      button.appendChild(span);
    }

    this.append(divbutton.appendChild(button));
  }
};

// objects array
const buildArray = stringItems => {
  let begin = 0;
  let end = 0;
  let element = "{";
  let element2 = "}";
  let arrayItems = [];

  let idx = 0;
  let idy = 0;

  idx = stringItems.indexOf(element);
  idy = stringItems.indexOf(element2);
  arrayItems.push(stringItems.substring(idx, idy));

  return arrayItems;
};

$.fn.fieldSelectPlusMinus = function() {
  const fieldId = this.attr("id");
  const fieldMaxsize = this.data("componentMaxsize");
  const fieldItems = this.data("componentItems");

  let arrayItems = [];
  arrayItems = buildArray(fieldItems);

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

  const input = document.createElement("select");
  input.setAttribute("id", fieldId);
  input.setAttribute("class", "select2");
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

  fieldSelectPlusMinus(fieldId, { maxsize: fieldMaxsize });
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

//----------------------------------------- SECCION FECHAS -----------------------------------------
$.fn.fielDate = function() {
  const fieldId = this.attr("id");
  const fieldLabel = this.attr("data-component-label");
  const spanRequiredClass = "pr-3 " + (this.data("componentRequired") == true ? "required" : "");
  const fieldClassOrientation = "is_" + (this.data("componentOrientation") ? this.data("componentOrientation") : "vertical");

  this.attr("id", "field_" + fieldId);
  this.attr("class", "field " + fieldClassOrientation);
  this.removeAttr("data-component-type");
  this.removeAttr("data-component-label");
  this.removeAttr("data-component-required");
  this.removeAttr("data-component-orientation");

    const divLbl = document.createElement("div");
    //divLbl.setAttribute("id", "divLbl");
    divLbl.setAttribute("class", "field-label flex");
      const label = document.createElement("label");
      var t = document.createTextNode(fieldLabel);
      label.setAttribute("for", fieldId);
      label.appendChild(t);
        const spanRequired = document.createElement("span");
        spanRequired.setAttribute("class", spanRequiredClass);
        if (this.data("componentRequired") == true) {
          spanRequired.innerHTML = "*";
        }
      label.appendChild(spanRequired);
    divLbl.appendChild(label);
  
    const divDateTT = document.createElement("div");
    divDateTT.setAttribute("class", "field-control");

      const divDate = document.createElement("div");
      divDate.setAttribute("class", "field-input flex items-center");
        const inpt = document.createElement("input");
        //inpt.setAttribute("class", "input datepicker hasDatepicker");
        inpt.setAttribute("class", "input datepicker");
        inpt.setAttribute("id", "inpt-"+fieldId);
        inpt.setAttribute("style", "width: 8em;");
        inpt.setAttribute("data-parsley-errors-container", "#field_error_block_"+fieldId);
        inpt.setAttribute("maxlength", "10");
        
        /*
        const image = document.createElement("img");
        image.setAttribute("class", "ui-datepicker-trigger");
        image.setAttribute("src", "./images/btn-calendario.svg");
        image.setAttribute("alt", "");
        image.setAttribute("title", "");
        divDate.appendChild(image);//divDate.append(image);
        */
        const inpt2 = document.createElement("input");
        inpt2.setAttribute("class", "pl-1");
        inpt2.setAttribute("type", "image");
        inpt2.setAttribute("id", "clear_"+fieldId);
        inpt2.setAttribute("src", "../../assets/images/meddelete.png");
        inpt2.setAttribute("style", "width:15px;height:15px;");
        inpt2.setAttribute("value", " ");
        
        const span = document.createElement("span");
        span.setAttribute("class", "field-error flex");
          const divErrorTip = document.createElement("div");
          divErrorTip.setAttribute("class", "error-tip");  
        
          const divErrorMsg = document.createElement("div");
          divErrorMsg.setAttribute("class", "error-msg");
          divErrorMsg.setAttribute("id", "field_error_block_"+fieldId);  
        span.appendChild(divErrorTip);
        span.appendChild(divErrorMsg);
      divDate.appendChild(inpt);  
      divDate.appendChild(inpt2);
      divDate.appendChild(span);
    divDateTT.append(divDate);
  this.append(divLbl);  
  this.append(divDateTT);

//-----------------------------------------------------------------------------
  fieldDateClear(fieldId);      

  $(".datepicker").mask("99-99-9999");

  $( function() {
    $("#inpt-"+fieldId).datepicker({

      showOn: "button",
      buttonImage: "../../assets/images/btn-calendario.svg",
      buttonImageOnly: true,
      buttonText: "Select date"
    });
  } );
//-----------------------------------------------------------------------------
  $(".datepicker").focusout(function(){
    let date = $(this)
    .val()
    .toString();
    if (date != ""){
      verifyDate(date, $(this));
    }
  });

  const verifyDate = (data, obj) => {
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
  
  }

  $(".datepicker").on("keydown",function(e){
    let date = $(this)
    .val()
    .toString();

    if (e.which == 13) {
      e.preventDefault();
      if (date != ""){
        verifyDate(date, $(this));
      }
    }
  });
};

$.fn.fieldOptions = function() {
  const fieldId = this.attr("id");
  const fieldLabel = this.attr("data-component-label");
  const spanRequiredClass =
    "pr-3 " + (this.data("componentRequired") == true ? "required" : "");
  const fieldClassOrientation =
    "is_" +
    (this.data("componentOrientation")
      ? this.data("componentOrientation")
      : "vertical");
  const childrenDIV = this.children("div");
  console.log("childrenDIV: ", childrenDIV);

  //Se indica id y orientacion del div principal
  this.attr("id", "field_" + fieldId);
  this.attr("class", "field " + fieldClassOrientation);
  this.removeAttr("data-component-type");
  this.removeAttr("data-component-label");
  this.removeAttr("data-component-required");
  this.removeAttr("data-component-orientation");

  //Se agrega div vacio
  const div1 = document.createElement("div");
  div1.setAttribute("class", "field-label flex");
  const label = document.createElement("label");
  label.setAttribute("class", "field-label");

  const span = document.createElement("span");
  span.setAttribute("class", "pr-5");
  div1.appendChild(label);
  div1.appendChild(span);
  this.append(div1);

  //Se anexan las opciones del componente Options
  const divOpt = document.createElement("div");
  divOpt.setAttribute("class", "field-control");
  divOpt.setAttribute("data-tooltip", " ");  
    for(var i=0; i < childrenDIV.length; i++){
      var divChild = childrenDIV[i];

      //Se remueve el i-esimo div
      $("#"+divChild.id).remove();

      const labelOpt = document.createElement("label");
      //labelOpt.setAttribute("id", divChild.id);
      labelOpt.setAttribute("class", "radio_button");
      var t = document.createTextNode(divChild.innerHTML);
      labelOpt.appendChild(t);
        const inptOpt = document.createElement("input");
        inptOpt.setAttribute("id", "radio_"+fieldId+"_"+i);
        inptOpt.setAttribute("type", "radio");
        inptOpt.setAttribute("name", fieldId);
        inptOpt.setAttribute("value", divChild.id);
        inptOpt.setAttribute("data-parsley-class-handler", "#field_"+fieldId);
        inptOpt.setAttribute("data-parsley-errors-container", "#field_error_block_"+fieldId);
        inptOpt.setAttribute("data-parsley-multiple", fieldId);
        inptOpt.setAttribute("data-parsley-id", "22");
      
        const span = document.createElement("span");
        span.setAttribute("class", "checkmark");
      labelOpt.appendChild(inptOpt);
      labelOpt.appendChild(span);

      divOpt.appendChild(labelOpt);
    }


  //Se agrega div para errores
  const divError = document.createElement("div");
  divError.setAttribute("class", "field-error");
  const divFieldError = document.createElement("div");
  divFieldError.setAttribute("id", "field_error_block_negocio");
  divError.append(divFieldError);

  divOpt.appendChild(divError);

  this.append(divOpt);
};
