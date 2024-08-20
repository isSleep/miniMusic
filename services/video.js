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