const ENV = process.env.NODE_ENV;

defaultPresets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: 11,
        edge: 14,
        firefox: 45,
        chrome: 49,
        safari: 10,
        node: '6.11',
      },
      modules: ['production'].includes(ENV) ? false : 'commonjs',
    },
  ],
];

module.exports = {
  presets: defaultPresets.concat(
    [
      '@babel/preset-react', '@babel/flow'
    ]
  ),
  plugins: [
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime',
    [
      'module-resolver',
      {
        alias: {
          root: './',
          docs: './docs',
          client: './client',
          pages: './pages',
          server: './server',
          test: './test',
        },
      },
    ],
  ],
  env: {
    'client-development': {
      presets: [],
    },
    'client-production': {
      presets: [],
    },
    test: {
      presets: [],
      plugins: [],
    },
  }
};
