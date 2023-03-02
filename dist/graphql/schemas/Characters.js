import { Info } from './Info.js';
export const Characters = `
  # Info schema you can find on all requests
  ${Info}
  
  type Origin {
    name: String
    url: String
  }

  type Location {
    name: String
    url: String
  }

  type Character {
    id: Int
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: Origin
    location: Location
    image: String
    episode: [String]
    url: String
    created: String
  }

  type Characters {
    info: Info
    results: [Character]
  }
`;
