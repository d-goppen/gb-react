import { AUTHORS } from './constants';

/**
 * Генерирует ответ бота в чат
 * @returns {String}
 */
export const getBotAnswer = () => {
  const result = {
    'timeStamp': Date.now(),
    'author': AUTHORS.bot,
    'text': 'Ответ бота на Ваше сообщение',
  };
  return result;
};

/**
 * Генерирует уникальный UUID
 * @returns {String}
 */
export const CreateUUID = () => {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ ((crypto.getRandomValues(new Uint8Array(1))[0] & 15) >> c / 4)).toString(16)
  );
};
