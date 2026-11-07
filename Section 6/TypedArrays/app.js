// Typed Arrays
	            // Minimum	Maximum
// Uint8Array	    0	      255
// Int8Array	   -128	  127
// Uint16Array	  0	    65,535
// Int16Array	    -32,768	32,767


const buffer=new ArrayBuffer(3,{maxByteLength:10})
console.log(buffer.resizable)
const view=new Uint8Array(buffer)
const newbuffer=buffer.transfer()
console.log(buffer.byteLength)
console.log(view.byteLength)
console.log(newbuffer.byteLength)