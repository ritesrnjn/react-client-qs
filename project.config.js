const ENV = process.env.NODE_ENV || 'production';
const ANALYZE = process.env.ANALYZE || false;

let port = process.env.PORT || 3000;
let srcDir = 'client';
let outDir = 'dist';

module.exports = {
  /** The environment to use when building the project */
  env: ENV,
  /** analyse */
  analyze: ANALYZE,
  /** The full path to the project's root directory */
  basePath: __dirname,
  /** The name of the directory containing the application source code */
  srcDir: srcDir,
  /** The file name of the application's entry point */
  main: 'main',
  /** The name of the directory in which to emit compiled assets */
  outDir: outDir,
  /** The base path for all projects assets (relative to the website root) */
  publicPath: '/',
  /** Whether to generate sourcemaps */
  sourcemaps: true,
  /** A hash map of keys that the compiler should treat as external to the project */
  externals: {},
  /** A hash map of variables and their values to expose globally */
  globals: {},
  /** Whether to enable verbose logging */
  verbose: false,
  /** The list of modules to bundle separately from the core application code */
  vendors: ['react', 'react-dom', 'redux', 'react-redux', 'redux-thunk', 'react-router'],
  /** Which port to use */
  port: port,
};
