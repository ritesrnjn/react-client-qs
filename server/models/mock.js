import fs from 'fs';
import path from 'path';
import project from '../../project.config';

const mocksDir = path.resolve(project.basePath, 'server/mocks');
// import logger from '../utils/logger'

/**
 * Return contents of mock json file if present
 * Else send file not found error message
 */
export function getResponse(url) {
  // Mock json filename is last part of get URL
  const filename = url.substring(url.lastIndexOf('/') + 1);

  return new Promise((resolve, reject) => {
    try {
      const contents = fs.readFileSync(mocksDir + '/' + filename + '.json');
      const jsonContent = JSON.parse(contents);
      resolve(jsonContent);
    } catch (e) {
      reject({
        error: true,
        message:
          'Mock json file not found. Add a file ' +
          filename +
          '.json in server/mocks for this url to work.',
      });
    }
  });
}

/**
 * Returns list of all mock files with url
 */
export function walkSync() {
  return new Promise(resolve => {
    const dir = mocksDir;
    const files = fs.readdirSync(dir);
    let urlsArray = [];

    files.forEach(file => {
      urlsArray.push({
        name: file,
        url: getMockUrl(file),
      });
    });
    resolve(urlsArray);
  });
}

/**
 * returns url of file
 */
const getMockUrl = fileName => {
  return 'http://localhost:3000/api/mock/' + fileName.substring(0, fileName.length - 5);
};
