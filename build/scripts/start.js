/**
 * Starts express server
 */

import express from 'express';
import logger from './logger';
import server from '../../server/main';
import project from '../../project.config';

const app = express();

logger.info('Starting server...');

server(app);

app.server = app.listen(project.port, err => {
  if (err) {
    logger.error(`Server error: ${err}`);
  } else {
    logger.success(`Server is running at http://localhost:${project.port}`);
  }
});
