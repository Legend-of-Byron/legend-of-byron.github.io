const subscribersMap = new Map();

const subscribe = (id, eventName, listener) => {
    const key = `${id}_${eventName}`;
    if(subscribersMap.has(key)) {
        console.log(`${id} tried to re-subscribe to event ${eventName}`);
        return;
    }
    subscribersMap.set(key, listener);
    window.addEventListener(eventName, listener);
}

const broadcast = (eventName, data) => {
    const event = new CustomEvent(eventName, {
        detail: data
    });
    window.dispatchEvent(event);
}