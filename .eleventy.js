module.exports = function (config) {
  // Create a helpful production flag
  const isProduction = process.env.NODE_ENV === "production";

  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias("default", "layouts/base.njk");

  // Add some utility filters
  config.addFilter("dateDisplay", require("./src/filters/date.js"));
  config.addFilter("cssmin", require("./src/filters/css-min.js"));

  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform("htmlmin", require("./src/utils/minify-html.js"));
  }

  // compress and combine js files
  config.addFilter("jsmin", function (code) {
    const Terser = require("terser");
    let minified = Terser.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  // pass some assets right through
  config.addPassthroughCopy("./src/images");
  config.addPassthroughCopy({ "./src/favicon": "/" });

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data/",
    },
    // templateFormats: ["njk", "md", "11ty.js"],
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
