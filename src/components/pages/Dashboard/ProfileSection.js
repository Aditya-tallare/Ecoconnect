import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../../styles/overview.css";
import { FaFacebook, FaTwitter, FaInstagram, FaEdit, FaCheck } from "react-icons/fa";

const ProfileSection = () => {
  const [avatar, setAvatar] = useState("https://via.placeholder.com/90"); // Default image
  const [username, setUsername] = useState("Loading...");
  const [bio, setBio] = useState("Sustainability enthusiast making an impact!");
  const [isEditing, setIsEditing] = useState(false);
  const auth = getAuth();
  const storage = getStorage();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName || "Eco Warrior");
        if (user.photoURL) {
          setAvatar(user.photoURL);
        }
      }
    });
  }, []);

  // Handle Avatar Upload
  const handleAvatarChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const user = auth.currentUser;
      if (!user) return;

      const storageRef = ref(storage, `avatars/${user.uid}`); // Store in Firebase Storage
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      await updateProfile(user, { photoURL: downloadURL }); // Update Firebase Profile
      setAvatar(downloadURL); // Update UI
    }
  };

  return (
    <div className="profile-section">
      <div className="avatar-container">
        <label htmlFor="avatarInput" className="avatar-label">
          <img src={avatar} alt="Profile Avatar" className="profile-avatar" />
          <input
            type="file"
            id="avatarInput"
            accept="image/*"
            onChange={handleAvatarChange}
            className="avatar-upload"
          />
        </label>
        <div className="profile-status online"></div>
      </div>

      <div className="profile-info">
        <p className="profile-name">{username}</p>
        <p className="profile-role">🌍 Eco Champion</p>

        <div className="profile-bio">
          {isEditing ? (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="bio-edit"
            />
          ) : (
            <p>{bio}</p>
          )}
          <button onClick={() => setIsEditing(!isEditing)} className="edit-bio-btn">
            {isEditing ? <FaCheck /> : <FaEdit />}
          </button>
        </div>

        <div className="profile-stats">
          <div className="stat">♻️ Eco Score: <strong>85%</strong></div>
          <div className="stat">🌿 CO₂ Saved: <strong>2.5 kg</strong></div>
          <div className="stat">🎯 Eco Activities: <strong>12 Completed</strong></div>
          <div className="stat">🏆 Eco Level: <strong>Green Hero</strong></div>
        </div>

        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
