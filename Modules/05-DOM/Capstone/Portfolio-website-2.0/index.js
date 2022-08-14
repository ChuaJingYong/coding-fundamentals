// Select the header element
                
// Event listener: Mouse move                
// When user hovers around the top area, show the header                
                
// Event listener: Scroll                
// When user scroll after a certain height, hide the header, else show the header

const header = document.querySelector('.header')
document.addEventListener('mousemove',e=>{
    // console.log(e)
    if (e.clientY <=100){
        header.classList.remove('hidden')
    } else{
        header.classList.add('hidden')
    }
    
})

document.addEventListener('scroll',showNavigation)

function hideNavigation(){
    console.log('hide',window.scrollY)
    let isScrollYLargerThan200 = window.scrollY>199? true:false
    if(isScrollYLargerThan200){
        header.classList.add('hidden')
        document.removeEventListener('scroll',hideNavigation)
        document.addEventListener('scroll',showNavigation)
    }
}

// document.addEventListener('scroll',showNavigation)
function showNavigation(){
    console.log('show',window.scrollY)
    let isScrollYLesserThan200 = window.scrollY<50? true:false
    if(isScrollYLesserThan200){
        header.classList.remove('hidden')
        document.removeEventListener('scroll',showNavigation)
        document.addEventListener('scroll',hideNavigation)
    }
}

/* <label for="inputText"></label>
            <input type="text" id="inputText" name="inputText">
            <button id="nameButton">Change Name</button> */


// check if the scrollY value is greater than 200 using an event listener
// Once greater than 200, run the function to hide the notification once and remove the event listener

// Movement XY checks for the acceleration/speed
// clientX/Y and x, y both give coordinates of the mouse relative to the current view of the screen
// offset XY and page XY tells the coordinates relative to the whole page
// Meanwhile screen XY I have no idea wha'ts going on