module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: ["@babel/plugin-transform-runtime"],
  // plugins: ["transform-runtime", "@babel/plugin-transform-runtime"],
  comments: false,
  env: {
    test: {
      presets: ["env", "stage-2"],
      plugins: ["istanbul"],
    },
  },
};
