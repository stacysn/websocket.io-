# Websockets/Socket.io
- This repository contains a functional websockets/socket.io based chat room for multiple browsers. 
- Features used:
  - Node.js
  - socket.io
  - express.js
  
### Chatroom from Websocket using Socket.io
# <img src="/images/chat.jpg" height=300>

### What are Websockets? 
- Websocket is a computer communcations protocol that contains multiple communication channels over a single TCP connection.  
  - It allows a bidirectional communication between a client (browser) and server, resulting to real-time data flow. 

### What is a Socket.io?
- Socket.io is a JavaScript library used for realtime web applications. 
  - Features include:
      - storing data associated with each client 
      - broadcasting to multiple sockets 

# <img src="/images/sockets.jpg" height=300>

### Setup 
Socket.io is used in both client and server side 

- In the `index.html` file : 
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script> 

``` 

- In `index.js` file: 
```javascript 
    var socket = require('socket.io');
 
    var io = socket(server); 
    
    //listen for an event called 'connection' (connection coming from a browser)
    //once connection ins made, the callback function is made 
    //each connection will have a socket between the client and the server 
    
    io.on('connection', function(socket){
      console.log('made socket connection')
    }); 
 ```
 
 - `chat.js` file: 
   - A file created in the public folder used to establish a 
   - To connect the chat.js file and with the html file (client and server connection): 
   
```  
<script src="/chat.js"></script>

``` 


#### Uses of Websockets 
- Multiplayer browser games
- Collaborative code editing 
- Live text for sports/news websites


#### References
[David Walsh](https://davidwalsh.name/websocket)

[socket.io](https://socket.io/)

[Youtube](https://www.youtube.com/watch?v=UwS3wJoi7fY&t=2s)
