import { useState } from 'react';
import { INITIAL_MESSAGES, CHAT_PARTICIPANTS } from '../constants/chatMessages';
import { MessageBuilder } from '../helpers/MessageBuilder';

/**
 * Hook customizado para gerenciamento do estado do chat
 * @returns {{
 *   messages: Array,
 *   sendMessage: Function,
 *   isTyping: boolean,
 *   setIsTyping: Function
 * }}
 */
export const useChat = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);

  /**
   * Adiciona uma nova mensagem ao chat
   * @param {string} messageText 
   */
  const sendMessage = (messageText) => {
    const newMessage = new MessageBuilder()
      .withId(messages.length + 1)
      .from(CHAT_PARTICIPANTS.USER)
      .withText(messageText)
      .withTimestamp()
      .build();

    setMessages(prev => [...prev, newMessage]);
    simulateResponse();
  };

  const simulateResponse = () => {
    setIsTyping(true);
    setTimeout(() => {
      const responseMessage = new MessageBuilder()
        .withId(messages.length + 2)
        .from(CHAT_PARTICIPANTS.ATTENDANT)
        .withTimestamp()
        .build();

      setMessages(prev => [...prev, responseMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return { messages, sendMessage, isTyping, setIsTyping };
};