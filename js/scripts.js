$(function() {
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = $('#countries');

    $("#country-name").focus(function() {
        $(this).data("hasfocus", true);
    });
    $("#country-name").blur(function() {
        $(this).data("hasfocus", false);
    });
    $(document.body).keyup(function(ev) {
        if (ev.which === 13 && $("#country-name").data("hasfocus")) {
            searchCountries();
        }
    });
    $('#search').click(searchCountries);

    function searchCountries() {
        var countryName = $('#country-name').val();
        if (!countryName.length) countryName = 'Poland';
        $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
    function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function(item) {
            $('<li>').text(item.name).appendTo(countriesList);
        });
    }
  }

});
