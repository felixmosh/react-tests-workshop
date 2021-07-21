module.exports = {
  projects: [
    {
      displayName: 'e2e',
      preset: 'jest-puppeteer',
      testRegex: '__tests__/.*\\.e2e\\.[jt]sx?$',
      setupFilesAfterEnv: [require.resolve('./__tests__/setup-e2e')],
    },
    {
      displayName: 'units',
      testEnvironment: 'jsdom',
      testRegex: '__tests__/.*\\.(test|spec)\\.[jt]sx?$',
      moduleNameMapper: {
        '.*\\.(css)$': 'identity-obj-proxy',
        '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/__mocks__/fileMock.js',
      },
    },
  ],
};
