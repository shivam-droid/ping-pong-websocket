"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function App() {
    const [socket, setSocket] = (0, react_1.useState)(null);
    const inputMsg = (0, react_1.useRef)();
    function sendMessage() {
        if (!socket) {
            return;
        }
        // @ts-ignore
        socket.send(inputMsg.current.value);
    }
    (0, react_1.useEffect)(() => {
        const ws = new WebSocket('ws://localhost:8080/ws');
        setSocket(ws);
        ws.onmessage = (event) => {
            alert(event.data);
        };
    }, []);
    return (<>
      <div>
        <input ref={inputMsg} type="text" placeholder="Enter text here"/>
        <button onClick={sendMessage}>Send</button>
      </div>
    </>);
}
exports.default = App;
