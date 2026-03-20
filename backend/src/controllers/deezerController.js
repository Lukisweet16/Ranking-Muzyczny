import { saveSong } from "../savesong.js";

export const getRandomTrack = async (req, res) => {
  try {
    const radiosRes = await fetch("https://api.deezer.com/radio");
    const radiosData = await radiosRes.json();

    const radios = radiosData?.data;

    const randomRadio = radios[Math.floor(Math.random() * radios.length)];
    const randomRadioId = randomRadio?.id;

    const tracksRes = await fetch(
      `https://api.deezer.com/radio/${randomRadioId}/tracks`,
    );
    const tracksData = await tracksRes.json();

    const ArrayOfTracks = tracksData?.data;
    const randomTrack =
      ArrayOfTracks[Math.floor(Math.random() * ArrayOfTracks.length)];
    // send response first

    try {
      await saveSong(randomTrack);
      res.json(randomTrack);
    } catch (saveErr) {
      console.error("saveSong error:", saveErr.message || saveErr);

      res.status(500).json({
        message: "Failed to save song, please try again",
      });
    }
  } catch (err) {
    console.error("getRandomTrack error:", err.message || err);
    res.status(500).json({ message: "Random Deezer error" });
  }
};
