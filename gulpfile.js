import pkg from 'gulp'
const { parallel } = pkg
import serveTask from './src/gulp/serve.js'
import styleTask from './src/gulp/style.js'
import scriptTask from './src/gulp/script.js'
import imagesTask from './src/gulp/image.js'

export default parallel(serveTask, styleTask, scriptTask, imagesTask)
