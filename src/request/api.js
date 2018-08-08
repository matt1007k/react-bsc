import axios from 'axios';
import {config} from '../config/config';


const login = (credencial) => {
    return axios.post(config.URL_API+'/auth/sign_in', credencial)
    .then(response => response)
    .catch(error => error)
}

const sign_up = (credencial) => {
    return axios.post(config.URL_API+'/auth', credencial)
    .then(response => response)
    .catch(error => error)
}

export {login, sign_up};