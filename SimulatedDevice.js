// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

'use strict';

const chalk = require('chalk');

// The device connection string to authenticate the device with your IoT hub.
//
// NOTE:
// For simplicity, this sample sets the connection string in code.
// In a production environment, the recommended approach is to use
// an environment variable to make it available to your application
// or use an HSM or an x509 certificate.
// https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-security
//
// Using the Azure CLI:
// az iot hub device-identity show-connection-string --hub-name {YourIoTHubName} --device-id MyNodeDevice --output table
var connectionString = 'HostName=iothubbridge.azure-devices.net;DeviceId=feeder-1;SharedAccessKey=QNfCzbqYqaU4/jzT5UruCyVvIPSsXfkNs9Ft3jsedLQ=';
var connectionString2 = 'HostName=iothubbridge.azure-devices.net;DeviceId=feeder2;SharedAccessKey=rZSfX985j8y5ox2kwjCMoPvH0RdQMvXro8oRhndckXY=';
var connectionString3 = 'HostName=iothubbridge.azure-devices.net;DeviceId=feeder-3;SharedAccessKey=A02sC9tXDcEGsSCHBa2e9BoFk1Y/YNicfr8okFvrL30=';
var connectionString4 = 'HostName=iothubbridge.azure-devices.net;DeviceId=feeder-4;SharedAccessKey=u95/RxsBxP3V09HYIm+QVE1Irv8KTA+kbhAQkCaref4=';

// Using the Node.js Device SDK for IoT Hub:
//   https://github.com/Azure/azure-iot-sdk-node
// The sample connects to a device-specific MQTT endpoint on your IoT Hub.
var Mqtt = require('azure-iot-device-mqtt').Mqtt;
var DeviceClient = require('azure-iot-device').Client
var Message = require('azure-iot-device').Message;

var client = DeviceClient.fromConnectionString(connectionString, Mqtt);
var client2 = DeviceClient.fromConnectionString(connectionString2, Mqtt);
var client3 = DeviceClient.fromConnectionString(connectionString3, Mqtt);
var client4 = DeviceClient.fromConnectionString(connectionString4, Mqtt);

// Timeout created by setInterval
var intervalLoop = null;
var intervalLoop2 = null;
var intervalLoop3 = null;
var intervalLoop4 = null;

// Function to handle the SetTelemetryInterval direct method call from IoT hub
function onSetTelemetryInterval(request, response) {
  // Function to send a direct method reponse to your IoT hub.
  function directMethodResponse(err) {
    if(err) {
      console.error(chalk.red('An error ocurred when sending a method response:\n' + err.toString()));
    } else {
        console.log(chalk.green('Response to method \'' + request.methodName + '\' sent successfully.' ));
    }
  }

  console.log(chalk.green('Direct method payload received:'));
  console.log(chalk.green(request.payload));

  // Check that a numeric value was passed as a parameter
  if (isNaN(request.payload)) {
    console.log(chalk.red('Invalid interval response received in payload'));
    // Report failure back to your hub.
    response.send(400, 'Invalid direct method parameter: ' + request.payload, directMethodResponse);

  } else {

    // Reset the interval timer
    clearInterval(intervalLoop);
    intervalLoop = setInterval(sendMessage, request.payload * 1000);

    // Report success back to your hub.
    response.send(200, 'Telemetry interval set: ' + request.payload, directMethodResponse);
  }
}

// Function to handle the SetTelemetryInterval direct method call from IoT hub
function onSetTelemetryInterval2(request, response) {
  // Function to send a direct method reponse to your IoT hub.
  function directMethodResponse(err) {
    if(err) {
      console.error(chalk.red('An error ocurred when sending a method response:\n' + err.toString()));
    } else {
        console.log(chalk.green('Response to method \'' + request.methodName + '\' sent successfully.' ));
    }
  }

  console.log(chalk.green('Direct method payload received:'));
  console.log(chalk.green(request.payload));

  // Check that a numeric value was passed as a parameter
  if (isNaN(request.payload)) {
    console.log(chalk.red('Invalid interval response received in payload'));
    // Report failure back to your hub.
    response.send(400, 'Invalid direct method parameter: ' + request.payload, directMethodResponse);

  } else {

    // Reset the interval timer
    clearInterval(intervalLoop2);
    intervalLoop2 = setInterval(sendMessage2, request.payload * 1000);

    

    // Report success back to your hub.
    response.send(200, 'Telemetry interval set: ' + request.payload, directMethodResponse);
  }
}


