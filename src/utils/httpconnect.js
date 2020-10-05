const axios = require('axios');
let config = {
    baseURL: '',
    withCredentials: true
}
const axiosInstance = axios.create(config);

//get data
const get = (url) =>{
    return axiosInstance.get(url);
}

//post create data
const post = (url,data) =>{
    return axiosInstance.post(url,data);
}

//put update data
const put = (url,data) =>{
    return axiosInstance.put(url,data);
}

//delete data
const Delete = (url,data) =>{
    return axiosInstance.delete(url,{
        params: data
    });
}
export {get, post, put,Delete as delete}