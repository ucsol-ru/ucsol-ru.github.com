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
    server: 'public',
    notify: false,
    open: false
  });

  watch(['./src/styles/style.css', 'public/*.html'], series(styleTask, reloaded))
  watch('./src/scripts/*.js', series(scriptTask, reloaded))
  watch('./src/images', series(imagesTask, reloaded))
  watch('public/*.html').on('change', browserSync.reload)
}

export default serveTask