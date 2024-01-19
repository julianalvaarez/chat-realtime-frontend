import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Message } from "../components";

// Crea una instancia de socket.io-client conectada al backend
const socket = io("https://chat-realtime-backend-dev-nxxr.1.us-1.fl0.io");

export const Chat = ({username}) => {
  // Estado para manejar el input del mensaje y la lista de mensajes
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  
  function getTime() {
    // Fecha original
    const fechaOriginal = new Date();

    // Función para formatear la hora en estilo 10:16 AM
    const formatearHora = (fecha) => {
        const opciones = { hour: 'numeric', minute: '2-digit', hour12: true };
        return fecha.toLocaleTimeString('en-US', opciones);
    };

    // Aplicar la función al formato original
    const horaFormateada = formatearHora(fechaOriginal);
    console.log(horaFormateada)
    return horaFormateada;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const time = getTime()
    // Crea un nuevo mensaje con el cuerpo del estado 'mensaje' y el remitente 'Me'
    const newMessage = {
      body: message,
      time,
      from: "Me",
    };
    // Actualiza el estado messageList agregando el nuevo mensaje
    setMessageList([...messageList, newMessage]);

    // Emite el evento 'message' al servidor socket.io con el contenido del mensaje
    socket.emit("message", message);
    setMessage("");
  }

  // función que recibe un mensaje y actualiza el estado messageList
  const receiveMessage = (message) =>
    setMessageList((state) => [...state, message]);

  useEffect(() => {
    // Maneja el evento 'message' y llama a receiveMessage cuando se recibe un mensaje
    socket.on("message", receiveMessage);

    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);
  return (
    <>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-gray-950 flex flex-col p-4 text-white rounded-md w-full mx-4 md:w-1/2 h-[calc(100vh-105px)]">
          <ul className="h-screen  flex flex-col py-4 overflow-auto gap-4">
            {messageList.length === 0 
            ? <p className="text-center text-slate-400 mt-auto">No hay mensajes aun.</p>
            : (
              messageList.map((message, i) => (
                <Message key={i} message={message} username={username} />
              ))
            )}
          </ul>
          <input
            type="text"
            placeholder="Write your message..."
            className="bg-slate-900 p-2 rounded-md w-full"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};
