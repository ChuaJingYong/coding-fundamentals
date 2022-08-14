// Add eventlistener to the button
// Add in the class "show" where it has translateX(0) to get it back to normal position
// add eventlistener to the close button
// toggle off the notification

const addButton = document.querySelector('.add__button')
const closeButton = document.querySelector('.cta__button')
const notification = document.querySelector('.notification')

addButton.addEventListener('click',showNotification)

function showNotification(){
    notification.classList.add("show")
}

closeButton.addEventListener("click",hideNotification)
function hideNotification(){
    notification.classList.remove("show")
}