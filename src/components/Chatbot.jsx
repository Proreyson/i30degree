import React, { useEffect, useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    const newMessage = 'User input'; // Replace with actual user input
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    // Send user input to the chatbot API or handle it as required
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/64a2ed60cc26a871b02617af/1h4e6uh6t';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // return (
  //   <div>
  //     <div className="chatbot-messages">
  //       {messages.map((message, index) => (
  //         <div key={index} className="chatbot-message">
  //           <span className="chatbot-message-text">{message}</span>
  //         </div>
  //       ))}
  //     </div>
  //     <div className="chatbot-input">
  //       <input type="text" placeholder="Type your message" />
  //       <button onClick={handleSendMessage}>Send</button>
  //     </div>
  //   </div>
  // );
};

export default Chatbot;
