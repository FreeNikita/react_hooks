import axios from 'axios'
import {MAIN_URL} from "../constants/auth";

export const api_post = (url, data) => {
    return axios.post(`${MAIN_URL}${url}`, data)
}