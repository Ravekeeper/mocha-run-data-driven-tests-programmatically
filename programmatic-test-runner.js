const mocha = require('mocha');
const fs = require('fs');
const path = require('path');


const mochaInstance = new mocha();
const testDir = './test';

fs
    .readdirSync(testDir)
    .filter((file) => {
        return file.substr(-3) === '.js';
    }).forEach((file) => {
        mochaInstance.addFile(
            path.join(testDir, file)
        );
    });

mochaInstance.loadFiles(() => {
    mochaInstance.suite.eachTest((test) => {
        console.log(`Loaded test = ${test.file}`);
    })
});

mochaInstance
    .loadFilesAsync()
    .then(() => {
        mochaInstance.suite.eachTest((test) => {
            console.log(`Loaded async test = ${test.file}`);
        });
    });

mochaInstance.run();
