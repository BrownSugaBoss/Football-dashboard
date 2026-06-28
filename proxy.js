// This runs on the server, keeping your key hidden
export default async function handler(req, res) {
    const API_KEY = process.env.FOOTBALL_API_KEY;
    const url = 'https://api.football-data.org/v4/competitions/PL/standings';

    const response = await fetch(url, {
        headers: { 'X-Auth-Token': API_KEY }
    });

    const data = await response.json();

    // Pass the relevant headers back to the browser for your own debugging/throttling tracking
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
}
