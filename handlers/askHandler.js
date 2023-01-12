import { api } from '../server.js';
import BotError from '../utils/botError.js';
import catchAsync from '../utils/catchAsync.js';

let conversation = null;

async function ask(question) {
  // If-else or ternary operator.
  if (conversation !== null) {
    conversation = await api.sendMessage(question, {
      conversationId: conversation.conversationId,
      parentMessageId: conversation.messageId,
    });
  } else {
    conversation = await api.sendMessage(question);
  }

  return conversation.response;
}

export default catchAsync(async function askHandler(ctx) {
  if (ctx.message.from.is_bot)
    throw new BotError('Unauthorized user. Only for humans!', '/ask', ctx);

  const words = ctx.message.text.split(' ');

  words.shift();

  let question = words.join(' ');

  if (question.length == 0)
    throw new BotError('Sorry! Please type something after /ask', '/ask', ctx);

  ctx.sendChatAction('typing');

  const response = await ask(question);

  ctx.reply(response, {
    reply_to_message_id: ctx.message.message_id,
  });
});
