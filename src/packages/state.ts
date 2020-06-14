import { AppState } from "./app";
import { MetadataAdminState } from "./metadataAdmin";


export interface RiksTvAdminPortal {
    appState: AppState
    metadataAdmin: MetadataAdminState;
}