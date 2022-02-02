import axios from 'axios';

const KEY = 'AIzaSyB6MeF7QfNorjl9l7fTBEGj9fEST3M0yQo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
