import { formatTime } from './common'

// eslint-disable-next-line
export const logError = (name, action, info ) => {
  if (!info) {
    info = 'empty'
  }
  if (typeof info === 'object') {
    info = JSON.stringify(info)
  }
  let time = formatTime(new Date())
  console.error(time, name, action, info)
  
}

// eslint-disable-next-line
export const logDebug = (name, action, info ) => {
  if (!info) {
    info = 'empty'
  }
  if (typeof info === 'object') {
    info = JSON.stringify(info)
  }
  let time = formatTime(new Date())
  console.error(time, name, action, info)
  
}
