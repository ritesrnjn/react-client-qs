const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const project = require('../project.config');

const inProject = path.resolve.bind(path, project.basePath);
const inProjectSrc = file => inProject(project.srcDir, file);

const __DEV__ = project.env === 'development';
const __TEST__ = project.env === 'test';
const __PROD__ = project.env === 'production';
const __ANALYZE__ = project.analyze === 'true';

const config = {
  entry: {
    normalize: [inProjectSrc('normalize')],
    main: [inProjectSrc(project.main)],
  },
  devtool: project.sourcemaps ? 'source-map' : false,
  output: {
    path: inProject(project.outDir),
    filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
    publicPath: project.publicPath,
  },
  resolve: {
    modules: [inProject(project.srcDir), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  mode: __DEV__ ? 'development' : 'production',
  externals: project.externals,
  module: {
    rules: [],
  },
  plugins: [
    new webpack.DefinePlugin(
      Object.assign(
        {
          'process.env': { NODE_ENV: JSON.stringify(project.env) },
          __DEV__,
          __TEST__,
          __PROD__,
        },
        project.globals,
      ),
    ),
    new ProgressBarPlugin(),
  ],
};

// JavaScript
// ------------------------------------
config.module.rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
      },
    },
  ],
});

// Styles
// ------------------------------------
const extractStyles = new ExtractTextPlugin({
  filename: 'stylesheets/[name].[hash].css',
  allChunks: true,
  disable: __DEV__,
});

config.module.rules.push({
  test: /\.(sass|scss)$/,
  loader: extractStyles.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: project.sourcemaps,
          minimize: {
            autoprefixer: {
              add: true,
              remove: true,
              browsers: ['last 2 versions'],
            },
            discardComments: {
              removeAll: true,
            },
            discardUnused: false,
            mergeIdents: false,
            reduceIdents: false,
            safe: true,
            sourcemap: project.sourcemaps,
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: project.sourcemaps,
          includePaths: [inProjectSrc('styles')],
        },
      },
    ],
  }),
});
config.plugins.push(extractStyles);

// Images
// ------------------------------------
config.module.rules.push({
  test: /\.(png|jpg|gif)$/,
  loader: 'url-loader',
  options: {
    limit: 8192,
  },
});

// Fonts
// ------------------------------------
[
  ['woff', 'application/font-woff'],
  ['woff2', 'application/font-woff2'],
  ['otf', 'font/opentype'],
  ['ttf', 'application/octet-stream'],
  ['eot', 'application/vnd.ms-fontobject'],
  ['svg', 'image/svg+xml'],
].forEach(font => {
  const extension = font[0];
  const mimetype = font[1];

  config.module.rules.push({
    test: new RegExp(`\\.${extension}$`),
    loader: 'url-loader',
    options: {
      name: 'fonts/[name].[ext]',
      limit: 10000,
      mimetype,
    },
  });
});

// Template
// ------------------------------------
config.plugins.push(
  new HtmlWebpackPlugin({
    template: './client/index.html',
    inject: true,
    minify: {
      collapseWhitespace: true,
    },
  }),
);

// Development Tools
// ------------------------------------
if (__DEV__) {
  config.entry.main.push(
    `webpack-hot-middleware/client.js?path=${config.output.publicPath}__webpack_hmr`,
  );
  config.plugins.push(new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin());

  if (__ANALYZE__) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }
}

// Bundle Splitting
// ------------------------------------
if (!__TEST__) {
  const bundles = ['normalize', 'manifest'];

  if (project.vendors && project.vendors.length) {
    bundles.unshift('vendor');
    config.entry.vendor = project.vendors;
  }

  config.optimization = {
    splitChunks: {
      cacheGroups: {
        commons: { test: /[\\/]node_modules[\\/]/, name: 'bundles', chunks: 'all' },
      },
    },
  };

}

// Production Optimizations
// ------------------------------------
if (__PROD__) {
  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: !!config.devtool,
      comments: false,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
    }),
  );

  config.optimization.minimizer = [
    new UglifyJsPlugin({
      sourceMap: !!config.devtool,
      comments: false,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
    }),
  ]
}

module.exports = config;
