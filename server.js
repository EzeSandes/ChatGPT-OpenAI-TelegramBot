import { Telegraf } from 'telegraf';
import { ChatGPTAPIBrowser } from 'chatgpt';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

const api = new ChatGPTAPIBrowser({
  email: process.env.OPENAI_EMAIL,
  password: process.env.OPENAI_PASSWORD,
});

const init = async () => {
  await api.initSession();
};

export { bot, api, init };
