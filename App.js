import React, { useState, useEffect } from "react";
import animeData from "./animeData.json";

function App() {
  const [search, setSearch] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);
  }, []);

  const toggleWatchlist = (anime) => {
    let updated = [...watchlist];
    const exists = updated.find((item) => item.title === anime.title);
    if (exists) {
      updated = updated.filter((item) => item.title !== anime.title);
    } else {
      updated.push(anime);
    }
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  const filteredAnime = animeData.filter(anime =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", backgroundColor: "#111", color: "white" }}>
      <h1 style={{ textAlign: "center" }}>AnimeGo</h1>

      <input
        type="text"
        placeholder="Search anime..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          marginBottom: "20px",
          backgroundColor: "#222",
          color: "white"
        }}
      />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "20px"
      }}>
        {filteredAnime.map((anime, index) => (
          <div key={index} style={{
            backgroundColor: "#1c1c1c",
            borderRadius: "10px",
            padding: "10px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
          }}>
            <img src={anime.image} alt={anime.title} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{anime.title}</h3>
            <p>{anime.description}</p>

            {anime.links && (
              <div style={{ marginTop: "10px" }}>
                {Object.entries(anime.links).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      margin: "5px",
                      backgroundColor: "#27ae60",
                      color: "white",
                      padding: "6px 10px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "14px"
                    }}
                  >
                    ▶️ {platform}
                  </a>
                ))}
              </div>
            )}

            <button
              onClick={() => toggleWatchlist(anime)}
              style={{
                backgroundColor: watchlist.find(a => a.title === anime.title) ? "#c0392b" : "#2980b9",
                color: "white",
                border: "none",
                padding: "8px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px"
              }}
            >
              {watchlist.find(a => a.title === anime.title) ? "Remove from Watchlist" : "➕ Add to Watchlist"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;