import  axios  from "axios";

const axiosConfig = axios.create({
    // .. where we make our configurations
        baseURL: 'https://restcountries.com/v3.1'
    });


export default axiosConfig;