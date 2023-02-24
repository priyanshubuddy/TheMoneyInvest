module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      require("@babel/preset-env").default,
      require("@babel/preset-react").default,
    ],
    plugins: ["macros"],
  };
};
