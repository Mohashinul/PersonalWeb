/*============================== Menu Show Y Hidden =============================================*/
var navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
	navClose = document.getElementById('nav_close')
	
/*=============== Menu Show ==================*/
if (navToggle){
	navToggle.addEventListener('click', () =>{
	 navMenu.classList.add('show-menu')	
	})
}	
/*============== Menu Hidden ===================*/	
if (navClose){
	navClose.addEventListener('click', () =>{
	 navMenu.classList.remove('show-menu')	
	})
}	
/*===================== Remove Menu Mobile ====================*/
var navLink = document.querySelectorAll('.nav_link')	

function linkAction(){
	 navMenu = document.getElementById('nav_menu')
	 navMenu.classList.remove('show-menu')
}	
navLink.forEach(x => x.addEventListener('click',linkAction))
	
/*===================== Accordion Skills =====================*/	
var skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')	

function toggleSkills(){
	var itemClass = this.parentNode.className
	for(y = 0; y < skillsContent.length; y++){
		skillsContent[y].className = 'skills_content skills_close'
	}
	if(itemClass === 'skills_content skills_close'){
		this.parentNode.className = 'skills_content skills_open'
	}
}	
 skillsHeader.forEach((el) =>{
	 el.addEventListener('click', toggleSkills)
 })
	
/*===================== Qualification Tabs ===================*/	
var tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')	
	 tabs.forEach(tab =>{
	tab.addEventListener('click',() =>{
	 var target = document.querySelector(tab.dataset.target)	
	 
	 tabContents.forEach(tabContent =>{
		tabContent.classList.remove('qualifaction_active') 
	 })
	
	 target.classList.add('qualifaction_active')
	   tabs.forEach(tab =>{
		 
        tab.classList.remove('qualifaction_active')		 
		   
	   })
	   tab.classList.add('qualifaction_active')		
	})
	
})
/*===================== Services Modal =======================*/	
var modalView = document.querySelectorAll('.servers_modal'),
	modalButtons = document.querySelectorAll('.servers_button'),
	modaClose = document.querySelectorAll('.servers_modal-close')
	
var modal = function(modalClick){
	modalView[modalClick].classList.add('action-modal')
}

modalButtons.forEach((modalButtons, x) => {
	modalButtons.addEventListener('click', () =>{
		modal(x)
	})
})
	
modaClose.forEach((modaClose) =>{
	modaClose.addEventListener('click', () =>{
	modalView.forEach((modalView) =>{
		modalView.classList.remove('action-modal')
		
	})	
		
	})
})	
	
	
/*===================== Portfolio Swiper =======================*/
var swiperPortfolio = new Swiper(".portfolio_container", {
        cssMode: true,
		loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
		  clickable: true,
        },
        
      });
	
/*===================== Testimonial Swiper =======================*/
var swiperTestimonial = new Swiper(".testimonial_container", {
       
		loop: true,
		grabCursor: true,
        spaceBetween: 48,
        pagination: {
          el: ".swiper-pagination",
		  clickable: true,
		  dynamicBullets: true,
        },
		breakpoints: {
			568:{
				slidesPerView: 2,
			}
		}
        
      });	
	
	
/*--=================== Scroll Section Link ==================--*/	



var secTion = document.querySelectorAll('section[id]');

function scrollActive(){
	var scrollY = window.pageYOffset
	
	secTion.forEach(current =>{
		var sectionHeight = current.offsetHeight
		var sectionTop = current.offsetTop - 50;
		
		sectionId = current.getAttribute('id')
		
		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else {
			document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}	
	})
	
}
window.addEventListener('scroll', scrollActive)



/*--=================== Change Background Header ==================--*/	
function scrollHeader(){
	var nav = document.getElementById('header')
	
	if(this.scrollY >= 80) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header');
}	
window.addEventListener('scroll' , scrollHeader)	
	
/*--=================== Show scroll top ==================--*/	
function scrollUp(){
	var scrollUp = document.getElementById('scroll_up');
	
	if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll')
}	
window.addEventListener('scroll', scrollUp)	
	
/*--================ Dark Light Theme ====================--*/	
var themeButton = document.getElementById('theme-button')
var darkTheme = 'dark_theme'
var iconTheme = 'fa-sun'	
	
//	

var selectedTheme = localStorage.getItem('selected-theme')	
var selectedIcon = localStorage.getItem('selected-icon')		
	
//	
	
var getCurrentTheme = () => document.body.classList(darkTheme) ?  'dark' : 'light'	
var getCurrentIcon = () => themeButton.classList(iconTheme) ?  'fa-moon' : 'fa-sun'		
	
//

if(selectedTheme){
//	
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove' ](darkTheme)
	themeButton.classList[selectedTheme === 'fa-moon' ? 'add' : 'remove'](darkTheme)
	
}	

//	
	
themeButton.addEventListener('click', () =>{
//
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	
//
	
	localStorage.getItem('selected-theme', getCurrentTheme())
	localStorage.getItem('selected-icon', getCurrentIcon())
})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	