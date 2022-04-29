const path = require('path');
const fn = require('./functions');

const targetPath = path.join(__dirname, '..', 'data', 'legendas')


//I wouldn't need to pass the extension in this case, because that is srt for default
fn.readDirectory(targetPath).then(paths => fn.searchExtension(paths, 'srt'))
  .then(strFiles => fn.readFiles(strFiles))
  .then(console.log)