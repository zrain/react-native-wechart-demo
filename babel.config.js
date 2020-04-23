module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json'
                ],
                alias: {
                    '@src': './src',
                    '@assets': './src/assets',
                    '@components': './src/components',
                    '@router': './src/router',
                    '@screens': './src/screens',
                    '@store': './src/store',
                    '@mock': './src/mock'
                }
            }
        ]
    ]
};
