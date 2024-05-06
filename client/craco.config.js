module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Find the CSS/SCSS rule in the webpack config
        const cssRule = webpackConfig.module.rules.find(
          (rule) => rule.oneOf && rule.oneOf.find((r) => String(r.test) === String(/\.module\.(css|sass|scss)$/))
        );
  
        // If found, add the css-modules-typescript-loader before the css-loader
        if (cssRule) {
          const cssLoaderIndex = cssRule.oneOf.findIndex((r) => String(r.loader).includes('css-loader'));
          if (cssLoaderIndex !== -1) {
            cssRule.oneOf.splice(
              cssLoaderIndex,
              0,
              {
                loader: 'css-modules-typescript-loader',
              },
            );
          }
        }
  
        return webpackConfig;
      },
    },
  };