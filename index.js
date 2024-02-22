

//eg 1
// const inquirer = require('inquirer'); //inquirer package gives you back object 

// inquirer.prompt([
//     {
//         name: 'file_name',
//                 message: 'what would you like the file name to be?'
//             },
//             {
//                 name: 'content',
//                 message: 'what content would you like to add to the file?'
//     }
// ]).then(data => {
//             console.log(data); //need to check the terminal - 
// }); 



//eg 2 to generate a file - write a file
// const inquirer = require('inquirer'); //inquirer package gives you back object 
// const fs = require('fs');

// inquirer.prompt([
//     {
//         name: 'file_name',
//                 message: 'what would you like the file name to be?'
//             },
//             {
//                 name: 'content',
//                 message: 'what content would you like to add to the file?'
//     }
// ]).then(data => { //data has 2 property name & message
//     fs.writeFile(data.file_name + '.txt', data.content, (err) => {
//                 if (err) return console.log(err); //if there is an error, we get that as the first argument. if i want to stop, use return to break the loop.current trend is to avoid else stmt. 
//                 console.log(`You have successfully created the ${data.file_name} file`);
//                 console.log(`the contents of the file are:\n${data.content}`);
//     });
// }); 




//eg 3
// const inquirer = require('inquirer'); //inquirer package gives you back object 
// const fs = require('fs');
//line 25 to 40 prompt is copied into promptUser.js




//eg 4 we need to share the files in our own folder - so we use require 
// const theStr = require('./lib/promptUser.js');

// console.log(theStr); // we're sharing the value not the variable name - variable name can be different



//eg 5 
// const infoObj = require('./lib/promptUser.js');

// console.log(infoObj);// we're sharing the value not the variable name - variable name can be different - sharing the object in promptUser.js & pulling the object in the index.js throught require in index.js & export in promputUser



//eg 5.1
// const infoObj = require('./lib/promptUser.js');

// console.log(infoObj.myStr); //pomptUser - info we have a property myStr



//eg 6 we can function can be shared
// const promptUser = require('./lib/promptUser');
// const pu = require('./lib/promptUser');

// pu();



//eg 7 
// const promptUser = require('./lib/promptUser'); //this or next line
// const pu = require('./lib/promptUser');

// pu();



//eg 8

// const prompts = require('./lib/promptUser');

// // console.log(prompts); //to check whether it works

// prompts.cyclePrompt();//this will begin the process - to run yes, blah, yes - blah file is created




//eg 9 we need to cycle the app - when finish creating 1 file, the app ask for do you want to create another file - if yes it continues - if no it stops
const prompts = require('./lib/promptUser');

prompts.cyclePrompt();




// const promptUser = require('./lib/promptUser');
// const prompts = require('./lib/promptUser');

// // console.log(prompts);
// prompts.cyclePrompt();


// const pu = require('./lib/promptUser');
// pu();


// const infObj = require('./lib/promptUser');
// console.log(infObj);


// const strObj = require('./lib/promptUser.js');
// console.log(strObj);


// const inquirer = require('inquirer');
// const fs = require('fs');
// inquirer.prompt([
//     {
//         name: 'file_name',
//         message: 'what would you like the file name to be?'
//     },
//     {
//         name: 'content',
//         message: 'what content would you like to add to the file?'
//     }
//     // ]).then(data => {
//     //     console.log(data);
//     // above just print the data 
// ]).then(dataa => {
//     fs.writeFile(dataa.file_name + '.txt', dataa.content, (err) => {
//         if (err) return console.log(err);
//         console.log(`You have successfully created the ${dataa.file_name} file`);
//         console.log(`the contents of the file are \n${dataa.content}`);
//     });
// });
