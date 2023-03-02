import fetch from 'node-fetch';
export const get = async (endpoint, type, number) => {
    const response = await fetch(`https://rickandmortyapi.com/api/${endpoint}/${type === 'page' ? '?page=' : ''}${number}`);
    const data = await response.json();
    return data;
};
