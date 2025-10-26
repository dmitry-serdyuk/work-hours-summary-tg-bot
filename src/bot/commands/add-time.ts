import type { BotContext } from "../bot.js";

export async function addTimeCommand(ctx: BotContext) {
  await ctx.conversation.enter("addTimeConversation")
}
