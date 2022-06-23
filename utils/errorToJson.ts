export const errorToJson = (e: any) => {
  return JSON.parse(JSON.stringify(e, Object.getOwnPropertyNames(e)))
}