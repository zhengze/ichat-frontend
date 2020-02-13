import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {LoginUsers, Users} from './data/User.js'


let mock = new MockAdapter(axios)

mock.onGet('/success').reply(200, {
  msg: 'success'
})

mock.onGet('/error').reply(500, {
  msg: 'error'
})

mock.onPost('/login').reply(config => {
  let {username, password} = JSON.parse(config.data);
  console.log(username)
  return new Promise((resolve, reject) => {
    let user = LoginUsers
    setTimeout(() => {
      let hasUser = LoginUsers.some(u => {
        if (u.username === username && u.password === password) {
          user = JSON.parse(JSON.stringify(u))
          user.password = undefined
          return true
        }
      })
      if (hasUser) {
        resolve([200, { code: 200, msg: '请求成功', user }])
      } else {
        resolve([200, { code: 500, msg: '账号或密码错误' }])
      }
    }, 1000)
  })
})

