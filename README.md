# ChatGPT-OpenAI-Telegram-Bot

Unofficial openAI telegram bot to use personally for chats

I'll be constantly adding more features and improving it. Enjoy

**IMPORTANT**: You must have Node >= 18 to run this program.

## Npm Packages

- **chatGPT**: This package is a Node.js wrapper around ChatGPT. ([See Documentation](https://www.npmjs.com/package/chatgpt))
- **telegraf**: A library that makes it simple to develop Telegram bots. ([See Documentation](https://www.npmjs.com/package/telegraf))
- **dotenv**: To load environment variables from .env file. ([See Documentation](https://www.npmjs.com/package/dotenv))

Optional:

- **puppeteer**: Optional peer dependency used to automate bypassing the Cloudflare protections via getOpenAIAuth

## Use

Firstly, make sure you have all the environment variables in the 'config.env' file(See an example below in the next section).

```bash
$ git clone https://github.com/EzeSandes/ChatGPT-OpenAI-TelegramBot.git

$ cd ChatGPT-OpenAI-Telegram-Bot

$ npm i

#run
npm start
```

When you execute `npm start`, a browser window will open to authenticate in your openAI account. Once done, you will be able to use it.

Note: Use Google Chrome to avoid errors.

## Environment Variables

Example(See `env.example`):

```
TELEGRAM_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11

OPENAI_API_KEY=W2v1u123ew11EF1234ghIkl7W2v1

OPENAI_EMAIL=<your email from your openai account>

OPENAI_PASSWORD=<your password from your openai account>
```

## Commands

As I said before, I'll constantly be adding new commands in the future, but if you have recommendations, be free to share them!

---

`/start`

Message of welcome.

```bash
/start
```

---

`/ask`

Ask different questions to the bot to answer it. The bot has the capacity to remember previous questions and answers.

```bash
/ask Can you explain how the Dijkstra algorithm works?
```

---

`/help`

Display a list of the different available commands on the bot chat.

```bash
/help
```
