$('.cb-value').click(function() {
    var mainParent = $(this).parent('.toggle-btn');
    if($(mainParent).find('input.cb-value').is(':checked')) {
      $(mainParent).addClass('active');
      console.log('ACTIVE');
      $.ajax({
        type: "POST",
        dataType: "JSON",
        url: '/sensorswitch',
        data: {
            switch: true
            // dbconnection: true
        },
        success: function (response) {
            console.log("Response module: " + JSON.stringify(response))

            if (response.error_status == false) {
                alert('Sry you have an error')
            }
            else {
                console.log("Response module" + response)
            }
        }
    })
      
    } else {
      $(mainParent).removeClass('active');
      console.log('INACTIVE');

      $.ajax({
        type: "POST",
        dataType: "JSON",
        url: '/sensorswitch',
        data: {
            switch: false,
            // dbconnection: true
        },
        success: function (response) {
            console.log("Response module: " + JSON.stringify(response))

            if (response.error_status == false) {
                alert('Sry you have an error')
            }
            else {
                console.log("Response module" + response)
            }
        }
    })
    }
  
  })