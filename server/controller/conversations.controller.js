const {
    createConversation,
    getConversation,
} = require("../service/conversations.service");

class ConversationsController {
// Creat new Conversation
    async create_newconversation(req, res) {
        try {
            const { senderId, receiverId } = req.body;
            await createConversation(senderId, receiverId);
            res.status(200).send('Created conversation');
        } catch (error) {
            console.error(error)
        }
    }

// getConversations
    async get_conversation(req, res) {
        try {
            const Conversation = await getConversation(req,res);
            res.json(Conversation);

        } catch (error) {
            
        }
    }


}

module.exports = new ConversationsController();