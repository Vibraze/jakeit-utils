module.exports = {
    testEnvironment: 'jsdom',
    setupFiles:['<rootDir>/jest-shim.js'],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy'
    }
};
