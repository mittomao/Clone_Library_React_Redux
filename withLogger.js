export default function withLogger(reducer) {
    return (prevState, action, args) => {
        console.group(action);
        console.table({
            'Prev State': prevState,
            'Action': action,
            'arguments': args
        });
        const nextState =  reducer(prevState, action, args);
        console.log('Next State', nextState);
        console.groupEnd();
        return nextState;
    }
}