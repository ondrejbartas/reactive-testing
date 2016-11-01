# Linter

Run eslint
```
gulp eslint
```

Run eslint and tryies to fix some errors
```
gulp eslint --fix
```

Run eslint in CI -> will fail correctly
```
gulp eslint-ci
```

# Unit Testing

Run all tests in project
```
gulp ava
```

Start watcher
```
gulp ava-watch
```

Run single test file
```
gulp ava-file -f src/__test__/someTest.js
```

