// pages/detail-video/detail-video.js
Page({
  data: {
    id: 0
  },

  onLoad(options) {
    const id = options.id
    this.setData({ id })
  }
})