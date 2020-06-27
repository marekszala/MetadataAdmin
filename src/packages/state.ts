import { AppState } from "./app";
import { MetadataAdminState } from "./metadataAdmin";
import { RouterState } from 'connected-react-router';


export interface RiksTvAdminPortal {
    appState: AppState
    router: RouterState,
    metadataAdmin: MetadataAdminState;
}