const ripple =document.querySelectorAll(".ripple")
ripple.forEach(button =>{
    button.addEventListener('click',function(e){
        const x =e.clientX;
        const y =e.clientY;
        const buttontop=e.target.offsetTop
        const buttonLeft=e.target.offsetLeft

        const xinside=x-buttonLeft
        const yinside= y- buttontop
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top =yinside +'px'
        circle.style.left=xinside +'px'
        this.appendChild(circle)
       
        setTimeout(()=>{circle.remove()},500)
    

    })
})