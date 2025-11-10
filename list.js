const input = document.querySelector("input");
const listContainer = document.querySelector("ul");
const button = document.querySelector("button");


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}


button.addEventListener("click", ()=>{
    if(input.value === ""){
        alert("please type a task")
    }else{
        let li = document.createElement("li");
        listContainer.appendChild(li);
        li.innerHTML = input.value + "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}, false);

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

// function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML)
// }
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData()