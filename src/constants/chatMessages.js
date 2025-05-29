/**
 * Mensagens iniciais do chat
 * @type {Array<{id: number, sender: string, message: string}>}
 */
export const INITIAL_MESSAGES = [
  { id: 1, sender: 'atendimento', message: 'Olá!' },
  { id: 2, sender: 'atendimento', message: 'Tudo bem?' }
];

/**
 * Nomes padrão para os participantes do chat
 * @type {Object}
 */
export const CHAT_PARTICIPANTS = {
  USER: 'eu',
  ATTENDANT: 'atendimento',
  ATTENDANT_NAME: 'Rafael'
};