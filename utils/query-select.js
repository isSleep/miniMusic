export default function querySelect(selector) {
  console.log(111)
    return new Promise(resolve => {
        const query = wx.createSelectorQuery()
        query.select(selector).boundingClientRect()
        query.exec((res) => {
            resolve(res)
        })
    })
}