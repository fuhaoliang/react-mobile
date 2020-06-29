// @符号
const path = require('path');
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader,
} = require('customize-cra');
//按需加载组件
module.exports = override(
  addLessLoader(),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })
);
