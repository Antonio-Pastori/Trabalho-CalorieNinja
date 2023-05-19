
//JS PARA PEGAR AS INFORMAÇÕES DO INGREDIENTE
$('#buscainfo').on('click', function(e) {
    query = $('#ing').val();
    $.ajax({
        method: "GET",
        url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
        headers: { "X-Api-Key": "ELEzbAPwhG53kSIfKVWTDQ==vEv2rrxGIa46AKeY"},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            comida = result['items'];
            document.getElementById("nomeing").innerHTML = comida[0]['name'];
            document.getElementById("calories").innerHTML = comida[0]['calories'];
            document.getElementById("carbot").innerHTML = comida[0]['carbohydrates_total_g']+" g";
            document.getElementById("coles").innerHTML = comida[0]['cholesterol_mg']+" mg";
            document.getElementById("gords").innerHTML = comida[0]['fat_saturated_g']+" g";
            document.getElementById("gordt").innerHTML = comida[0]['fat_total_g']+" g";
            document.getElementById("fibra").innerHTML = comida[0]['fiber_g']+" g";
            document.getElementById("pot").innerHTML = comida[0]['potassium_mg']+" mg";
            document.getElementById("prot").innerHTML =   comida[0]['protein_g']+" g";
            document.getElementById("serve").innerHTML = comida[0]['serving_size_g']+" g";
            document.getElementById("sódio").innerHTML = comida[0]['sodium_mg']+" mg";
            document.getElementById("doce").innerHTML = comida[0]['sugar_g']+" g";
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
         
    }
   );
    
});
//JS PARA PEGAR RECEITAS QUE CONTENHAM O INGREDINTE
$('#buscareceita').on('click', function(e) {
    query= $("#textoreceita").val();
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://api.api-ninjas.com/v1/recipe?query='+query,
        method: 'GET',
        headers: {
            'X-Api-Key': 'ELEzbAPwhG53kSIfKVWTDQ==Ndt8GRtgeJS7sVPN',
            
        }
        };
    $.ajax(settings).done(function (response) {
        console.log(response);
        receita = response[0];
        titulo = receita['title'];
        document.getElementById("titulo").innerHTML = titulo;
        inst = receita['instructions'];
        document.getElementById("instrecipe").innerHTML = "Instructions:"+"<br>"+inst;
        ingred = receita['ingredients'];
        document.getElementById("ingrecipe").innerHTML = "Ingredients: <br>"+ingred;
        porcao = receita['servings'];
        document.getElementById("serverecipe").innerHTML = "Servings: <br>"+porcao;
    });
   
});
//JS PARA PEGAR IMAGEM E MONTAR TABELA NUTRICIONAL
$('#buscaimagem').on('click', function(e) {
    var formData = new FormData();
    formData.append('file', $('#file')[0].files[0]);
    $.ajax({
        method: 'POST',
        url: 'https://api.calorieninjas.com/v1/imagetextnutrition',
        headers: { "X-Api-Key": "ELEzbAPwhG53kSIfKVWTDQ==vEv2rrxGIa46AKeY"},
        data: formData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false, 
        success: function(result) {
            console.log(result);
            comida = result['items'];
            document.getElementById("nomeing").innerHTML = comida[0]['name'];
            document.getElementById("calories").innerHTML = comida[0]['calories'];
            document.getElementById("carbot").innerHTML = comida[0]['carbohydrates_total_g']+" g";
            document.getElementById("coles").innerHTML = comida[0]['cholesterol_mg']+" mg";
            document.getElementById("gords").innerHTML = comida[0]['fat_saturated_g']+" g";
            document.getElementById("gordt").innerHTML = comida[0]['fat_total_g']+" g";
            document.getElementById("fibra").innerHTML = comida[0]['fiber_g']+" g";
            document.getElementById("pot").innerHTML = comida[0]['potassium_mg']+" mg";
            document.getElementById("prot").innerHTML =   comida[0]['protein_g']+" g";
            document.getElementById("serve").innerHTML = comida[0]['serving_size_g']+" g";
            document.getElementById("sódio").innerHTML = comida[0]['sodium_mg']+" mg";
            document.getElementById("doce").innerHTML = comida[0]['sugar_g']+" g";
        },
        error: function ajaxError(jqXHR, textStatus, errorThrown) {
            alert(jqXHR.responseText);
        }
    });
});
