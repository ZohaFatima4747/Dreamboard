import React, { useState } from "react";
import "./Home.css";
import post1 from "../assets/post1.jpg";
import post2 from "../assets/post2.jpg";
import post3 from "../assets/post3.jpg";

const postsData = [
  {
    id: 1,
    user: "User 1",
    image: post1,
    caption: "Frontend Developer",
    dreamType: "🎨 Creativity",
    tags: ["Design", "UI/UX"],
    progress: 60,
    miniGoals: ["Learn Figma", "Build Portfolio", "Daily Practice"],
  },
  {
    id: 2,
    user: "User 2",
    image: post2,
    caption: "Tech",
    dreamType: "💻 Tech",
    tags: ["AI", "React"],
    progress: 30,
    miniGoals: ["Build 1 Project", "Read Blog", "Watch Tutorial"],
  },
  {
    id: 3,
    user: "User 3",
    image: post3,
    caption: "Nature",
    dreamType: "🌿 Lifestyle",
    tags: ["Travel", "Explore"],
    progress: 80,
    miniGoals: ["Plan Trip", "Save Money", "Research Spots"],
  },
];

const HomePage = ({ toggleSidebar }) => {
  const [posts, setPosts] = useState(
    postsData.map((post) => ({ ...post, liked: false, likes: 0, comments: [] }))
  );

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
  };

  const addComment = (id, comment) => {
    if (!comment.trim()) return;
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
  };

  return (
    <div className="homepage">
      <div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
      <h1>Dreamboard</h1>
   </div>
      <div className="stories-container">
  <div className="stories">
    <div className="story-item">
      <div className="story-img">+</div>
      <p className="story-username">Your Story</p>
    </div>

    {[...Array(10)].map((_, i) => (
      <div key={i} className="story-item">
        <div className="story-img">{i + 1}</div>
        <p className="story-username">User {i + 1}</p>
      </div>
    ))}
  </div>
</div>

      <div className="feed">
        {posts.map((post) => (
          <div key={post.id} className="HpPost">
            <div className="post-header">
              <div className="post-user">{post.user}</div>
              <div className="dream-type">{post.dreamType}</div>
            </div>

            <div className="post-img">
              <img src={post.image} alt={`Post ${post.id}`} className="img" />
            </div>

              {/* Progress Bar */}
              <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${post.progress}%` }}
              >
                <span className="progress-text">{post.progress}%</span>
              </div>
            </div>

            <div className="post-actions">
              <button onClick={() => handleLike(post.id)} className="like-button">
                {post.liked ? "❤️" : "🤍"} {post.likes} Likes
              </button>
            </div>

            <div className="caption">
              <h2>Caption...</h2> {post.caption}
            </div>

            <div className="tags">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="tag">🏷️ {tag}</span>
              ))}
            </div>
              
           

            <div className="mini-goals">
              <h4>🎯 Mini Goals</h4>
              <ul>
                {post.miniGoals.map((goal, idx) => (
                  <li key={idx}><input type="checkbox" /> {goal}</li>
                ))}
              </ul>
            </div>

            <div className="comments-section">
              {post.comments.map((comment, index) => (
                <p key={index} className="comment highlight-comment">💬 {comment}</p>
              ))}
              <input
                type="text"
                className="comment-input"
                placeholder="Add a comment..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addComment(post.id, e.target.value);
                    e.target.value = "";
                  }
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;








  