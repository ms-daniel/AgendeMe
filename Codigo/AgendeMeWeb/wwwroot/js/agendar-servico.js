﻿function getAreas(url, button) {
    var prefeitura = document.getElementById("prefeitura");
    if (prefeitura.value) {
        button.className = "br-button primary loading mx-auto d-block mt-5 mb-5";
        $.ajax({
            type: "GET",
            url: url,
            dataType: "HTML",
            data: { prefeitura: prefeitura.value },

            success: function (result) {
                $("#ajaxBox").html(result);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                //TODO::
            },
        });
    }
    else {
        var mensagemErro = document.getElementById("erroSelectPrefeitura");
        mensagemErro.className = "";
    }
}

function removeErro(select) {
    if (select.value) {
        var mensagemErro = document.getElementById("erroSelectPrefeitura");
        mensagemErro.className = "d-none";
    }
}

function getServicos(url, id) { 
        $.ajax({
            type: "GET",
            url: url,
            dataType: "HTML",
            data: { id: id },

            success: function (result) {
                $("#ajaxBox").html(result);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                //TODO::
            },
        });
    }
