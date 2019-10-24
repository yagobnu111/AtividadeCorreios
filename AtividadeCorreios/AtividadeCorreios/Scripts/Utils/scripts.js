$(document).ready(function () {
   $('button[name="btnconsulta"]').click(function () {
         var information = $('form[name="frm"]').serializeArray();
         var obterAtributo = $('form[name="frm"]').attr('send-post');

       $.post("http://usysweb.com.br/api/" + obterAtributo + "correiosambev.php" + information, function (data) {
                data = JSON.parse(data);
    $.each(data.cServico, function (key, value) {
        $('p[name="{key}"'.replace("{key}", key)).text(value);
         });
     });
   });
});





