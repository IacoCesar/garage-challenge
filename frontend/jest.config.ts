// module.exports = {
//   verbose: false,
//   preset: 'jest-expo',
//   collectCoverage: false,
//   setupFilesAfterEnv: ['<rootDir>/setup/jest.setup.js'],
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
//   // transform: { '^.+\\.tsx?$': 'ts-jest' },
//   transformIgnorePatterns: [
//     'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)'
//   ],
//   globals: {
//     __DEV__: true
//   },
//   testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
//   moduleDirectories: ['node_modules'],
//   testEnvironment: 'node',
//   isolatedModules: true
// }

import { Config } from '@jest/types'

const untranspiledModulePatterns = [
  '((jest-)?react-native',
  '@react-native(-community)?)',
  'expo(nent)?',
  '@expo(nent)?/.*',
  '@expo-google-fonts/.*',
  'react-navigation',
  '@react-navigation/.*',
  '@unimodules/.*',
  'unimodules',
  'sentry-expo',
  'native-base',
  'react-native-svg'
]

const config: Config.InitialOptions = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['<rootDir>/setup/jest.setup.js'],
  transformIgnorePatterns: [
    `node_modules/(?!${untranspiledModulePatterns.join('|')})`
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx']
}

export default config
