var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var REST_URL = "http://localhost:3000";
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
var icons = { header: "plus-icon", activeHeader: "minus-icon" };
var ui_accordion_settings = {
    collapsible: true,
    icons: icons,
    heightStyle: "content"
};
$(document).tooltip({
    disabled: true
});
$(".button").each(function (i, obj) {
    var label = $("#" + obj.id).attr("data-tooltip");
    $("#" + obj.id).attr("custom-tooltip", label);
});
$('div[class*="field-control"]').each(function (index, item) {
    if (item.attributes.getNamedItem("data-tooltip")) {
        var value = item.attributes.getNamedItem("data-tooltip").value;
        if (value)
            item.setAttribute("custom-tooltip", value);
    }
});
$('div[class*="field-plus-minus"]').each(function (index, item) {
    if (item.attributes.getNamedItem("data-tooltip")) {
        var value = item.attributes.getNamedItem("data-tooltip").value;
        if (value)
            item.setAttribute("custom-tooltip", value);
    }
});
$(".tab-group").tabs();
$(".accordion").accordion(ui_accordion_settings);
$(".datepicker")
    .datepicker(ui_datepicker_settings)
    .prop("readonly", false);
$(".monthpicker").datepicker(ui_datepicker_month_year_settings);
$(".splitter-vertical").splitter();
$(".splitter-horizontal").splitter({ type: "h" });
var fillJqGrid = function (grid_id, data) {
    $(grid_id).jqGrid("clearGridData");
    data.forEach(function (item, i) { return $(grid_id).jqGrid("addRowData", i + 1, item); });
};
$(".radio-toggle").toggleInput();
$(".wizard").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    titleTemplate: "#title#",
    autoFocus: true,
    labels: {
        cancel: "Cancelar",
        current: "paso actual:",
        pagination: "Paginación",
        loading: "Cargando ..."
    }
});
$("[href='#next']").html('<img src="../../assets/images/boton_siguiente2.png">Siguiente</img>');
$("[href='#previous']").html('<img src="../../assets/images/boton_regresar2.png">Anterior</img>');
$("[href='#finish']").html('<img src="../../assets/images/btn-enviar.png">Enviar</img>');
var rest_findAll = function (resource, params, cb) {
    var api_params = $.param(params);
    var url = api_params
        ? REST_URL + "/" + resource + "?" + api_params
        : REST_URL + "/" + resource;
    $.ajax({
        url: url,
        contentType: "application/json",
        dataType: "json",
        success: function (result) { return cb(result); }
    });
};
var rest_create = function (resource, payload, cb) {
    var url = REST_URL + "/" + resource;
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(payload),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) { return cb(result); }
    });
};
var rest_findOne = function (resource, id, cb) {
    var url = REST_URL + "/" + resource + "/" + id;
    $.ajax({
        url: url,
        contentType: "application/json",
        dataType: "json",
        success: function (result) { return cb(result); }
    });
};
var rest_findOne$ = function (resource, id) {
    var url = REST_URL + "/" + resource + "/" + id;
    return $.ajaxAsObservable({
        url: url,
        contentType: "application/json",
        dataType: "json"
    });
};
var rpc = function (url, params, cb) {
    $.ajax({
        url: url,
        dataType: "json",
        type: "post",
        contentType: "application/x-www-form-urlencoded",
        data: params,
        success: function (data, textStatus, jQxhr) { return cb(data, textStatus, jQxhr); }
    });
};
$("select[name=quiz_select]").select2({
    minimumResultsForSearch: Infinity
});
var http_findAll = rest_findAll;
var http_findOne = rest_findOne;
var http_findOne$ = rest_findOne$;
var http_create = rest_create;
var existText = function (text_to_add, list) {
    var exist = false;
    var count = 1;
    $.each($(list + " li a"), function () {
        if ($(list + " li:nth-child(" + count + ")").text() === text_to_add.trim()) {
            exist = true;
            return false;
        }
        count++;
    });
    return exist;
};
var addedText = function (text_to_add, value_to_add, list) {
    var added = false;
    var count = 1;
    $.each($(list + " li a"), function () {
        if ($(list + " li:nth-child(" + count + ") a").text() === "") {
            $(list + " li:nth-child(" + count + ") a").attr("id", value_to_add);
            $(list + " li:nth-child(" + count + ") a").append(text_to_add);
            added = true;
            return false;
        }
        count++;
    });
    return added;
};
var addNode = function (text_to_add, value_to_add, list, maxsize) {
    if (maxsize != null) {
        if ($(list + " li").length < maxsize) {
            $(list).append("<li><a id=" +
                value_to_add +
                " class='delete_item' href='javascript:void();'>" +
                text_to_add +
                "</a></li>");
        }
    }
    else {
        $(list).append("<li><a id=" +
            value_to_add +
            " class='delete_item' href='javascript:void();'>" +
            text_to_add +
            "</a></li>");
    }
};
function fieldPlusMinusRepaintList(node) {
    var listcontentid = [];
    var listcontentvalue = [];
    var nodelist = document.getElementById(node);
    var listSize = nodelist.childNodes.length;
    $(nodelist.childNodes).each(function (childNode) {
        if (nodelist.childNodes[childNode].childNodes[0].textContent) {
            listcontentid.push(nodelist.childNodes[childNode]
                .childNodes[0].getAttribute("id"));
            listcontentvalue.push(nodelist.childNodes[childNode].childNodes[0].textContent);
        }
    });
    while (nodelist.firstChild) {
        nodelist.removeChild(nodelist.firstChild);
    }
    for (var i = 0; i < listSize; i++) {
        var tagLi = document.createElement("LI");
        var tagA = document.createElement("A");
        tagA.setAttribute("class", "delete_item");
        tagA.setAttribute("href", "javascript:void();");
        if (i < listcontentid.length) {
            tagA.setAttribute("id", listcontentid[i]);
            tagA.innerHTML = listcontentvalue[i];
        }
        tagLi.appendChild(tagA);
        nodelist.appendChild(tagLi);
    }
}
var fieldPlusMinus = function (id, params) {
    console.log("fieldPlusMinus", id)
    var idBtnPlus = "#btn_plus_" + id;
    var idBtnMinus = "#btn_minus_" + id;
    var idInput = "#" + id;
    var list = "ul#tag_list_" + id;
    var node = "tag_list_" + id;
    var definedNodes = true;
    var numNodes = 4;
    if (params.nodes == undefined) {
        definedNodes = true;
    }
    else {
        definedNodes = params.nodes;
    }
    if (definedNodes) {
        for (var i = 0; i < numNodes; i++) {
            $(list).append("<li><a class='delete_item' href='javascript:void();'></a></li>");
        }
    }
    $(idBtnPlus).click(function () {
        addValueToList();
    });
    $(idInput).on("keydown", function (e) {
        if (e.which == 13) {
            e.preventDefault();
            addValueToList();
        }
    });
    var addValueToList = function () {
        var text_to_add = $(idInput).val();
        var value_to_add = $(idInput).val();
        if (!existText(text_to_add, list)) {
            if (!addedText(text_to_add, value_to_add, list)) {
                addNode(text_to_add, value_to_add, list, params.maxsize);
            }
        }
        fieldPlusMinusRepaintList(node);
        $(idInput).val("");
    };
    $(idBtnMinus).click(function () {
        $(list + " li a").each(function (index) {
            if ($(idInput).val() != "") {
                if ($(this).text() === $(idInput).val()) {
                    if (!definedNodes) {
                        $("li:has('a.delete_item'):contains(" + $(this).text() + ")").remove();
                        $(list + " li").length = $(list + " li").length - 1;
                    }
                    else {
                        if ($(list + " li").length <= 4) {
                            $(this)
                                .find("a")
                                .first()
                                .removeAttr("id");
                            $(this).text("");
                        }
                        else {
                            $("li:has('a.delete_item'):contains(" + $(this).text() + ")").remove();
                            $(this).text("");
                            $(list + " li").length = $(list + " li").length - 1;
                        }
                    }
                }
            }
        });
        fieldPlusMinusRepaintList(node);
        $(idInput).val("");
    });
    $(list).delegate(".delete_item", "click", function () {
        $(idInput).val($(this)
            .parent()
            .find(".delete_item")
            .html());
    });
};
var fieldSelectPlusMinus = function (id, params) {
    var idBtnPlus = "#btn_plus_" + id;
    var idBtnMinus = "#btn_minus_" + id;
    var idInput = "#" + id;
    var list = "ul#tag_list_" + id;
    var node = "tag_list_" + id;
    var definedNodes = true;
    var numNodes = 4;
    if (params.nodes == undefined) {
        definedNodes = true;
    }
    else {
        definedNodes = params.nodes;
    }
    if (definedNodes) {
        for (var i = 0; i < numNodes; i++) {
            $(list).append("<li><a class='delete_item' href='javascript:void();'></a></li>");
        }
    }
    $(idBtnPlus).click(function () {
        var text_to_add = $(idInput + " option:selected").text();
        var value_to_add = $(idInput + " option:selected").val();
        if (!existText(text_to_add, list)) {
            if (!addedText(text_to_add, value_to_add, list)) {
                addNode(text_to_add, value_to_add, list, params.maxsize);
            }
        }
        fieldPlusMinusRepaintList(node);
        $(idInput)
            .val(null)
            .trigger("change");
    });
    $(idBtnMinus).click(function () {
        $(list + " li a").each(function (index) {
            if ($(this).attr("id") === $(idInput).val()) {
                if (!definedNodes) {
                    $(this).parent().remove();
                    $(list + " li").length = $(list + " li").length - 1;
                }
                else {
                    if ($(list + " li").length <= 4) {
                        $(this)
                            .find("a")
                            .first()
                            .removeAttr("id");
                        $(this).text("");
                    }
                    else {
                        $(this).parent().remove();
                        $(list + " li").length = $(list + " li").length - 1;
                    }
                }
            }
        });
        fieldPlusMinusRepaintList(node);
        $(idInput)
            .val(null)
            .trigger("change");
    });
    $(list).delegate(".delete_item", "click", function () {
        $(idInput)
            .val($(this)
            .parent()
            .find(".delete_item")
            .attr("id"))
            .trigger("change");
    });
    $(idInput).select2({
        placeholder: "",
        minimumResultsForSearch: Infinity
    });
};
var fieldSelectPlusAutocomplete = function (id, params) {
    var idBtnPlus = "#btn_plus_" + id;
    var idBtnMinus = "#btn_minus_" + id;
    var idInput = "#" + id;
    var list = "ul#tag_list_" + id;
    var node = "tag_list_" + id;
    var attrId = params.id;
    var attrText = params.text;
    var payload = params.payload;
    var definedNodes = true;
    var numNodes = 2;
    if (params.nodes == undefined) {
        definedNodes = true;
    }
    else {
        definedNodes = params.nodes;
    }
    if (definedNodes) {
        for (var i = 0; i < numNodes; i++) {
            $(list).append("<li><a class='delete_item' href='javascript:void();'></a></li>");
        }
    }
    $(idBtnPlus).click(function () {
        var text_to_add = $(idInput + " option:selected").text();
        var value_to_add = $(idInput + " option:selected").val();
        if (!existText(text_to_add, list)) {
            if (!addedText(text_to_add, value_to_add, list)) {
                addNode(text_to_add, value_to_add, list, params.maxsize);
            }
        }
        fieldPlusMinusRepaintList(node);
        $(idInput)
            .val(null)
            .trigger("change");
    });
    $(idBtnMinus).click(function () {
        $(list + " li a").each(function (index) {
            if ($(this).attr("id") === $(idInput).val()) {
                if (!definedNodes) {
                    $(this).parent().remove();
                    $(list + " li").length = $(list + " li").length - 1;
                }
                else {
                    if ($(list + " li").length <= 4) {
                        $(this)
                            .find("a")
                            .first()
                            .removeAttr("id");
                        $(this).text("");
                    }
                    else {
                        $(this).parent().remove();
                        $(list + " li").length = $(list + " li").length - 1;
                    }
                }
            }
        });
        fieldPlusMinusRepaintList(node);
        $(idInput)
            .val(null)
            .trigger("change");
    });
    $(list).delegate(".delete_item", "click", function () {
        $(idInput)
            .val($(this)
            .parent()
            .find(".delete_item")
            .attr("id"))
            .trigger("change");
    });
    var data = $.map(payload, function (item) {
        return {
            text: item[attrText],
            id: item[attrId]
        };
    });
    $(idInput).select2({
        language: "es",
        data: data,
        placeholder: "",
        minimumInputLength: 3
    });
};
var getList = function (id) {
    var list = [];
    $("#tag_list_" + id + " li").each(function () {
        var value = $(this)
            .text()
            .trim();
        if (value != "") {
            list.push(value);
        }
    });
    return list;
};
var getChecked = function (id) {
    var selected = [];
    var query_select = "#field_" + id + " input[type=checkbox]";
    $(query_select).each(function () {
        if ($(this).is(":checked")) {
            selected.push($(this).attr("value"));
        }
    });
    return selected;
};
var getOptionSelected = function (id) {
    var query_select = "input[name='" + id + "']:checked";
    return $(query_select).val();
};
var backgroundSet = function (elements) {
    var backgroundColorSet = [
        "#4299E1",
        "#48BB78",
        "#F56565",
        "#ECC94B",
        "#ED8936",
        "#38B2AC",
        "#9F7AEA",
        "#ED64A6",
        "#E53E3E",
        "#DD6B20",
        "#D69E2E",
        "#38A169",
        "#3182CE",
        "#319795",
        "#805AD5",
        "#D53F8C",
        "#5A67D8"
    ];
    var r = 0;
    var g = 0;
    var b = 0;
    var c;
    for (var i = 0; i < elements; i++) {
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        c = "rgb(" + r + ", " + g + ", " + b + ", 0.4)";
        backgroundColorSet.push(c);
    }
    return backgroundColorSet;
};
var simpleGradientGraph = null;
var gradientBarChart = function (params) {
    if (simpleGradientGraph != null) {
        simpleGradientGraph.destroy();
    }
    var chartData = {
        labels: params.labels,
        datasets: params.dataSet
    };
    Chart.defaults.global.legend.labels.usePointStyle = true;
    Chart.defaults.global.legend.labels.fontSize = 9;
    Chart.defaults.global.legend.labels.boxWidth = 9;
    Chart.defaults.global.legend.position = "bottom";
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.title.display = false;
    Chart.defaults.global.title.text = "";
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.elements.point.radius = 0;
    simpleGradientGraph = new Chart(params.contexto, {
        plugins: [
            {
                afterDatasetsDraw: function (simpleGradientGraph) {
                    var ctx = simpleGradientGraph.ctx;
                    ctx.canvas.style.width = params.width;
                    ctx.canvas.style.height = params.height;
                    simpleGradientGraph.data.datasets.forEach(function (dataset, i) {
                        var meta = simpleGradientGraph.getDatasetMeta(i);
                        if (!meta.hidden) {
                            meta.data.forEach(function (element, index) {
                                ctx.fillStyle = "#000";
                                var fontSize = 12;
                                var fontStyle = "normal";
                                var fontFamily = "Arial";
                                ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                            });
                        }
                    });
                }
            }
        ],
        type: "bar",
        data: chartData,
        options: {
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: true
                        },
                        stacked: false,
                        ticks: {
                            display: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: params.titleX,
                            fontColor: "#000"
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: false
                        },
                        stacked: false,
                        scaleLabel: {
                            display: true,
                            labelString: params.titleY,
                            fontColor: "#000"
                        },
                        ticks: {
                            display: true,
                            callback: function (value) {
                                return value + "";
                            }
                        }
                    }
                ]
            }
        }
    });
};
var stackChart = function (params) {
    var chartData = {
        labels: params.labels,
        datasets: params.dataSet
    };
    var ctx = document.getElementById(params.id);
    var context = ctx.getContext("2d");
    Chart.defaults.global.legend.labels.usePointStyle = true;
    Chart.defaults.global.legend.labels.fontSize = 9;
    Chart.defaults.global.legend.labels.boxWidth = 9;
    Chart.defaults.global.legend.position = "bottom";
    Chart.defaults.global.legend.display = true;
    Chart.defaults.global.title.display = false;
    Chart.defaults.global.title.text = "";
    Chart.defaults.global.responsive = true;
    var stackGraph = new Chart(context, {
        plugins: [
            {
                afterDatasetsDraw: function (stackGraph) {
                    var ctx = stackGraph.ctx;
                    ctx.canvas.style.width = params.width;
                    ctx.canvas.style.height = params.height;
                    stackGraph.data.datasets.forEach(function (dataset, i) {
                        var meta = stackGraph.getDatasetMeta(i);
                        meta.data.forEach(function (element, index) {
                            ctx.fillStyle = "#000";
                            var fontSize = 10;
                            var fontStyle = "bold";
                            var fontFamily = "Verdana";
                            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                            ctx.textAlign = "center";
                            ctx.textBaseline = "middle";
                            var padding = 10;
                            if (dataset.data[index].toString().indexOf("-") >= 0) {
                                ctx.fillText(dataset.data[index] + "%", element._view.x, element._view.y - 10);
                            }
                            else {
                                ctx.fillText(dataset.data[index] + "%", element._view.x, element._view.y + 10);
                            }
                        });
                    });
                }
            }
        ],
        type: "bar",
        data: chartData,
        options: {
            scales: {
                xAxes: [
                    {
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: params.titleX,
                            fontColor: "#000"
                        },
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            display: true
                        }
                    }
                ],
                yAxes: [
                    {
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: params.titleY,
                            fontColor: "#000"
                        },
                        ticks: {
                            max: params.tickMaxY,
                            min: params.tickMinY,
                            stepSize: params.tickStepY,
                            callback: function (value) {
                                return value + ".00%";
                            }
                        },
                        gridLines: {
                            display: true
                        }
                    }
                ]
            }
        }
    });
};
var stackChartHorizontal = function (params) {
    var chartData = {
        labels: params.labels,
        datasets: params.dataSet
    };
    var format = params.format;
    var ctx = document.getElementById(params.id);
    var context = ctx.getContext("2d");
    Chart.defaults.global.legend.labels.usePointStyle = true;
    Chart.defaults.global.legend.labels.fontSize = 9;
    Chart.defaults.global.legend.labels.boxWidth = 9;
    Chart.defaults.global.legend.position = "bottom";
    Chart.defaults.global.legend.display = true;
    Chart.defaults.global.title.display = false;
    Chart.defaults.global.title.text = "";
    Chart.defaults.global.responsive = true;
    var stackGraphH = new Chart(context, {
        plugins: [
            {
                afterDatasetsDraw: function (stackGraphH) {
                    var ctx = stackGraphH.ctx;
                    ctx.canvas.style.width = params.width;
                    ctx.canvas.style.height = params.height;
                    stackGraphH.data.datasets.forEach(function (dataset, i) {
                        var meta = stackGraphH.getDatasetMeta(i);
                        meta.data.forEach(function (element, index) {
                            ctx.fillStyle = "#fff";
                            var fontSize = 10;
                            var fontStyle = "bold";
                            var fontFamily = "Arial";
                            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                            ctx.textAlign = "center";
                            ctx.textBaseline = "middle";
                            var padding = 20;
                            if (format == "%") {
                                ctx.fillText(formatNumber.new(dataset.data[index], "") + format, element._view.x - padding, element._view.y);
                            }
                            else {
                                ctx.fillText(format + formatNumber.new(dataset.data[index], ""), element._view.x - padding, element._view.y);
                            }
                        });
                    });
                }
            }
        ],
        type: "horizontalBar",
        data: chartData,
        options: {
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var label = "";
                        if (format == "%") {
                            label =
                                data.datasets[tooltipItem.datasetIndex].label +
                                    " " +
                                    formatNumber.new(data.datasets[tooltipItem.datasetIndex].data[0], "") +
                                    format;
                        }
                        else {
                            label =
                                data.datasets[tooltipItem.datasetIndex].label +
                                    " " +
                                    format +
                                    formatNumber.new(data.datasets[tooltipItem.datasetIndex].data[0], "");
                        }
                        return label;
                    }
                }
            },
            legend: {
                display: true,
                position: "right"
            },
            scales: {
                xAxes: [
                    {
                        stacked: true,
                        scaleLabel: {
                            display: false,
                            labelString: params.titleX,
                            fontColor: "#000"
                        },
                        ticks: {
                            display: true,
                            stepSize: params.tickStepX,
                            callback: function (value) {
                                var label = "";
                                if (format == "%") {
                                    label = formatNumber.new(value, "") + format;
                                }
                                else {
                                    label = format + formatNumber.new(value, "");
                                }
                                return label;
                            }
                        },
                        gridLines: {
                            display: true
                        }
                    }
                ],
                yAxes: [
                    {
                        stacked: true,
                        scaleLabel: {
                            display: false,
                            labelString: params.titleY,
                            fontColor: "#000"
                        },
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            display: false
                        }
                    }
                ]
            }
        }
    });
};
var simpleBGraph = null;
var simpleBarChart = function (params) {
    if (simpleBGraph != null) {
        simpleBGraph.destroy();
    }
    var chartData = {
        labels: params.labels,
        datasets: params.dataSet
    };
    var ctxBar = document.getElementById(params.id);
    var contextBar = ctxBar.getContext("2d");
    Chart.defaults.global.legend.labels.usePointStyle = true;
    Chart.defaults.global.legend.labels.fontSize = 9;
    Chart.defaults.global.legend.labels.boxWidth = 9;
    Chart.defaults.global.legend.position = "bottom";
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.title.display = false;
    Chart.defaults.global.title.text = "";
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.elements.point.radius = 0;
    simpleBGraph = new Chart(contextBar, {
        plugins: [
            {
                afterDatasetsDraw: function (simpleBarGraph) {
                    var ctx = simpleBarGraph.ctx;
                    ctx.canvas.style.width = params.width;
                    ctx.canvas.style.height = params.height;
                    simpleBarGraph.data.datasets.forEach(function (dataset, i) {
                        var meta = simpleBarGraph.getDatasetMeta(i);
                        if (!meta.hidden) {
                            meta.data.forEach(function (element, index) {
                                ctx.fillStyle = "#000";
                                var fontSize = 12;
                                var fontStyle = "normal";
                                var fontFamily = "Arial";
                                ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                            });
                        }
                    });
                }
            }
        ],
        type: "bar",
        data: chartData,
        options: {
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: true
                        },
                        stacked: false,
                        ticks: {
                            display: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: params.titleX,
                            fontColor: "#000"
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: false
                        },
                        stacked: false,
                        scaleLabel: {
                            display: true,
                            labelString: params.titleY,
                            fontColor: "#000"
                        },
                        ticks: {
                            display: true,
                            callback: function (value) {
                                return value + "";
                            }
                        }
                    }
                ]
            }
        }
    });
};
var barChart = function (params) {
    var chartData = {
        labels: params.labels,
        datasets: params.dataSet
    };
    var ctxBar = document.getElementById(params.id);
    var contextBar = ctxBar.getContext("2d");
    Chart.defaults.global.legend.labels.usePointStyle = true;
    Chart.defaults.global.legend.labels.fontSize = 9;
    Chart.defaults.global.legend.labels.boxWidth = 9;
    Chart.defaults.global.legend.position = "bottom";
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.title.display = false;
    Chart.defaults.global.title.text = "";
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.elements.point.radius = 0;
    var barGraph = new Chart(contextBar, {
        plugins: [
            {
                afterDatasetsDraw: function (barGraph) {
                    var ctx = barGraph.ctx;
                    ctx.canvas.style.width = params.width;
                    ctx.canvas.style.height = params.height;
                    barGraph.data.datasets.forEach(function (dataset, i) {
                        var meta = barGraph.getDatasetMeta(i);
                        if (!meta.hidden) {
                            meta.data.forEach(function (element, index) {
                                ctx.fillStyle = "#000";
                                var fontSize = 9;
                                var fontStyle = "normal";
                                var fontFamily = "Verdana";
                                ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                                if (i != 0) {
                                    ctx.textAlign = "center";
                                    ctx.textBaseline = "top";
                                    var padding = 20;
                                    ctx.fillText(dataset.data[index] + "%", element._view.x, element._view.y - padding);
                                    if (index == 0) {
                                        fontStyle = "normal";
                                        ctx.beginPath();
                                        ctx.strokeStyle = "#000";
                                        ctx.rect(element._view.x - 40, element._view.y - 90, 80, 60);
                                        ctx.stroke();
                                        ctx.fillText("Horizonte de", element._view.x, element._view.y - 80);
                                        ctx.fillText("Inversión", element._view.x, element._view.y - 70);
                                        ctx.fillText("menor a 1 año", element._view.x, element._view.y - 60);
                                    }
                                    if (index == 1) {
                                        ctx.beginPath();
                                        ctx.strokeStyle = "#000";
                                        ctx.rect(element._view.x - 40, element._view.y - 90, 80, 60);
                                        ctx.stroke();
                                        ctx.fillText("Horizonte de", element._view.x, element._view.y - 80);
                                        ctx.fillText("Inversión", element._view.x, element._view.y - 70);
                                        ctx.fillText("entre 1 y 2 años", element._view.x, element._view.y - 60);
                                    }
                                    if (index == 2) {
                                        ctx.beginPath();
                                        ctx.strokeStyle = "#000";
                                        ctx.rect(element._view.x - 40, element._view.y - 90, 80, 60);
                                        ctx.stroke();
                                        ctx.fillText("Horizonte de", element._view.x, element._view.y - 80);
                                        ctx.fillText("Inversión", element._view.x, element._view.y - 70);
                                        ctx.fillText("entre 2 y 3 años", element._view.x, element._view.y - 60);
                                    }
                                    if (index == 3) {
                                        ctx.beginPath();
                                        ctx.strokeStyle = "#000";
                                        ctx.rect(element._view.x - 40, element._view.y - 90, 80, 60);
                                        ctx.stroke();
                                        ctx.fillText("Horizonte de", element._view.x, element._view.y - 80);
                                        ctx.fillText("Inversión", element._view.x, element._view.y - 70);
                                        ctx.fillText("entre 3 y 5 años", element._view.x, element._view.y - 60);
                                    }
                                    if (index == 4) {
                                        ctx.beginPath();
                                        ctx.strokeStyle = "#000";
                                        ctx.rect(element._view.x - 40, element._view.y - 90, 80, 60);
                                        ctx.stroke();
                                        ctx.fillText("Horizonte de", element._view.x, element._view.y - 80);
                                        ctx.fillText("Inversión", element._view.x, element._view.y - 70);
                                        ctx.fillText("mayor a 5 años", element._view.x, element._view.y - 60);
                                    }
                                }
                                if (i == 0 && index == 4) {
                                    ctx.textAlign = "center";
                                    ctx.textBaseline = "top";
                                    var padding = 15;
                                    ctx.fillText("Inflación", element._view.x + 145, element._view.y - 10);
                                    ctx.fillText("esperada: 4.0%", element._view.x + 145, element._view.y);
                                    ctx.beginPath();
                                    ctx.strokeStyle = "#000";
                                    ctx.rect(element._view.x + 95, element._view.y - 30, 100, 60);
                                    ctx.stroke();
                                }
                            });
                        }
                    });
                }
            }
        ],
        type: "bar",
        data: chartData,
        options: {
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: true
                        },
                        stacked: true,
                        ticks: {
                            display: true,
                            fontFamily: "Verdana",
                            fontSize: 9,
                            fontStyle: "bold"
                        },
                        scaleLabel: {
                            display: true,
                            labelString: params.titleX,
                            fontColor: "#000"
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: false
                        },
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: params.titleY,
                            fontColor: "#000"
                        },
                        ticks: {
                            display: true,
                            max: params.tickMaxY,
                            min: params.tickMinY,
                            stepSize: params.tickStepY,
                            callback: function (value) {
                                return value + ".0%";
                            }
                        }
                    }
                ]
            }
        }
    });
};
var barChartNBar = function (params) {
    var chartData = {
        labels: params.labels,
        datasets: params.dataSet
    };
    var ctxBar = document.getElementById(params.id);
    var contextBar = ctxBar.getContext("2d");
    Chart.defaults.global.legend.labels.usePointStyle = true;
    Chart.defaults.global.legend.labels.fontSize = 9;
    Chart.defaults.global.legend.labels.boxWidth = 9;
    Chart.defaults.global.legend.position = "bottom";
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.title.display = false;
    Chart.defaults.global.title.text = "";
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.elements.point.radius = 0;
    var barNGraph = new Chart(contextBar, {
        plugins: [
            {
                afterDatasetsDraw: function (barNGraph) {
                    var ctx = barNGraph.ctx;
                    ctx.canvas.style.width = params.width;
                    ctx.canvas.style.height = params.height;
                    barNGraph.data.datasets.forEach(function (dataset, i) {
                        var meta = barNGraph.getDatasetMeta(i);
                        if (!meta.hidden) {
                            meta.data.forEach(function (element, index) {
                                ctx.fillStyle = "#000";
                                var fontSize = 12;
                                var fontStyle = "normal";
                                var fontFamily = "Arial";
                                ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                                if (i == 0 && index == 4) {
                                    ctx.textAlign = "center";
                                    ctx.textBaseline = "top";
                                    var padding = 15;
                                    ctx.fillText("Inflación", element._view.x + 120, element._view.y - 10);
                                    ctx.fillText("esperada: 4.0%", element._view.x + 120, element._view.y);
                                    ctx.beginPath();
                                    ctx.strokeStyle = "#000";
                                    ctx.rect(element._view.x + 80, element._view.y - 30, 120, 60);
                                    ctx.stroke();
                                }
                            });
                        }
                    });
                }
            }
        ],
        type: "bar",
        data: chartData,
        options: {
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            display: true
                        },
                        stacked: false,
                        ticks: {
                            display: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: params.titleX,
                            fontColor: "#000"
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: false
                        },
                        stacked: false,
                        scaleLabel: {
                            display: true,
                            labelString: params.titleY,
                            fontColor: "#000"
                        },
                        ticks: {
                            display: true,
                            max: params.tickMaxY,
                            min: params.tickMinY,
                            stepSize: params.tickStepY,
                            callback: function (value) {
                                return value + ".0%";
                            }
                        }
                    }
                ]
            }
        }
    });
};
var lineChart = function (params) {
    var chartData = {
        labels: params.labels,
        datasets: params.dataSet
    };
    var ctxBar = document.getElementById(params.id);
    var contextBar = ctxBar.getContext("2d");
    Chart.defaults.global.legend.labels.usePointStyle = true;
    Chart.defaults.global.legend.labels.fontSize = 9;
    Chart.defaults.global.legend.labels.boxWidth = 9;
    Chart.defaults.global.legend.position = "bottom";
    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.title.display = false;
    Chart.defaults.global.title.text = "";
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.elements.point.radius = 0;
    var lineGraph = new Chart(contextBar, {
        plugins: [
            {
                afterDatasetsDraw: function (lineGraph) {
                    var ctx = lineGraph.ctx;
                    ctx.canvas.style.width = params.width;
                    ctx.canvas.style.height = params.height;
                    lineGraph.data.datasets.forEach(function (dataset, i) {
                        var meta = lineGraph.getDatasetMeta(i);
                        if (!meta.hidden) {
                            meta.data.forEach(function (element, index) {
                                ctx.fillStyle = "#000";
                                var fontSize = 12;
                                var fontStyle = "normal";
                                var fontFamily = "Arial";
                                ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                                if (index == params.pointA) {
                                    ctx.textAlign = "center";
                                    ctx.textBaseline = "top";
                                    var padding = 15;
                                    ctx.fillText("A", element._view.x, element._view.y - 80);
                                    ctx.beginPath();
                                    ctx.strokeStyle = "#000";
                                    ctx.rect(element._view.x - 15, element._view.y - 90, 30, 30);
                                    ctx.stroke();
                                    ctx.beginPath();
                                    ctx.moveTo(element._view.x, element._view.y);
                                    ctx.lineTo(element._view.x - 5, element._view.y - 5);
                                    ctx.lineTo(element._view.x + 5, element._view.y - 5);
                                    ctx.lineTo(element._view.x, element._view.y);
                                    ctx.lineTo(element._view.x, element._view.y - 60);
                                    ctx.stroke();
                                }
                                if (index == params.pointB) {
                                    ctx.textAlign = "center";
                                    ctx.textBaseline = "top";
                                    var padding = 15;
                                    ctx.fillText("B", element._view.x, element._view.y - 80);
                                    ctx.beginPath();
                                    ctx.strokeStyle = "#000";
                                    ctx.rect(element._view.x - 15, element._view.y - 90, 30, 30);
                                    ctx.stroke();
                                    ctx.beginPath();
                                    ctx.moveTo(element._view.x, element._view.y);
                                    ctx.lineTo(element._view.x - 5, element._view.y - 5);
                                    ctx.lineTo(element._view.x + 5, element._view.y - 5);
                                    ctx.lineTo(element._view.x, element._view.y);
                                    ctx.lineTo(element._view.x, element._view.y - 60);
                                    ctx.stroke();
                                }
                            });
                        }
                    });
                }
            }
        ],
        type: "bar",
        data: chartData,
        options: {
            legend: {
                display: false
            },
            tooltips: {},
            scales: {
                xAxes: [
                    {
                        ticks: {
                            maxTicksLimit: 8
                        },
                        gridLines: {
                            display: false
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: false
                        }
                    }
                ]
            }
        }
    });
};
var multiLineChart = function (params) {
    var chartData = {
        labels: params.labels,
        datasets: params.dataSet
    };
    var ctxBar = document.getElementById(params.id);
    var contextBar = ctxBar.getContext("2d");
    Chart.defaults.global.legend.labels.usePointStyle = false;
    Chart.defaults.global.legend.labels.fontSize = 9;
    Chart.defaults.global.legend.labels.boxWidth = 9;
    Chart.defaults.global.legend.position = "bottom";
    Chart.defaults.global.legend.display = true;
    Chart.defaults.global.title.display = false;
    Chart.defaults.global.title.text = "";
    Chart.defaults.global.responsive = true;
    Chart.defaults.global.elements.point.radius = 0;
    var multiLineGraph = new Chart(contextBar, {
        plugins: [
            {
                beforeDraw: function (multiLineGraph) {
                    var ctx = multiLineGraph.ctx;
                    ctx.canvas.style.width = params.width;
                    ctx.canvas.style.height = params.height;
                    var chartArea = multiLineGraph.chartArea;
                    ctx.save();
                    ctx.fillStyle = "#eaf7fe";
                    ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
                    ctx.restore();
                },
                afterDatasetsDraw: function (multiLineGraph) {
                    var ctx = multiLineGraph.ctx;
                    multiLineGraph.data.datasets.forEach(function (dataset, i) {
                        var meta = multiLineGraph.getDatasetMeta(i);
                        if (!meta.hidden) {
                            meta.data.forEach(function (element, index) {
                                var fontSize = 12;
                                var fontStyle = "normal";
                                var fontFamily = "Arial";
                                ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                            });
                        }
                    });
                }
            }
        ],
        type: "bar",
        data: chartData,
        options: {
            legend: {
                display: true,
                position: "right"
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            maxTicksLimit: 8
                        },
                        gridLines: {
                            display: false
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: true
                        }
                    }
                ]
            }
        }
    });
};
var pieGraph = null;
var pieChart = function (params) {
    if (pieGraph != null) {
        pieGraph.destroy();
    }
    var chartData = {
        labels: params.labels,
        datasets: params.dataSet
    };
    var ctxBar = document.getElementById(params.id);
    var contextBar = ctxBar.getContext("2d");
    pieGraph = new Chart(contextBar, {
        plugins: [
            {
                afterDatasetsDraw: function (pieGraph) {
                    var ctx = pieGraph.ctx;
                    ctx.canvas.style.width = params.width;
                    ctx.canvas.style.height = params.height;
                }
            }
        ],
        type: "pie",
        data: chartData,
        options: {
            responsive: true,
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    padding: 50
                }
            },
            title: {
                display: true,
                text: params.titleX,
                padding: 50
            }
        }
    });
};
var validateDateRage = function (id) {
    $("#" + id + "_begin_date").datepicker(__assign(__assign({}, ui_datepicker_settings), { onClose: function (selectedDate, instance) {
            if (selectedDate != "") {
                $("#" + id + "_end_date").datepicker("option", "minDate", selectedDate);
                var date = $.datepicker.parseDate(instance.settings.dateFormat, selectedDate, instance.settings);
                date.setMonth(date.getMonth() + 3);
                $("#" + id + "_end_date").datepicker("option", "minDate", selectedDate);
                $("#" + id + "_end_date").datepicker("option", "maxDate", date);
            }
        } }));
    $("#" + id + "_end_date").datepicker(__assign(__assign({}, ui_datepicker_settings), { onClose: function (selectedDate) {
            $("#" + id + "_begin_date").datepicker("option", "maxDate", selectedDate);
        } }));
};
$("#btn_clean").click(function () {
    $(".form-group").parsley().reset();
    $(".form-group .tag-list li a").text("");
    $(".form-group select.select2").val([]).trigger("change");
});
var getCheckedCheckbox = function (id) {
    var list = [];
    list = $("input[name='chk_" + id + "']:checked")
        .map(function () {
        return $(this).val();
    })
        .toArray();
    return list;
};
function copyGridContentToClipboard(gridNameID, includeGroups) {
    if (gridNameID && gridNameID.trim()) {
        gridNameID = gridNameID.trim();
        var grid = $("#" + gridNameID);
        if (grid && grid.length > 0) {
            var gridData = $(grid).getGridParam("data");
            var totalRecords = $(grid).getGridParam("records");
            var colModel = $(grid).getGridParam("colModel");
            var headers = [];
            if (includeGroups && typeof includeGroups === "boolean") {
                var groupHeaders = $(grid).getGridParam("groupingView").groupField;
                $(groupHeaders).each(function (index, value) {
                    headers.push(value);
                });
            }
            var column;
            var columnName;
            $(colModel).each(function () {
                column = $(this)[0];
                columnName = column.name;
                if (!column.hidden) {
                    headers.push(columnName);
                }
            });
            var tableHeader = "<thead><tr>";
            $.each(headers, function (index, value) {
                tableHeader += "<th>" + value + "</th>";
            });
            tableHeader += "</tr></thead>";
            var totalRecordsTableRow = '<tr><td colspan="' +
                headers.length +
                '">Total de registros: ' +
                totalRecords +
                "</td></tr>";
            var row;
            var tableContent = "";
            $(gridData).each(function () {
                tableContent += "<tr>";
                row = $(this)[0];
                $.each(headers, function (index, header) {
                    tableContent += "<td>" + row[header] + "</td>";
                });
                tableContent += "</tr>";
            });
            var tableID = "___" + gridNameID;
            var table = $('<table id="' +
                tableID +
                '">' +
                tableHeader +
                "<tbody>" +
                totalRecordsTableRow +
                tableContent +
                "</tbody></table>");
            $(table)
                .css("position", "absolute")
                .css("top", "-2000px")
                .css("left", "-2000px");
            $("body").append(table);
            var range = document.createRange();
            range.selectNodeContents(document.getElementById(tableID));
            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand("copy");
            $(table).remove();
        }
    }
}
var fillQuiz = function (field_group, id, quiz) {
    var trElement = $("#" + field_group + " tbody");
    var answerOption = "";
    var answerSelect = "";
    var answersSelect = "";
    var answers = "";
    var question = "";
    var questions = "";
    var options = "";
    var option = "";
    var nAnswers = 0;
    var nQuestions = 0;
    var nResults = 0;
    nQuestions = quiz[0].question.length;
    nAnswers = quiz[0].answer.length;
    nResults = quiz[0].result.length;
    for (var i = 0; i < nQuestions; i++) {
        question = "<tr><td class='question'>" + quiz[0].question[i].question;
        if (quiz[0].question[i].required) {
            question += "<span class='required'>*</span>";
        }
        question +=
            "<div class='field-error'><div id='field_error_block_encuesta_" +
                i +
                "'></div></div></td>";
        answers = "";
        options = "";
        for (var j = 0; j < nAnswers; j++) {
            var answer_points = quiz[0].question[i].points
                ? quiz[0].question[i].points[j]
                : "1";
            var disabled = quiz[0].answer[j].disabled;
            var db = "";
            if (quiz[0].answer[j].type == "option") {
                answerOption =
                    "<td>" +
                        "<div class='answer'>" +
                        "<input type='radio' id='" +
                        id +
                        "_" +
                        i +
                        "_" +
                        j +
                        "' name='" +
                        id +
                        "_" +
                        i +
                        "' required data-parsley-errors-container='#field_error_block_" +
                        id +
                        "_" +
                        j +
                        "'";
                if (quiz[0].result[i].results[j].result) {
                    answerOption += "checked='checked'";
                }
                answerOption +=
                    "data-points='" +
                        answer_points +
                        "'>" +
                        "<span class='checkmark'></span>" +
                        "</div>" +
                        "</td>";
                answers += answerOption;
            }
            if (quiz[0].answer[j].type == "select") {
                answerSelect =
                    '<td><div class="answer">' +
                        '<select class="select2" id="encuesta_' +
                        i +
                        "_" +
                        j +
                        '" name="quiz_select" style="width: 12em;" required ' +
                        db +
                        " " +
                        'data-parsley-errors-container="#field_error_block_' +
                        id +
                        "_" +
                        i +
                        '">';
                var optionValue = quiz[0].result[i].results[j].result;
                options = "";
                for (var k = 0; k < quiz[0].answer[j].options.length; k++) {
                    option = '<option value="' + quiz[0].answer[j].options[k].key + '"';
                    if (optionValue == quiz[0].answer[j].options[k].key) {
                        option += " selected";
                    }
                    option += ">" + quiz[0].answer[j].options[k].value + "</option>";
                    options += option;
                }
                answersSelect = answerSelect + options + "</select></div>" + "</td>";
                answers += answersSelect;
            }
        }
        questions = question + answers + "</tr>";
        trElement.append(questions);
    }
};
var fieldDateClear = function (id) {
    var btn_calendar_id = "#clear_" + id;
    var input_date_id = "#inpt-" + id; 

    $(btn_calendar_id).on("click", function() {
        $(input_date_id).datepicker("setDate", null);
    });
};
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
var json2xml = function (o, tab) {
    var toXml = function (v, name, ind) {
        var xml = "";
        if (v instanceof Array) {
            for (var i = 0, n = v.length; i < n; i++)
                xml += ind + toXml(v[i], name, ind + "\t") + "\n";
        }
        else if (typeof v == "object") {
            var hasChild = false;
            xml += ind + "<" + name;
            for (var m in v) {
                if (m.charAt(0) == "@")
                    xml += " " + m.substr(1) + '="' + v[m].toString() + '"';
                else
                    hasChild = true;
            }
            xml += hasChild ? ">" : "/>";
            if (hasChild) {
                for (var m in v) {
                    if (m == "#text")
                        xml += v[m];
                    else if (m == "#cdata")
                        xml += "<![CDATA[" + v[m] + "]]>";
                    else if (m.charAt(0) != "@")
                        xml += toXml(v[m], m, ind + "\t");
                }
                xml +=
                    (xml.charAt(xml.length - 1) == "\n" ? ind : "") + "</" + name + ">";
            }
        }
        else {
            xml += ind + "<" + name + ">" + v.toString() + "</" + name + ">";
        }
        return xml;
    }, xml = "";
    for (var m in o)
        xml += toXml(o[m], m, "");
    return tab ? xml.replace(/\t/g, tab) : xml.replace(/\t|\n/g, "");
};
var xml2json = function (xml, tab) {
    var X = {
        toObj: function (xml) {
            var o = {};
            if (xml.nodeType == 1) {
                if (xml.attributes.length)
                    for (var i = 0; i < xml.attributes.length; i++)
                        o["@" + xml.attributes[i].nodeName] = (xml.attributes[i].nodeValue || "").toString();
                if (xml.firstChild) {
                    var textChild = 0, cdataChild = 0, hasElementChild = false;
                    for (var n = xml.firstChild; n; n = n.nextSibling) {
                        if (n.nodeType == 1)
                            hasElementChild = true;
                        else if (n.nodeType == 3 && n.nodeValue.match(/[^ \f\n\r\t\v]/))
                            textChild++;
                        else if (n.nodeType == 4)
                            cdataChild++;
                    }
                    if (hasElementChild) {
                        if (textChild < 2 && cdataChild < 2) {
                            X.removeWhite(xml);
                            for (var n = xml.firstChild; n; n = n.nextSibling) {
                                if (n.nodeType == 3)
                                    o["#text"] = X.escape(n.nodeValue);
                                else if (n.nodeType == 4)
                                    o["#cdata"] = X.escape(n.nodeValue);
                                else if (o[n.nodeName]) {
                                    if (o[n.nodeName] instanceof Array)
                                        o[n.nodeName][o[n.nodeName].length] = X.toObj(n);
                                    else
                                        o[n.nodeName] = [o[n.nodeName], X.toObj(n)];
                                }
                                else
                                    o[n.nodeName] = X.toObj(n);
                            }
                        }
                        else {
                            if (!xml.attributes.length)
                                o = X.escape(X.innerXml(xml));
                            else
                                o["#text"] = X.escape(X.innerXml(xml));
                        }
                    }
                    else if (textChild) {
                        if (!xml.attributes.length)
                            o = X.escape(X.innerXml(xml));
                        else
                            o["#text"] = X.escape(X.innerXml(xml));
                    }
                    else if (cdataChild) {
                        if (cdataChild > 1)
                            o = X.escape(X.innerXml(xml));
                        else
                            for (var n = xml.firstChild; n; n = n.nextSibling)
                                o["#cdata"] = X.escape(n.nodeValue);
                    }
                }
                if (!xml.attributes.length && !xml.firstChild)
                    o = null;
            }
            else if (xml.nodeType == 9) {
                o = X.toObj(xml.documentElement);
            }
            else
                alert("unhandled node type: " + xml.nodeType);
            return o;
        },
        toJson: function (o, name, ind) {
            var json = name ? '"' + name + '"' : "";
            if (o instanceof Array) {
                for (var i = 0, n = o.length; i < n; i++)
                    o[i] = X.toJson(o[i], "", ind + "\t");
                json +=
                    (name ? ":[" : "[") +
                        (o.length > 1
                            ? "\n" + ind + "\t" + o.join(",\n" + ind + "\t") + "\n" + ind
                            : o.join("")) +
                        "]";
            }
            else if (o == null)
                json += (name && ":") + "null";
            else if (typeof o == "object") {
                var arr = [];
                for (var m in o)
                    arr[arr.length] = X.toJson(o[m], m, ind + "\t");
                json +=
                    (name ? ":{" : "{") +
                        (arr.length > 1
                            ? "\n" + ind + "\t" + arr.join(",\n" + ind + "\t") + "\n" + ind
                            : arr.join("")) +
                        "}";
            }
            else if (typeof o == "string")
                json += (name && ":") + '"' + o.toString() + '"';
            else
                json += (name && ":") + o.toString();
            return json;
        },
        innerXml: function (node) {
            var s = "";
            if ("innerHTML" in node)
                s = node.innerHTML;
            else {
                var asXml = function (n) {
                    var s = "";
                    if (n.nodeType == 1) {
                        s += "<" + n.nodeName;
                        for (var i = 0; i < n.attributes.length; i++)
                            s +=
                                " " +
                                    n.attributes[i].nodeName +
                                    '="' +
                                    (n.attributes[i].nodeValue || "").toString() +
                                    '"';
                        if (n.firstChild) {
                            s += ">";
                            for (var c = n.firstChild; c; c = c.nextSibling)
                                s += asXml(c);
                            s += "</" + n.nodeName + ">";
                        }
                        else
                            s += "/>";
                    }
                    else if (n.nodeType == 3)
                        s += n.nodeValue;
                    else if (n.nodeType == 4)
                        s += "<![CDATA[" + n.nodeValue + "]]>";
                    return s;
                };
                for (var c = node.firstChild; c; c = c.nextSibling)
                    s += asXml(c);
            }
            return s;
        },
        escape: function (txt) {
            return txt
                .replace(/[\\]/g, "\\\\")
                .replace(/[\"]/g, '\\"')
                .replace(/[\n]/g, "\\n")
                .replace(/[\r]/g, "\\r");
        },
        removeWhite: function (e) {
            e.normalize();
            for (var n = e.firstChild; n;) {
                if (n.nodeType == 3) {
                    if (!n.nodeValue.match(/[^ \f\n\r\t\v]/)) {
                        var nxt = n.nextSibling;
                        e.removeChild(n);
                        n = nxt;
                    }
                    else
                        n = n.nextSibling;
                }
                else if (n.nodeType == 1) {
                    X.removeWhite(n);
                    n = n.nextSibling;
                }
                else
                    n = n.nextSibling;
            }
            return e;
        }
    };
    if (xml.nodeType == 9)
        xml = xml.documentElement;
    var json = X.toJson(X.toObj(X.removeWhite(xml)), xml.nodeName, "\t");
    return ("{\n" +
        tab +
        (tab ? json.replace(/\t/g, tab) : json.replace(/\t|\n/g, "")) +
        "\n}");
};
var fillSwapList = function (id, list_id, params) {
    var _id = "#" + id;
    var list = $("#listado_" + list_id);
    for (var i = 0; i < params.length; i++) {
        var data = params[i];
        list.append("<li class='portlet' value=" +
            data.value +
            "><div class='portlet-content'>" +
            data.label +
            "</div></li>");
    }
};
$("ul.column").on("click", "li", function () {
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
    }
    else {
        clearList();
        $(this).addClass("selected");
    }
});
$(".up").click(function () {
    var currents = $(".portlet.selected");
    currents.prev().before(currents);
});
$(".down").click(function () {
    var currents = $(".portlet.selected");
    currents.next().after(currents);
});
$(".add").click(function () {
    var currents = $(".portlet.selected");
    $(".column.destination").append(currents);
    clearList();
});
$(".remove").click(function () {
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
var clearList = function () {
    $("ul.column li").removeClass("selected");
};
var formatNumber = {
    separador: ",",
    sepDecimal: ".",
    formatear: function (num) {
        num += "";
        var splitStr = num.split(".");
        var splitLeft = splitStr[0];
        var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : "";
        var regx = /(\d+)(\d{3})/;
        while (regx.test(splitLeft)) {
            splitLeft = splitLeft.replace(regx, "$1" + this.separador + "$2");
        }
        return this.simbol + splitLeft + splitRight;
    },
    new: function (num, simbol) {
        this.simbol = simbol || "";
        return this.formatear(num);
    }
};
$(".currency").mask("###,###,##0", { reverse: true });
$(".number").mask("###,###,##0.00", { reverse: true });
$(".integer").mask("###,###,##0", { reverse: true });
$(".datepicker").mask("99-99-9999");
var putErrorsInAttrTitle = function (e) {
    if (e.$element.tooltip('instance') != undefined) {
        e.$element.tooltip('destroy');
    }
    var isInput = $(e.$element).hasClass("input");
    var isMultiSelect = $(e.$element).is("select[multiple='multiple']");
    if (isInput || isMultiSelect) {
        e.$element.tooltip({
            content: e.getErrorsMessages().join("<br />"),
            items: e.$element,
            position: { my: 'left center', at: 'right+10 center' }
        });
    }
    if (e.$element.next(".checkmark").tooltip('instance') != undefined) {
        e.$element.next(".checkmark").tooltip('destroy');
    }
    var isRadio = $(e.$element).is("input[type='radio']");
    var isCheckbox = $(e.$element).is("input[type='checkbox']");
    if (isRadio || isCheckbox) {
        e.$element.next(".checkmark").tooltip({
            content: e.getErrorsMessages().join("<br />"),
            items: e.$element.next(".checkmark"),
            position: { my: 'left center', at: 'right+10 center' }
        });
    }
    if (e.$element.next(".select2").tooltip('instance') != undefined) {
        e.$element.next(".select2").tooltip('destroy');
    }
    var isSelect2 = $(e.$element).is("select");
    if (isSelect2) {
        e.$element.next(".select2").tooltip({
            content: e.getErrorsMessages().join("<br />"),
            items: e.$element.next(".select2"),
            position: { my: 'left center', at: 'right+10 center' }
        });
    }
};
var removeErrorsInAttrTitle = function (e) {
    if (e.$element.tooltip('instance') != undefined) {
        e.$element.tooltip('destroy');
    }
    if (e.$element.next(".checkmark").tooltip('instance') != undefined) {
        e.$element.next(".checkmark").tooltip('destroy');
    }
    if (e.$element.next(".select2").tooltip('instance') != undefined) {
        e.$element.next(".select2").tooltip('destroy');
    }
};
var isSelectedColumnn = function (columnName, selectedColumns) {
    var isSelected = false;
    for (var i = 0; i < selectedColumns.length; i++) {
        if (selectedColumns[i] == columnName) {
            isSelected = true;
            break;
        }
    }
    return isSelected;
};
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
var colorSet = function (rMin, rMax, gMin, gMax, bMin, bMax, min, max) {
    var c = "";
    var colorArray = [];
    var arrayR = [];
    var colorR = rMin;
    while (colorR <= rMax) {
        colorR = colorR + 40;
        arrayR.push(colorR);
    }
    var arrayG = [];
    var colorG = gMin;
    while (colorG <= gMax) {
        colorG = colorG + 40;
        arrayG.push(colorG);
    }
    var arrayB = [];
    var colorB = bMin;
    while (colorB <= bMax) {
        colorB = colorB + 40;
        arrayB.push(colorB);
    }
    var arrayC = [];
    var colorC = min;
    while (colorC <= max) {
        colorC = colorC + 0.2;
        arrayC.push(colorC);
    }
    for (var i = 0; i < arrayR.length; i++) {
        for (var j = 0; j < arrayG.length; j++) {
            for (var k = 0; k < arrayB.length; k++) {
                for (var z = 0; z < arrayC.length; z++) {
                    c = "rgb(" + arrayR[i] + ", " + arrayG[j] + ", " + arrayR[k] + "," + arrayC[z] + ")";
                    colorArray.push(c);
                }
            }
        }
    }
    return colorArray;
};
var getColorPieArray = function () {
    var colorArray = [];
    var colorBase = [];
    var colorArrayG = [];
    var colorArrayB = [];
    var colorArrayBL = [];
    colorBase = [
        "#becfda", "#dfe7ec", "#d9d9d9", "#00b5cc", "#87d1d9",
        "#87d1d9", "#5d87a1", "#a6a6a6", "#53565a", "#afaeb0",
        "#636165", "#466579", "#9eb7c7"
    ];
    colorArray = colorBase;
    colorArrayG = colorSet(83, 166, 86, 166, 90, 166, 0, 1);
    colorArrayG.forEach(function (element) {
        colorArray.push(element);
    });
    colorArrayB = colorSet(93, 135, 135, 209, 161, 217, 0, 1);
    colorArrayB.forEach(function (element) {
        colorArray.push(element);
    });
    colorArrayBL = colorSet(0, 135, 181, 209, 204, 217, 0, 1);
    colorArrayBL.forEach(function (element) {
        colorArray.push(element);
    });
    return colorArray;
};
var pieColors = (function () {
    var colors = Highcharts.map(getColorPieArray(), function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [
                    1,
                    Highcharts.color(color)
                        .brighten(-0.3)
                        .get("rgb")
                ]
            ]
        };
    });
    return colors;
}());
var pieHighchart = function (params) {
    Highcharts.chart(params.id, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: params.title
        },
        tooltip: {
            pointFormat: params.format
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                colors: pieColors,
                dataLabels: {
                    enabled: true,
                    format: params.plotOptionsFormat,
                    connectorColor: "silver"
                }
            }
        },
        series: [
            {
                name: params.labelsX,
                data: params.dataSet,
                type: undefined,
                animation: {
                    duration: 1000
                },
                shadow: true
            }
        ]
    });
};
var pieBorderHighchart = function (params) {
    Highcharts.chart(params.id, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie"
        },
        title: {
            text: params.title
        },
        tooltip: {
            pointFormat: params.format
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                colors: pieColors,
                dataLabels: {
                    enabled: true,
                    format: params.plotOptionsFormat,
                    connectorColor: "silver"
                },
                borderWidth: 10
            }
        },
        series: [
            {
                name: params.labelsX,
                data: params.dataSet,
                type: undefined,
                animation: {
                    duration: 1000
                },
                shadow: true
            }
        ]
    });
};
var barHighchart = function (params) {
    Highcharts.chart(params.id, {
        chart: {
            type: 'bar',
            events: {
                load: function () {
                    var categoryHeight = 50;
                    this.update({
                        chart: {
                            height: categoryHeight * 1 +
                                (this.chartHeight - this.plotHeight)
                        }
                    });
                }
            }
        },
        title: {
            text: params.title
        },
        xAxis: {
            categories: [params.dataSet[0]['title'], '']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
            labels: {
                enabled: false,
                style: {
                    color: '#000000',
                }
            },
        },
        legend: {
            align: "right",
            verticalAlign: "top",
            layout: 'vertical',
            x: 20,
            y: 5
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                shadow: false
            }
        },
        series: [
            {
                color: '#53565a',
                name: params.dataSet[0]['value']['x'],
                data: [
                    {
                        y: params.dataSet[0]['value']['y'],
                        color: '#53565a'
                    },
                    {
                        y: params.dataSet[0]['value']['y'],
                        color: {
                            linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
                            stops: [
                                [0, '#ffffff'],
                                [0.2, '#ffffff'],
                                [1, '#c9cacc']
                            ]
                        }
                    },
                ],
                pointPadding: -0.15,
                type: undefined,
            },
            {
                color: '#a6a6a6',
                name: params.dataSet[1]['value']['x'],
                data: [
                    {
                        y: params.dataSet[1]['value']['y'],
                        color: '#a6a6a6'
                    },
                    {
                        y: params.dataSet[1]['value']['y'],
                        color: {
                            linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
                            stops: [
                                [0, '#ffffff'],
                                [0.2, '#ffffff'],
                                [1, '#d9d9d9']
                            ]
                        }
                    },
                ],
                pointPadding: -0.15,
                type: undefined
            }, {
                color: '#5d87a1',
                name: params.dataSet[2]['value']['x'],
                data: [
                    {
                        y: params.dataSet[2]['value']['y'],
                        color: '#5d87a1'
                    },
                    {
                        y: params.dataSet[2]['value']['y'],
                        color: {
                            linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
                            stops: [
                                [0, '#ffffff'],
                                [0.2, '#ffffff'],
                                [1, '#aec3d0']
                            ]
                        }
                    },
                ],
                pointPadding: -0.15,
                type: undefined
            },
            {
                color: '#87d1d9',
                name: params.dataSet[3]['value']['x'],
                data: [
                    {
                        y: params.dataSet[3]['value']['y'],
                        color: '#87d1d9',
                        borderRadiusTopLeft: 10
                    },
                    {
                        y: params.dataSet[3]['value']['y'],
                        color: {
                            linearGradient: { x1: 0, x2: 1, y1: 0, y2: 0 },
                            stops: [
                                [0, '#ffffff'],
                                [0.2, '#ffffff'],
                                [1, '#c3e8ec']
                            ]
                        }
                    },
                ],
                pointPadding: -0.15,
                type: undefined
            }
        ]
    });
};

