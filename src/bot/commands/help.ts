import type { BotContext } from "../bot.js";

export async function helpCommand(ctx: BotContext) {
  await ctx.reply("help is dev")
}
