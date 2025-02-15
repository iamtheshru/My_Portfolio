import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChatWithMe = () => {
    const [chatOpen, setChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: 'Hi! How can I assist you today? I can answer questions about my living place, education, experience, and skills.' }
    ]);
    const [input, setInput] = useState('');
    const [askRedirect, setAskRedirect] = useState(false);

    const handleSend = () => {
        if (input.trim() === '') return;

        const newMessages = [...messages, { sender: 'user', text: input }];
        setMessages(newMessages);

        if (input.toLowerCase().includes('place') || input.toLowerCase().includes('live')) {
            setMessages([...newMessages, { sender: 'bot', text: 'I live in Ahmedabad.' }]);
        } else if (input.toLowerCase().includes('education')) {
            setMessages([...newMessages, { sender: 'bot', text: 'I have a degree in Computer Science and Engineering.' }]);
        } else if (input.toLowerCase().includes('experience')) {
            setMessages([...newMessages, { sender: 'bot', text: 'I have 1.5 years of training and 5 months of experience as a Front-End Developer.' }]);
        } else if (input.toLowerCase().includes('skills')) {
            setMessages([...newMessages, { sender: 'bot', text: 'My skills include React, JavaScript, and web design.' }]);
        } else {
            setMessages([...newMessages, { sender: 'bot', text: 'I am not sure about that. Would you like to contact me on WhatsApp?' }]);
            setAskRedirect(true);
        }

        setInput('');
    };

    const redirectToWhatsApp = () => {
        const whatsappURL = `https://wa.me/9173322877?text=Hi%20Shraddha,%20I%20need%20your%20help!`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="position-fixed bottom-0 end-0 pb-2 text-end me-2 z-index">
            {!chatOpen &&
                (<button
                    onClick={() => setChatOpen(!chatOpen)}
                    className="btn btn-primary shadow-lg " >
                    Let's Chat 💬
                </button>)}

            {chatOpen && (
                <div className="card shadow-lg mt-2 bottom-0 end-0 text-end width-full" style={{ width: '22rem' }}>
                    <div className="card-header  btn-primary text-white d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 ">Chat with Me</h5>
                        <button onClick={() => setChatOpen(false)} className="btn-close btn-close-white"></button>
                    </div>
                    <div className="card-body overflow-auto" style={{ maxHeight: '300px' }}>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded mb-2 ${msg.sender === 'user' ? 'bg-primary text-white text-end' : 'bg-light text-start '}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {askRedirect && (
                            <div className="text-center mt-3">
                                <p className="small">Would you like to contact me on WhatsApp?</p>
                                <div className="d-flex justify-content-center gap-2">
                                    <button onClick={redirectToWhatsApp} className="btn btn-success btn-sm">Yes</button>
                                    <button onClick={() => setChatOpen(false)} className="btn btn-danger btn-sm">No</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="card-footer d-flex gap-2">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="form-control"
                        />
                        <button onClick={handleSend} className="btn btn-primary">Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatWithMe;
