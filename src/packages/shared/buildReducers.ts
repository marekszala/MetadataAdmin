import { Action, DataActionFactory } from "./action";
import { ActionCreator, Reducer } from "redux";

export type ActionReducer<State, Payload> = (state: State, action: Action<Payload>) => State;

export type StateReducersMap<T> = { [P in keyof T]: Reducer<{}> };

export function skipOnError<TState, TPayload>(reducer: ActionReducer<TState, TPayload>): ActionReducer<TState, TPayload> {
    return (state: TState, action: Action<TPayload>): TState => {
        return action.error ? state : reducer(state, action);
    };
}

export type builderObject<TState> = {
    handle: <TPayload>(action: ActionCreator<Action<TPayload>>, reducer: ActionReducer<TState, TPayload>) => builderObject<TState>;
    handleDataAction: <TPayload, EPayload>(
        action: DataActionFactory<TPayload, EPayload>,
        reducer: ActionReducer<TState, TPayload>,
        errorReducer?: ActionReducer<TState, EPayload>
    ) => builderObject<TState>;
    done: (initialState: TState) => ActionReducer<TState, {}>;
};

export function buildReducer<TState>(): builderObject<TState> {
    const map: { [action: string]: ActionReducer<TState, {}> } = {};
    return {
        handle<TPayload>(actionToReduce: ActionCreator<Action<TPayload>>, reducer: ActionReducer<TState, TPayload>): builderObject<TState> {
            const type = actionToReduce.toString();

            if (map[type]) {
                throw new Error(`Already handling an action with type ${type}`);
            }

            map[type] = reducer;
            return this;
        },
        handleDataAction<SuccessPayload, ErrorPayload>(
            action: DataActionFactory<SuccessPayload, ErrorPayload>,
            reducer: ActionReducer<TState, SuccessPayload>,
            errorReducer?: ActionReducer<TState, ErrorPayload>
        ): builderObject<TState> {
            const type = action.success.toString();

            if (map[type]) {
                throw new Error(`Already handling an action with type ${type}`);
            }

            map[type] = (state: TState, action: Action<SuccessPayload | ErrorPayload>): TState => {
                if (action.error) {
                    return errorReducer ? errorReducer(state, action as Action<ErrorPayload>) : state;
                } else {
                    return reducer(state, action as Action<SuccessPayload>);
                }
            };

            return this;
        },
        done(initialState: TState): ActionReducer<TState, Action<{}>> {
            const mapClone = { ...map };
            return (state: TState = initialState, action?: Action<{}>) => {
                const handler = mapClone[action.type];
                return handler ? handler(state, action) : state;
            };
        },
    };
}
