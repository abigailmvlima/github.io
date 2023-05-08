$.ajax({
  url: "http://exemplo.com/api/dados",
  method: "GET",
  dataType: "json",
  success: function (data) {
    console.log(data);
  },
  error: function (jqXHR, textStatus, errorThrown) {
    console.log(textStatus, errorThrown);
  },
});
