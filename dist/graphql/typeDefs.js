import { Book } from './schemas/Book.js';
import { Characters } from './schemas/Characters.js';
export const typeDefs = `
  # All types (see the graphql/Types folder)

  # Book schema for testing
  ${Book}
  # Schema to fetch all characters based on targeted page (20 chars / page)
  ${Characters}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Query {
    books: [Book]
    characters(page: ID!): Characters
  }
`;
