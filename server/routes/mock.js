/**
 * Uses mock utils to fetch mock json file
 */

import express from 'express';
import { getResponse, walkSync } from '../models/mock';

const router = express.Router();

router.get('/:filename', (req, res) => {
  getResponse(req.path)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get('/', (req, res) => {
  walkSync()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    });
});

export default router;
