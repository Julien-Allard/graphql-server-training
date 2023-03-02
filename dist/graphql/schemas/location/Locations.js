import { Info } from '../Info.js';
import { Location } from './Location.js';
export const Locations = `
  ${Info}

  ${Location}

  type Locations {
    info: Info
    results: [Location]
  }
`;
