import { useEffect, useState } from "react";
import "../styles/components.css";
const MainLogic = () => {
  const [tracks, setTracks] = useState([]);

  const fetchTracks = async () => {
    try {
      const response = await fetch("/chart/tracks", { method: "GET" });
      const data = await response.json();

      setTracks(data);
    } catch (error) {
      console.log("Error fetching tracks:", error);
    }
  };
  useEffect(() => {
    fetchTracks();
  }, []);
  const handleVote = async (isUpVote) => {
    try {
      const response = await fetch("/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          trackId: tracks.id,
          upVote: isUpVote,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "bład servera");
      } else {
        fetchTracks();
      }
    } catch (err) {
      alert("wystapił problem : " + err);
    }
  };
  // return <div>
  //     <h2 style={{color: "white" }}>{tracks?.title}</h2>
  //     <h5 style={{color:"white"}}>{tracks?.artist?.name}</h5>
  //     <img src={tracks?.album?.cover_medium} alt="" />
  //     <audio controls src={tracks?.preview}></audio>
  //     <button onClick={() => fetchTracks()}>zmien tracka </button>
  // </div>
  // }
  // export default MainLogic;
  // return (
  //     <div className="main-content-section">

  //       <div className="songs-grid">

  //           <div  className="song-card">
  //             <img src={tracks?.album?.cover_medium} alt={tracks?.title} />

  //             <div className="song-card-info">
  //               <span className="song-card-title">{tracks?.title}</span>
  //               <span className="song-card-artist">{tracks?.artist?.name}</span>

  //             </div>
  //             <audio controls src={tracks?.preview}></audio>

  //           </div>
  //           <button onClick={() => fetchTracks()}>zmien tracka </button>

  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div className="main-content-section">
      <h2 className="section-title">Twoje Odkrycie</h2>

      <div className="songs-single-wrapper">
        <div className="song-card">
          <div className="song-card-image-wrapper">
            <img src={tracks?.album?.cover_medium} alt={tracks?.title} />
          </div>

          <div className="song-card-info">
            <span className="song-card-title">{tracks?.title}</span>
            <span className="song-card-artist">{tracks?.artist?.name}</span>
          </div>

          <div className="audio-wrapper">
            <audio controls src={tracks?.preview}></audio>
          </div>
        </div>

        <div className="vote-actions">
          <button className="up-vote" onClick={() => handleVote(true)}>
            <svg
              className="icon-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
            <span>Głosuj na tak</span>
          </button>

          <button className="down-vote" onClick={() => fetchTracks()}>
            <svg
              className="icon-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <span>Głosuj na nie</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default MainLogic;
