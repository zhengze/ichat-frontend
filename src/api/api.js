import axios from './axios'


export const requestRegister = params => {
    return axios.post('/register', {params: params})
}

export const requestLogin = params => {
    return axios.post('/login', params)
}
export const getFriendList = params => {
    return axios.get('/friend', {params: params})
}
export const getGroupList = params => {
    return axios.get('/group', {params: params})
}

export default {
    requestRegister,
    requestLogin,
    getFriendList,
    getGroupList,

}