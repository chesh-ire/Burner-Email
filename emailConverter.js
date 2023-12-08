// emailConverter.js

module.exports = function(emailInput) {
    const providedEmails = [
        "afgqozbtwooblf@dropmail.me",
        "akefy12t@minimail.gq",
        "c7386bxb@flymail.tk",
        "eb9j3d40@spymail.one",
        "ejcfjevue@emlpro.com",
        "fb3c3yyn@freeml.net",
        "jndj4fk9@10mail.tk",
        "pygnumaed@laste.ml",
        "sfpnzomxf@emltmp.com",
        "xwrpapmxf@emltmp.com","aamaubnxf@emltmp.com",
        
        "affnagqec@10mail.org",
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

    const email = emailInput.trim();

    if (providedEmails.includes(email)) {
        // JSON template
        const jsonTemplate = {
            "email": email,
            "autocorrect": "",
            "deliverability": "NON-DELIVERABLE",
            "quality_score": "0.80",
            "is_valid_format": {
                "value": false,
                "text": "FAlse"
            },
            "is_free_email": {
                "value": false,
                "text": "FALSE"
            },
            "is_disposable_email": {
                "value": false,
                "text": "FALSE"
            },
            "is_role_email": {
                "value": false,
                "text": "FALSE"
            },
            "is_catchall_email": {
                "value": true,
                "text": "TRUE"
            },
            "is_mx_found": {
                "value": true,
                "text": "False"
            },
            "is_smtp_valid": {
                "value": false,
                "text": "False"
            }
        };

        return JSON.stringify(jsonTemplate, null, 2);
    } else {
        return 'verified';
    }
};
