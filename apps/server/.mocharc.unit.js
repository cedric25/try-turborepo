module.exports = {
  require: ['@swc-node/register', 'tsconfig-paths/register'],
  spec: 'src/**/*.spec.ts',
  color: true,
  'check-leaks': true,
}
