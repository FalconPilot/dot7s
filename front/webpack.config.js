const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const acceptedPlatforms = ['app', 'admin']

module.exports = env => {
  if (typeof env.platform !== 'string') {
    throw new Error('env.platform should exist ! (Example : --env platform="app")')
  }

  if (!acceptedPlatforms.includes(env.platform)) {
    throw new Error(`env.platform is not in accepted platforms : ${acceptedPlatforms.map(p => `"${p}"`).join(', ')}`)
  }

  const baseDir = {
    app: 'src-app',
    admin: 'src-admin'
  }[env.platform]

  return {
    mode: 'development',
    devtool: false,
    entry: path.resolve(__dirname, `src-${env.platform}`, 'index.tsx'),
    module: {
      rules: [{
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader'
        }],
        exclude: /node_modules/
      }]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      plugins: [new TsconfigPathsPlugin()],
      alias: {
        'react-redux': require.resolve('react-redux')
      }
    },
    output: {
      filename: `${env.platform}.js`,
      path: path.resolve(__dirname, 'dist')
    }
  }
}
