module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: ["transform-runtime"],
  comments: false,
  env: {
    test: {
      presets: ["env", "stage-2"],
      plugins: ["istanbul"],
    },
  },
};
