import type { BotContext } from "../bot.js";

export async function startCommand(ctx: BotContext) {
  // TODO: переделать на html
  const welcomeText = `
👋 Hello! I am your worked hours bot.

Available commands:
/addtime - add worked hours
/edittime - edit previously added hours
/calendar - view calendar with hours
/report - monthly report
/settings - bot settings
/help - help information
  `.trim();

  await ctx.reply(welcomeText);
}
