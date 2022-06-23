module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@api': './api',
            '@modals': './modals',
            '@components': './components/',
            '@constants': './constants/',
            '@utils': './utils/',
            '@navigation': './navigation/',
            '@contexts': './contexts/',
            '@hooks': './hooks/',
            '@screens': './screens/',
            '@services': './services/',
            '@theme': './theme/',
            '@customTypes': './customTypes/',
            '@assets': './assets/',
            '@ui-kit': './ui-kit/',
            '@mocks': './jest/',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: null,
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
