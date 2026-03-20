import pool from "./db/index.js";

export const saveSong = async (TrackObject) => {
  if (!TrackObject || !TrackObject.id) {
    throw new Error("error saving song invalid track" + TrackObject);
  }
  try {
    const id = TrackObject.id;
    const result = await pool.query("SELECT * FROM songs WHERE id = $1", [id]);

    if (result.rowCount > 0) {
      console.log("Song already saved");
    }

    const title = TrackObject.title;
    const author = TrackObject.artist?.name;

    await pool.query(
      "INSERT INTO songs (id, track_name, author) VALUES ($1, $2, $3)",
      [id, title, author],
    );
  } catch (err) {
    throw new Error("error with saving songs : " + err.message);
  }
};
