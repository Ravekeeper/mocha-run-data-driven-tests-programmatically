const axios = require('axios');
const dataUrl = 'https://raw.githubusercontent.com/LearnWebCode/json-example/master/animals-3.json';

axios
    .get(dataUrl)
    .then(data => {
        const array = data.data;
        array.forEach(element => {
            describe(`Data-driven tests - ${element.name}`, async () =>{
                it(`${element.name}`, async () => {
                    console.log(JSON.stringify(element, null, 2));
                });
            });
        });
    });