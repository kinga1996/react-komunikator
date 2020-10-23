import React from 'react';

import "./styl.css";

function MessageForm({user, message, handleSubmit, handleContentChange, handleUserNameChange}){
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input id="name" type="text" name="user" value={user} onChange={handleUserNameChange} placeholder="Nick"/>
                <input id="text" type="text" name="content" value={message} onChange={handleContentChange} placeholder="Message"/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

}

export default MessageForm;