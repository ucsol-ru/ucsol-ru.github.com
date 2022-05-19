import pkg from 'gulp'
const { src, dest } = pkg
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import sourcemap from 'gulp-sourcemaps'
import cssnano from 'gulp-cssnano'

const sass = gulpSass(dartSass)

function styleTask() {
  return src('./src/styles/**/*.sass')
  .pipe(sass())
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(sourcemap.init())
  .pipe(cssnano())
  .pipe(sourcemap.write('.'))
  .pipe(dest('assets/css'))
}

export default styleTask