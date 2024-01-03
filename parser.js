const fs = require('fs/promises');
const path = "./users.json"

fs.readFile(path, { encoding: 'utf-8' })
    .then((data) => {
        const users = JSON.parse(data)
        // Do something with the data
        const filteredusers = users.filter(user => {
            return user.website.includes(".info")
        })

        const mapptuser = filteredusers.map(user => {
            return {
                Phone: user.phone, email: user.email, Username: user.username
            }
        })
        console.log(mapptuser)
        let csv ="Phone,email,Username\n"
        mapptuser.forEach(element => {
            csv=csv+element.Phone+","+element.email+","+element.Username+"\n"         
        });
        console.log(csv)
        fs.writeFile("users.csv",csv)
    })
    .catch((error) => {
        // Do something if error 
        console.log(error)
    });