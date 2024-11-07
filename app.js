const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const slider = document.querySelector('.slider')
const sliderList = slider.querySelector('.slider .list')
const thumbnail = document.querySelector('.slider .thumbnail')
const thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}



// submitting form
document.addEventListener('DOMContentLoaded',()=>{
    const form = document.querySelectorAll('form');


console.log(form);
form.forEach((submitForm)=>{
submitForm.addEventListener('submit',(e)=>{
   e.preventDefault();
   fetch(submitForm.action, {
      method: submitForm.method,
      body: new FormData(submitForm),
      headers: {
          'Accept': 'application/json'
      }
  })
  .then(response => {
      if (response.ok) {
     
        stopScroll.style.overflow='scroll'
        formBg.style.zIndex=-10;
        submitForm.style.display='none',
          alert('Form submitted successfully!');
          submitForm.reset(); // Clear input fields
      } else {
          alert('There was a problem with your submission.');
      }
  })
  .catch(error => {
      console.error('Error:', error);
      alert('There was a problem with your submission.');
  });
});
})
const menu = document.querySelector(".nav .fa-bars");
const sideMenu =document.querySelector(".side-bar");

menu.addEventListener('click',()=>{

    sideMenu.classList.toggle('block')
})
})



let anchors =document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor=>{
  anchor.addEventListener('click',function(e) {
    e.preventDefault();


    const sectionId = anchor.getAttribute('href').substring(1); 
    const section = document.getElementById(sectionId); 
    
    if (section) {
      const offsetTop = section.offsetTop; 
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth' 
      })
    }

  }
  )


});



const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-info a');
// const menuItems = document.querySelectorAll('.side-menu .part');

const activateNav = () => {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navItems.forEach((item) => item.classList.remove('active'));
    // navItems[index].classList.add('active');
    // menuItems.forEach((item) => item.classList.remove('sideborder'));
    // menuItems[index].classList.add('sideborder');
};

window.addEventListener('scroll', activateNav);
// book using click

const bookClass =  document.querySelector('.book');
const form = document.querySelector('.loadform');
const stopScroll = document.querySelector('body');
const formBg =document.querySelector('.form-bg');

bookClass.addEventListener('click',()=>{

// const html = `<div class="loadform">
//       <div class="modal-body p-5 pt-0">
//          <header class="book-heading">
//          <h1 style="color:black;
//          margin: 20px;">Book a Trial</h1>
//          <i class="fa-solid fa-xmark"></i>
//       </header>
//          <form class="bookclass" action="https://formspree.io/f/xjkbngll" method="post" >
//            <div class="form-floating mb-3">
//              <input type="text" class="form-control rounded-3" id="floatingInput" placeholder="Enter Name"
//              style="color: black;"
//              name="name" required/>
//              <label for="floatingInput"
//             style="color: black;"
//              >Enter Name</label>
//            </div>
//            <div class="form-floating mb-3">
//              <input type="text" class="form-control rounded-3" id="floatingPassword" placeholder="Number"
//              name="number" required/>
//              <label for="floatingPassword"
//              style="color: black;"
//              >Mobile No.</label>
//            </div>
//            <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Book</button>
//            <small class="text-body-secondary">By clicking Book, you agree to the terms of use.</small>
           
//          </form>
//        </div>

// </div> `

// const insert = document.querySelector('#Home');

// insert.insertAdjacentHTML('beforeend',html)



form.style.display='block',
stopScroll.style.overflow='hidden'
formBg.style.zIndex=10;
})

const cancel = document.querySelector('.fa-xmark');

cancel.addEventListener('click',()=>{
    form.style.display='none',
stopScroll.style.overflow='scroll'
formBg.style.zIndex=-10;
})


window.onload = function() {
    const header = document.querySelector('.containers');
    const content = document.querySelector('.any');
    content.style.marginTop = `${header.offsetHeight+100}px`


    form.style.display='block',
stopScroll.style.overflow='hidden'
formBg.style.zIndex=10;
};