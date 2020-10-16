import React, {useState, useEffect} from 'react';
import './style.css';

import Message from './components/Message';
import MessageForm from './components/MessageForm';

import db from './config';

function App() {

  const [newMessage, setNewMessage]= useState("");
  const [messagesDow, setMessagesDow] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    db.ref("/messages").on("value", (snapshot) => {
      const fbMessages = snapshot.val();
      const convertedMessages = Object.entries(fbMessages || {}).map(([id, message]) => ({
        ...message,
        id
      }));
      setMessagesDow(convertedMessages);
    });
  }, []);

  const handleContentChange = (event) => {
    setNewMessage(event.target.value);
  };
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) =>{
    const value = event.target.value;
    event.preventDefault();
    const messageObj = {
      user: userName,
      content: newMessage,
      datetime: Date.now()
    }
    if (newMessage && userName) {
      db.ref('/messages')
        .push(messageObj)
        .then(() => setNewMessage(''), setUserName(''));
    }
  }

  return (
    <div className="App">
      {messagesDow.map((message) => (
        <Message key={message.id} message={message}/>
      ))}
      <MessageForm
        user = {userName}
        message = {newMessage}
        handleSubmit={handleSubmit}
        handleUserNameChange={handleUserNameChange}
        handleContentChange={handleContentChange}
      />
    </div>
  );
}

export default App;
