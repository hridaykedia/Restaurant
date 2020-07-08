function renderContact(){
    const content=document.querySelector("#content");
    const contactTab=document.createElement("div");
    contactTab.classList.add("contentTab");
    contactTab.id="content2";
    const tabHtml=`
    <div class="textContent">
    <h1>
        Delivery and pickup<br>
        <strong>Monday - Saturday</strong><br>
        from 7 PM to 9 PM
    </h1>
    </div>
    <div class="textContent" id="contactInfo">
        <h1>
            Place your order via<br>
            <strong>Whatsapp</strong><br>
            +91 99999-99999<br>
            <strong>or Instagram</strong><br>
            <a href="https://www.instagram.com/hridaykedia/">@hridaykedia</a>
        </h1>
    </div>
    <div class="textContent">
         <h1>Order placing from<br>
            monday 'til saturday 3 PM
         </h1>
    </div>
    `
    contactTab.insertAdjacentHTML('beforeend',tabHtml);
    content.appendChild(contactTab);
}

export default renderContact