/* 

loop through images and
insert img element inside .thumb-bar

attach an onclick handler to each img inside the .thumb-bar-when clicked that image displayed into .displayed-img

attach an onclick handlr to the button
response: darken effect is applied to full-size image. when clicked again remove the darken effet. 
*/


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (i = 1; i <= 5; i++){
    // create new img tag and returns its reference object
    const newImage = document.createElement('img');
    // give img tag its src attr value
    newImage.setAttribute('src', `pic${i}.jpg`);
    //insert new image into div .thumbbar
    thumbBar.appendChild(newImage);
}

//add event listener to parent div .thumbnail for bubbling phase to work, but stop any other bubbling/checking phases
thumbBar.addEventListener('click',function(e){
    const newImage = e.target;
    displayedImage.setAttribute('src',newImage.src);
    console.log(displayedImage.src);
    e.stopPropagation();
});


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',function(e){

    if (btn.getAttribute('class') === 'dark'){
        //darken when clicked
        btn.setAttribute('class','light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(52,14,69,0.519)';
        e.stopPropagation();
    }else if (btn.getAttribute('class') === 'light'){
        //when clicked again
        btn.setAttribute('class','dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        e.stopPropagation();
    }
});



