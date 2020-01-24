const axios = require('axios');

const keyword_search = keyword => {
    return axios({
        url: `https://api.themoviedb.org/3/search/movie?api_key=1dda5599d63c11bfee44b3406f78e3a1&language=en-US&page=1&include_adult=false&&query=${keyword}`,
        method: 'get',
        responseType: 'json'
    })
    .then((res) => {
        let result = res.data || 'Error getting query data';
        return {
            result
        };
    })
    .catch((err) => {
        let result = err.message;
        return {
            result
        };
    });
};

const search_movies = async (req, res) => {
    let response;
    await keyword_search( req.query.keyword )
    .then((api_response) => {
        response = api_response.result;
    })
    .catch((err) => {
        response = err;
    });
    res.send(response);
}

module.exports = search_movies;