import { hyRequest } from "./index"

export function getTopMV(offset = 0,limit = 20) {
  return hyRequest.get({
    url: "/top/mv",
    data: {
      offset,
      limit
    }
  })
}

export function getMVUrl(id) {
  return hyRequest.get({
    url: "/mv/url",
    data: {
      id
    }
  })
}

// 获取mv数据
export function getMVDetail(mvid) {
  return hyRequest.get({
    url: "/mv/detail",
    data: {
      mvid
    }
  })
}


// 相关视频
export function getMVrelated(id) {
  return hyRequest.get({
    url: "/related/allvideo",
    data: {
      id
    }
  })
}

