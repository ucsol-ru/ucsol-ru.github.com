import pkg from 'gulp'
const { watch, series } = pkg
import browserSync from 'browser-sync'
import styleTask from './style.js'
import scriptTask from  './script.js'
import imagesTask from './image.js'

browserSync.create()

function reloaded(cb) {
  browserSync.reload()
  cb();
}

function serveTask() {
  browserSync.init({
    server: '',
    notify: false,
    open: false
  });

  watch('./src/styles/**/*.sass', series(styleTask, reloaded))
  watch('./src/scripts/*.js', series(scriptTask, reloaded))
  watch('./src/images', series(imagesTask, reloaded))
  watch('**/*.html').on('change', browserSync.reload)
}

export default serveTask