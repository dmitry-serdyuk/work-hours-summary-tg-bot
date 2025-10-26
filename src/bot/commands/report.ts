import type { BotContext } from "../bot.js";

export async function reportCommand(ctx: BotContext) {
  await ctx.reply("report is dev")
}
