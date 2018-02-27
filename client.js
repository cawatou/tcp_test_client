var net = require('net');

var client = new net.Socket();
client.connect(1337, '185.22.235.182', function() {
	console.log('Connected');

	/*var config_request = {
        "event": "config_request",
        "serial_number": "8400503587105c2e08"
    };
	config_request = JSON.stringify(config_request);
	client.write(config_request);*/


    var kеу_initial = {
        "event": "kеу_initial",
        "serial_number": "8400503587105c2e08"
    };
    kеу_initial = JSON.stringify(kеу_initial);
    client.write(kеу_initial);

});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});