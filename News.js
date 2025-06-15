import React from 'react';

const newsData = [
  {
    id: 1,
    title: "Jujutsu Kaisen Season 3 Confirmed!",
    description: "MAPPA has officially confirmed the next season with a teaser visual.",
    date: "June 10, 2025"
  },
  {
    id: 2,
    title: "Attack on Titan: Final Episode Special Airing",
    description: "The last episode of the AoT series will air with extended runtime.",
    date: "June 5, 2025"
  },
  {
    id: 3,
    title: "Demon Slayer Movie Box Office Hits New Record",
    description: "Hashira Training Arc movie becomes highest grossing anime film this year.",
    date: "May 30, 2025"
  }
];

function News() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>📰 Anime News</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {newsData.map(news => (
          <li key={news.id} style={{ marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <small>{news.date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;