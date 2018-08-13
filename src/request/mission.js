import axios from 'axios';
import {config} from '../config/config';

const getAll = (token) => {
    return axios.get(config.URL_API + '/values.json',{
        headers: JSON.parse(token)
    })
    .then(response => response.data)
    .catch(error => error) 
}

const create = (data, token) => {
    const mission = {
        content: data
    }
    return axios.post(config.URL_API + '/api/admin/missions', {
        data: mission,
        headers: JSON.parse(token)
    })
    .then(response => response)
    .catch(error => error) 
}

export { getAll, create }