// feeder 3 telemetry
// Function to handle the SetTelemetryInterval direct method call from IoT hub
function onSetTelemetryInterval3(request, response) {
  // Function to send a direct method reponse to your IoT hub.
  function directMethodResponse(err) {
    if(err) {
      console.error(chalk.red('An error ocurred when sending a method response:\n' + err.toString()));
    } else {
        console.log(chalk.green('Response to method \'' + request.methodName + '\' sent successfully.' ));
    }
  }

  console.log(chalk.green('Direct method payload received:'));
  console.log(chalk.green(request.payload));

  // Check that a numeric value was passed as a parameter
  if (isNaN(request.payload)) {
    console.log(chalk.red('Invalid interval response received in payload'));
    // Report failure back to your hub.
    response.send(400, 'Invalid direct method parameter: ' + request.payload, directMethodResponse);

  } else {

    // Reset the interval timer
    clearInterval(intervalLoop3);
    intervalLoop3 = setInterval(sendMessage3, request.payload * 1000);

    

    // Report success back to your hub.
    response.send(200, 'Telemetry interval set: ' + request.payload, directMethodResponse);
  }
}

// feeder 3 telemetry
// Function to handle the SetTelemetryInterval direct method call from IoT hub
function onSetTelemetryInterval4(request, response) {
  // Function to send a direct method reponse to your IoT hub.
  function directMethodResponse(err) {
    if(err) {
      console.error(chalk.red('An error ocurred when sending a method response:\n' + err.toString()));
    } else {
        console.log(chalk.green('Response to method \'' + request.methodName + '\' sent successfully.' ));
    }
  }

  console.log(chalk.green('Direct method payload received:'));
  console.log(chalk.green(request.payload));

  // Check that a numeric value was passed as a parameter
  if (isNaN(request.payload)) {
    console.log(chalk.red('Invalid interval response received in payload'));
    // Report failure back to your hub.
    response.send(400, 'Invalid direct method parameter: ' + request.payload, directMethodResponse);

  } else {

    // Reset the interval timer
    clearInterval(intervalLoop4);
    intervalLoop4 = setInterval(sendMessage4, request.payload * 1000);

    

    // Report success back to your hub.
    response.send(200, 'Telemetry interval set: ' + request.payload, directMethodResponse);
  }
}


// Send a telemetry message to your hub
function sendMessage(){
  // Simulate telemetry.
  var temperature = 20 + (Math.random() * 15);
  var pressure = Math.floor(Math.random() * (1011 - 1010 + 1)) + 1010;
  var message = new Message(JSON.stringify({
    temperature: temperature,
    pressure: pressure
  }));

  // Add a custom application property to the message.
  // An IoT hub can filter on these properties without access to the message body.
  message.properties.add('temperatureAlert', (temperature > 30) ? 'true' : 'false');

  console.log('Sending message: ' + message.getData());

  // Send the message.
  client.sendEvent(message, function (err) {
    if (err) {
      console.error('send error: ' + err.toString());
    } else {
      console.log('message sent');
    }
  });
}

// Send a telemetry message to your hub
function sendMessage2(temp){
  // Simulate telemetry.
  // var temperature = 20 + (Math.random() * 15);
  // var temperature = Math.floor(Math.random() * (105 - 80 + 1)) + 80;
  var message = new Message(JSON.stringify({
    temperature: temp, //THIS SHOULD BE REALTIME FROM UI
  }));

  // Add a custom application property to the message.
  // An IoT hub can filter on these properties without access to the message body.
  // message.properties.add('temperatureAlert', (temperature > 30) ? 'true' : 'false');

  console.log('Sending message: ' + message.getData());

  // Send the message.
  client2.sendEvent(message, function (err) {
    if (err) {
      console.error('send error: ' + err.toString());
    } else {
      console.log('message sent');
    }
  });
}

