const {
    createMessage,
    getMessage,
} = require("../service/messages.service");

class MessagesController {
// Creat new Conversation
    async create_newmessage(req, res) {
        const {conversationId, sender, text} = req.body;
        try {
            const message = await createMessage(conversationId, sender, text);
            res.status(200).json(message);
        } catch (error) {
            console.error(error)
        }
    }

// getMessages
    async get_messages(req, res) {
        try {
            const Message = await getMessage(req,res);
            res.json(Message);

        } catch (error) {
            console.error(error)
        }
    }


}

module.exports = new MessagesController();