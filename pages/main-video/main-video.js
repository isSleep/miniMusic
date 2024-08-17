// pages/main-video/main-video.js
import { getTopMV } from "../../services/video"
Page({
  data: {
    videoList: []
  },
  onLoad() {
    this.fetchTopMV()
  },
  async fetchTopMV() {
    const topVideo = await getTopMV()
    this.setData({
      videoList: topVideo
    })
    console.log(this.data.videoList)
  }
})