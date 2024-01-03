const fs = require('fs/promises');
const path= "./users.json"

fs.readFile(path,{encoding: 'utf-8'})
  .then((data) => {
    // Do something with the data
    console.log(data)
  })
  .catch((error) => {
    // Do something if error 
    console.log(error)
  });