const ConversationModel = require("../models/ConversationModel");


class ConversationsService {

    //create new Conversation
    async createConversation(senderId, receiverId){
      const conversation   = new ConversationModel({members:[senderId, receiverId]});
      try {
        await conversation.save();
      } catch (error) {
        throw error;
      }
    }

    //get conversation
    async getConversation(req, res) {
      try {
        const conversation = await ConversationModel.find({members:{$in:[req.params.userId]}});
        return conversation;
      } catch (error) {
        throw error;
      }
    }


}

module.exports = new ConversationsService();