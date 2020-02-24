module.exports = {
  testRegex: '/__tests__/.*\\.(test|spec)\\.[jt]sx?$',
  moduleNameMapper: {
    '.*\\.(css)$': 'identity-obj-proxy',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
};