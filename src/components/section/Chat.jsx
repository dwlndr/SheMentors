import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Chat = () => {
  const location = useLocation();
  const mentor = location.state?.mentor; // Mengambil data mentor dari state
  const [messages, setMessages] = useState([]); // State untuk menyimpan pesan
  const [inputMessage, setInputMessage] = useState(''); // State untuk input pesan

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newMessage = {
        text: inputMessage,
        sender: 'user',
      };
      setMessages([...messages, newMessage]); // Tambahkan pesan baru ke state
      setInputMessage(''); // Kosongkan input setelah pesan dikirim

      // Simulasikan pesan dari mentor
      setTimeout(() => {
        const mentorReply = {
          text: `Halo, Perkenalkan saya ${mentor.nama}. Apakah ada yang bisa saya bantu?`,
          sender: 'mentor', 
        };
        setMessages((prevMessages) => [...prevMessages, mentorReply]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-full p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Chat with {mentor.nama}</h1>

        {/* Chat box */}
        <div className="flex flex-col space-y-4 mb-4 overflow-y-auto max-h-96 p-4 border border-gray-200 rounded-lg bg-gray-50">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.sender === 'mentor' && (
                <img
                  src={mentor.url_photos} // Ganti dengan URL foto mentor
                  alt={mentor.nama}
                  className="w-10 h-10 rounded-full mr-2" // Gaya foto mentor
                />
              )}
              <div
                className={`${
                  message.sender === 'user' ? 'bg-main-900 text-white' : 'bg-gray-300 text-gray-900'
                } p-3 rounded-lg max-w-xs`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat input */}
        <form onSubmit={sendMessage} className="flex items-center">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-main-900 text-white rounded-lg hover:bg-main-800 focus:outline-none"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
