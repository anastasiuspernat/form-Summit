/**
 * Jest configuration file
 * It's mostly needed to enable TypeScript support with ts-jest and supply a custom tsconfig file
 */
module.exports = {
    "testEnvironment": "jsdom",
    testPathIgnorePatterns: ["/node_modules/", "/.next/", "/.history/"],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            // required due to custom location of tsconfig.json configuration file
            // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig
            {
                tsconfig: 'tsconfig.jest.json'
            },
        ],
    }
};