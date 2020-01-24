const axios = require('axios');

const get_details = movie_id => {
    return axios({
        url: `https://api.themoviedb.org/3/movie/${movie_id}?api_key=1dda5599d63c11bfee44b3406f78e3a1&language=en-US`,
        method: 'get',
        responseType: 'json'
    })
    .then((res) => {
        let result = res.data || 'Error getting query data';
        return ( result );
    })
    .catch((err) => {
        let result = err.message;
        return ( result );
    });
};

const movie_details = async (req, res) => {
    let response;
    await get_details( req.query.movieid )
    .then((api_response) => {
        response = api_response;
    })
    .catch((err) => {
        response = err;
    });
    res.send(response);
}

module.exports = movie_details;