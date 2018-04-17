var net = require('net');
var request = process.argv[2];
var skip = key_num = process.argv[3] ? process.argv[3] : '';
var client = new net.Socket();

client.connect(1337, '185.22.235.182', function() {
	console.log('Connected');
    
    switch(request){
        case 'test':
            var config_request = {
                "event": "test",
                "serial_number": "84005035c504382e09ce"
            };
            config_request = JSON.stringify(config_request);
            client.write(config_request);
            break;        
        
        case 'config':
            var config_request = {
                "event": "config_request",
                "serial_number": "84005035c504382e09ce"
            };
            config_request = JSON.stringify(config_request);
            client.write(config_request);
            break;
        
        case 'keys':
            var keys = {
                "event": "keys",
                "serial_number": "84005035c504382e09ce",
                "skip": skip
            };
            keys = JSON.stringify(keys);
            client.write(keys);
            break;
        
        case 'add_key':
            var key = {
                "event": "add_key",
                "serial_number": "84005035c504382e09ce",
                "key": key_num
            };
            key = JSON.stringify(key);
            client.write(key);
            break;

        case 'flats_off':
            var flat = {
                "event": "flats_off",
                "serial_number": "84005035c504382e09ce",
                "skip": skip
            };
            flat = JSON.stringify(flat);
            client.write(flat);
            break;
        
        case 'flats_app':
            var flat = {
                "event": "flats_app",
                "serial_number": "84005035c504382e09ce",
                "skip": skip
            };
            flat = JSON.stringify(flat);
            client.write(flat);
            break;

        default:
            client.write('undefined');
    }
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});