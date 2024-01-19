export const Message = ({message, username}) => {
    return (
      <li
        className={`${message.from === "Me" ? "ml-auto" : " mr-auto"} flex flex-row-reverse items-end`}
      >
        <div className={`p-2 rounded-md min-w-16 
        ${message.from === "Me" ? "bg-sky-800 ml-auto" : "bg-slate-700 mr-auto"}`}>
          <span className="block font-semibold text-xs">{username}</span>
          <span>{message.body}</span>
        </div>
        <p className="text-xs mx-2 text-slate-400">{message.time}</p>
      </li>
    );
  };
  