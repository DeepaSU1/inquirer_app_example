

//eg 3 (moved from index eg 3) 1st step whole code line 3 to 19 is moved from index.js
// const inquirer = require('inquirer'); 

// inquirer.prompt([
//     {
//         name: 'file_name',
//                 message: 'what would you like the file name to be?'
//             },
//             {
//                 name: 'content',
//                 message: 'what content would you like to add to the file?'
//     }
// ]).then(data => { //data has 2 property name & message - line 14 to 18 is moved to createFile.js (eg 2 or step 2)
// fs.writeFile(data.file_name + '.txt', data.content, (err) => {
//             if (err) return console.log(err); //if there is an error, we get that as the first argument. if i want to stop, use return to break the loop.current trend is to avoid else stmt. 
//             console.log(`You have successfully created the ${data.file_name} file`);
//             console.log(`the contents of the file are:\n${data.content}`);
// });
// }); 




//eg 4
// const inquirer = require('inquirer');

// const str = 'some string';

// module.exports = str; //there is an object built in just like global & process called module.this object used to do sharing. on that object there is this exports called property. you set equal to that value. through node.js you can then pull that shared value in through a require. 



//eg5 you add many values in the file using object
// const inquirer = require('inquirer');

// const str = 'some string';
// const info = {
//     myStr: str,
//     name: 'JD'
// };
// module.exports = info;// it exports both str & info



//eg 6 you are sharing whole code block - when you share something from a file, any other file can require it, & pull it in, & its it makes this easy connection between all of your files - you can start breaking it up , its such a powerful tool - node is essence, modularizing, splitting tasks into separate files.
// const inquirer = require('inquirer');

// function promptUser() {
// inquirer.prompt([
//         {
//             name: 'file_name',
//                     message: 'what would you like the file name to be?'
//                 },
//                 {
//                     name: 'content',
//                     message: 'what content would you like to add to the file?'
//         }
//     ]).then(data => {

//     }); 
// }
// module.exports = promptUser; //referencing the function value or the block



//eg  7
// const inquirer = require('inquirer');
// const createFile = require('./createFile.js'); //pulling the function from create file -  createFile

// function promptUser() {
//     inquirer.prompt([
//         {
//             name: 'file_name',
//             message: 'what would you like the file name to be?'
//         },
//         {
//             name: 'content',
//             message: 'what content would you like to add to the file?'
//         }
//     ]).then(createFile);  //promts are called & send to createFile to write the data & data is passed to our function - no need of anonymous function - we used a named function (createFile)
// }
// module.exports = promptUser;



// eg 8
// const inquirer = require('inquirer');
// const createFile = require('./createFile.js');

// function cyclePrompt() {
//     console.log('-------Welcome to the file gen app!----------');
//     inquirer.prompt([
//         {
//             type: 'confirm',
//             name: 'choice',
//             message: 'would you like to generate a file? '
//         }
//     ]).then(data => {
//     //    console.log(data); //to check 
//         if (data.choice) {
//           return promptUser();
//         } 
//         console.log('Thanks for using our App!\n-----------');
//     });
// }

// function promptUser() {
//     console.log('------------------');
//     inquirer.prompt([
//         {
//             name: 'file_name',
//             message: 'what would you like the file name to be?'
//         },
//         {
//             name: 'content',
//             message: 'what content would you like to add to the file?'
//         }
//     ]).then(createFile);

// }

// module.exports = {
//     cyclePrompt: cyclePrompt, //cyclePrompt has method set that to cyclePrompt function above because methods are functions & functions are methods
//     promptUser: promptUser
// };



//eg 9 we need to cycle the app - when finish creating 1 file, the app ask for do you want to create another file - if yes it continues - if no it stops
const inquirer = require('inquirer');
const createFile = require('./createFile.js');

function cyclePrompt() {
    console.log('-------Welcome to the file gen app!----------');
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'choice',
            message: 'would you like to generate a file? '
        }
    ]).then(data => {
    //    console.log(data); //to check 
        if (data.choice) {
          return promptUser();
        } 
        console.log('Thanks for using our App!\n-----------');
    });
}

function promptUser() {
    console.log('------------------');
    inquirer.prompt([
        {
            name: 'file_name',
            message: 'what would you like the file name to be?'
        },
        {
            name: 'content',
            message: 'what content would you like to add to the file?'
        }
    ]).then(createFile) //create a file &  createFile is called & .then cyclePrompt is triggered 
    .then(cyclePrompt);

}

module.exports = {
    cyclePrompt: cyclePrompt, //cyclePrompt has method set that to cyclePrompt function above because methods are functions & functions are methods
    promptUser: promptUser
};






// function cyclePrompt() {
//     console.log('-------Welcome to the file gen app!----------');
//     inquirer.prompt([
//         {
//             type: 'confirm',
//             name: 'choice',
//             message: 'would you like to generate a file? '
//         }
//     ]).then(data => {
//         // console.log(data);
//         if (data.choice) {
//             return promptUser();
//         }
//         console.log('Thanks for using our App!\n-----------');
//     });
// }

// function promptUser() {
//     console.log('------------------');
//     inquirer.prompt([
//         {
//             name: 'file_name',
//             message: 'what would you like the file name to be?'
//         },
//         {
//             name: 'content',
//             message: 'what content would you like to add to the file?'
//         },
//         {
//             name: 'Installation',
//             message: 'Describe the steps required to install your project for the installation.'
//         },
//         {
//             name: 'Usage',
//             message: 'Provide instructions of your project in use for the Usage.'
//         },
//         {
//             name: 'Contributing',
//             message: 'Provide guidelines on how other developers can contribute to your project.'
//         },
//         {
//             name: 'Tests',
//             message: 'Provide any tests written for your application and provide examples on how to run them.'
//         }
//     ]).then(createFile);

// }

// module.exports = promptUser;

// module.exports = {
//     cyclePrompt: cyclePrompt,
//     promptUser: promptUser
// };
// .then(data => {


// });