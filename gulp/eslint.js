import yargs from 'yargs';
import eslint from 'gulp-eslint';
import gulp from 'gulp';
import gulpIf from 'gulp-if';

const args = yargs.argv;

// To fix some eslint issues: gulp eslint --fix
const runEslint = () => {
  const isFixed = file => args.fix && file.eslint && file.eslint.fixed;
  return gulp.src([
    'gulp/**/*.js',
    'gulpfile.babel.js',
    'src/**/*.js',
  ], { base: './' })
    .pipe(eslint({ fix: args.fix }))
    .pipe(eslint.format())
    .pipe(gulpIf(isFixed, gulp.dest('./')));
};

gulp.task('eslint', () => runEslint());

gulp.task('eslint-ci', () => runEslint().pipe(eslint.failAfterError()));
