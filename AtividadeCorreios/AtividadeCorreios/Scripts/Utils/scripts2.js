$(document).ready(
    function () {
        var url = window.location;
        var preco = url.toString().split("?")[1].split("&")[0].split("=")[1];
        var prazo = url.toString().split("?")[1].split("&")[1].split("=")[1];


        $('input[name="precoResultado"]').val("R$" + preco);
        $('input[name="prazoResultado"]').val(prazo + " dias");

    }
);