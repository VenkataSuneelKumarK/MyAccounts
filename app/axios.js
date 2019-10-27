/**
 * Created by kanamars on 27/10/19.
 */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:9082/'
});

export default instance;