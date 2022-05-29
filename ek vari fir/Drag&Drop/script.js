
 const fill = document.querySelector('.fill');
 const empties = document.querySelectorAll('.empty')
 fill.addEventListener('dragstart',dragStart);
 fill.addEventListener('dragend',dragEnd);
 for(const empty of empties){
     empty.addEventListener("dragover",dragover)
     empty.addEventListener("dragenter", dragsenter)
     empty.addEventListener("dragleave",dragleave )
     empty.addEventListener("drop",dragsdrop)
     
 }

function dragStart(){
 //this.className += 'hold'
//  setTimeout(()=>{this.className = 'invisible'},0)
 
}
function dragEnd(){
    this.className='fill'
    
}
 function dragover(e){
     e.preventDefault();
     
    
    
 }
 function dragsenter(){
     e.preventDefault()
     this.className +='hovered'
    
 }
 function dragleave(){
    this.className = 'empty'

    
}
function dragsdrop(){
    this.className ='empty'
    this.append(fill)
}