const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const loaders = ({ extract, minimize }) => [
  // {
  //   loader: require.resolve('isomorphic-style-loader'),
  // },
  {
    loader: require.resolve('css-loader'),
    options: {
      minimize,
      modules: true,
      importLoaders: 1,
    },
  },
  {
    loader: require.resolve('postcss-loader'),
    options: {
      ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
      plugins: () => [
        require("postcss-import"),
        require('postcss-css-variables'),
        require('postcss-flexbugs-fixes'),
        require('postcss-custom-media'),
        require('lost'),
        autoprefixer({
          browsers: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 9', // React doesn't support IE8 anyway
          ],
          flexbox: 'no-2009',
        })
      ],
    },
  },
]

module.exports = ({ extract, minimize }) => ({
  test: /\.css$/,
  use: extract ?
    ExtractTextPlugin.extract({
      use: loaders({ extract, minimize })
    }) :
    [{
      loader: require.resolve('style-loader')
    }].concat(loaders({ extract, minimize }))
})
