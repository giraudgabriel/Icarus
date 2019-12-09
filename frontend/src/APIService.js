import axios from 'axios';
const API_URL = 'http://localhost:4000';

export class APIService {

    constructor() {}

    async getTodos() {

        const url = `${API_URL}/todos/`;

        const response = await axios.get(url);
        return response.data;
    }
    async getTodo(pk) {

        const url = `${API_URL}/todos/${pk}`;

        const response = await axios.get(url);
        return response.data;

    }

    deleteTodo(todo) {
        const url = `${API_URL}/remove/${todo._id}`;
        return axios.delete(url);
    }

    createTodo(todo) {
        const url = `${API_URL}/create/`;
        return axios.post(url, todo);
    }

    updateTodo(todo) {
        const url = `${API_URL}/update/${todo._id}`;
        return axios.put(url, todo);
    }
}