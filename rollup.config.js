import json from 'rollup-plugin-json';

export default {
    input: 'src/main.js',
    // output: {
    //   file: 'bundle.js',
    //   format: 'cjs'
    // },
    output: [
        {
            name: 'xxx',
            file: 'dist/bundle.common.js',
            format: 'cjs'
        },
        {
            name: 'xxx',
            file: 'dist/bundle.ems.js',
            format: 'esm'
        },
        {
            name: 'xxx',
            file: 'dist/bundle.min.js',
            format: 'umd'
        }
    ],
    plugins: [ json() ]
};