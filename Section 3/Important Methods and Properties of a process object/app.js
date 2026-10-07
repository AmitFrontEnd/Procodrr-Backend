console.log('Type folder name where you want to go in C drive after file name: ')
const [, , directoryPath] = process.argv
process.chdir("C:/" + directoryPath)
console.log(directoryPath)