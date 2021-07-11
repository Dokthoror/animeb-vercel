const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

const dev = process.env.NODE_ENV == "dev";

module.exports = {
  mode: dev ? "development" : "production",
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public/dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  plugins: [new VueLoaderPlugin()],
};
