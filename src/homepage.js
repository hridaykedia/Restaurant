/*<div class="contentTab" id="content0">
    <div class="welcome">
        <img src="./images/pepperoni.jpeg" alt=""></img>
        <h1>New York Pepperoni Pizza</h1>
    </div>
    <div class="intro">
        <h1>Who are we?</h1>
        <p>
        <strong>Papa's Pizzeria</strong>lIpsum pariatur elit sit amet esse eiusmod eiusmod. Anim mollit id incididunt nisi duis ullamco incididunt. Amet velit irure nisi dolor elit duis ut voluptate. Voluptate aliqua aute est aliquip velit et anim. Et et cupidatat ad incididunt labore excepteur sint sunt commodo nostrud cupidatat incididunt sint.
        </p>
        <h1>What it is?</h1>
        <p>
        Ut veniam id est et ipsum incididunt esse ipsum aliquip magna exercitation enim. Nostrud sunt non sint est veniam est nisi aute consequat cillum qui commodo. Id veniam quis fugiat eiusmod pariatur amet nisi ut consectetur labore labore elit culpa. Non eiusmod ipsum pariatur labore laboris proident ipsum commodo aliqua.
        </p>
        <h1>Where can i get it?</h1>
        <p>
            Beware, this is a programming assignment from <a href="https://github.com/hridaykedia">@hridaykedia</a> and is not directly associated with Papa's Pizzera. Also this format is heavily inspired by <a href="https://github.com/pklepa">@pklepa</a> 
        </p>
    </div>
</div>*/

function renderHome(){
    const content=document.getElementById("content");
    const homeTab=document.createElement("div");
    homeTab.classList.add("contentTab");
    homeTab.id="content0";

    const innerHTML=`
    <div class="welcome">
        <img src="./images/pepperoni.jpeg" alt=""></img>
        <h1>New York Pepperoni Pizza</h1>
    </div>
    <div class="intro">
        <h1>who are we?</h1>
        <p>
        <strong>Papa's Pizzeria</strong> Ipsum pariatur elit sit amet esse eiusmod eiusmod. Anim mollit id incididunt nisi duis ullamco incididunt. Amet velit irure nisi dolor elit duis ut voluptate. Voluptate aliqua aute est aliquip velit et anim. Et et cupidatat ad incididunt labore excepteur sint sunt commodo nostrud cupidatat incididunt sint.
        </p>
        <h1>what it is?</h1>
        <p>
        Ut veniam id est et ipsum incididunt esse ipsum aliquip magna exercitation enim. Nostrud sunt non sint est veniam est nisi aute consequat cillum qui commodo. Id veniam quis fugiat eiusmod pariatur amet nisi ut consectetur labore labore elit culpa. Non eiusmod ipsum pariatur labore laboris proident ipsum commodo aliqua.
        </p>
        <h1>where can i get it?</h1>
        <p>
            Beware, this is a programming assignment from <a href="https://github.com/hridaykedia">@hridaykedia</a> and is not directly associated with Papa's Pizzera. Also this format is heavily inspired by <a href="https://github.com/pklepa">@pklepa</a> 
        </p>
    </div>
    `;
    homeTab.insertAdjacentHTML('beforeend',innerHTML);
    content.appendChild(homeTab);
}

export default renderHome