import { Asset } from "./models/metadataAdminModels"

export interface MetadataAdminDataState {
    readonly searchModuleState: SearchModuleDataState;
}

export type Module = "" | "search" | "delete" | "uploadProgram" | "importProgress" | "utils";

export interface MetadataAdminViewState {
    currentModule: Module;
    searchModule: SearchModuleViewState
}

export interface MetadataAdminState {
    view: MetadataAdminViewState;
    data: MetadataAdminDataState;
}


export interface SearchModuleDataState {
    readonly assets: Asset[];
}

export interface SearchModuleViewState { }

export interface SearchModuleState {
    view: SearchModuleViewState;
    data: SearchModuleDataState;
}