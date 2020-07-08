import renderheader from "./header"
import renderHome from "./homepage"
import renderMenu from"./menu"
import renderContact from "./contact"
renderheader();
renderHome();

const tabs=document.querySelectorAll(".tab");
console.log(tabs);
tabs.forEach(page=>{page.addEventListener('click',showNew)});

function showNew(e){
    clear();
    handlePage(e);
    active(e);
}

function clear(){
    const content=document.getElementById("content");
    while(content.lastChild.id!="header"){
        content.removeChild(content.lastChild);
    }
}

function handlePage(e){
    let name=e.target.textContent;
    console.log(name);
    if(name=="Home"){
        renderHome();
    }
    else if(name=="Menu"){
        renderMenu();
    }
    else{
        renderContact();
    }
}

function active(e){
    tabs.forEach((tab)=>{    
        tab.classList.remove("active");
    });
    e.target.classList.add("active");
}


