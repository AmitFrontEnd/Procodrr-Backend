import fs from 'fs/promises'

const [, , filename, word] = process.argv

const fileContent = await fs.readFile(filename, 'utf-8')

const fileContentArray = fileContent.split(/[\W]/).filter(w => w)

const countWordObj = {}

for (let i = 0; i < fileContentArray.length; i++) {
  if (!countWordObj[fileContentArray[i]])
    countWordObj[fileContentArray[i]] = 1
  else countWordObj[fileContentArray[i]]++
}

if (!word) console.log(countWordObj)
else if (!countWordObj[word]) console.log(0)
else {
  let lower = word.toLowerCase()
  let sentenceCase = toSentenceCase(word)
  let upperCase = word.toUpperCase()
  let totalWords = 0
  if (countWordObj[word]) totalWords += countWordObj[word]

  if (countWordObj[sentenceCase] && sentenceCase !== word) totalWords += countWordObj[sentenceCase]
  if (countWordObj[lower] && lower !== word) totalWords += countWordObj[lower]
  if (countWordObj[upperCase] && upperCase !== word) totalWords += countWordObj[upperCase]
  console.log(totalWords)
}

function toSentenceCase(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}   