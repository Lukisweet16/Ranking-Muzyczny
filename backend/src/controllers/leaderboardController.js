import pool from "../db/index.js";

const getSong = async (id) => {
  try {
    const trackFetchRes = await fetch(`https://api.deezer.com/track/${id}`);
    const trackData = await trackFetchRes.json();
    return trackData;
  } catch (err) {
    console.error("getSong error:", err);
  }
};

export const sendLeaderboard = async (req, res) => {
  try {
    const top10TableId = await pool.query(
      "Select count(song_id),song_id from votes group by song_id order by count(song_id) desc limit 10;",
    );
    const top10TableJson = top10TableId.rows.map(async (row) => {
      const songData = await getSong(row.song_id);
      return {
        id: songData.id,
        title: songData.title,
        img: songData.album?.cover_small,
        author: songData.artist?.name,
        votes: row.count,
      };
    });

    const resolvedTop10TableJson = await Promise.all(top10TableJson); //Promise.all heer because of all promises in row 18 in map
    res.status(200).json(resolvedTop10TableJson);
  } catch (err) {
    console.error("sendLeaderboard error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
