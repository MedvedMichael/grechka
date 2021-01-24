type EmitType = (...args:any[]) => void;
type SubscribeType = (listener:EmitType) => (() => void)|void;
export type EventEmitter = {emit:EmitType, subscribe: SubscribeType};
export default function createEventEmitter():EventEmitter {
    let listeners = new Set<EmitType>();

    const subscribe:SubscribeType = (listener:EmitType) => {
        if (listeners) {
            listeners.add(listener);

            return function unsubscribe() {
                listeners.delete(listener);
            };
        }
    }

    const emit:EmitType = (value:any) => {
        if (listeners) {
            listeners.forEach((listener) => {
                listener(value);
            });
        }
    }


    return { subscribe, emit };
}

