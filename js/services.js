
$.fn.searchData = async function () {
    const url = "https://api.content.tripadvisor.com/api/v1/location/search?key=A0A244D2D5D8441CBE2DEFCCF1958378&searchQuery=hotel&category=hotels&latLong=-23.537430585909647%252C%2520-46.51669981349255&language=pt-br";
    var jqxhr = $.get( url, function() {
        console.log( "success" );
      })
        .done(function() {
          console.log( "second success" );
        })
        .fail(function(data, a, b) {
          console.log( "error", data, a, b );
        })
        .always(function() {
          console.log( "finished" );
        });
       
      // Perform other work here ...
       
      // Set another completion function for the request above
      jqxhr.always(function() {
        console.log( "second finished" );
      });
}