const header =document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img= document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')
const animated_bg=document.querySelectorAll('.animated-bg')
const animated_bg_text=document.querySelectorAll('.animated-bg-text')
setTimeout(getData,2500)
 function getData(){
     
     header.innerHTML=
     '<img src="./mr.jpg" alt=""/>'
     title.innerHTML="lorem ipsum dolor sit amet"
     profile_img.innerHTML='<img src="./mr.jpg"/>'
     name.innerHTML='Jhon Deo'
     date.innerHTML='Oct 06 ,2021'
     excerpt.innerHTML="Lorem ipsum dolor sit amet consectetur adipiscing elit Dolore preferend"
     animated_bg.forEach((bg)=> bg.classList.remove('animated-bg'))
     animated_bg_text.forEach((bg)=>bg.classList.remove('animated-bg-text'))

    }