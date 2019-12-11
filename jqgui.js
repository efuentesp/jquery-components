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


  //this.attr("id", "field_" + fieldId);
  this.attr("id", fieldId);
  this.attr("class", "field " + fieldClassOrientation);

  //------------------------------------------------------------------------------------------------
  const divLbl = document.createElement("div");
  divLbl.setAttribute("id", "divLbl");
  divLbl.setAttribute("class", "field-label flex");

  const label = document.createElement("label");
  var t = document.createTextNode(fieldLabel);
  label.setAttribute("for", "male");
  label.appendChild(t);
  
  const spanRequired = document.createElement("span");
  spanRequired.setAttribute("class", spanRequiredClass);
  if (this.data("componentRequired") == true) {
    spanRequired.innerHTML = "*";
  }
  label.appendChild(spanRequired);

  divLbl.appendChild(label);
  this.append(divLbl);
  
  //------------------------------------------------------------------------------------------------



  const divDate = document.createElement("div");
  divDate.setAttribute("class", "field-input flex items-center");

  const inpt = document.createElement("input");
  //inpt.setAttribute("class", "input datepicker hasDatepicker");
  inpt.setAttribute("class", "input datepicker");
  inpt.setAttribute("id", "inpt-"+fieldId);
  inpt.setAttribute("style", "width: 8em;");
  inpt.setAttribute("maxlength", "10");
  divDate.appendChild(inpt);//divDate.append(inpt);
  
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
  divDate.appendChild(inpt2);

  const span = document.createElement("span");
  span.setAttribute("class", "field-error flex");

  const divErrorTip = document.createElement("div");
  divErrorTip.setAttribute("class", "error-tip");  
  span.appendChild(divErrorTip);

  const divErrorMsg = document.createElement("div");
  divErrorMsg.setAttribute("class", "error-msg");
  divErrorMsg.setAttribute("id", "field_error_block_fecha");  

  span.appendChild(divErrorMsg);
  divDate.appendChild(span);
  
  $( function() {
    $("#inpt-"+fieldId).datepicker({
      showOn: "button",
      buttonImage: "../../assets/images/btn-calendario.svg",
      buttonImageOnly: true,
      buttonText: "Select date"
    });
  } );

  this.append(divDate);

  fieldDateClear(fieldId);
  
  $(".datepicker").mask("99-99-9999");
};

$.fn.fieldOptions = function() {
  const fieldId = this.attr("id");
  const fieldLabel = this.attr("data-component-label");
  const spanRequiredClass = "pr-3 " + (this.data("componentRequired") == true ? "required" : "");
  const fieldClassOrientation = "is_" + (this.data("componentOrientation") ? this.data("componentOrientation") : "vertical");
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
      labelOpt.setAttribute("id", divChild.id);
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

  this.append(divOpt)
};
