 - Adding a new 'app' or a new 'package'
Don't forget to re-run `npm i` from the project root.

 - Install a new dependency
Always do it from the project root.
Example:
```
npm i fastify-cors -w=bo-server
```

 - Using 'tsc-alias' instead of 'tsconfig-paths'
All imports using an alias will be changed to relative imports -> Less problems then for node to run dist.
Well, no so simple, it works well when running the server, but not for running tests?!
Add back 'tsconfig-paths' for now...
