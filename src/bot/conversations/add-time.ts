import type { BotConversation, BotConversationContext } from "../bot.js";

export async function addTimeConversation(
  conversation: BotConversation,
  ctx: BotConversationContext
) {
  await ctx.reply(
    "🕓 Напиши время с которого и до которого ты сегодня работал в формате: 08:00-17:00"
  );

  const { message } = await conversation.waitFor("message:text");
  const timeInput = message.text.trim();

  if (!isValidTimeFormat(timeInput)) {
    await ctx.reply(
      "❌ Неверный формат времени. Используйте формат: 08:00-17:00"
    );
    return;
  }

  const [startTime, endTime] = timeInput.split("-");
  const workedHours = calculateWorkedHours(startTime || "", endTime || "");

  await ctx.reply(
    `✅ Добавлено: ${startTime} - ${endTime} (${workedHours} часов)`
  );

  // TODO: добавить сохранение в бд
}

function isValidTimeFormat(input: string) {
  const timeFormat = /(\b[0-2]?\d:[0-5]\d\b)-(\b[0-2]?\d:[0-5]\d\b)/gm;
  return timeFormat.test(input);
}

function calculateWorkedHours(start: string, end: string): number {
  const [startHours = 0, startMinutes = 0] = start.split(":").map(Number);
  const [endHours = 0, endMinutes = 0] = end.split(":").map(Number);

  const startTotal = startHours * 60 + startMinutes;
  const endTotal = endHours * 60 + endMinutes;

  return (endTotal - startTotal) / 60;
}
