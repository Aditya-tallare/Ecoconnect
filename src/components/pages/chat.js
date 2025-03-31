import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import "../../styles/chat.css";

const GroupChat = () => {
  const auth = getAuth();
  const db = getFirestore();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const q = query(collection(db, "groupChats"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const user = auth.currentUser;
    if (!user) return;

    await addDoc(collection(db, "groupChats"), {
      text: newMessage,
      userName: user.displayName || "Anonymous",
      userId: user.uid,
      timestamp: serverTimestamp(),
    });

    setNewMessage("");
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg) => (
          <div key={msg.id} className={msg.userId === auth.currentUser?.uid ? "message self" : "message"}>
            <strong>{msg.userName}: </strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chat-input-box">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default GroupChat;
