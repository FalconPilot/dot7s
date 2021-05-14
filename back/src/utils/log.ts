import { formatWithDigits } from '$common/utils'

export const log = (txt: string): void => {
  const stamp = new Date(Date.now())
  const verboseTime = [
    formatWithDigits(stamp.getHours(), 2),
    formatWithDigits(stamp.getMinutes(), 2),
    formatWithDigits(stamp.getSeconds(), 2)
  ].join(':')
  console.log(`[${verboseTime}]> ${txt}`)
}
