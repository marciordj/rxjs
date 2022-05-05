const fs = require('fs');
const path = require('path');


function readDirectory(filePath) {
  return new Promise((resolve, reject) => {
    try {
      let files = fs.readdirSync(filePath)
      files = files.map(file => path.join(filePath, file))
      resolve(files)
    } catch(e) {
      reject(e)
    }
  })
}

function searchExtension(array, extension = 'srt') {
  return array.filter(element => element.endsWith(extension))
}

function removeEmptySpace(array) {
  return array.filter(element => element.trim())
}

function removeLinesWithArrow(string, stringPattern) {
  return string.filter(element => !element.includes(stringPattern))
}

function removeNumber(string) {
const regex = /[0-9]/gi
return string.filter(element => !regex.exec(element))
}


//Aqui ele vai pegar o path até o arquivo e abrir ou rejeitar
function readFile(filePath) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(filePath, { encoding: 'utf-8' })
      resolve(content.toString())
    } catch(e) {
      reject(e)
    }
  })
}

//Aqui essa função vai pegar a função de cima e passar por cada path e abrir e pegar o conteúdo
function readFiles(filesPath) {
  return Promise.all(filesPath.map(paths => readFile(paths)))
}

module.exports = {
  readDirectory,
  readFiles,
  searchExtension,
  removeEmptySpace,
  removeLinesWithArrow,
  removeNumber
}