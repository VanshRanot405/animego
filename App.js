import React, { useState } from 'react';
import animeData from './animeData.json';
import './index.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAnime = animeData.filter(anime =>
    anime.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>AnimeGo</h1>

      <input
        type="text"
        placeholder="Search Anime..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.search}
      />

      {filteredAnime.length > 0 ? (
        filteredAnime.map((anime) => (
          <div key={anime.id} style={styles.card}>
            <h2>{anime.title}</h2>
            <img src={anime.cover} alt={anime.title} style={styles.cover} />
            <p><strong>Rating:</strong> {anime.rating}</p>
            <p><strong>Episodes:</strong> {anime.episodes}</p>
            {anime.trailer && (
              <a href={anime.trailer} target="_blank" rel="noopener noreferrer">
                ▶️ Watch Trailer
              </a>
            )}
            <div style={styles.links}>
              {anime.watchLinks &&
                Object.entries(anime.watchLinks).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.button}
                  >
                    Watch on {platform}
                  </a>
                ))}
            </div>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    backgroundColor: '#1a1a1a',
    color: '#fff',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '2rem',
  },
  search: {
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    marginBottom: '2rem',
    borderRadius: '5px',
    border: 'none',
  },
  card: {
    border: '1px solid #333',
    borderRadius: '10px',
    padding: '1rem',
    marginBottom: '1.5rem',
    backgroundColor: '#2a2a2a',
  },
  cover: {
    width: '100%',
    maxHeight: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  links: {
    marginTop: '1rem',
  },
  button: {
    display: 'inline-block',
    marginRight: '10px',
    padding: '0.5rem 1rem',
    backgroundColor: '#ff4757',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
  },
};

export default App;