import React from 'react';

function MessageForm({user, message, handleSubmit, handleContentChange, handleUserNameChange}){
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user" value={user} onChange={handleUserNameChange}/>
                <input type="text" name="content" value={message}
                onChange={handleContentChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

}

export default MessageForm;