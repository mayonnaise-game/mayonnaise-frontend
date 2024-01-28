"use client";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const BASE_URL = "https://api-dev.yoriquiz.site/";

function App() {
  const [socketId, setSocketId] = useState<string>("disconnected");
  const [messages, setMessages] = useState<string[]>([]);

  const socketRef = useRef(io(`${BASE_URL}`, { autoConnect: false }));

  useEffect(() => {
    function onConnect() {
      console.log("connected");
      if (socketRef.current && socketRef.current.id) {
        setSocketId(socketRef.current.id);
      }
    }

    function onDisconnect() {
      console.log("disconnected");
      setSocketId("disconnected");
    }

    function onMessageReceived(message: string) {
      console.log("Message from server:", message);
      setMessages((prevMessages) => [...prevMessages, message]);
    }

    if (socketRef.current) {
      socketRef.current.on("connect", onConnect);
      socketRef.current.on("disconnect", onDisconnect);
      socketRef.current.on("broadcast", onMessageReceived);
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.off("connect", onConnect);
        socketRef.current.off("disconnect", onDisconnect);
        socketRef.current.off("broadcast", onMessageReceived);
      }
    };
  }, [socketRef.current]);

  const handleDisconnect = () => {
    console.info("Disconnecting socketRef.current...");
    if (socketRef.current) {
      socketRef.current.disconnect();
      console.log("disconnected");
    }
  };

  console.log("isListening", socketRef.current?.hasListeners("broadcast")); // true
  console.log("isConnected", socketRef.current?.connected); // false

  const handleConnect = () => {
    console.info("Connecting socketRef.current...");
    if (socketRef.current) {
      socketRef.current.connect();
    }
  };

  return (
    <div className="App">
      <p>Your ID: {socketId}</p>
      <button onClick={handleConnect}>Connect</button>
      <button onClick={handleDisconnect}>Disconnect</button>
      <button
        onClick={() =>
          socketRef.current?.emit("message", ["Hello from " + socketId])
        }
      >
        Send Message
      </button>
      <div>
        <h2>Messages</h2>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
