require('dotenv').config();
const { config } = require('./wdio.shared.conf');

config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

config.specs = [
    '../test/specs/android/add-note-screen*.js'
];

config.capabilities = [
    {
        'platformName': 'android',
        'appium:platformVersion': '12.0',
        'appium:deviceName': 'Google Pixel 6',
        'appium:automationName': 'UiAutomator2',
        'appium:app': "bs://14b91c949f72e9b8b5d286d5d489fbc6174971d4",
        'appium:autoGrantPermissions': true
    }
];

config.services = ['browserstack'];

exports.config = config;