const withFonts = require('next-fonts')
const path = require('path')

module.exports = withFonts({
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'deny',
          },
        ],
      },
    ]
  },
  poweredByHeader: false,
  target: 'serverless',
  webpack: (config) => {
    config.resolve.alias['~'] = path.resolve(__dirname)
    config.resolve.alias['@common'] = path.resolve(
      'src',
      'components',
      'common'
    )
    config.resolve.alias['@components'] = path.resolve('src', 'components')
    config.resolve.alias['@data'] = path.resolve('src', 'data')
    config.resolve.alias['@providers'] = path.resolve('src', 'providers')
    config.resolve.alias['@services'] = path.resolve('src', 'services')
    config.resolve.alias['@styles'] = path.resolve('src', 'styles')
    config.resolve.alias['@utils'] = path.resolve('src', 'utils')
    return config
  },
})
