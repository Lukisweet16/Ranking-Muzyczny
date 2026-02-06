import React, { useEffect, useState } from "react";

const test = async () => {
  try {
    const response = await fetch("/leaderboard", { method: "POST" });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching leaderboard:", err);
  }
};
const ShowLeaderboard = () => {
  const [trackLeaderboard, setTrackLeaderboard] = useState([]);
  useEffect(() => {
    const fetchLeaderboard = async () => {
      const data = await test();
      setTrackLeaderboard(data);
    };
    fetchLeaderboard();
  }, []);

  return (
    <div>
      {trackLeaderboard.map((track) => (
        <div key={track.id}>
          {track.title} - {track.author}{" "}
          <img src={track.img} alt={track.title} /> ilosc głosów : {track.votes}
        </div>
      ))}
    </div>
  );
};
export default ShowLeaderboard;
