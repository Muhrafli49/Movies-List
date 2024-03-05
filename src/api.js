// api.js

import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseURL = process.env.REACT_APP_BASEURL;


export const getMovieList = async () => {
    try {
        const movie = await axios.get(`${baseURL}/movie/popular?page=1&api_key=${apiKey}`);
        return movie.data.results
    } catch (error) {
        console.error('Error fetching movie list:', error.message);
        if (error.response) {
        console.error('Server responded with:', error.response.status, error.response.data);
        }
    }
};

export const searchMovie = async (q) => {
    try {
        const search = await axios.get(`${baseURL}/search/movie?page=1&api_key=${apiKey}&query=${q}`);
        return search.data
    } catch (error) {
        console.error('Error searching movie:', error.message);
        if (error.response) {
        console.error('Server responded with:', error.response.status, error.response.data);
        }
    }
};
