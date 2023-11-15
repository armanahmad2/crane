// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


//  owl carousel script
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});

//    end owl carousel script 



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


$('#send').click(function(){
    
  //setTimeout(function() {
  	// Get data
    var data = {
      'entry.1492865280': $('#name').val(),
      'entry.1245271283': $('#phone').val(),
      'entry.140784888': $('#email').val(),
      'entry.1505917065': $('#message').val()
    };

    alert(data);
    // Validate form
    var formSuccess = true;
    // Object.keys(data).forEach(function(key, index) {
    //   if (!data[key]) {
    //     formSuccess = false;
    //     $('#feedback').html('<label class="text-danger">Please complete all fields</label>');
    //   }
    // });

    if (formSuccess) {
      // Send request
      $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSdUthr9Tu2tV2s2csd3hHmhDcj5z_O87Eq8O4MQPX1LsrHrVw/formResponse',
        type: 'POST',
        //crossDomain: true,
        dataType: "jsonp",
        data: data,
        success: function(jqXHR, textStatus, errorThrown) {
          console.log('Enter on success');
          $('#feedback').html('<label class="text-success">Message sent!</label>');
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log('Enter on error');
          $('#feedback').html('<label class="text-success">Message sent!</label>');
        }
      });
    }
  //}, 300);
 });