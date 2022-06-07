module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@consts': './src/consts',
          '@enums': './src/enums',
          '@features': './src/features',
          '@interfaces': './src/interfaces',
          '@layouts': './src/layouts',
          '@mocks': './src/mocks',
          '@screens': './src/screens',
          '@services': './src/services',
          '@src': './src',
          '@store': './src/store',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ]
  ],
};

