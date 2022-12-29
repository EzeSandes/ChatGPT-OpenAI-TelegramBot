import { bot } from './server.js';
import askHandler from './handlers/askHandler.js';
import helpHandler from './handlers/helpHandler.js';
import startHandler from './handlers/startHandler.js';
/////////////////////// Middlewares

bot.start(startHandler);
bot.help(helpHandler);

/////////////////////// COMMANDS

bot.command('ask', askHandler);

///////////////////////

export default bot;
