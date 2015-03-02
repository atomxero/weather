// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/


var Cheney ='99004'
var Spokane = '99205'

  // 2. _simpleWeather()_ object
  $.simpleWeather({
    
    location: '99205', // change zip
    unit: 'f',
    
    // Get _weather_ object
    success: function(weather) {
      

      //Get & output weather


      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      //Get & store state
      var state = weather.region;
  	//Get & store thumb
      var thumb = weather.thumbnail;
      console.log(thumb)
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.state').text(state);
      $('.thumb img').attr('src', thumb);
      
      
      // See console for _weather_ object
      console.log(weather);
    },
  
    // if error
    error: function(error) {  
      $('body').html('<p>' + error + '</p>');
    }
  
  });


