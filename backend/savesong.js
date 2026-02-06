import pool from "./src/db/index.js";

export const saveSong = async (TrackObject) => {
  if (!TrackObject || !TrackObject.id) {
    console.warn("saveSong: invalid TrackObject:", TrackObject);
    return;
  }

  try {
    const id = TrackObject.id;
    const result = await pool.query("SELECT * FROM songs WHERE id = $1", [id]);
    console.log(id);

    if (result.rowCount > 0) {
      console.log("Song already saved");
      return;
    }

    const title = TrackObject.title;
    const author = TrackObject.artist?.name;

    await pool.query(
      "INSERT INTO songs (id, track_name, author) VALUES ($1, $2, $3)",
      [id, title, author],
    );
  } catch (err) {
    console.error("saveSong error:", err);
  }
};
