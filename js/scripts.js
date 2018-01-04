$(function() {
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = $('#countries');

    $( "#form-search" ).submit(function( event ) {
        searchCountries();
        event.preventDefault();
    });

    function searchCountries() {
        var countryName = $('#country-name').val();
        if (!countryName.length) {
            countryName = 'Poland';
        }
        $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });       
    }
    function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function(item) {
            $('<li>').text(item.name).appendTo(countriesList);
        });
    }
});
