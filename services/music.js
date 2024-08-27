import { hyRequest } from "./index"

// 获取轮播图信息
export function getMusicBanner(type = 0) {
  return hyRequest.get({
    url:"/banner",
    data: {
      type
    }
  })
}