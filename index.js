const inquirer = require('inquirer');
const fs = require('fs'); 

inquirer.prompt([
    {
        name: 'file_name',
        message: 'what would you like the file name to be?'
    },
    {
        name: 'content',
        message: 'what content would you like to add to the file?'
    }
]).then(data => {
    fs.writeFile(data.file_name + '.txt',data.content, (err) => {
        if (err) return console.log(err);
        
        console.log(`you have successfully created ${data.file_name} file`);
        console.log(`the content of the file are; \n ${data.content}`)
    });
});