// pages/main-music/main-music.js
import { getMusicBanner } from "../../services/music"
Page({
  data: {
    searchValue: "",
    banners: [],
    bannerHeight: 0,
    screenWidth: [],
  },
  onLoad() {
    this.fetchMusicBanner();
  },

  // 网络请求的方法封装
  async fetchMusicBanner () {
    const res = await getMusicBanner()
    this.setData({ banners:res.data.banners })
  },
  // 界面的事件监听方法
  onSearchClick() {
    wx.navigateTo({url: '/pages/detail-search/detail-search'})
  }


})