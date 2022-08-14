// Select the header element
                
// Event listener: Mouse move                
// When user hovers around the top area, show the header                
                
// Event listener: Scroll                
// When user scroll after a certain height, hide the header, else show the header

// const header = document.querySelector('body')

// // header.classList.add('hidden')

// header.addEventListener('scroll',e=>{
//     console.log(e)
//     console.log(e.clientY)
//     console.log(window.scrollY)
//     let body = document.querySelector('body')
//     console.log("top ",body.scrollTop)
//     // if (e.clientY == 80){
//     //     const body = document.querySelector('body')
//     //     console.log("YOOO")
//     //     body.scroll({
//     //         top: 2146,
//     //         left: 10,
//     //         behavior: 'smooth'
//     //       });
//     // }
// })



// Select the header element
                
// Event listener: Mouse move                
// When user hovers around the top area, show the header                
                
// Event listener: Scroll                
// When user scroll after a certain height, hide the header, else show the header

const header = document.querySelector('.header')
document.addEventListener('mousemove',e=>{
    console.log(e)
})


document.addEventListener('scroll',hideNavigation)

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

// check if the scrollY value is greater than 200 using an event listener
// Once greater than 200, run the function to hide the notification once and remove the event listener

// Movement XY checks for the acceleration/speed
// clientX/Y and x, y both give coordinates of the mouse relative to the current view of the screen
// offset XY and page XY tells the coordinates relative to the whole page
// Meanwhile screen XY I have no idea wha'ts going on