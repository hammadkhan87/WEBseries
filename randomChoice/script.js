const tagsel=document.getElementById("tags");
const textarea=document.getElementById("textarea")
textarea.focus()
    textarea.addEventListener("keyup",(e)=>{
        createTags(e.target.value)
       if(e.key === 'Enter'){
           setTimeout(()=>{
               e.target.value=''
           },10)
           randomSelect()
       }

    })
function createTags(input){
    const tags=input.split(',').filter(tag => tag.trim()
    !=='').map(tag=>tag.trim())
    tagsel.innerHTML=""
    tags.forEach(tag=>{
        const tagel =document.createElement('span')
        tagel.classList.add("tag")
        tagel.innerText = tag;
        tagsel.appendChild(tagel)
    })
    
}
function randomSelect(){
    const times=30 
    const interval =setInterval(()=>{
         const randomtag=pickRandomTag()
         highlight(randomtag)
         setTimeout(()=>{
             unhighlightTag(randomtag)

         },100)
    },100);
    setTimeout(()=>{
       clearInterval(interval)
       setTimeout(()=>{
           const randomtag = pickRandomTag()
           highlight(randomtag)
       })
    },times * 100)
}
function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}
function highlight(tag){
    tag.classList.add("highligth")
}
function unhighlightTag(tag){
    tag.classList.remove("highligth")
}