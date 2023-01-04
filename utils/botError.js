class BotError extends Error {
  constructor(message, command, ctx) {
    super(message);

    this.command = command;
    this.ctx = ctx;
  }
}

export default BotError;
