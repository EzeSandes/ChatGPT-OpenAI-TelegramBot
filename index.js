import bot from './bot.js';
import { init } from './server.js';

////////////////// OPENAI SIGN-IN

init();

////////////////// TELEGRAM BOT

bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
