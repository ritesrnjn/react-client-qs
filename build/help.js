/**
 * This file is called by package.json to show list of tasks
 */

let reset = '\x1b[0m';
let bright = '\x1b[1m';
let dim = '\x1b[2m';
let underscore = '\x1b[4m';
let blink = '\x1b[5m';
let reverse = '\x1b[7m';
let hidden = '\x1b[8m';

// Foreground colors
let fgBlack = '\x1b[30m';
let fgRed = '\x1b[31m';
let fgGreen = '\x1b[32m';
let fgYellow = '\x1b[33m';
let fgBlue = '\x1b[34m';
let fgMagenta = '\x1b[35m';
let fgCyan = '\x1b[36m';
let fgWhite = '\x1b[37m';

// Background colours
let bgBlack = '\x1b[40m';
let bgRed = '\x1b[41m';
let bgGreen = '\x1b[42m';
let bgYellow = '\x1b[43m';
let bgBlue = '\x1b[44m';
let bgMagenta = '\x1b[45m';
let bgCyan = '\x1b[46m';
let bgWhite = '\x1b[47m';

console.log(`${fgCyan}

  List of tasks
  -------------
      
      yarn                            download packages
      yarn [option]                   perform specified task
      
      Options:${fgGreen}
        
        start                         start development server
        build                         build project for deployment
        clean                         delete build folder

        docs                          open docs for viewing
        docs:dev                      start docs development server
        docs:build                    build docs 
        docs:start                    start docs from build
        
        test                          run test scripts
        test:watch                    run test scripts in watch mode
        test:coverage                 check test scripts coverage
      
        lint                          check for linting errors
        lint:fix                      fix linting errors
        
        analyze                       visualize size of webpack output files with an interactive zoomable treemap
        scripts                       view list of tasks in package.json
        
        outdated                      list of outdated packages
        ${fgRed}upgrade                       ${blink}!caution${reset}${fgRed} upgrade packages ${reset}
`);
