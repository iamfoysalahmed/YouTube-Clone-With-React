import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCtG_pTqxa-FH8qb4cUIle7OxuvrU7R53w'
    }
});