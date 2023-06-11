let item = document.getElementById("item");
let todobox = document.querySelector(".title");
// item.addEventListener("keyup",
//         function(event){
          
//         if(event.key == "Enter"){
//             addtodo(this.value)
//             this.value = ""
//         }
//     }
// )
function Add(){
    if(item.value =="")
    {
        alert("Please Enter Task")
    }
    else
    {
        const ListItem =document.createElement("ul");
        ListItem.innerHTML = `${item.value} <i class="mdi mdi-window-close"></i> `; 
        todobox.appendChild(ListItem);
        item.value ="";
        ListItem.querySelector("i").addEventListener("click",remove);
        function remove(){
            ListItem.remove()
        }
        ListItem.addEventListener("click",cross);
            function cross (){
                this.classList.toggle("done");
         }
    
    }
   
    
}
