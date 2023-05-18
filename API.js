
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
            nome = comida[0]['name'];
            document.getElementById("nomeing").innerHTML = nome;
            calories = comida[0]['calories'];
            document.getElementById("calories").innerHTML = calories;
            carbo = comida[0]['carbohydrates_total_g'];
            document.getElementById("carbot").innerHTML = carbo;
            coles = comida[0]['cholesterol_mg'];
            document.getElementById("coles").innerHTML = coles;
            gords = comida[0]['fat_saturated_g'];
            document.getElementById("gords").innerHTML = gords;
            gordt = comida[0]['fat_total_g'];
            document.getElementById("gordt").innerHTML = gordt;
            fibra = comida[0]['fiber_g'];
            document.getElementById("fibra").innerHTML = fibra;
            pot = comida[0]['potassium_mg'];
            document.getElementById("pot").innerHTML = pot;
            prot = comida[0]['protein_g'];
            document.getElementById("prot").innerHTML = prot;
            serve = comida[0]['serving_size_g'];
            document.getElementById("serve").innerHTML = serve;
            sod = comida[0]['sodium_mg'];
            document.getElementById("sóÓdio").innerHTML = sod;
            doce = comida[0]['sugar_g'];
            document.getElementById("doce").innerHTML = doce;
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
        
    });
   
});