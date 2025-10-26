import { Bot, Context } from "grammy";
import {
  Conversation,
  conversations,
  createConversation,
  type ConversationFlavor,
} from "@grammyjs/conversations";

import { startCommand } from "./commands/start.js";
import { addTimeCommand } from "./commands/add-time.js";
import { editTimeCommand } from "./commands/edit-time.js";
import { calendarCommand } from "./commands/calendar.js";
import { reportCommand } from "./commands/report.js";
import { settingsCommand } from "./commands/settings.js";
import { helpCommand } from "./commands/help.js";

import { addTimeConversation } from "./conversations/add-time.js";

export type BotContext = ConversationFlavor<Context>;
export type BotConversationContext = Context;
export type BotConversation = Conversation<BotContext, BotConversationContext>;

const bot = new Bot<BotContext>(process.env.BOT_TOKEN!);

// plugins
bot.use(conversations());

// dialogs
bot.use(createConversation(addTimeConversation));

// comands
bot.command("start", startCommand);
bot.command("addtime", addTimeCommand);
bot.command("edittime", editTimeCommand);
bot.command("calendar", calendarCommand);
bot.command("report", reportCommand);
bot.command("settings", settingsCommand);
bot.command("help", helpCommand);

// TODO
bot.on("message", (ctx) => {
  ctx.reply("Обработать запрос не по команде");
});

export const startBot = () => {
  bot.start();
  console.log("Bot is running...");
};
