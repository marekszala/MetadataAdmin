import { AppState } from "./app";
import { MetadataAdminState } from "./metadataAdmin";
import { RouterState } from 'react-router-redux';


export interface RiksTvAdminPortal {
    appState: AppState
    router: RouterState,
    metadataAdmin: MetadataAdminState;
}