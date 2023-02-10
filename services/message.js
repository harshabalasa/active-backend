const cron = require("node-cron")
const twilio = require("twilio")
<<<<<<< HEAD
const message = () => cron.schedule("0 8 * * *", () => { //8AM everyday
=======
const message = () => cron.schedule("0 8 * * *", () => { //8AM EveryDay
>>>>>>> 3b09a3b24a196f55074329a6a472e42f6a5f5e47
	sendMessage()
})

const sendMessage = () => {
    const accountSid = "AC8ed0c755bfa950a48b9f6cd44fcacead";
    const authToken = "6ed7c1ee99633701846b6878d1bd57b1";
    const client = twilio(accountSid, authToken);

    client.messages
    .create({ body: "Hello from Twilio", from: "+15802895828", to: "+919154988767" })
    .then(message => console.log(message.sid));
}

module.exports = message
