import React from 'react';
import { Character } from '../types/api';

interface CharacterGridProps {
  characters: Character[];
  loading: boolean;
  selectedEpisode: string | null;
}

const CharacterGrid: React.FC<CharacterGridProps> = ({ characters, loading, selectedEpisode }) => {
  if (loading) {
    return (
      <div className="character-grid">
        <div className="loading">Loading characters...</div>
        <style jsx>{`
          .character-grid {
            flex: 1;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .loading {
            font-size: 1.2rem;
            color: #6c757d;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="character-grid">
      {selectedEpisode && <h2>{characters.length} Characters in episode "{selectedEpisode}"</h2>}
      <div className="grid">
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <img
            src={character.image}
            alt={character.name}
            className="character-image"
          />
          <div className="character-info">
            <h3 className="character-name">{character.name}</h3>
            <p className="character-details">
              <span className={`status ${character.status.toLowerCase()}`}>
          {character.status}
              </span>
              {' - '}
              {character.species}
            </p>
            <p className="character-location">
              <small>Last known location:</small><br />
              {character.location.name}
            </p>
          </div>
        </div>
      ))}
      </div>

      <style jsx>{`
      .character-grid {
        flex: 1;
        background-color: #ffffff;
        overflow: auto;
        max-height: 100vh;
        padding: 5px;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
        grid-template-columns: 1fr 1fr 1fr;
      }

      .character-card {
        background-color: white;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }

      .character-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
      }

      .character-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .character-info {
        padding: 16px;
      }

      .character-name {
        margin: 0 0 8px 0;
        font-size: 1.2rem;
        font-weight: bold;
        color: #333;
      }

      .character-details {
        margin: 0 0 12px 0;
        font-weight: 500;
      }

      .status {
        padding: 2px 8px;
        border-radius: 4px;
        color: white;
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: bold;
      }

      .status.alive {
        background-color: #28a745;
      }

      .status.dead {
        background-color: #dc3545;
      }

      .status.unknown {
        background-color: #6c757d;
      }

      .character-location {
        margin: 0;
        color: #6c757d;
        font-size: 0.9rem;
      }

      .character-location small {
        color: #9ca3af;
      }
      `}</style>
    </div>
  );
};

export default CharacterGrid;