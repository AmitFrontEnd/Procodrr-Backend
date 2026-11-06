
const buffer=new ArrayBuffer(4)
const view=new DataView(buffer)

view.setInt16(0,260,true)

console.log(view.getInt16(0,true))