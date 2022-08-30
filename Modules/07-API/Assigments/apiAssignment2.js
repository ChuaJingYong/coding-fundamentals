// Octokit.js

// https://github.com/octokit/core.js#readme
// const octokit = new Octokit({
//     auth: 'personal-access-token123'
//   })
  
// async function startGitHubAuth(){
//     await octokit.request('GET /user', {yapyeeqiang})
// }

const API_URL = "https://api.github.com/users/"
const getUserBtn = document.querySelector('#get-user-button')
const usernameInput = document.querySelector('#username-input')

// Have a click event listener
getUserBtn.addEventListener("click",()=>{
    const usernameInput = document.querySelector('#username-input')
    console.log(usernameInput.value)
    getUser(usernameInput.value)
})

// Have an enter button event listener
usernameInput.addEventListener('keypress',(e)=>{
    // e.preventDefault()
    if (e.key === 'Enter'){
        const usernameInput = document.querySelector('#username-input')
        console.log(usernameInput.value)
        getUser(usernameInput.value)
    }
})
function getUser(username){
    getAPI(username)
        .then((data)=>{
            printUser(data)
        })
        .catch(error => console.log(error)) 
}

async function getAPI (username){
    let response = await fetch(API_URL + username)
    let data = await response.json()
    console.log(data)
    return data
}

function printUser(data){
    
    const userName = document.querySelector('#username')
    const userDescription = document.querySelector('#user-description')
    const userDate = document.querySelector('#user-date')
    const monthRef = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    
    // extract the starting date, month, and year
    let date = new Date(data.created_at)
    let day = date.getDate()
    // Use object key value to get the right month (e.g. MonthRef[0] = 'January')
    let month = monthRef[date.getMonth()]
    let year = date.getFullYear()

    // Insert the image
    const userImageContainer = document.querySelector('.user-image-container')
    // check if it's first time creating image, or if second time onwards, update image instead
    // if first time, there should be no child nodes under the user-image-container parent. If second time onwards, should have 1 child node, which is the previous image file we created
    console.log('child count',userImageContainer.childElementCount)
    // Use a ternary operator to check for a binary true or false case when checking if the condition childElementCount<0
    userImageContainer.childElementCount === 0? createImage(userImageContainer, data): updateImage(userImageContainer, data)

    // Update the details
    userName.innerHTML = data.name
    userDescription.innerHTML = data.bio
    userDate.innerHTML = `Joined at: ${day} ${month} ${year}`
}

function createImage(userImageContainer, data){
    console.log(userImageContainer)
    let userImage = document.createElement('img')
    userImage.src = data.avatar_url
    userImage.style.borderRadius = '50%'
    userImageContainer.appendChild(userImage)
}

function updateImage(containerRef, data){
    console.log(containerRef)
    let userImage = containerRef.querySelector('img')
    userImage.src = data.avatar_url
}
// window.onload = function(){getUser('chuajingyong')}