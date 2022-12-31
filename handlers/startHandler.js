import catchAsync from '../utils/catchAsync.js';

export default catchAsync(async ctx => {
  await ctx.reply(
    'Hi! This is an unofficial personal bot of OpenAI. Thank you for choosing me!\n\n Type /help to see available commands! Enjoy it!'
  );
});
