import axios from 'axios';

const KEY = 'AIzaSyDyz9DDYgS07A6Rkc7x1Th8D7Jhc2BTEUM';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3', 
   params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY
   }
});