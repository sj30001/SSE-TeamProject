const axios = require('axios')
const URL = 'http://104.199.137.67:3000'

//get data
const get = (param) =>{
    return axios.get(URL+param)
}

//post create data
const post = (myUrl,data) =>{
    return axios.post(URL+myUrl,data)
}

//put update data
const put = (myUrl,data) =>{
    return axios.put(URL,data)
}

//delete data
const Delete = (myUrl,data) =>{
    return axios.delete(URL,data)
}
export {get, post, put,Delete as delete}