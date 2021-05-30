//you are given an csv file with some data
// you need to filter out the data (filter can be base on lastname, gender, etc)

const fs = require('fs');
const csv = require('csv-parser');

let data = [];
fs.createReadStream('MOCK_DATA.csv')
    .pipe(csv())
    .on('data', (rows) => {
        data.push(rows);
    }).on('end', () => {


        const result = data.filter((row) => {
            return row.gender == 'Female' || row.gender == 'Male'
        })
        console.table(result);
    })