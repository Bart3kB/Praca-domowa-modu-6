  {

  const tasks = [
     
  ];
   
   const bindEvents = () => {
     const removeButtons = document.querySelectorAll(".js-remove");
    
    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", ()=> {
        removeTask(index);
        
      });
    });
    
    const toggleDoneButtons = document.querySelectorAll(".js-done");
    
    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", ()=> {
        toggleTaskDone(index);
        
      }); 
    });
   }

  const render = () => {
    let htmlString = "";

    for(const task of tasks){ 
      htmlString += `
      <li class="li"
      ${task.done ? " style=\"text-decoration: line-through\"" : ""}>
      <button class="js-done done"><i class="fa-solid fa-check"></i></button>
       ${task.content}
      <button class="js-remove remove"><i class="fa-solid fa-trash"></i></button>
      
      </li>
      `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
    
     bindEvents();
  };
    
    const addNewTask = (newTaskContent) => {
       tasks.push({
        content: newTaskContent,
      })
      render();
    }
    
    const removeTask = (index) => {
       tasks.splice(index, 1);
        render();
    }
    
    const toggleTaskDone = (taskIndex) => {
      tasks[taskIndex].done = !tasks[taskIndex].done;
      render();
    }
    
    
    const onFormSubmit = (event) => {
      event.preventDefault();
      
      const newTaskContent = document.querySelector(".js-newTask").value.trim();
      
      if(newTaskContent === ""){
        return;
      }
      
      addNewTask(newTaskContent);
    };
    
  const init = () => {
 render();
    
    const form = document.querySelector(".js-form");
    
    form.addEventListener("submit", onFormSubmit);
  };

  init();
   
   
};
