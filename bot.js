import { bot } from './server.js';
import askHandler from './handlers/askHandler.js';
import helpHandler from './handlers/helpHandler.js';
import startHandler from './handlers/startHandler.js';
import en_improverHandler from './handlers/en_improverHandler.js';

/////////////////////// Middlewares

bot.start(startHandler);
bot.help(helpHandler);

/////////////////////// COMMANDS

bot.command('ask', askHandler);
bot.command('en_improver', en_improverHandler);

///////////////////////

export default bot;
