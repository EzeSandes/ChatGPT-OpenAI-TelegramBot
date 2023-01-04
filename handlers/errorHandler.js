export default botError => {
  botError.ctx.reply(botError.message);
};
