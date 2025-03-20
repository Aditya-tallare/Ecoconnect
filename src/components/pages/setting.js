import React, { useState } from "react";
import "../styles/setting.css";

const Settings = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState("public");

  const handleSave = () => {
    alert("🌿 Settings saved successfully!");
  };

  return (
    <div className="settings-container">
      <h2>⚙️ Personalize Your Experience</h2>

      <div className="setting-group">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="setting-group">
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="setting-group">
        <label>New Password:</label>
        <input type="password" placeholder="Enter new password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className="setting-group">
        <label>Theme Preference:</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">🌞 Light Mode</option>
          <option value="dark">🌙 Dark Mode</option>
        </select>
      </div>

      <div className="setting-group">
        <label>Receive Notifications:</label>
        <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
      </div>

      <div className="setting-group">
        <label>Privacy Settings:</label>
        <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
          <option value="public">🌍 Public</option>
          <option value="private">🔒 Private</option>
        </select>
      </div>

      <button className="save-btn" onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default Settings;
