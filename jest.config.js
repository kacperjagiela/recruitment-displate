module.exports = {
    clearMocks: true,
    coverageProvider: 'v8',
    testEnvironment: 'jest-environment-jsdom',
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    collectCoverageFrom: ['<rootDir>/src/components/**/*.tsx'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
