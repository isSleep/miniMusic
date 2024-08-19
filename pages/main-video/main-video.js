// pages/main-video/main-video.js
import { getTopMV } from "../../services/video"

Page({
  data: {
    videoList: [],
    offset: 0,
    hasMore: true
  },
  onLoad() {
    this.fetchTopMV()
  },
  async fetchTopMV() {
    const res = await getTopMV(this.data.offset)
    const newVideoList = [...this.data.videoList, ...res.data.data]
    this.setData({
      videoList: newVideoList
    })
    this.data.offset = this.data.videoList.length
    this.data.hasMore = res.data.hasMore
  },

  onReachBottom() {
    // 1.判断是否有更多的数据
    if (!this.data.hasMore) return

    // 2.如果有更多的数据, 再请求新的数据
    this.fetchTopMV()
  },

  async onPullDownRefresh() {
    // 1.重置数据
    this.setData({
      videoList: [],
      offset: 0,
      hasMore: true
    })

    // 2.重新请求数据
    await this.fetchTopMV()

    // 3.停止下拉刷新
    wx.stopPullDownRefresh()
  }
})