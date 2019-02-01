// const isDev = process.env.NODE_ENV === "development";

// module.exports = {
//   mode: isDev ? "development" : "production",
//   entry: [
//     "@babel/polyfill", // enables async-await
//     "./client/index.js"
//   ],
//   output: {
//     path: __dirname,
//     filename: "./public/bundle.js"
//   },
//   resolve: {
//     extensions: [".js", ".jsx"]
//   },
//   devtool: "source-map",
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loader: "babel-loader"
//       }
//     ]
//   }
// };

path = import("path");

module.exports = {
  entry: "./index.js", // assumes your entry point is the index.js in the root of your project folder
  mode: "development",
  output: {
    // publicPath: "/"
    // filename: "bundle.js"
    path: path.resolve(__dirname), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "bundle.js", // string    // the filename template for entry chunks
    publicPath: "/" // string
  },
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
