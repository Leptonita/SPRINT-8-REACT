import axios from "axios";

const source = axios.create({ baseURL: 'https://swapi.dev/api/starships' });

export const getShips = (num) => source.get(`/?page=${num}`);