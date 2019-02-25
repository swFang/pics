import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
      Authorization:
        "Client-ID d04f4c2ffd3c08f445b9d391da82ad1aade9efb36c083bffdb315a33ba284ed9"
    }
});