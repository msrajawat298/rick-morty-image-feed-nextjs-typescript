import React from 'react';
import { Episode } from '../types/api';

interface EpisodeListProps {
  episodes: Episode[];
  selectedEpisodeId: number | null;
  onEpisodeSelect: (episode: Episode) => void;
  onEpisodeUnselect: () => void;
}

const EpisodeList: React.FC<EpisodeListProps> = ({
  episodes,
  selectedEpisodeId,
  onEpisodeSelect,
  onEpisodeUnselect
}) => {
  const handleEpisodeClick = (episode: Episode) => {
    if (selectedEpisodeId === episode.id) {
      onEpisodeUnselect();
    } else {
      onEpisodeSelect(episode);
    }
  };

  return (
    <div className="episode-list">
      <h2>Episodes</h2>
      <ul>
        {episodes.map((episode) => (
          <li
            key={episode.id}
            className={`episode-item ${selectedEpisodeId === episode.id ? 'selected' : ''}`}
            onClick={() => handleEpisodeClick(episode)}
          >
            <div className="episode-code">{episode.episode}</div>
            <div className="episode-name">{episode.name}</div>
            <div className="episode-date">{episode.air_date}</div>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .episode-list {
          width: 200px;
          height: 100vh;
          overflow-y: auto;
          background-color: #f8f9fa;
          border-right: 1px solid #dee2e6;
          padding: 20px;
        }

        .episode-list h2 {
          margin: 0 0 20px 0;
          color: #333;
          font-size: 1.5rem;
        }

        .episode-list ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .episode-item {
          padding: 12px 16px;
          margin-bottom: 8px;
          background-color: white;
          border: 2px solid transparent;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .episode-item:hover {
          background-color: #e9ecef;
          transform: translateX(4px);
        }

        .episode-item.selected {
          border-color: #007bff;
          background-color: #e3f2fd;
          transform: translateX(4px);
        }

        .episode-code {
          font-weight: bold;
          color: #007bff;
          font-size: 0.9rem;
        }

        .episode-name {
          margin: 4px 0;
          font-weight: 500;
          color: #333;
        }

        .episode-date {
          font-size: 0.8rem;
          color: #6c757d;
        }
      `}</style>
    </div>
  );
};

export default EpisodeList;