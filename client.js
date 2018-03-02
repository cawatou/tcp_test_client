var net = require('net');
var request = process.argv[2];
var skip = process.argv[3] ? process.argv[3] : '';
var client = new net.Socket();
client.connect(1337, '185.22.235.182', function() {
	console.log('Connected');
    
    switch(request){
        case 'config':
            var config_request = {
                "event": "config_request",
                "serial_number": "8400503587105c2e08"
            };
            config_request = JSON.stringify(config_request);
            client.write(config_request);
            break;
        
        case 'key':
            var kеу_initial = {
                "event": "kеу_initial",
                "serial_number": "8400503587105c2e08"
            };
            kеу_initial = JSON.stringify(kеу_initial);
            client.write(kеу_initial);
            break;
        
        case 'key_next':
            var key_next = {
                "event": "key_next",
                "serial_number": "8400503587105c2e08",
                "skip": skip
            };
            key_next = JSON.stringify(key_next);
            client.write(key_next);
            break;
    }
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});