//# sourceMappingURL=../maps/common.js.map

function pad(n, width, z) {
    z = z || "0";
    n = n + "";
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

/*
const verifyDay = (day, month, year) => {
    let countMonth = 0;
    let monthNum = 0;
    let monthL = 0;
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  // Day of month
    var indexMonth = 0;
  
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      monthLength[1] = 29;
    }
  
    // suma numero de meses
    if (!(month > 0 && month < 13)) {
      while (!(month > 0 && month < 13)) {
        month = month - 12;
      }
    }
  
    monthNum = month;
  
    if (day < 0 || day > monthLength[monthNum - 1]) {
        while (day < 0 || day > monthLength[monthNum - 1]) {
          
          indexMonth = monthNum - 1 + countMonth;
          if (indexMonth <= 11) {
            monthL = monthLength[monthNum - 1];
          } else {
            // monthL = monthLength[(monthNum - 1 + countMonth - 12)];
          }
          day = day - monthL;
          countMonth++;
        }  
    }
    return day;
  };
  */
 const verifyDay = (day, month, year) => {
    let countMonth = 0;
    let monthNum = 0;
    let monthL = 0;
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  // Day of month
    var indexMonth = 0;
  
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      monthLength[1] = 29;
    }
    
    monthNum = 0;
  
    if (day > monthLength[monthNum]) {
        while (day > monthLength[monthNum]) {
          indexMonth = monthNum + countMonth;
          if (indexMonth < 12) {
            monthL = monthLength[monthNum];
          } else {
            // monthL = monthLength[(monthNum - 1 + countMonth - 12)];
          }
          day = day - monthL;
        }  
    }
  
    return day;
  };

  /*
  const verifyMonth = (day, month, year) => {

    // Day
    let countMonth = 0;
    let monthNum = 0;
    let monthL = 0;
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  // Day of month
    var indexMonth = 0;
    
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      monthLength[1] = 29;
    }
  
    monthNum = month;
  
    if (day < 0 || day > monthLength[monthNum - 1]) {
        while (day < 0 || day > monthLength[monthNum - 1]) {
          
          indexMonth = monthNum - 1 + countMonth;
          if (indexMonth <= 11) {
            monthL = monthLength[monthNum - 1];
          } else {
            // monthL = monthLength[(monthNum - 1 + countMonth - 12)];
          }
          day = day - monthL;
          countMonth++;
        }  
    }
  
    month = month + countMonth;
  
    if (!(month > 0 && month < 13)) {
      while (!(month > 0 && month < 13)) {
        month = month - 12;
      }
    }
    return month;
  };
  */
 const verifyMonth = (day, month, year) => {
  
    // Day
    let countMonth = 0;
    let monthNum = 0;
    let monthL = 0;
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  // Day of month
    var indexMonth = 0;
    
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      monthLength[1] = 29;
    }
  
    monthNum = 0;
   
    if (day > monthLength[monthNum]) {
        while (day > monthLength[monthNum]) {
          
          indexMonth = monthNum + countMonth;
  
          if (indexMonth < 12) {
            monthL = monthLength[monthNum];
          } else {
            // monthL = monthLength[(monthNum - 1 + countMonth - 12)];
          }
  
          day = day - monthL;
          monthNum++;
          countMonth++;
        }  
    }
  
   if (month > 11) {
      while (month > 11) {
        month = month - 12;
      }
    }
   
    month = month + countMonth;
    return month;
  };
  /*
  const verifyYear = (day, month, year) => {

    // Day
    let countMonth = 0;
    let monthNum = 0;
    let monthL = 0;
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  // Day of month
    var indexMonth = 0;
  
    // Month
    let countMonthYear = 0;
    
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      monthLength[1] = 29;
    }
  
    monthNum = month;
  
    if (day < 0 || day > monthLength[monthNum - 1]) {
        while (day < 0 || day > monthLength[monthNum - 1]) {
          indexMonth = monthNum - 1 + countMonth;
  
          if (indexMonth <= 11) {
            monthL = monthLength[monthNum - 1];
          } else {
            // monthL = monthLength[(monthNum - 1 + countMonth - 12)];
          }
          day = day - monthL;
          countMonth++;
        }  
    }
  
    month = month + countMonth;
  
    if (!(month > 0 && month < 13)) {
      while (!(month > 0 && month < 13)) {
        month = month - 12;
        countMonthYear++;
      }
    }
  
    year = year + countMonthYear;
  
    return year;
  };
  */
 const verifyYear = (day, month, year) => {
    // Day
    let countMonth = 0;
    let monthNum = 0;
    let monthL = 0;
    let monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];  // Day of month
    var indexMonth = 0;
  
    // Month
    let countMonthYear = 0;
    
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
      monthLength[1] = 29;
    }
  
    monthNum = 0;
  
    if (day > monthLength[monthNum]) {
        while (day > monthLength[monthNum]) {
          indexMonth = monthNum + countMonth;
  
          if (indexMonth < 12) {
            monthL = monthLength[monthNum];
          } else {
            // monthL = monthLength[(monthNum - 1 + countMonth - 12)];
          }
  
          day = day - monthL;
          monthNum++;
          countMonth++;
        }  
    }
  
    month = month + countMonth;
  
    if (month > 11) {
      while (month > 11) {
        month = month - 12;
        countMonthYear++;
      }
    }
  
    year = year + countMonthYear;
    return year;
  };
  