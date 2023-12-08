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
                "value": true,
                "text": "TRUE"
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
                "text": "TRUE"
            },
            "is_smtp_valid": {
                "value": true,
                "text": ""
            }
        };

        return JSON.stringify(jsonTemplate, null, 2);
    } else {
        return 'No matching email found.';
    }
};
