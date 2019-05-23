const presets = [
  ['@babel/env', {
    targets: {
      node: '8.10',
    },
    useBuiltIns: 'usage',
  }],
];

const plugins = [

];

module.exports = { presets, plugins };
