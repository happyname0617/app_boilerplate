module.exports = {
    title: 'Sililar Food',
    typescript: true,
    port: 9090,
 
    modifyBundlerConfig: (config) => {
        config.module.rules.push({
          test: /\.scss$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]-[local]-[hash:base64:6]',
                camelCase: true
              }
            },
            { loader: 'sass-loader' }
          ]
        })
        
        return config
      },
      
}
