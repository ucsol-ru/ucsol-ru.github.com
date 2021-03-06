import pkg from 'gulp'
const { src, dest } = pkg
import imagemin from 'gulp-imagemin'


function imagesTask() {
  return src('./src/images/**/*.*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      interlaced: true,
      optimizationLevel: 3,
      gifsicle: [{interlaced: true}]
    }))
    .pipe(dest('img'))
}

export default imagesTask