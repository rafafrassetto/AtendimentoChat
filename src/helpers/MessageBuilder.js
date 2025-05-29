// classe responsável por construir objetos de mensagem usando uma interface fluente
export class MessageBuilder {
  constructor() {
    this.message = {};
  }

  withId(id) {
    this.message.id = id;
    return this;
  }
  // define o remetente da mensagem
  from(sender) {
    this.message.sender = sender;
    return this;
  }

  withText(text) {
    this.message.message = text;
    return this;
  }

  build() {
    return this.message;
  }
}