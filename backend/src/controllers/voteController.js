import pool from '../db/index.js';
const Vote = async (req, res) => {
    const trackId = req.body.trackId;
    console.log(req.user);
    const userId = req.user.userId;
    
    
    try {
        const Vote = await pool.query(
            'INSERT INTO votes (user_id, song_id) VALUES ($1, $2) ',
            [userId, trackId]
        );
        res.status(200).json({ message: 'Głos zapisany', vote: Vote.rows[0] });
    }
    catch(err){
        console.error(err.message);
        res.status(500).json({ message: 'Wystąpił błąd serwera: ' + err.message });
    }
}
export default Vote;