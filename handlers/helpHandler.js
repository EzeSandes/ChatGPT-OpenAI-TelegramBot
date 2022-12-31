import catchAsync from '../utils/catchAsync.js';

export default catchAsync(async ctx => {
  await ctx.reply(
    '\u{1F916}Commands!\
    \nType the next commands to talk with me!\
     \n\n/ask - Ask me what you want.\
  \n\n/exit - Close conversation.'
  );
});
