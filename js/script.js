const preloader = document.querySelector('.preloader');
const content = document.querySelector('.loader');
window.onload = function() {
    preloader.style.display = 'none';
      content.style.opacity = 1;
    // Simulate loading time with setTimeout
    // setTimeout(function() {
    //   preloader.style.display = 'none';
    //   content.style.opacity = 1;
    // }, 60000); 
  };
  
document.querySelector(".preloader_close").addEventListener('click',()=>{
  preloader.style.display = 'none';
  content.style.opacity = 1;
})
  


// >>>>>>>>>>>>>>>>>.line breakup>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(timelineItem => {
  timelineItem.addEventListener('click', event => {
    const clickedText = event.target.closest('.timeline-text');  // Find clicked paragraph
    if (clickedText) {  // Check if a paragraph was clicked
      clickedText.classList.toggle('expanded');
    }
  });
});

// >>>>>>>>>>>>>>>>>>>>>>>>>linebreak>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

  

var typed=new Typed(".typing" ,{
    strings:["","Web Designer" , "web Developer","Website Maintainer","Digital Marketer","Wordpress Developer","Shopify Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


const nav=document.querySelector(".nav"),
        navlist=nav.querySelectorAll("li"),
        totallist=navlist.length,
        allsection=document.querySelectorAll(".section"),
        totalsection=allsection.length;
        for(let i=0;i<totallist;i++){
            // console.log(navlist[i].innerHTML);
            const a=navlist[i].querySelector("a");
            a.addEventListener('click',function(){
                for(let i=0;i<totalsection;i++){
                    allsection[i].classList.remove("back-section");
                   }
                for(let j=0;j<totallist;j++){

                    if(navlist[j].querySelector("a").classList.contains("active")){
                        // console.log("back-section"+navlist[j].querySelector("a"));
                        allsection[j].classList.add("back-section");
                    }
                    navlist[j].querySelector("a").classList.remove("active");
                   
                }
                this.classList.add("active");
                showsection(this);
                if(window.innerWidth<1310){
                    asidesectiontogglerbtn();
                }
            })
        }
 
function showsection(element){
    for(let i=0;i<totalsection;i++){
     allsection[i].classList.remove("active");
    }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
}

const navtoggler=document.querySelector(".nav-toggler"),
    aside=document.querySelector(".aside"),
    main_content_toggler=document.querySelector(".main-content");
navtoggler.addEventListener("click",()=>{
   asidesectiontogglerbtn();
})

function asidesectiontogglerbtn(){
    aside.classList.toggle("open");
    navtoggler.classList.toggle("open");
    for(let i=0;i<totalsection;i++){
        allsection[i].classList.toggle("open");
    }
    
    main_content_toggler.addEventListener("click",()=>{
        navtoggler.classList.remove("open");
        aside.classList.remove("open");
        for(let i=0;i<totalsection;i++){
            allsection[i].classList.remove("open");
        }
    })
    
}



//   >>>>>>>>>>>>>>>>>>>>>>>>.popup>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const popup = document.getElementById('call-us-popup');
const closeButton = document.getElementById('close-popup');
const cancelButton = document.getElementById('cancel-popup');

closeButton.addEventListener('click', function() {
  window.location.href = "tel:8349627710"; //
});

setTimeout(function() {
  popup.classList.add('active');
}, 60000);

let popupShown = false; // 

cancelButton.addEventListener('click', function() {
  popup.classList.remove('active');

  
  if (!popupShown) {
    setTimeout(function() {
      popup.classList.add('active');
      popupShown = true; 
    }, 600000);
  }
});

closeButton.addEventListener('click', function() {
  popup.classList.remove('active');
});


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>form>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>?

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById('statusMessage').textContent = 'Thanks for your submission!';
            setTimeout(() => {
                document.getElementById('statusMessage').textContent = '';
            }, 10000); // 10000 milliseconds = 10 seconds
            form.reset();
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    document.getElementById('statusMessage').textContent = data['errors'].map(error => error['message']).join(', ');
                } else {
                    document.getElementById('statusMessage').textContent = 'Oops! There was a problem submitting your form.';
                }
            });
        }
    }).catch(error => {
        document.getElementById('statusMessage').textContent = 'Oops! There was a problem submitting your form.';
    });
});


// >>>>>>>>>>>>>>>>>whatsapp????????>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const whatsappLink = document.getElementById('whatsapp-link');

whatsappLink.addEventListener('click', function(event) {
  event.preventDefault(); 
  const yourWhatsappNumber = '+918349627710'; 
  const message = 'Hello Pixify! I have a question from your Services.'; 

  const encodedMessage = encodeURI(message); 
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    window.location.href = `whatsapp://send?phone=${yourWhatsappNumber}&text=${encodedMessage}`;
  } else {
    window.open(`https://wa.me/${yourWhatsappNumber}?text=${encodedMessage}`, '_blank');
  }
});

