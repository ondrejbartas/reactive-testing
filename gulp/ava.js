import yargs from 'yargs';
import ava from 'gulp-ava';
import gulp from 'gulp';
import path from 'path';

const args = yargs
  .alias('f', 'file')
  .argv;

// To ignore webpack custom loaders on server.
['css', 'sass'].forEach((ext) => {
  require.extensions[`.${ext}`] = () => {};
});

function getTestFile(file) {
  if (!file) return null;

  if (file.path.indexOf('__test__') !== -1) return file.path;

  const parts = file.path.split(path.sep);
  const filename = parts.pop(1);
  const dir = parts.join(path.sep);
  return `${dir}/__test__/${filename.split('.')[0]}*.js`;
}

// single run on all tests
gulp.task('ava', () => gulp
  .src(['src/**/__test__/**/*.js'])
  .pipe(ava()));

// watcher for unit tests
// it doesn't kick off the testing, but it watches and doesn't fall
// if the error is encountered
//
// so, if we start to watch, you have to change something to see the result
gulp.task('ava-watch', () => gulp
  .watch(['src/**/*.js'], (file) => {
    gulp.src(getTestFile(file)).pipe(ava())
    // log is crucial here
    .on('error', err => console.log(err.message)); // eslint-disable-line
  }));

gulp.task('ava-file', () => gulp
  .src(getTestFile({ path: args.file }))
  .pipe(ava()));
