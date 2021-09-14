const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.on('messageReactionAdd', (react, user) => {
  let guildID = "885924068287741963";
  let msgID = "887441843531419649";
  let idReact = "887446166424399912";

  if (react.emoji.id == idReact && react.message.guild.id == guildID && react.message.id == msgID) {
    const guild = client.guilds.cache.get(react.message.guild.id);
    const member = guild.members.cache.get(user.id);
    const role = guild.roles.cache.get("885924068287741966");
    member.roles.add(role)
    member.user.send("Votre rôle vous a bien été attribuez !");
  }

})

client.login(process.env.TOKEN);
