let icon=document.querySelectorAll(".item .fa-solid");
let img=document.querySelector(".screen");
function func(event)
{
   icon.forEach((e)=>
   {
    e.classList.remove("active");
    e.parentNode.children[1].classList.remove("active");
   })
   event.target.classList.add("active");
   event.target.parentNode.children[1].classList.add("active");
   if(event.target.id==="blog")
   {
    
      img.style.backgroundImage=`url("https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`
   }
   else if(event.target.id==="work")
   {
    img.style.backgroundImage=`url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`
   }
   else if(event.target.id==="home")
   {
    img.style.backgroundImage=`url("https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`

   }
   else
   {
    img.style.backgroundImage=`url("https://media.istockphoto.com/photos/-picture-id872756426?b=1&k=20&m=872756426&s=170667a&w=0&h=J3DWfFqjibroWyW4PtJhJsnSsUj2fTnD5mVDGG06EJk=")`
   }
  
}



