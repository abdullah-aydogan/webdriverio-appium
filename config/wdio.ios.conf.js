const path = require('path');
const { config } = require('./wdio.shared.conf');

config.port = 4723;

config.specs = [
    '../test/specs/ios/ios-todo-item-screen*.js'
];

config.capabilities = [
    {
        'appium:platformName': 'iOS',
        'appium:platformVersion': '26.5',
        'appium:deviceName': 'iPhone 17',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), 'app/ios/MVCTodo.app')
    }
];

config.services = ['appium'];

exports.config = config;