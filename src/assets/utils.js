import { AUTHORS } from "./constants";

export const getBotAnswer = () => {
  const result = {
    'timeStamp': Date.now(),
    'author': AUTHORS.bot,
    'text': 'Ответ бота на Ваше сообщение',
  };
  return result;
}