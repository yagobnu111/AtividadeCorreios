$(document).ready(
    function () {
    $('input[type="button"]').click(

        function () {
            var cepOrigem = $('input[name="cepori"]').val();
            var cepDestino = $('input[name="cepdes"]').val();
            var peso = $('input[name="peso"]').val();
            var comprimento = $('input[name="comprimento"]').val();
            var altura = $('input[name="altura"]').val();
            var largura = $('input[name="largura"]').val();
            var valorDeclarado = $('input[name="valordeclarado"]').val();

            var url = "http://usysweb.com.br/api/correiosambev.php";
            var info = `nCdEmpresa=08082650&sDsSenha=564321&sCepOrigem=${cepOrigem}&sCepDestino=${cepDestino}&nVlPeso=${peso}&nCdFormato=1&nVlComprimento=${comprimento}&nVlAltura=${altura}&nVlLargura=${largura}&sCdMaoPropria=n&nVlValorDeclarado=${valorDeclarado}&sCdAvisoRecebimento=n&nCdServico=04510&nVlDiametro=0&StrRetorno=xml&nIndicaCalculo=3`;
;

            $.get(url, info , function (data) {

                alert(data);

         });    
    })
})





