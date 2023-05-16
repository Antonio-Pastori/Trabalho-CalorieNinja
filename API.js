// var query = document.querySelector("#api");
// $.ajax({
//     method: 'GET',
//     url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
//     headers: { 'X-Api-Key': 'ELEzbAPwhG53kSIfKVWTDQ==vEv2rrxGIa46AKeY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });
$('#submitSampleAPIRequest').on('click', function(e) {
    // query = $('#sample-api-request').val();
    query= "rice";
    $('#submitSampleAPIRequest').prop('disabled', true);
    $.ajax({
        method: "GET",
        url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
        headers: { "X-Api-Key": "ELEzbAPwhG53kSIfKVWTDQ==vEv2rrxGIa46AKeY"},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
});
