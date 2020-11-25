# csx-loader

csx loader for webpack

## webpack config
```js
chainWebpack(config) {
  config.module.rule('exclude').exclude.add(/\\.csx$/);
  config.module
    .rule('csx')
    .test(/\\.csx$/)
    .use('babel-loader')
    .loader('babel-loader')
    .options({
      babelrc: false,
      presets: [require.resolve('@babel/preset-env'), require.resolve('babel-preset-karas')],
    })
    .end();
},
```
