// const $element = $('#feeder2');
// const $element2 = $('#feeder3')
// const $tooltip = $('#range-tooltip');
// const sliderStates = [
//   {name: "low", tooltip: "Great, we're confident we can complete your project within <strong>24 hours</strong> of launch.", range: _.range(5, 26) },
//   {name: "med", tooltip: "Looks good! We can complete a project of this size within <strong>48 hours</strong> of launch.", range: _.range(26, 51)},
//   {name: "high", tooltip: "With a project of this size we'd like to talk with you before setting a completion timeline.", range: [51] },
// ];
// var currentState;
// var $handle;
// var $handle2
// var sendValue;
// var sendValue2;
// $element
//   .rangeslider({
//     polyfill: false,
//     onInit: function() {
//       $handle = $('.rangeslider__handle', this.$range);
//       updateHandle($handle[0], this.value);
//       updateState($handle[0], this.value);
//     }
//   })
  
//   .on('input', function() {
//     updateHandle($handle[0], this.value);
//     // checkState($handle[0], this.value);
//     clearTimeout(sendValue);


//     sendValue = setTimeout(() => {
//       // Make a call to server to clear the previous interval for feeder
//       // and start a interval using this value
//       $.ajax({
//         type: "POST",
//         dataType: "JSON",
//         url: '/changeFeederValue',
//         data: {
//           name: 'feeder2',
//           value: this.value
//             // dbconnection: true
//         },
//         success: function (response) {
//             console.log("Response module: " + JSON.stringify(response))

//             if (response.error_status == false) {
//                 alert('Sry you have an error')
//             }
//             else {
//                 console.log("Response module" + response)
//             }
//         }
//     })
//     }, 3000);
//   });




//   $element2
//   .rangeslider({
//     polyfill: false,
//     onInit: function() {
//       $handle2 = $('.rangeslider__handle2', this.$range);
//       updateHandle2($handle2[0], this.value);
//       updateState2($handle2[0], this.value);
//     }
//   })
  
//   .on('input', function() {
//     updateHandle2($handle2[0], this.value);
//     // checkState($handle[0], this.value);
//     clearTimeout(sendValue2);


//     sendValue2 = setTimeout(() => {
//       // Make a call to server to clear the previous interval for feeder
//       // and start a interval using this value
//       $.ajax({
//         type: "POST",
//         dataType: "JSON",
//         url: '/changeFeederValue',
//         data: {
//           name: 'feeder3',
//           value: this.value
//             // dbconnection: true
//         },
//         success: function (response) {
//             console.log("Response module: " + JSON.stringify(response))

//             if (response.error_status == false) {
//                 alert('Sry you have an error')
//             }
//             else {
//                 console.log("Response module" + response)
//             }
//         }
//     })
//     }, 3000);
//   });

// // Update the value inside the slider handle
// function updateHandle(el, val) {
//   el.textContent = val;
// }

// function updateHandle2(el, val) {
//   el.textContent = val;
// }

// // Check if the slider state has changed
// function checkState(el, val) {
//   // if the value does not fall in the range of the current state, update that shit.
//   if (!_.contains(currentState.range, parseInt(val))) {
//     updateState(el, val);
//   }
// }

// // Change the state of the slider
// function updateState(el, val) {
//   for (var j = 0; j < sliderStates.length; j++){
//     if (_.contains(sliderStates[j].range, parseInt(val))) {
//       currentState = sliderStates[j];
//       // updateSlider();
//     }
//   }
//   // If the state is high, update the handle count to read 50+
//   if (currentState.name == "high") {
//     updateHandle($handle[0], "50+");
//   }
//   // Update handle color
//   $handle
//     .removeClass (function (index, css) {
//     return (css.match (/(^|\s)js-\S+/g) ||   []).join(' ');
//   })
//     .addClass("js-" + currentState.name);
//   // Update tooltip
//   $tooltip.html(currentState.tooltip);
// }


// function updateState2(el, val) {
//   for (var j = 0; j < sliderStates.length; j++){
//     if (_.contains(sliderStates[j].range, parseInt(val))) {
//       currentState = sliderStates[j];
//       // updateSlider();
//     }
//   }
//   // If the state is high, update the handle count to read 50+
//   if (currentState.name == "high") {
//     updateHandle($handle[0], "50+");
//   }
//   // Update handle color
//   $handle2
//     .removeClass (function (index, css) {
//     return (css.match (/(^|\s)js-\S+/g) ||   []).join(' ');
//   })
//     .addClass("js-" + currentState.name);
//   // Update tooltip
//   $tooltip.html(currentState.tooltip);
// }



var rangeSlider = function(){
  var slider = $('.range-slider'),
      range = $('.range-slider__range'),
      value = $('.range-slider__value'),
      sendValue;

    
  slider.each(function(){

    value.each(function(){
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on('input', function(){
      $(this).next(value).html(this.value);
      // console.log(this);
      console.log($(this).next(value).html(this.value)[0].textContent);

      clearTimeout(sendValue);

      sendValue = setTimeout(() => {
      // Make a call to server to clear the previous interval for feeder
      // and start a interval using this value
      $.ajax({
        type: "POST",
        dataType: "JSON",
        url: '/changeFeederValue',
        data: {
          name: this.id,
          value: $(this).next(value).html(this.value)[0].textContent
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
    }, 4000);


      // console.log($(this).html);
    });
  });
};

rangeSlider();