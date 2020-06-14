export type Route = "" | "metadataAdmin";

export interface NavigationState {
    currentRoute: Route;
}

export interface AppViewState {
    readonly navigationState: NavigationState;
}

export interface AppDataState {
    readonly isLoggedIn: boolean;
}

export interface AppState {
    view: AppViewState;
    data: AppDataState;
}
