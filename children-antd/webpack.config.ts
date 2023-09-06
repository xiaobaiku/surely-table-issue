import * as path from "path";
import type { Configuration } from "webpack";
import { VueLoaderPlugin } from "vue-loader";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const config: Configuration = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    // @ts-ignore
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new VueLoaderPlugin(),
    // new FileListPlugin()
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{ loader: "vue-loader" }],
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: ["\\.vue$"],
          transpileOnly: true,
          happyPackMode: true,
        },
      },
      {
        test: /\.less$/i,
        use: [
          { loader: stylesHandler },
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".vue", ".ts", ".js"],
  },
  stats: "errors-only",
};

const webpackConfigFn = () => {
  if (isProduction) {
    config.mode = "production";
    // @ts-ignore
    config.plugins?.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
    Object.assign(config, {
      devServer: {
        host: "localhost",
        port: 8080,
        hot: true,
        allowedHosts: "all",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
    });
  }
  return config;
};

export default webpackConfigFn;
