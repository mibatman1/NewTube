const ChatMessage=({name, message})=>
{
    return(
        <div className="flex items-center shadow-sm p-2">
            <img className="h-8" src="https://static.vecteezy.com/system/resources/previews/000/551/599/original/user-icon-vector.jpg" alt="user-icon"/>
            <span className="font-bold px-3">{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage;