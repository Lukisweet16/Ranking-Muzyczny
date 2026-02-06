import { saveSong } from "../../savesong.js";

export const getRandomTrack = async (req, res) => {
  try {
    const radiosRes = await fetch("https://api.deezer.com/radio");
    const radiosData = await radiosRes.json();

    const radios = radiosData.data;

    const randomRadio = radios[Math.floor(Math.random() * radios.length)];

    const tracksRes = await fetch(
      `https://api.deezer.com/radio/${randomRadio.id}/tracks`,
    );
    const tracksData = await tracksRes.json();

    const tracks = tracksData.data;
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    res.json(randomTrack);
    saveSong(randomTrack);
  } catch (err) {
    res.status(500).json({ message: "Random Deezer error" });
  }
};
