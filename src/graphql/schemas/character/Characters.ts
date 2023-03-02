import { Info } from '../Info.js';
import { Character } from './Character.js';

export const Characters = `
  # Info schema you can find on all general requests (characters, locations and episodes)
  ${Info}
  
  ${Character}

  type Characters {
    info: Info
    results: [Character]
  }
`;
