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
export const addFriend = params => {
    return axios.post('/friend', params)
}
export const addGroupMember = params => {
    return axios.post('/groupmember',  params)
}
export const getGroupList = params => {
    return axios.get('/group', {params: params})
}

export const createGroup = params => {
    return axios.post('/group', params)
}
export const getJoinedGroupList = params => {
    return axios.get('/joinedgroup', params)
}

export default {
    requestRegister,
    requestLogin,
    getFriendList,
    addFriend,
    addGroupMember,
    getGroupList,
    createGroup,
    getJoinedGroupList
}