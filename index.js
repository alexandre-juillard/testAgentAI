require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`Bot connecté : ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    message.reply("pong 🏓");
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);