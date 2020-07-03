module.exports = function (config) {
  // Create a helpful production flag
  const isProduction = process.env.NODE_ENV === "production";

  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias("default", "layouts/base.njk");

  // Add filters
  config.addFilter("dateDisplay", require("./src/filters/date.js"));
  config.addFilter("cssmin", require("./src/filters/css-min.js"));
  config.addFilter("jsmin", require("./src/filters/js-min.js"));

  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform("htmlmin", require("./src/utils/minify-html.js"));
  }

  // pass some assets right through
  config.addPassthroughCopy("./src/images");
  config.addPassthroughCopy({ "./src/favicon": "/" });

  return {
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
    },
  };
};
