// pages/main-music/main-music.js
import { getMusicBanner } from "../../services/music"
import querySelect from "../../utils/query-select";
// import throttle from "../../utils/throttle";
import { throttle} from "underscore";

const querySelectThrottle = throttle(querySelect,100)
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
  },
  async onBannerImageLoad(event) {
    // const query = wx.createSelectorQuery()
    // query.select(".banner-image").boundingClientRect()
    // query.exec((res) => {
    //   this.setData({ bannerHeight: res[0].height })
    // })

    // querySelectThrottle(".banner-image").then(res => {
    //   console.log("--------")
    //   this.setData({ bannerHeight: res[0].height })
    // })
    
    const res = await querySelectThrottle(".banner-image")
    this.setData({ bannerHeight: res[0].height })
  },
  onRecommendMoreClick() {
    wx.navigateTo({
      url: '/pages/detail-song/detail-song?type=recommend'
    })
  },
})