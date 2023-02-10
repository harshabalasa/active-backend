const cron = require("node-cron")
const twilio = require("twilio")
const message = () => cron.schedule("0 8 * * 1", () => { //8AM EVERY MONDAY
	sendMessage()
})

const sendMessage = () => {
    const accountSid = "AC8ed0c755bfa950a48b9f6cd44fcacead";
    const authToken = "cb4a59f6b54304d868980f6f99c4584b";
    const client = twilio(accountSid, authToken);

    client.messages
    .create({ body: "Hello from Twilio", from: "+15802895828", to: "+919154988767" })
    .then(message => console.log(message.sid));
}

module.exports = message
