module.exports = {
  components: "src/components/**/[A-Z]*.vue"
};
const path = require("path");
const vueLoader = require("vue-loader");

module.exports = {
  sections: [
    {
      name: "UI Components",
      components: "src/components/**/[A-Z]*.vue"
    },
    {
      name: "Views",
      components: "src/views/**/[A-Z]*.vue"
    },
    {
      name: "Layouts",
      components: "src/layouts/**/[A-Z]*.vue"
    },
    {
      name: "Storage",
      components: "src/store/**/[A-Z]*.(js|vue)",
      renderRootJsx: path.join(__dirname, "/src/config/styleguide.root.js"),
    }
  ],
  defaultExample: true,
  require: [path.join(__dirname, "./src/style.scss")],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
          options: {
            loaders: {
              scss: ["vue-style-loader", "css-loader", "sass-loader"]
            }
          }
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.(css?|scss)(\?.*)?$/,
          loader: "style-loader!css-loader!sass-loader"
        }
      ]
    },
    plugins: [new vueLoader.VueLoaderPlugin()]
  },
  renderRootJsx: path.join(__dirname, "/src/config/styleguide.root.js"),
  usageMode: "expand",
  exampleMode: "expand",
  styleguideDir: "dist"
};
