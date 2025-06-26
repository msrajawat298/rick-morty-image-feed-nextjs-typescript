"use client"
import React, { useState, useEffect } from 'react';
import EpisodeList from './components/EpisodeList';
import CharacterGrid from './components/CharacterGrid';
import { 
  fetchEpisodes, 
  fetchCharacters, 
  fetchCharactersByIds, 
  extractCharacterIdsFromEpisode 
} from './lib/api';
import { Episode, Character } from './types/api';

const Home: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState(true);
  const [charactersLoading, setCharactersLoading] = useState(false);

  // Load initial data
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoading(true);
        const [episodesData, charactersData] = await Promise.all([
          fetchEpisodes(),
          fetchCharacters(1) // First page of characters
        ]);
        
        setEpisodes(episodesData);
        setCharacters(charactersData);
      } catch (error) {
        console.error('Error loading initial data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  const handleEpisodeSelect = async (episode: Episode) => {
    try {
      setCharactersLoading(true);
      setSelectedEpisode(episode);
      
      const characterIds = extractCharacterIdsFromEpisode(episode);
      const episodeCharacters = await fetchCharactersByIds(characterIds);
      
      setCharacters(episodeCharacters);
    } catch (error) {
      console.error('Error loading episode characters:', error);
    } finally {
      setCharactersLoading(false);
    }
  };

  const handleEpisodeUnselect = async () => {
    try {
      setCharactersLoading(true);
      setSelectedEpisode(null);
      
      // Revert to first page of characters
      const initialCharacters = await fetchCharacters(1);
      setCharacters(initialCharacters);
    } catch (error) {
      console.error('Error loading initial characters:', error);
    } finally {
      setCharactersLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem',
        color: '#6c757d'
      }}>
        Loading application...
      </div>
    );
  }

  return <>
  <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Rick and Morty Episodes</h1>
  <div style={{ textAlign: 'center', marginBottom: 24 }}>
    <a href="/about" style={{ color: '#0070f3', textDecoration: 'underline', fontWeight: 500 }}>About</a>
  </div>
  <div className="app-container">
    <EpisodeList
      episodes={episodes}
      selectedEpisodeId={selectedEpisode?.id || null}
      onEpisodeSelect={handleEpisodeSelect}
      onEpisodeUnselect={handleEpisodeUnselect}
    />
    <CharacterGrid
      characters={characters}
      loading={charactersLoading}
      selectedEpisode={selectedEpisode ? selectedEpisode.name : null}
    />
    <style jsx>{`
      .app-container {
        display: flex;
        height: 100vh;
        overflow: hidden;
      }
    `}</style>
  </div>
  </>;
};

export default Home;