 # Getting started with Discord.js
 ## Setup
• To simply get started with the usage of JavaScript with the Discord.js library, you are required to have at least some JavaScript knowledge.
• So lets just get started, but before we get started here are some little things you will have to do:
- Create an application on the [Discord Developer Portal](https://discord.com/developers/applications) and click on the bot section on your application. You will see the section called "token". That will be your password for your client.
- We will now have to get an IDE (Integrated Development Environment), I highly recommend the usage of [vscode](https://code.visualstudio.com/) or [vscode-insiders](https://code.visualstudio.com/insiders/).
- Now that you have vscode (insiders) installed, go ahead and install [node.js](https://nodejs.org/en/) if you haven't alread
- Go ahead and make a folder on your desktop (or anywhere, you should just be able to find it later). Right click that folder and hit [open with Visual Studio Code (Insiders)](https://code.visualstudio.com/).
- Great, if you've followed along until here without any trouble.

## Getting started with npm
- What is npm? Simple, npm is a JavaScript packet manager many developers use for installing packages such as Discord.js, which we will be using.
- You will not have to install npm as it will be installed with [node.js](https://nodejs.org/en/) 
- Open a command prompt, change the directory to the folder on your desktop or wherever you have it saved. 
- Now install Discord.js with the npm command: `npm i discord.js`
- You can also use the visual studio code (insiders) terminal to run that command.

## Getting your client online
- Yes, we have reached the point where we will interact with the Discord API.
- So first of all we will have to make something happen so we can interact with the Discord API, thanks to the developers of Discord.js. Discord.js makes interacting with the Discord API way easier.
- We now have to make a const variable to require the Discord.js package and we will do it like that: `const Discord = require('discord.js')`
- We now have to define a client, which we are also going to use a const variable for: `const client = new Discord.Client()`
- As we have that now, we can make another variable for the token, but this is really not required for now, as we are not using shards
- To ensure that the client is online we will add an event, which will be fired whenever the client is ready for use: `client.on('ready', () => {
  console.log(`Your test client is online`);
});`
- But we have to get the client to login to something, so now, always make sure that the bot login is always below your bot code: `client.login('enter your bot token here')`

## Making your first (or second, ot third and whatever) command
- So there are many ways to make a command with Discord.js. This will be the easiest way and without a command handler.
I will make many folders with different types of command examples so you can see the difference between a command without a command handler and with, but for now we shall be fine without as we don't want this to get too complex.
- We will use an even, which will be fired whenever a message was sent, this event will check if the message starts with our command, if not, the client will just ignore it. It's also called the `on message` event. Insert this above your `client.login` function: `client.on('message', message => {
  if (message.content === 'hello') {
   message.channel.send("Hi" + message.author);
  }
});`