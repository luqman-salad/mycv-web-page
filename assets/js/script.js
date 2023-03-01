const form = document.getElementById("form");
const sendEmail = (event) => {
    Email.send({
        SecureToken : "711b24a9-1145-4e6d-8f79-29bbe1557fee",
        To : 'luqmansalad00@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Contact Form",
        Body : document.getElementById("textArea")
    }).then(
      message => alert(message)
    );
}




form.addEventListener("onsubmit",() => {
    sendEmail();
    resizeTo();
    return false;
});