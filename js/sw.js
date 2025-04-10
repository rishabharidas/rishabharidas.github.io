const API_URL = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=rishabharidas&api_key=4938c4c2ba1d70b426cbe3707e5e0059&format=json&limit=5";

self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated!');
  startFetching();
});

function startFetching() {
  setInterval(async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const tracks = data.recenttracks.track;
      console.log(tracks, "  - - - - --  -tracks ")

      // Send data to all connected clients (pages)
      const allClients = await self.clients.matchAll();
      for (const client of allClients) {
        client.postMessage(tracks);
      }
    } catch (err) {
      console.error('Error fetching tracks:', err);
    }
  }, 10000);
}
