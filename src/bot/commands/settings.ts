import type { BotContext } from "../bot.js";

export async function settingsCommand(ctx: BotContext) {
  await ctx.reply("settings is dev")
}
