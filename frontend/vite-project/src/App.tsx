import { useState,useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState(null);
  const inputMsg = useRef();
  function sendMessage(){
    if(!socket)
    {
      return ;
    }
    // @ts-ignore
    socket.send(inputMsg.current.value);
  }
  
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080/ws');
    setSocket(ws);
    ws.onmessage = (event) =>{
      alert(event.data);
    }
  },[])


  return (
    <>
      <div>
        <input ref={inputMsg} type="text" placeholder="Enter text here" />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  )
}

export default App
