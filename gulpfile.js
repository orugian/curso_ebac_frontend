const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const obfuscate = require('gulp-obfuscate');
const uglify = require('gulp-uglify');


function compilaSass(){ //Função compila SASS
  return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed' //Faz com que o arquivo ocupe menos espaço de memoria
    }))
    .pipe(sourcemaps.write('./maps')) //Relata no arquivo maps o que aconteceu no arquivo main
    .pipe(gulp.dest('./build/styles'));
  }


function comprimeImagens(){
  return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript(){
  return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    
    .pipe(gulp.dest('./build/scripts'))
}




exports.sass = compilaSass;
exports.images = comprimeImagens;
exports.javascript = comprimeJavaScript;


