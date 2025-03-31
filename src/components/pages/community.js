import React from "react";
import { FaUserCircle, FaLeaf, FaComments, FaUsers } from "react-icons/fa";
import "../styles/community.css";
import { useNavigate } from "react-router-dom";

const communityPosts = [
  {
    id: 1,
    user: "Alice Green",
    avatar: <FaUserCircle />,
    post: "Just installed solar panels on my house! 🌞 Producing my own clean energy now!",
    likes: 25,
    comments: 10,
  },
  {
    id: 2,
    user: "Mark Rivers",
    avatar: <FaUserCircle />,
    post: "Switched to a zero-waste lifestyle. It's challenging but rewarding! ♻️",
    likes: 18,
    comments: 7,
  },
  {
    id: 3,
    user: "Sophie Woods",
    avatar: <FaUserCircle />,
    post: "Planted 50 trees with my community today! Every small step counts. 🌱",
    likes: 32,
    comments: 12,
  },
];

const CommunityPage = () =>
 {
  const navigate = useNavigate();
  return (
    <div className="community-page">
      {/* Header */}
      <header className="community-header">
        <h1><FaUsers /> EcoConnect Community</h1>
        <p>Join the conversation and share your sustainability journey!</p>
      </header>

      {/* Community Posts Section */}
      <section className="community-posts">
        {communityPosts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-user">
              {post.avatar}
              <h3>{post.user}</h3>
            </div>
            <p className="post-content">{post.post}</p>
            <div className="post-actions">
              <span><FaLeaf /> {post.likes}</span>
              <span><FaComments /> {post.comments}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="community-cta">
        <h2>🌍 Join the Movement!</h2>
        <p>Start posting, commenting, and sharing your sustainability journey today.</p>
        <button className="join-btn" onClick={() => navigate("/chat")}>Join Now</button>
      </section>
    </div>
  );
};

export default CommunityPage;
