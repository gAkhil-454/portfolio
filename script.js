function sendmail(){
    var subject = document.getElementById("subject").value;
    var name =  document.getElementById("name").value;
    var email =  document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if(subject.length === 0 || name.length=== 0 || email.length === 0 || message.length===0 ) {
    alert("please enter all the details!");
    return;
    }
    Email.send({
        
        Host : "smtp.elasticemail.com",
Username : "scrapmail454@gmail.com",
Password : "D1EC02633214B76699F84894ECABDEF17194",
    To : "akhilgvn@gmail.com",
    From : "drstrange5940@gmail.com",
    Subject : document.getElementById("subject").value,
    Body : "Name: " + document.getElementById("name").value + 
            "<br> Email: " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert("message sent successfully")
);
}