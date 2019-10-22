exports.config = {
    framework: 'jasmine',
    timeoutInterval: 10000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['InviaQA_spec.js'],
    capabilities: {
        'browserName': 'chrome',
    }
}