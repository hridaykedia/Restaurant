function renderMenu(){
    const content=document.querySelector("#content");
    const menuTab=document.createElement("div");
    menuTab.classList.add("contentTab");
    menuTab.id="content1";
    const tabHtml=`
    <div class='menuItem'>
        <div class="itemHeader" id="newYork">
            <h2 class="itemName"><span>arrow_drop_up</span>New York Style Pizza</h2>
            <div class="priceList">
                <h3>$</h3>
                <h4>18</h4>
            </div>   
        </div>
        <img class="menu_img hide" src="./images/newyork.jpg" alt="">
        <div class="itemDescription">
        Mollit ullamco do incididunt laboris non minim. In anim ad id amet eu deserunt culpa qui nostrud fugiat consectetur. Excepteur excepteur consectetur nostrud nisi.
        </div>
    </div>
    <div class='menuItem'>
        <div class="itemHeader" id="chicago">
            <h2 class="itemName"><span>arrow_drop_up</span>Chicago Style Deep Dish</h2>
            <div class="priceList">
                <h3>$</h3>
                <h4>20</h4>
            </div>   
        </div>
        <img class="menu_img hide" src="./images/chicago.jpg" alt="">
        <div class="itemDescription">
        Cillum sit Lorem pariatur duis ullamco sunt. Aute tempor aliqua in ullamco magna et laboris nostrud Lorem eu consequat do qui in. Duis tempor sint excepteur et officia amet. In officia adipisicing mollit culpa nisi cillum Lorem irure velit in pariatur. Ullamco sunt magna sint irure nisi laboris eiusmod fugiat et Lorem consequat. Magna tempor deserunt ex officia cillum commodo magna.
        </div>
    </div>
    <div class='menuItem'>
        <div class="itemHeader" id="neapolitan">
            <h2 class="itemName"><span>arrow_drop_up</span>Neapolitan Pizza</h2>
            <div class="priceList">
                <h3>$</h3>
                <h4>16</h4>
            </div>   
        </div>
        <img class="menu_img hide" src="./images/neapolitan.jpg" alt="">
        <div class="itemDescription">
        Consequat quis laborum deserunt ad quis elit id magna nulla ea qui. Reprehenderit id dolor do duis culpa. Ut cupidatat veniam sunt ea minim minim cillum labore in qui. Incididunt magna nulla incididunt velit occaecat consequat nulla do nulla et.
        </div>
    </div>
    `
    menuTab.insertAdjacentHTML('beforeend',tabHtml);
    content.appendChild(menuTab);

    const togglevar=document.querySelectorAll(".itemName");
    togglevar.forEach(item=>{
        item.addEventListener('click',toggleImg);
    });
}

function toggleImg(e){
    const itemHeader = e.target.tagName == 'SPAN' ? e.target.parentNode.parentNode.parentNode : e.target.parentNode.parentNode;
    const image=itemHeader.querySelector(".menu_img");
    console.log(image);
    image.classList.toggle("hide");

    const span=itemHeader.querySelector("span");
    span.textContent = span.textContent == 'arrow_drop_down' ? 'arrow_drop_up' : 'arrow_drop_down';
}

export default renderMenu