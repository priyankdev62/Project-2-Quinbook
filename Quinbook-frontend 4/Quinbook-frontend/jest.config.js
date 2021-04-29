module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
  '^.+\\.vue$': 'vue-jest',
  '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
  '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/components/*.{js,vue}'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  coverageReporters: ['lcov', 'text'],
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/test/unit/**/*.spec.(js|jsx|ts|tsx)|**/__test__/*.(js|jsx|ts|tsx)'],
  testURL: 'http://localhost/',
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']

}
