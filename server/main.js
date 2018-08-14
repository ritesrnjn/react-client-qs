/**
 * Express Server
 */

import express from 'express';
import path from 'path';
import webpack from 'webpack';
import compress from 'compression';
import logger from '../build/scripts/logger';
import project from '../project.config';
import webpackConfig from '../build/webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Mock Route
import MockRoutes from './routes/mock';

export default app => {
  app.use(compress());
  app.set('case sensitive routing', false);

  // ------------------------------------
  // Apply Webpack HMR Middleware
  // ------------------------------------
  if (project.env === 'development') {
    let compiler = webpack(webpackConfig);

    logger.info('Enabling webpack development and HMR middleware');
    app.use(
      webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        contentBase: path.resolve(project.basePath, project.srcDir),
        hot: true,
        quiet: false,
        noInfo: false,
        lazy: false,
        stats: 'minimal',
      }),
    );
    app.use(
      webpackHotMiddleware(compiler, {
        path: '/__webpack_hmr',
      }),
    );

    // Serve static assets from ~/public since Webpack is unaware of
    // these files. This middleware doesn't need to be enabled outside
    // of development since this directory will be copied into ~/dist
    // when the application is compiled.
    app.use(express.static(path.resolve(project.basePath, 'public')));

    app.use('/api/mock', MockRoutes);

    // This rewrites all routes requests to the root /index.html file
    // (ignoring file requests). If you want to implement universal
    // rendering, you'll want to remove this middleware.
    app.use('*', function(req, res, next) {
      const filename = path.join(compiler.outputPath, 'index.html');
      compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) {
          return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
      });
    });
  } else {
    logger.warn(
      'Server is being run outside of live development mode, meaning it will ' +
        'only serve the compiled application bundle in ~/dist.',
    );

    // Serving ~/dist by default. Ideally these files should be served by
    // the web server and not the app server, but this helps to demo the
    // server in production.
    app.use(express.static(path.resolve(project.basePath, project.outDir)));
  }
};
