// pages/detail-video/detail-video.js
import { getMVUrl, getMVDetail, getMVrelated } from "../../services/video"
Page({
  data: {
    id: 0,
    mvUrl: "",
    mvInfo: {},
    relatedVideo: [],
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
    this.fetchMVDetail()
    this.fetchMVrelated()
  },

  async fetchMVUrl() {
    const res = await getMVUrl(this.data.id);
    this.setData({
      mvUrl: res.data.data.url
    })
  },
  async fetchMVDetail() {
    const res = await getMVDetail(this.data.id);
    this.setData({
      mvInfo: res.data.data
    })
  },
  async fetchMVrelated() {
    const res = await getMVrelated(this.data.id);
    this.setData({
      relatedVideo: res.data.data
    })
  },

  
})