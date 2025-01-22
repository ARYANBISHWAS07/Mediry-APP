module.exports = {
  presets: [
    "babel-preset-expo", // Add this preset if you're using Expo
    // You can add other presets here if necessary
  ],
  plugins: [
    "@babel/plugin-proposal-export-namespace-from",
    "react-native-reanimated/plugin", // This plugin is required for React Native Reanimated
    // Add other plugins here if necessary
  ],
};
