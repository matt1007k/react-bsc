import axios from 'axios';
import {config} from '../config/config';

const getAll = (token) => {
    return axios.get(config.URL_API + '/api/admin/missions',{
        headers: JSON.parse(token)
    })
    .then(response => response.data)
    .catch(error => error) 
}

const create = (mission, token) => {
    const data = {
        mission: {
            content: mission.content
        }
    }
    return axios({
        method: 'POST',
        url: config.URL_API + `/api/admin/missions`,
        data,
        headers: JSON.parse(token)
    })
    .then(response => response.data)
    .catch(error => error) 
}

const show = (id, token) => {
    return axios.get(config.URL_API + `/api/admin/missions/${id}`, {
        headers: JSON.parse(token)
    })
    .then(response => response.data)
    .catch(error => error) 
}

const update = (id, missionEdit, token) => {
    const data = {
        mission: {
            content: missionEdit.content
        }
    }
    console.log(data)
    return axios({
        method: 'PUT',
        url: config.URL_API + `/api/admin/missions/${id}`,
        data,
        headers: JSON.parse(token)
    })
    .then(response => response.data)
    .catch(error => error) 
}

const destroy = (id, token) => {
    return axios({
        method: 'DELETE',
        url: config.URL_API + `/api/admin/missions/${id}`,
        headers: JSON.parse(token)
    })
    .then(response => response.data)
    .catch(error => error)
}

export { getAll, create, show, update, destroy }