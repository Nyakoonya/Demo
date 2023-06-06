// public settings
import { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as dotenv from "dotenv";
const path = require("path"); // a module to handle the path provided by node.js
// const webpack = require("webpack");

// 加载配置文件
const envConfig = dotenv.config({
  path: path.resolve(__dirname, "../env/.env." + process.env.BASE_ENV),
});

const baseConfig: Configuration = {
  entry: path.join(__dirname, "../src/index.tsx"), // entry file
  output: {
    filename: "static/js/[name].js", // name of every output js file
    path: path.join(__dirname, "../dist"), //the path of package result
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: "/", // public prefix path of files after packaged
  },
  optimization: {
    nodeEnv: false,
  },
  // loder settings
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
        use: "babel-loader",
      },
      {
        test: /.css$/, //匹配 css 文件
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".less", ".css"],
    alias: {
      "@": path.join(__dirname, "../src"),
    },
    modules: [path.resolve(__dirname, "../node_modules")], // 查找第三方模块只在本项目的node_modules中查找
  },
  // plugin settings
  plugins: [
    new HtmlWebpackPlugin({
      // 复制 'index.html' 文件，并自动引入打包输出的所有资源（js/css）
      template: path.join(__dirname, "../public/index.html"),
      // 压缩html资源
      minify: {
        collapseWhitespace: true, //去空格
        removeComments: true, // 去注释
      },
    }),
    new DefinePlugin({
      "process.env": JSON.stringify(envConfig.parsed),
      "process.env.BASE_ENV": JSON.stringify(process.env.BASE_ENV),
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),

    // new webpack.DefinePlugin({
    //   "process.env": JSON.stringify(process.env),
    // }),
  ].filter(Boolean),
};
export default baseConfig;
