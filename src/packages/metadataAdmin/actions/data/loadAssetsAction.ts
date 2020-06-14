import { createActionFactory, Action, DataActionFactory, createDataActionFactory, Feature } from "../../../shared";
import { Asset } from "./../../models/metadataAdminModels";

export const loadAssetsCompletedAction = createDataActionFactory<Asset[], Error>(
    "LoadAssetsCompletedAction",
    Feature.MetadataAdmin
);
