const allure = require('allure-commandline');

exports.config = {
    runner: 'local',
    maxInstances: 10,
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-reports',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false
    }]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, {error, result, duration, passed, retries}) {
        if (error) {
            await driver.takeScreenshot();
        }
    },
    onComplete: function (exitCode, config, capabilities, results) {
        const reportError = new Error('Could not generate Allure report');
        const generation = allure(['generate', 'allure-reports', '--clean']);
        
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000
            );

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout);

                if(exitCode != 0) {
                    return reject(reportError);
                }

                console.log('Allure report successfully generated');
                resolve();
            });
        });
    }
}