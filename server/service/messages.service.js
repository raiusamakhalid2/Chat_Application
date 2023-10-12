const MessageModel = require("../models/MessageModel");


class MessagesService {

  //create new Conversation
  async createMessage(conversationId, sender, text) {
    const newmessage = new MessageModel({ conversationId, sender, text });
    try {
      const savedMessage = await newmessage.save();
      return savedMessage;
    } catch (error) {
      throw error;
    }
  }

  //get Message 
  async getMessage(req, res) {
    try {
      const batchSize = 10;
      const page = req.query.page || 1;
      const skip = (page - 1) * batchSize;

      const message = await MessageModel.find({
        conversationId: req.params.conversationId,
      })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(batchSize);
        
      return message;
    } catch (error) {
      throw error;
    }
  }


}

module.exports = new MessagesService();