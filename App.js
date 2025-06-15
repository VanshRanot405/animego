import React from "react";
import animeData from "./animeData.json";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial", backgroundColor: "#111", color: "white" }}>
      <h1 style={{ textAlign: "center" }}>AnimeGo</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "20px", marginTop: "20px" }}>
        {animeData.map((anime, index) => (
          <div key={index} style={{ backgroundColor: "#1c1c1c", borderRadius: "10px", padding: "10px", textAlign: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.3)" }}>
            <img src={anime.image} alt={anime.title} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{anime.title}</h3>
            <p>{anime.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;