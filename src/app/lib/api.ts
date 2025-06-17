const BASE_URL = 'https://rickandmortyapi.com/api';

export async function fetchEpisodes(): Promise<Episode[]> {
  const response = await fetch(`${BASE_URL}/episode`);
  if (!response.ok) {
    throw new Error('Failed to fetch episodes');
  }
  const data: ApiResponse<Episode> = await response.json();
  return data.results;
}

export async function fetchCharacters(page: number = 1): Promise<Character[]> {
  const response = await fetch(`${BASE_URL}/character?page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  const data: ApiResponse<Character> = await response.json();
  return data.results;
}

export async function fetchCharactersByIds(ids: number[]): Promise<Character[]> {
  if (ids.length === 0) return [];
  
  const response = await fetch(`${BASE_URL}/character/${ids.join(',')}`);
  if (!response.ok) {
    throw new Error('Failed to fetch characters by IDs');
  }
  
  // Handle single character response vs array
  const data = await response.json();
  return Array.isArray(data) ? data : [data];
}

export function extractCharacterIdsFromEpisode(episode: Episode): number[] {
  return episode.characters.map(url => {
    const id = url.split('/').pop();
    return parseInt(id || '0', 10);
  }).filter(id => id > 0);
}