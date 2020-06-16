export type RiksTvApp = "" | "metadataAdmin" | "channelAdmin";

export interface NavigationState {
    currentRoute: RiksTvApp;
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
