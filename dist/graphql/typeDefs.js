import { Query } from './Query.js';
import { Book } from './schemas/Book.js';
import { Characters } from './schemas/character/Characters.js';
import { Locations } from './schemas/location/Locations.js';
import { Episodes } from './schemas/episode/Episodes.js';
export const typeDefs = `
  # All types (see the graphql/Types folder)

  # Book schema for testing
  ${Book}
  # Schema to fetch all characters based on targeted page (20 chars / page) or one character with ID
  ${Characters}
  # Schema to fetch all locations based on targeted page (20 chars / page) or one location with ID
  ${Locations}
  # Schema to fetch all episodes based on targeted page (20 chars / page) or one episode with ID
  ${Episodes}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  ${Query}
`;
