module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          // Config
          '@adapters': './src/config/adapters',
          '@helpers': './src/config/helpers',
          // Core
          '@entities': './src/core/entities',
          '@use-cases': './src/core/use-cases',
          // Infrastructure 
          '@interfaces': './src/infrastructure/interfaces',
          '@mappers': './src/infrastructure/mappers',
          // Presentation
          '@components': './src/presentation/components',
          '@hooks': './src/presentation/hooks',
          '@navigation': './src/presentation/navigation',
          '@screens': './src/presentation/screens',
        },
        extensions: ['.ts', '.tsx'],
      }
    ]
  ],
};
