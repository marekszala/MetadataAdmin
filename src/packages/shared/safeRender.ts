const reportError = (componentName: string, error: Error): void => {
    const stackTrace = error.stack || "";
    const errorMessage = `The component "${componentName}" had an error during render.
Please fix this immediately, even if you don't own this component.
This message is designed to be annoying so that the problem is addressed.
StackTrace:
${stackTrace}.`;

    // tslint:disable-next-line: no-console
    console.error(errorMessage);
    // tslint:disable-next-line: no-console
    console.error(error);
};

export type propsAndStateFn<P, S> = (props?: P, state?: S) => JSX.Element;
export function safeRender<P, S>(fn: propsAndStateFn<P, S>, componentName: string): propsAndStateFn<P, S> {
    const component = (props?: P, state?: S) => {
        let result: JSX.Element;
        try {
            result = fn(props, state);
        } catch (error) {
            // tslint:disable-next-line:no-any
            reportError(componentName || (fn as any).name, error);
            result = null;
        }

        return result;
    };

    // tslint:disable-next-line:no-any
    (component as any).displayName = componentName;

    return component;
}

export function safeRenderComponentClass(target: Object, _propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    // NOTE: Do not use arrow syntax here. Use a function expression in
    // order to use the correct value of `this` in this method (see notes below)
    // tslint:disable-next-line:typedef
    descriptor.value = function (...args: Object[]) {
        // tslint:disable-next-line:no-any
        return safeRender(originalMethod.bind(this), (target.constructor as any).name).apply(this, args);
    };

    return descriptor;
}
