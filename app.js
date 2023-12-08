// app.js

const readline = require('readline');
const emailConverter = require('./emailConverter');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter an email: ', (inputEmail) => {
    const jsonOutput = emailConverter(inputEmail);
    console.log(jsonOutput);
    rl.close();
});


function httpGetAsync(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
         callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true);
                  xmlHttp.send(null);
    }

    const url = "https://emailvalidation.abstractapi.com/v1/?api_key=YOUR_API_KEY&email=eric@abstractapi.com"

    httpGetAsync(url)


    function getemail(){
        
    }
