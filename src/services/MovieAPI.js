import axios from 'axios'

const API_KEY = process.env.API_KEY
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
