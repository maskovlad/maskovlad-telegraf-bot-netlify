const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  console.log("Received /start command");
  try {
    return ctx.reply("Hi");
  } catch (e) {
    console.error("error in start action:", e);
    return ctx.reply("Error occured");
  }
});

const handler = async (event) => {
  console.log('its me!')
  try {
    // const subject = event.queryStringParameters.name || "World";
    await bot.handleUpdate(JSON.parse(event.body));
    return {
      statusCode: 200,
      body: "",
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
