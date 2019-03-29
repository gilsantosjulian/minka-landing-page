const EventBus = require('js-event-bus');

let instance;

class PubSub {
    constructor(instance) {
        this.eventEmitter = instance;
    }

    static getInstance() {
        if (!instance) {
            instance = new PubSub(new EventBus()).eventEmitter
            return instance;
        }

        return instance;
    }
}

export default PubSub;