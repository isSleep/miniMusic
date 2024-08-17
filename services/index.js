import { baseURL } from "./config"
class Request {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  request(options) {
    const {url} = options
    return new Promise((resolve,reject) => {
      wx.request({
        ...options,
        url: this.baseUrl + url,
        success: (res) => {
          resolve(res)
        },
        fail: (err) => {
          console.log("err",err)
        }
      })
    })
  }
  get(options) {
    return this.request({...options,method: "get"})
  }
  post(options) {
    return this.request({...options,method: "post"})
  }
}

export const hyRequest = new Request(baseURL)