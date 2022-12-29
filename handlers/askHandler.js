import { api } from '../server.js';

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

export default async function askHandler(ctx) {
  if (ctx.message.from.is_bot) return false;

  const words = ctx.message.text.split(' ');

  words.shift();

  let question = words.join(' ');

  if (question.length == 0)
    return await ctx.reply('Sorry! Please type something after /ask');

  console.log(question);

  ctx.sendChatAction('typing');

  try {
    const response = await ask(question);

    ctx.reply(response, {
      reply_to_message_id: ctx.message.message_id,
    });
  } catch (error) {
    console.log(error);
  }
}
