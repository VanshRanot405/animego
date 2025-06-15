import React, { useState } from 'react';
import './App.css';
import { auth, provider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import animeData from './animeData.json';

function App() {
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState('');

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      setUser(result.user);
    });
  };

  const filteredAnime = animeData.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>AnimeGo</h1>
        {!user && <button onClick={signIn}>Sign in with Google</button>}
        {user && <p>Welcome, {user.displayName}</p>}
        <input
          type="text"
          placeholder="Search anime (e.g. Naruto)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <div className="anime-list">
        {filteredAnime.map((anime) => (
          <div className="anime-card" key={anime.id}>
            <img src={anime.image} alt={anime.title} />
            <h2>{anime.title}</h2>
            <p>{anime.description}</p>
            <a href={anime.watchLink} target="_blank" rel="noopener noreferrer">Watch</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;