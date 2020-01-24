const axios = require('axios');

const get_popular = () => {
    return axios({
        url: `https://api.themoviedb.org/3/movie/top_rated?api_key=1dda5599d63c11bfee44b3406f78e3a1&language=en-US&page=1`,
        method: 'get',
        responseType: 'json'
    })
    .then((res) => {
        let result = res.data || 'Error getting data';
        return { result };
    })
    .catch((err) => {
        let result = err.message;
        return { result };
    });
};

const popular_movies = async (req, res) => {
    let response;

    await get_popular()
    .then((api_response) => {
        response = api_response.result;
    })
    .catch((err) => {
        response = err;
    });
    res.send(response);
}

module.exports = popular_movies;