


$('#getZip').click(function() {
  
  // stop default, <form> from submitting data
  event.preventDefault();
  
  // get and store data
  var zip = $('#zip').val();
  console.log(zip);  
  
  // Get Weather
  $.simpleWeather({
    
    location: zip, 
    success: function(weather) {
      
      // get weather OK? 
      console.log(weather);

      $('.currently').text(weather.currently);
      $('.temp').text(weather.temp);
      $('.unit').text(weather.units.temp);
      $('.city').text(weather.city);
      $('.state').text(weather.region);
      $('.high').text(weather.high);
      $('.low').text(weather.low);
      $('.rise').text(weather.sunrise);
      $('.set').text(weather.sunset);


    

    
    },  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // clear zip
  $('#getWeather').val('');
  
});

