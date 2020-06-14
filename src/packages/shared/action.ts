import { Feature } from "./feature";

export interface Action<P> {
    type: string;
    payload: P;
    error?: boolean;
}

function actionFactory<P>(name: string, error: boolean = false): (payload: P) => Action<P> {
    const factory = (payload: P) => ({
        type: name,
        error,
        payload,
    });

    setActionName(factory, name);
    return factory;
}

const getName = (name: string, feature: Feature) => `${feature}.${name}`;

// tslint:disable-next-line:no-any
export const setActionName = (action: any, name: string) => {
    action.toString = () => name;
    action.type = name;
};

export interface DataActionFactory<SuccessPayload, ErrorPayload> {
    success: (payload?: SuccessPayload) => Action<SuccessPayload>;
    error: (errorPayload?: ErrorPayload) => Action<ErrorPayload>;
}

function withLogger<P>(
    internalCreateAction: (payload: P) => Action<P>,
    type: string
): (payload: P) => Action<P> {
    const factory = (payload: P) => internalCreateAction(payload) as Action<P>;

    setActionName(factory, type);
    return factory;
}

// tslint:disable-next-line: only-arrow-functions
export const createActionFactory = function <Payload = void>(
    name: string,
    feature: Feature
): (payload?: Payload) => Action<Payload> {
    name = getName(name, feature);
    return withLogger<Payload>(actionFactory<Payload>(name), name);
};

export const createActionFactoryForFeature = (feature: Feature) => (name: string) => createActionFactory(name, feature);

export function createDataActionFactory<Payload, ErrorPayload>(
    name: string,
    feature: Feature
): DataActionFactory<Payload, ErrorPayload> {
    name = getName(name, feature);
    return {
        success: withLogger<Payload>(actionFactory<Payload>(name), name),
        error: withLogger<ErrorPayload>(actionFactory<ErrorPayload>(name, true), name),
    };
}