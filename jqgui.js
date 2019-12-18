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

$.fn.fieldSelectPlusMinus = function() {
  const fieldId = this.attr("id");
  const fieldMaxsize = this.data("componentMaxsize");
  const fieldItems = this.data("componentItems");

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

  const select = document.createElement("select");
  select.setAttribute("id", fieldId);
  select.setAttribute("class", "select2");
  select.setAttribute("type", "text");
  select.setAttribute("style", fieldWidth);
  select.setAttribute("data-parsley-trigger", "keyup");
  select.setAttribute("data-parsley-maxlength", "32");
  select.setAttribute(
    "data-parsley-maxlength-message",
    "Solo puede ingresar 32 caracteres."
  );
  select.setAttribute("data-parsley-validation-threshold", "10");
  select.setAttribute(
    "data-parsley-errors-container",
    "field_error_block_" + fieldId
  );

  var group = [
    { key: "", value: "" },
    { key: "001", value: "Contrato 01" },
    { key: "002", value: "Contrato 02" },
    { key: "003", value: "Contrato 03" },
    { key: "004", value: "Contrato 04" }
  ];

  var people = Object.keys(group);

  people.forEach(function(person) {
    const option = document.createElement("option");
    option.value = group[person]["key"];
    option.text = group[person]["value"];
    select.appendChild(option);
  });

  divPlusMinus.appendChild(select);

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

    if (type !== "" && btnclass === "button big-button")
      button.setAttribute("type", type);

    if (this.data("componentDisabled") === "true")
      button.setAttribute("disabled", "disabled");

    if (tooltip !== "") button.setAttribute("title", tooltip);

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
  const spanRequiredClass =
    "pr-3 " + (this.data("componentRequired") == true ? "required" : "");
  const fieldClassOrientation =
    "is_" +
    (this.data("componentOrientation")
      ? this.data("componentOrientation")
      : "vertical");
  const isWithBotonClear = this.data("componentClear") == true ? true : false
  const toolTip = this.data("componentTooltip"); 

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
  divDateTT.setAttribute("data-tooltip", "DD/MM/AAAA");
  divDateTT.setAttribute("custom-tooltip", "DD/MM/AAAA");  
  const divDate = document.createElement("div");
  divDate.setAttribute("class", "field-input flex items-center");
  const inpt = document.createElement("input");
  //inpt.setAttribute("class", "input datepicker hasDatepicker");
  inpt.setAttribute("class", "input datepicker");
  inpt.setAttribute("id", "inpt-" + fieldId);
  if (this.data("componentRequired") == true) {
    inpt.setAttribute("required", "required");
  }
  inpt.setAttribute("style", "width: 8em;");
  inpt.setAttribute(
    "data-parsley-errors-container",
    "#field_error_block_" + fieldId
  );
  inpt.setAttribute("maxlength", "10");
  divDate.appendChild(inpt);
  /*

        const image = document.createElement("img");
        image.setAttribute("class", "ui-datepicker-trigger");
        image.setAttribute("src", "./images/btn-calendario.svg");
        image.setAttribute("alt", "");
        image.setAttribute("title", "");
        divDate.appendChild(image);//divDate.append(image);
        */
        if( isWithBotonClear ){
          const inpt2 = document.createElement("input");
          inpt2.setAttribute("class", "pl-1");
          inpt2.setAttribute("type", "image");
          inpt2.setAttribute("id", "clear_"+fieldId);
          inpt2.setAttribute("src", "../../assets/images/meddelete.png");
          inpt2.setAttribute("style", "width:15px;height:15px;");
          inpt2.setAttribute("value", " ");

          divDate.appendChild(inpt2);
        }
        const span = document.createElement("span");
        span.setAttribute("class", "field-error flex");
          const divErrorTip = document.createElement("div");
          divErrorTip.setAttribute("class", "error-tip");  
        span.appendChild(divErrorTip);
          const divErrorMsg = document.createElement("div");
          divErrorMsg.setAttribute("class", "error-msg");
          divErrorMsg.setAttribute("id", "field_error_block_"+fieldId);  
        span.appendChild(divErrorMsg);
      divDate.appendChild(span);
    divDateTT.appendChild(divDate);  

  this.append(divDateTT);
  this.removeAttr("data-component-type");
  this.removeAttr("data-component-label");
  this.removeAttr("data-component-required");
  this.removeAttr("data-component-orientation");
  this.removeAttr("data-component-clear");
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
      buttonImage: "../../assets/images/btn-calendario.svg",
      buttonImageOnly: true,
      buttonText: "",
      dateFormat: DATE_FORMAT,
      changeMonth: true,
      changeYear: true,
      showButtonPanel: true,
      currentText: "Hoy",
      closeText: "Limpiar",
      onClose: function (dateText, inst) {
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
      onChangeMonthYear: function (year, month, inst) {
          $(this).datepicker("setDate", new Date(inst.selectedYear, inst.selectedMonth, 1));
      }
  };

  $(".monthpicker").datepicker(ui_datepicker_month_year_settings);

  // Dates
  const validateDateRage = function(id) {
    $("#" + id + "_begin_date").datepicker({
      ...ui_datepicker_settings,
      onClose: function(selectedDate, instance) {
        if (selectedDate != "") {
          $("#" + id + "_end_date").datepicker("option", "minDate", selectedDate);
          var date = $.datepicker.parseDate(
            instance.settings.dateFormat,
            selectedDate,
            instance.settings
          );
          date.setMonth(date.getMonth() + 3);
          $("#" + id + "_end_date").datepicker("option", "minDate", selectedDate);
          $("#" + id + "_end_date").datepicker("option", "maxDate", date);
        }
      }
    });

    $("#" + id + "_end_date").datepicker({
      ...ui_datepicker_settings,
      onClose: function(selectedDate) {
        $("#" + id + "_begin_date").datepicker("option", "maxDate", selectedDate);
      }
    });
  };

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

  var fieldBeginDateRangeClear = function (id) {
    var _id = $("#" + id + "_begin_date");
    var $dates = $(_id).datepicker();
    $("#clear_" + id + "_begin_date").on("click", function () {
        $dates.datepicker("setDate", null);
    });
  };

  var fieldEndDateRangeClear = function (id) {
    var _id = $("#" + id + "_end_date");
    var $dates = $(_id).datepicker();
    $("#clear_" + id + "_end_date").on("click", function () {
        $dates.datepicker("setDate", null);
    });
  };

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
  const toolTip = this.data("componentTooltip"); 
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
        const spanRequired = document.createElement("span");
        spanRequired.setAttribute("class", spanRequiredClass);
        if (this.data("componentRequired") == true) {
          spanRequired.innerHTML = "*";
        }
      label.appendChild(spanRequired);  
    div1.appendChild(label);

    const span = document.createElement("span");
    span.setAttribute("class", "pr-5");
    div1.appendChild(span);
  this.append(div1);

    //Se anexan las opciones del componente Options
    const divOpt = document.createElement("div");
    divOpt.setAttribute("class", "field-control");
    divOpt.setAttribute("custom-tooltip", toolTip);
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
          inptOpt.setAttribute("data-parsley-class-handler", "#field_" + fieldId);
          inptOpt.setAttribute("data-parsley-errors-" + fieldId, "#field_error_block_" + fieldId);
          inptOpt.setAttribute("data-parsley-multiple", fieldId);
          inptOpt.setAttribute("data-parsley-id", "22");
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
  const fieldLabel = this.attr("data-component-label");
  const spanRequiredClass =
    "pr-3 " + (this.data("componentRequired") == true ? "required" : "");
  const fieldClassOrientation =
    "is_" +
    (this.data("componentOrientation")
      ? this.data("componentOrientation")
      : "vertical");
  const toolTip = this.data("componentTooltip");    
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
  const spanRequired = document.createElement("span");
  spanRequired.setAttribute("class", spanRequiredClass);
  if (this.data("componentRequired") == true) {
    spanRequired.innerHTML = "*";
  }
  label.appendChild(spanRequired);
  divLbl.appendChild(label);
  const span = document.createElement("span");
  span.setAttribute("class", "pr-5");
  divLbl.appendChild(span);
  this.append(divLbl);

  const divTT = document.createElement("div");
  divTT.setAttribute("class", "field-control");
  divTT.setAttribute("custom-tooltip", toolTip);

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
    if( this.data("componentRequired") == true ){
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
      $("<h3>" + item.data("componentLabel") + "</h3>").insertBefore(
        "#" + this.getAttribute("id")
      );
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

$.fn.fieldSplitter = function(){
  const fieldId = this.attr("id");
  const fieldClassOrientation = (this.data("componentOrientation") ? this.data("componentOrientation") : "vertical");

  //Se indica id y orientacion del div principal
  this.attr("id", "splitter_container");
  this.attr("class", "div");
    const divSimple = document.createElement("div");
    divSimple.setAttribute("class", "splitter splitter-" + fieldClassOrientation + " ui-widget ui-widget-content");
    divSimple.setAttribute("id", "simple");
    divSimple.setAttribute("data-splitter-initialized", true);
    divSimple.setAttribute("style", "position: relative;");
      const divPanel1 = document.createElement("div");
      divPanel1.setAttribute("class", "pane splitter-pane");
      divPanel1.setAttribute("style", "position: absolute; z-index: 1; left: 0px; width: 856px; height: 700px; user-select: text;");
        const labelOpt1 = document.createElement("label");
          var t1 = document.createTextNode("Aquí va el contenido del panel");
        labelOpt1.appendChild(t1)  
      divPanel1.appendChild(labelOpt1);  
    divSimple.appendChild(divPanel1);
      const divSplitter = document.createElement("div");
      divSplitter.setAttribute("class", "splitter-bar splitter-bar-" + fieldClassOrientation + " ui-state-default");
      divSplitter.setAttribute("unselectable", "on");
      divSplitter.setAttribute("style", "position: absolute; user-select: none; z-index: 100; cursor: col-resize; left: 856px; height: 700px;");
        const a = document.createElement("a");
        a.setAttribute("href", "javascript:void(0)");
        a.setAttribute("accesskey", "");
        a.setAttribute("tabindex", "0");
      divSplitter.appendChild(a);
    divSimple.appendChild(divSplitter);
      const divPanel2 = document.createElement("div");
      divPanel2.setAttribute("class", "pane splitter-pane");
      divPanel2.setAttribute("id", "pane-right");
      divPanel2.setAttribute("style", "position: absolute; z-index: 1; left: 868px; width: 631px; height: 700px; user-select: text;");
        var t2 = document.createTextNode("Aquí va el contenido del panel");
      divPanel2.appendChild(t2);
    divSimple.appendChild(divPanel2);
  this.append(divSimple);
  //=================================================================================
  $(".splitter-vertical").splitter();
  $(".splitter-horizontal").splitter({ type: "h" });

  var responsiveEffect = function (widthTable, numColumnsBase, selectedColumns, idTable, idSplitterContainer) {
    var colModel = $("#" + idTable).jqGrid('getGridParam', 'colModel');
    var numColumnas = selectedColumns.length + numColumnsBase;
    var gridWidth = $("#splitter-container").parent().width();
    if (gridWidth > widthTable) {
        gridWidth = widthTable;
    }
    widthColumns = gridWidth / numColumnas;
    $("#" + idTable).jqGrid("setGridWidth", gridWidth, true);
    for (var j = 0; j < colModel.length; j++) {
        $("#" + idTable).jqGrid('resizeColumn', colModel[j].name, 0);
        if (j < 2 || isSelectedColumnn(colModel[j].name, selectedColumns)) {
            $("#" + idTable).jqGrid('resizeColumn', colModel[j].name, widthColumns);
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
};