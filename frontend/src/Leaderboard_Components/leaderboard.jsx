import React, { useEffect, useState } from "react";
import "../styles/leaderboard.css";

const fetchLeaderboardData = async () => {
  try {
    const response = await fetch("/leaderboard", { method: "POST" });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching leaderboard:", err);
  }
};
const ShowLeaderboard = () => {
  const [trackLeaderboard, setTrackLeaderboard] = useState([{}]);
  useEffect(() => {
    const fetchLeaderboard = async () => {
      const data = (await fetchLeaderboardData()) || [{}];
      setTrackLeaderboard(data);
    };
    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Top Wybory</h2>
      <div className="leaderboard-list">
        {trackLeaderboard.map((track) => (
          <div key={track.id} className="leaderboard-item">
            <span className="rank-number">{}</span>

            <img src={track.img} alt={track.title} className="track-thumb" />

            <div className="track-details">
              <span className="track-name">{track.title}</span>
              <span className="track-author">{track.author}</span>
            </div>

            <div className="vote-badge">
              <span className="vote-count">{track.votes}</span>
              <span className="vote-label">głosów</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ShowLeaderboard;
