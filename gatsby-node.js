const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@fonts": path.resolve(__dirname, "src/fonts"),
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    },
  })
}
