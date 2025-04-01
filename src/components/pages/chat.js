import { useState, useEffect } from 'react';
import "../styles/chat.css"; // Ensure the CSS aligns with the EcoConnect theme
import { collection, addDoc, query, orderBy, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { firestore } from '../../firebase';

function Chat() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const q = query(collection(firestore, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    });
    return unsubscribe;
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim()) {
      await addDoc(collection(firestore, "messages"), {
        uid: user.uid,
        displayName: username,
        text: newMessage,
        timestamp: serverTimestamp(),
      });
      setNewMessage("");
    }
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-green-900 to-green-700 py-12 min-h-screen">
      {user ? (
        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg">
          <h2 className="text-green-800 text-2xl font-semibold mb-4">Welcome, {username}!</h2>
          <div className="w-full h-80 overflow-y-auto p-3 bg-gray-100 rounded-lg shadow-inner">
            {messages.map(msg => (
              <div key={msg.id} className={`my-2 flex ${msg.data.uid === user.uid ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-xl max-w-[70%] text-sm shadow-md ${msg.data.uid === user.uid ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  <strong className="block text-xs mb-1 text-gray-600">{msg.data.displayName}</strong>
                  {msg.data.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-4 w-full gap-2">
            <input
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow p-3 border rounded-lg text-gray-700 bg-gray-100"
            />
            <button
              className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-500"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
          <button
            className="mt-4 text-gray-600 text-sm hover:underline"
            onClick={() => setUser(null)}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-green-800 text-xl font-semibold mb-4">Enter Your EcoConnect Username</h2>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            className="p-3 border rounded-lg w-full bg-gray-100 text-gray-700"
          />
          <button
            className="mt-4 bg-green-600 text-white rounded-lg w-full py-3 hover:bg-green-500"
            onClick={() => {
              if (username.trim()) {
                setUser({ uid: `user_${Date.now()}`, displayName: username });
              }
            }}
          >
            Start Chatting
          </button>
        </div>
      )}
    </div>
  );
}

export default Chat;
