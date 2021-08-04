import common from '@/api/common'
import user from '@/api/user'

interface UrlDict {
  [key: string]: {
    [key: string]: string
  }
}

const urlDict: UrlDict = {
  common,
  user
}

const getUrl = (url: string): string => {
  try {
    if (url === '') throw new Error('请求路径为空')
    const [modelName, urlName] = url.split('.')
    if (!Object.keys(urlDict).includes(modelName)) throw new Error('未获取到请求模块')
    const reqUrl = urlDict[modelName][urlName]
    if (!reqUrl) throw new Error('未获取到请求所需url')
    return reqUrl
  } catch (e) {
    console.error(e)
    return ''
  }
}

export default getUrl