// feeder 3
// Send a telemetry message to your hub
function sendMessage3(pVoltage){
  // Simulate telemetry.
  // var temperature = 20 + (Math.random() * 15);
  // var primaryVoltage = (Math.random() * (480 - 478 + 1)) + 478;
  var message = new Message(JSON.stringify({
    primaryVoltage: pVoltage, //THIS SHOULD BE REALTIME FROM UI
    // pressure: 0
  }));

  // Add a custom application property to the message.
  // An IoT hub can filter on these properties without access to the message body.
  // message.properties.add('temperatureAlert', (temperature > 30) ? 'true' : 'false');

  console.log('Sending message: ' + message.getData());

  // Send the message.
  client3.sendEvent(message, function (err) {
    if (err) {
      console.error('send error: ' + err.toString());
    } else {
      console.log('message sent');
    }
  });
}


// feeder 4
// Send a telemetry message to your hub
function sendMessage4(){
  // Simulate telemetry.
  // var temperature = 20 + (Math.random() * 15);
  var secondaryVoltage = (Math.random() * (240 - 236 + 1)) + 236;
  var message = new Message(JSON.stringify({
    secondaryVoltage: secondaryVoltage,
    // pressure: 0
  }));

  // Add a custom application property to the message.
  // An IoT hub can filter on these properties without access to the message body.
  // message.properties.add('temperatureAlert', (temperature > 30) ? 'true' : 'false');

  console.log('Sending message: ' + message.getData());

  // Send the message.
  client4.sendEvent(message, function (err) {
    if (err) {
      console.error('send error: ' + err.toString());
    } else {
      console.log('message sent');
    }
  });
}


// Set up the handler for the SetTelemetryInterval direct method call.
client.onDeviceMethod('SetTelemetryInterval', onSetTelemetryInterval);
client2.onDeviceMethod('SetTelemetryInterval', onSetTelemetryInterval2);
client3.onDeviceMethod('SetTelemetryInterval', onSetTelemetryInterval3);
client4.onDeviceMethod('SetTelemetryInterval', onSetTelemetryInterval4)

// Create a message and send it to the IoT hub, initially every second.
// intervalLoop = setInterval(sendMessage, 5000);
// intervalLoop2 = setInterval(sendMessage2, 1000);
// intervalLoop3 = setInterval(sendMessage3, 1000);
// intervalLoop4 = setInterval(sendMessage4, 1000);

module.exports = {
  simulate: function() {
    console.log(sendMessage3);
    // clearInterval(intervalLoop);
    intervalLoop = setInterval(sendMessage, 1000);
  },

  switchOnOff: function(body) {
    if(body.switch === 'true') {
      intervalLoop = setInterval(sendMessage, 1000);
      intervalLoop2 = setInterval(() => sendMessage2(body.feeder2), 1000);
      intervalLoop3 = setInterval(() => sendMessage3(body.feeder3), 1000);
      intervalLoop4 = setInterval(sendMessage4, 1000);
    } else {
      clearInterval(intervalLoop);
      clearInterval(intervalLoop2);
      clearInterval(intervalLoop3);
      clearInterval(intervalLoop4);
    }

  },
  changeFeederValues: function(body) {
    var feederValue = body.value;
    if (body.name === 'feeder2') {
      clearInterval(intervalLoop2);
      intervalLoop2 = setInterval(() => {
        var message = new Message(JSON.stringify({
          temperature: feederValue,
        }));
      
        // Add a custom application property to the message.
        // An IoT hub can filter on these properties without access to the message body.
        // message.properties.add('temperatureAlert', (temperature > 30) ? 'true' : 'false');
      
        console.log('Sending message: ' + message.getData());
      
        // Send the message.
        client2.sendEvent(message, function (err) {
          if (err) {
            console.error('send error: ' + err.toString());
          } else {
            console.log('message sent');
          }
        });
      }, 1000)
    }
    if (body.name === 'feeder3') {
      clearInterval(intervalLoop3);
      intervalLoop3 = setInterval(() => {
        var message = new Message(JSON.stringify({
          primaryVoltage: Number(feederValue),
        }));
      
        // Add a custom application property to the message.
        // An IoT hub can filter on these properties without access to the message body.
        // message.properties.add('temperatureAlert', (temperature > 30) ? 'true' : 'false');
      
        console.log('Sending message: ' + message.getData());
      
        // Send the message.
        client3.sendEvent(message, function (err) {
          if (err) {
            console.error('send error: ' + err.toString());
          } else {
            console.log('message sent');
          }
        });
      }, 1000)
    }
  }
}