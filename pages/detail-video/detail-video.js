// pages/detail-video/detail-video.js
import { getMVUrl } from "../../services/video"
Page({
  data: {
    id: 0,
    mvUrl: "",
    danmuList:
    [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }],
  },

  onLoad(options) {
    const id = options.id
    this.setData({ id })

    this.fetchMVUrl()
  },

  async fetchMVUrl() {
    const res = await getMVUrl(this.data.id);
    this.setData({
      mvUrl: res.data.data.url
    })
  }

  
})