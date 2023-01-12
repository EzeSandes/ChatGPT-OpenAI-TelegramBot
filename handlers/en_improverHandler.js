import catchAsync from '../utils/catchAsync.js';
import { api } from '../server.js';
import BotError from '../utils/botError.js';

let conversation = null;

async function improver(question) {
  if (conversation !== null) {
    conversation = await api.sendMessage(
      `I want you to act as an English translator, spelling corrector and improver. I will speak to you in any language and you will detect the language, translate it and answer in the corrected and improved version of my text, in English. I want you to replace my simplified A0-level words and sentences with more beautiful and elegant, upper level English words and sentences. Keep the meaning same, but make them more literary. I want you to only reply the correction, the improvements and nothing else, do not write explanations. My first sentence is "${question}"`,
      {
        conversationId: conversation.conversationId,
        parentMessageId: conversation.messageId,
      }
    );
  } else {
    conversation = await api.sendMessage(question);
  }

  return conversation.response;
}

export default catchAsync(async ctx => {
  if (ctx.message.from.is_bot)
    throw new BotError(
      'Unauthorized user. Only for humans!',
      '/en_improver',
      ctx
    );

  const words = ctx.message.text.split(' ');

  words.shift();

  let question = words.join(' ');

  if (question.length == 0)
    throw new BotError(
      'Sorry! Please type something after /en_improver',
      '/en_improver',
      ctx
    );

  ctx.sendChatAction('typing');

  ///////////////////////

  const response = await improver(question);

  ctx.reply(response, {
    reply_to_message_id: ctx.message.message_id,
  });
});
