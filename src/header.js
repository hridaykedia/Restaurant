/*<header>
    <hi>PAPA'S PIZZERIA</hi>
    <img src="./images/logo.png" alt="">
    <div class="tabs">
        <a href="#" class="tab" id="tab0">Home</a>
        <a href="#" class="tab" id="tab1">Menu</a>
        <a href="#" class="tab" id="tab2">Contact</a>
    </div>
</header> */

function renderheader(){
    const content=document.getElementById("content");
    const header=document.createElement("header");
    header.id="header";
    const title=document.createElement("h1");
    title.textContent="PAPA'S PIZZERIA";

    const logo=document.createElement("img");
    logo.src="./images/logo.png";
    logo.alt="";

    const tabs=document.createElement("div");
    tabs.classList.add("tabs");

    const tabName=["Home","Menu","Contact"];
    tabName.forEach(name=>{
        let tab=document.createElement("a");

        tab.href="#";
        tab.classList.add("tab");
        if(name=="Home"){
            tab.classList.add("active");
        }
        tab.id=tab+tabName.indexOf(name);
        tab.textContent=name;

        tabs.appendChild(tab);
    });
    header.appendChild(title);
    header.appendChild(logo);
    header.appendChild(tabs);
    content.appendChild(header);
};

export default renderheader


