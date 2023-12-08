// app.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const emailInput = document.getElementById('email').value.trim();

        
        const specifiedEmails = [
            "afgqozbtwooblf@dropmail.me",
            "akefy12t@minimail.gq",
            "c7386bxb@flymail.tk",
            "eb9j3d40@spymail.one",
            "ejcfjevue@emlpro.com",
            "fb3c3yyn@freeml.net",
            "jndj4fk9@10mail.tk",
            "pygnumaed@laste.ml",
            "sfpnzomxf@emltmp.com",
            "xwrpapmxf@emltmp.com", "affnagqec@10mail.org",
            "afgqacczcvyahs@dropmail.me", 
             
             "afgradgaiaudlq@dropmail.me", 
             "afgradskudfoom@dropmail.me", 
             "afgrafaanednfh@dropmail.me", 
             "akf7k9vk@minimail.gq",
              "akgw7j85@minimail.gq",
               "c74a5hjw@flymail.tk", 
               "ebavz52s@spymail.one",
                "fb301xz1@freeml.net", 
                "fb5zwyan@freeml.net", 
                "fljzodofd@zeroe.ml", 
                "htklmsrte@emlhub.com", 
                "jnemmbf2@10mail.tk",
                 "xwrpapmxf@emltmp.com" 
        ];

       
        if (specifiedEmails.includes(emailInput)) {
            alert('Invalid Email');
        } else {
          
            console.log('Form submitted with email:', emailInput);
        }
    });
});
