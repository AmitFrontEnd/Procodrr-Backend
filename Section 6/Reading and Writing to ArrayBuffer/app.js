const buffer = new ArrayBuffer(2136746000)
const view = new DataView(buffer)

view.setUint8(0,255)
console.log(view.getInt8(0)
)
// for (let i = 0; i < view.byteLength; i++) {
//   view.setInt8(i, i + 1)
// }