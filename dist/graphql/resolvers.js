import { get } from '../utils/get.js';
import { books } from './data/books.js';
export const resolvers = {
    Query: {
        books: () => books,
        character: (_, { id }) => get('character', 'id', id),
        characters: (_, { page }) => get('character', 'page', page),
        location: (_, { id }) => get('location', 'id', id),
        locations: (_, { page }) => get('location', 'page', page),
        episode: (_, { id }) => get('episode', 'id', id),
        episodes: (_, { page }) => get('episode', 'page', page),
    },
};
