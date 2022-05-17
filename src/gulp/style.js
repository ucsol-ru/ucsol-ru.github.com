import pkg from 'gulp'
const { src, dest } = pkg
import postcss from 'gulp-postcss'
import sourcemap from 'gulp-sourcemaps'
import tailwindcss from 'tailwindcss'
import cssnano from 'gulp-cssnano'
import autoprefixer from 'autoprefixer'
import nested from 'postcss-nested'

function styleTask() {
  return src('./src/styles/style.css')
  .pipe(sourcemap.init())
  .pipe(postcss([ tailwindcss('./tailwind.config.cjs'), autoprefixer, nested ]) )
  .pipe(cssnano())
  .pipe(sourcemap.write('.'))
  .pipe(dest('public/assets/css'))
}

export default styleTask