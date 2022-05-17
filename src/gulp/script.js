import pkg from 'gulp'
const { src, dest } = pkg
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import sourcemap from 'gulp-sourcemaps'

function scriptTask() {
  return src('./src/scripts/*.js')
    .pipe(sourcemap.init())
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(sourcemap.write())
    .pipe(dest('public/assets/js'))
}

export default scriptTask