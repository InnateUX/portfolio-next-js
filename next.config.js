const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  reactStrictMode: false,
  images: {
    unoptimized: false, // Revert to default image optimization
  },
  webpack(config) {
    // Custom alias for 'src'
    config.resolve.alias['@'] = path.join(__dirname, 'src');

    // Add Sass configuration
    config.module.rules.push({
      test: /\.jpeg/,
      type: 'asset',
      parser: { dataUrlCondition: { maxSize: 15000 } },
      use: [
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [path.join(__dirname, 'src/styles')],
            },
          },
        },
        'resolve-url-loader',
        'postcss-loader',
        'css-loader',
      ],
    });

    return config;
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self' vercel.live;
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://vercel.live/_next-live/feedback/feedback.js;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com data:;
              img-src 'self' data: blob:;
              connect-src 'self' vercel.live;
              frame-src 'self';
            `.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};