const INITIAL_STATE = {
    keyword: "",
    movies: [
        {
            "popularity": 20.167,
            "vote_count": 2144,
            "video": false,
            "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
            "id": 19404,
            "adult": false,
            "backdrop_path": "/pVGzV02qmHVoKx9ehBNy7m2u5fs.jpg",
            "original_language": "hi",
            "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "title": "Dilwale Dulhania Le Jayenge",
            "vote_average": 8.9,
            "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
            "release_date": "1995-10-20"
        }]
};

const listMoviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_MOVIES":
            return{
                ...state,
                movies: action.movies
            }
        case "SET_KEYWORD":
            return{
                ...state,
                keyword: action.keyword
            }
        default:
            return state;
    }
};

export default listMoviesReducer;