const fetchButton = document.querySelector('#fetch-data')

fetchButton.addEventListener('click',()=>{
    getUserData()
})

/* <script src="https://gist.github.com/ChuaJingYong/d618d78832f14460824b23c0bdfd1296.js"></script> */
const API_URL = 'https://api.github.com/gists/d618d78832f14460824b23c0bdfd1296'

async function getUserData(){
    let response = await fetch(API_URL)
    console.log(response)
    let data = await response.json()
    console.log(data)

    let userDetailString = data.files["me2.json"].content
    console.log(userDetailString)
    console.log(typeof(userDetailString))

    // both JSON.parse() and .json() both converts a JSON in string form back into JSON object. 
    // This is because when recieving data from a web server, the data is always a string
    // The difference is one is for synchronous (.parse), while the other is an asynchronous function
    let userDetailJSON = JSON.parse(userDetailString)
    console.log(userDetailJSON)

    let name = userDetailJSON.name
    let age = userDetailJSON.age
    let hobbies = userDetailJSON.hobbies

    let docUsername = document.querySelector('#username')
    let docAge = document.querySelector('#age')
    let docHobbies = document.querySelector('#hobbies')

    // set the DOM elements
    docUsername.innerHTML = name
    docAge.innerHTML = `Age: ${age}`
    // loop through each of the hobbies found and add append it as new list under the ul
    
    hobbies.forEach((hobby)=>{
        console.log(hobby)
        let listItem = document.createElement('li')
        listItem.innerHTML = hobby
        docHobbies.appendChild(listItem)
    })
}

// // need to revisit this Octo method with Yee Qiang
// import { Octokit } from "@octokit/core";

// async function getUserDataOctoMethod (){
//     const PERSONAL_ACCESS_TOKEN = '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'

//     const octokit = new Octokit({
//         auth: PERSONAL_ACCESS_TOKEN,
//     });
//     console.log('octokit',octokit)

//     const { data } = await octokit.request("/user");
//     console.log({data})
// }


