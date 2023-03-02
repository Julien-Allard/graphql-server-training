import { get } from '../utils/get.js';
import { books } from './data/books.js';
export const resolvers = {
    Query: {
        books: () => books,
        characters: (_, { page }) => get('character', 'page', page),
    },
};
