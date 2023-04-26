export const randomString = (length: number) => {
  return Math.random().toString(36).substr(2,length)
}