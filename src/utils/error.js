export const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

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
