$( document ).ready(function() {
    var today = moment().format('YYYY-MM-DD');
    document.getElementById("dateStart").value = today;
    document.getElementById("dateEnd").value = today;
});