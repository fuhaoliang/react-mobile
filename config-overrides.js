// @符号
const path = require('path');
const rewirePostcss = require('react-app-rewire-postcss');
const px2rem = require('postcss-px2rem');
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader,
} = require('customize-cra');
//按需加载组件
module.exports = override(
  addLessLoader({
    // javascriptEnabled: true,
    // modifyVars: {
    //   '@primary-color': '#814a96',
    // },
  }),
  fixBabelImports('lodash', {
    libraryDirectory: '',
    camel2DashComponentName: false,
  }),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  (config, env) => {
    // 重写postcss
    rewirePostcss(config, {
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
        }),
        //关键:设置px2rem
        px2rem({
          remUnit: 37.5,
          exclude: /node-modules/,
        }),
      ],
    });
    return config;
  }
);
