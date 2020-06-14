import { Action, createActionFactory, Feature } from "../../../shared";
import { Module } from "../../state";

export const moduleMenuClickedAction = createActionFactory<Module>("ModuleMenuClicked", Feature.Framework);
