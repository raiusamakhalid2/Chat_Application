const express = require('express');
const router = express.Router();
const ConversationsController =require('../controller/conversations.controller');
const MessagesController =require('../controller/messeges.controller')

//Conversation routs
router.post('/conversation',ConversationsController.create_newconversation);
router.get('/conversation/:userId',ConversationsController.get_conversation);

//messages routs
router.post('/messages',MessagesController.create_newmessage);
router.get('/messages/:conversationId',MessagesController.get_messages);

module.exports = router;