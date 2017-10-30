const fs = require('fs');
const _ = require('lodash');

function generateJS(components) {
    console.log('******* in generateJS');
    let componentString = '';
    _.map(components, (each) => {
        switch (each.type) {
            case 'button':
                componentString = componentString + '<Button id="' + each.id + '" />';
                break;
            case 'inputText':
                componentString = componentString + '<InputText id="' + each.id + '" />';
                break;
            default:
                break;
        }
    });

    let templateFile = fs.readFile('./src/template/index.js', 'utf8', (err, data) => {
        if (err) console.log('****error: ', err);
        else {
            let updatedFileData = data.replace('<div></div>', '<div>' + componentString + '</div>');
            console.log('***** fileData: ', beautify(updatedFileData, { indent_size: 2 }));
            fs.appendFile('sample.js', updatedFileData, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        }
    })
};

module.exports = {
    generateJS
};