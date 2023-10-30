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

const cssRegex = /\.css$/;
const sassRegex = /\.(scss|sass)$/;
const lessRegex = /\.less$/;
const stylRegex = /\.styl$/;

const styleLoadersArray = [
  "style-loader",
  {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: "[path][name]__[local]--[hash:5]",
      },
    },
  },
  "postcss-loader",
];

const baseConfig: Configuration = {
  entry: path.join(__dirname, "../src/index.tsx"), // entry file
  output: {
    filename: "static/js/[name].js", // name of every output js file
    path: path.join(__dirname, "../dist"), //the path of package result
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: "/", // public prefix path of files after packaged
    assetModuleFilename: "images/[hash][ext][query]", //这里自定义输出文件名的方式是，将某些资源发送到指定目录
  },
  optimization: {
    nodeEnv: false,
    runtimeChunk: 'single'
  },
  // loder settings
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
        use: "babel-loader",
      },
      // css 专门作为引入第三方样式，不走modules
      {
        test: cssRegex,
        // include: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      // {
      //   test: cssRegex, //匹配 css 文件
      //   exclude: /node_modules/,
      //   use: styleLoadersArray,
      // },
      {
        test: lessRegex,
        use: [
          ...styleLoadersArray,
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                importLoaders: 2,
                // 可以加入modules: true，这样就不需要在less文件名加module了
                modules: true,
                // 如果要在less中写类型js的语法，需要加这一个配置
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: sassRegex,
        use: [...styleLoadersArray, "sass-loader"],
      },
      {
        test: stylRegex,
        use: [...styleLoadersArray, "stylus-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // 匹配图片文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 小于10kb转base64
          },
        },
        generator: {
          filename: "static/images/[hash][ext][query]", // 文件输出目录和命名
        },
      },
      {
        test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64
          },
        },
        generator: {
          filename: "static/fonts/[hash][ext][query]", // 文件输出目录和命名
        },
      },
      {
        test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
        type: "asset", // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb转base64
          },
        },
        generator: {
          filename: "static/media/[hash][ext][query]", // 文件输出目录和命名
        },
      },
      // {
      //   // 匹配json文件
      //   test: /\.json$/,
      //   type: "asset/resource", // 将json文件视为文件类型
      //   generator: {
      //     // 这里专门针对json文件的处理
      //     filename: "static/json/[name].[hash][ext][query]",
      //   },
      // },
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
