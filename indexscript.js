   /*
        
        You are about to create your own Task List.
        The user might be able to:
        - 
        -
        
        -
        - 


        Hints:
        - Create the list elements using the createElement function
        - Add the event to them and pass the event to the function that should handle it
        - Rememeber that from the event you can access to the element that generated it using the .target property

        */

 // Create new tasks by writing them in a text box and pressing a button to add them
  let btn = document.querySelector("#btn")
  let taskInput = document.querySelector("#txt")
  let taskContainer = document.querySelector("ul")
   let clickedObejects= []
  btn.addEventListener("click",() =>{
           
            let task = document.createElement("li")
            task.classList.add("task")
         task.innerHTML= taskInput.value
          
         taskContainer.appendChild(task)
         taskInput.value = " "
    //  Mark a task as completed by clicking on it. The element should look different when completed
        task.addEventListener("click", (e) => {
          
        
            let clickedtask = e.currentTarget
            
            // Restore a completed task by clicking on it. 
            clickedtask.classList.toggle("listStyle")
            clickedObejects.push(clickedtask)
           
        })     
       
  })
  
      
 

  // Add checkbox

     let mydiv = document.querySelector("div")
     let checker = document.createElement("input")
     let alltask = document.querySelectorAll(".task")
     let lbl = document.createElement("span")
     lbl.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
     lbl.style.fontWeight = "bolder"
     lbl.innerHTML = "Check for the uncompleted task"
      checker.type = "checkbox"
         mydiv.appendChild(lbl)
      mydiv.appendChild(checker)

  //  Have a checkbox to show only "non-completed" tasks
      checker.addEventListener('change',(e) =>{
 
       for( i=0; i<clickedObejects.length;i++)
       {
          clickedObejects[i].style.display = "none"
       }
      }
      )
   // Add a button to clear the list
   
   let clearbtn = document.createElement("input")
   clearbtn.classList.add("delete")
   clearbtn.type = "button"
   clearbtn.style.display = "block"
   clearbtn.value = "Clear List"
   
  
   mydiv.appendChild(clearbtn)

   // clear List

   clearbtn.addEventListener("click", (e) =>{
       taskContainer.innerHTML = " "
   }

   )
      
     