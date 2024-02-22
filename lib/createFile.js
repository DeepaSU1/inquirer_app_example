

//eg 3 (moved from index eg 3)  this code is from index.js & moved to promptUser.js & then moved into createFile.js
// const fs = require('fs'); //this is used to write new input into the file

// fs.writeFile(data.file_name + '.txt', data.content, (err) => {
//     if (err) return console.log(err); //if there is an error, we get that as the first argument. if i want to stop, use return to break the loop.current trend is to avoid else stmt. 
//     console.log(`You have successfully created the ${data.file_name} file`);
//     console.log(`the contents of the file are:\n${data.content}`);
// });




//eg 7 this function is going to receive data from our inquirer prompt
// const fs = require('fs');

// function createFile(data) {
//     const fs = require('fs');
//     fs.writeFile(data.file_name + '.txt', data.content, (err) => {
//         if (err) return console.log(err); 
//         console.log(`You have successfully created the ${data.file_name} file`);
//     console.log(`the contents of the file are:\n${data.content}`);
// });
// }

// module.exports = createFile; //reference our function name




//eg 9 we need to cycle the app - when finish creating 1 file, the app ask for do you want to create another file - if yes it continues - if no it stops
const fs = require('fs').promises; 
//so create file is being pulled in right here through our regime, create file is called the data from our prompts is passed through. we have,  promise, being used. so instead of a call back what we're doing instead is we are returning a promise object. 

function createFile(data) { //so we write a file with that data. 
    
    return fs.writeFile(data.file_name + '.txt', data.content) //once this complete right here.
    .then(() => { 
        // we call , it console log - this is called when the file creation is done because we are returning that promise object chain or returning the chain
        console.log(`You have successfully created the ${data.file_name} file`);
        console.log(`the contents of the file are:\n${data.content}`);
});
}

module.exports = createFile;




// const fs = require('fs'); 

// function createFile(data) {
//     fs.writeFile(data.file_name + '.md',data.content, (err) => {
//         if (err) return console.log(err);
        
//         console.log(`you have successfully created ${data.file_name} file`);
//         console.log(`the content of the file are; \n ${data.content}`)
//     });
// }

// module.exports = createFile;



// fs.writeFile(data.file_name + '.txt',data.content, (err) => {
//     if (err) return console.log(err);
    
//     console.log(`you have successfully created ${data.file_name} file`);
//     console.log(`the content of the file are; \n ${data.content}`)
// });
