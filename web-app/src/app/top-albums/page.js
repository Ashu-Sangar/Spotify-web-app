"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '@/app/albumgrid.css';
import axios from "axios";
import html2canvas from 'html2canvas';
import styles from '@/app/pageStyle.css';

const ALBUM_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';

const AlbumGrid = () => {
  const [gridSize, setGridSize] = useState(5);
  const [cells, setCells] = useState([]);
  const [displayedCells, setDisplayedCells] = useState([]);
  const [maxGridSize, setMaxGridSize] = useState(10);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(`${ALBUM_ENDPOINT}?limit=50&time_range=long_term`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` }
      });

      const uniqueAlbums = new Map();
      response.data.items.forEach(item => {
        const album = item.album;
        if (!uniqueAlbums.has(album.id)) {
          uniqueAlbums.set(album.id, {
            id: album.id,
            name: album.name,
            coverUrl: album.images[0]?.url,
            spotifyLink: album.external_urls.spotify
          });
        }
      });

      let topAlbums = Array.from(uniqueAlbums.values());
      setCells(topAlbums);
      setMaxGridSize(Math.min(10, Math.floor(Math.sqrt(uniqueAlbums.size))));
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  useEffect(() => {
    updateDisplayedCells(gridSize);
  }, [cells, gridSize]);

  const updateDisplayedCells = (size) => {
    setDisplayedCells(cells.slice(0, size * size)); // Update displayed cells based on new grid size
  };

  const handleGridSizeChange = (e) => {
    const newSize = Math.min(maxGridSize, Math.max(1, parseInt(e.target.value, 10)));
    setGridSize(newSize);
  };

  const randomizeGrid = () => {
    const shuffledCells = [...cells].sort(() => Math.random() - 0.5);
    setCells(shuffledCells);
  };

  const downloadGrid = () => {
    const gridContainer = document.querySelector('.grid-container');
    if (gridContainer) {
      html2canvas(gridContainer, {
        scale: 1,
        useCORS: true
      }).then(canvas => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'Your-Top-Albums.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }).catch(err => {
        console.error('Error downloading the grid:', err);
      });
    } else {
      console.error('Grid container not found');
    }
  };

  return (
    <div className="album-grid-container" style={{ position: 'relative' }}>
      <h1 style={{ color: 'white', position: 'relative', zIndex: 10 }}>Your Top Albums</h1>
      <div className="label-input-container">
        <label htmlFor="grid-size-input" className="grid-size-label">Enter a Dimension:</label>
        <input
          id="grid-size-input"
          type="number"
          min="1"
          max={maxGridSize}
          value={gridSize}
          onChange={handleGridSizeChange}
          className="grid-size-input"
        />
        <button onClick={randomizeGrid} className="randomize-button">Randomize</button>
        <button onClick={downloadGrid} className="randomize-button">Download Grid</button>
      </div>
      <div id="capture" className="grid-container" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
        {displayedCells.map(cell => (
          <div key={cell.id} className="grid-cell">
            <div className="square-wrapper">
              <a href={cell.spotifyLink} target="_blank" rel="noopener noreferrer">
                <img src={cell.coverUrl} alt={cell.name} className="square-image" />
              </a>
            </div>
            <div className="album-title">{cell.name}</div>
          </div>
        ))}
      </div>
      <div className={styles.backHomeContainer}>
        <button className={`${styles.pulseAnimation} mt-12`}>
          <Link href="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default AlbumGrid;