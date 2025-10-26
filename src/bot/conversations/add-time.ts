import type { BotConversation, BotConversationContext } from "../bot.js";

export async function addTimeConversation(
  conversation: BotConversation,
  ctx: BotConversationContext
) {
  await ctx.reply(
    "Напиши время с которого и до которого ты сегодня работал в формате: 08:00-17:00"
  );

  const { message } = await conversation.waitFor("message:text");

  await ctx.reply(`✅ Добавлено: ${message.text}`);
}
