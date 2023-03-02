import { Info } from '../Info.js';
import { Episode } from './Episode.js';
export const Episodes = `
  ${Info}

  ${Episode}

  type Episodes {
    info: Info
    results: [Episode]
  }
`;
