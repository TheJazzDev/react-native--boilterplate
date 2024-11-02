// const { getDefaultConfig } = require("expo/metro-config");
// const { withNativeWind } = require("nativewind/metro");

// const config = getDefaultConfig(__dirname);

// module.exports = withNativeWind(config, { input: "./global.css" });

const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

// Add alias configurations to Metro
defaultConfig.resolver.alias = {
  '~/utils': path.resolve(__dirname, 'src/utils'),
  '~/hooks': path.resolve(__dirname, 'src/hooks'),
  '~/theme': path.resolve(__dirname, 'src/theme'),
  '~/assets': path.resolve(__dirname, 'src/assets'),
  '~/constants': path.resolve(__dirname, 'src/constants'),
  '~/components': path.resolve(__dirname, 'src/components'),
};

module.exports = withNativeWind(defaultConfig, { input: './global.css' });
