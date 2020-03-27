const axios = require('axios');
const dataUrl = 'https://raw.githubusercontent.com/LearnWebCode/json-example/master/animals-3.json';

describe('Plain tests', async () => {
    it('Test 1', async () => {
        const data = await axios.get(dataUrl);
        const array = data.data;
        array.forEach(element => {
            console.log(JSON.stringify(element, null, 2));
        })
    });
});