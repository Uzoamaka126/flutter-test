module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
  ],
  // plugins: ["transform-runtime", "@babel/plugin-transform-runtime"],
  comments: false,
  env: {
    test: {
      presets: ["env", "stage-2"],
      plugins: ["istanbul"],
    },
  },
};
