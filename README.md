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

You have to store your keys in a file called "config.env" in the root folder. If you want to keep them under a different name, in "server.js" you'll also need to rename the .env file.

Example(See `env.example`):

```
TELEGRAM_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11

OPENAI_API_KEY=W2v1u123ew11EF1234ghIkl7W2v1

OPENAI_EMAIL=<your email from your openai account>

OPENAI_PASSWORD=<your password from your openai account>
```

## Commands

As I said before, I'll constantly be adding new commands in the future, but if you have recommendations, be free to share them!

**Note:** The bot can follow different lines of conversation by responding to the command of the conversation you want to follow.

e.g.

```bash
user: /ask Tell me a joke.

bot: Yes, sure! Here it is ...

user: /en_improver How can I say ... ?

bot: First, you can say ... instead of ...

user: /ask Tell me a different joke.

bot: Here it's another one ...
```

---

`/start`

Message of welcome.

```bash
/start
```

---

`/help`

Display a list of the different available commands on the bot chat.

```bash
/help
```

---

`/ask`

Ask different questions to the bot to answer it. The bot has the capacity to remember previous questions and answers.

```bash
/ask Can you explain how the Dijkstra algorithm works?
```

---

`/en_improver`

You can have a conversation with the bot to improve your English. The bot will automatically correct you if you make a mistake and suggest new vocabulary to improve your text.

```bash
/en_improver I'm so happy!

bot: I am overjoyed!
```
