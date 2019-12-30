import axios from 'axios';

export function getAll() {
    return axios.get('https://localhost:44358/api/user')
};

export function getById(id) {
    return axios.get(`https://localhost:44358/api/user/${id}`)
};

export function create(data) {
    return axios.post('https://localhost:44358/api/user', {
        FirstName: data.firstName,
        LastName: data.lastName,
    })
};

export function update(data) {
    return axios.put(`https://localhost:44358/api/user/${data.id}`, {
        FirstName: data.firstName,
        LastName: data.lastName,
    })
};

export function remove(id) {
    return axios.delete(`https://localhost:44358/api/user/${id}`)
};