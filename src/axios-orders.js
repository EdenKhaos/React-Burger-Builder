import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-b4a43-default-rtdb.firebaseio.com/'
});

export default instance;