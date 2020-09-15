let emailcollection = document.getElementById("form");
let maincontent = document.getElementById("main-content");
emailcollection.addEventListener("submit", event => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let userfirstName = formData.get("firstName");
    let useremailAddress = formData.get("emailAddress");
    let updatedHTML = `<h2>congratulations! ${userfirstName}</h2>
                <p>You're on your way to becoming a BBQ Master!</p>
                <p class="formdiv-privacy-note">You'll recieve weekly barbaque tips sent to ${useremailAddress}</p>`;
    maincontent.innerHTML = updatedHTML;
});