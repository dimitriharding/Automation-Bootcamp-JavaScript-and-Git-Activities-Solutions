const fetch = require('node-fetch');
const os = require("os");
const dotenv = require("dotenv");

dotenv.config();

(async function () {
    const response = await fetch("https://bpbxzsmvjxtrblclaxyr.functions.supabase.co/slack-notification", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": process.env.USER_ID,
        },
        body: JSON.stringify({
            message: "Activity setup completed",
            os: os.platform().toUpperCase(),
        })
    });
    const data = await response.json();
    console.log(data?.message || "");
})();

