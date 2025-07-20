const {WebSocketServer} = require('ws');

const wss = new WebSocketServer({port:8080});

wss.on('connection',(socket: any)=>{
    console.log('New client connected');
    socket.on('message',(msg: any)=>{
        console.log(msg.toString());
        if(msg.toString() == 'ping') {
            console.log('Received ping, sending pong');
            socket.send('pong');
        }
    })
})




