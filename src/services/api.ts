import axios from "axios";
export const api = axios.create({
  baseURL: 'https://https://api.chucknorris.io/jokes',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})