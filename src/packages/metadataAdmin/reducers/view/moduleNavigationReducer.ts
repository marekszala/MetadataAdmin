import { buildReducer } from "../../../shared";
import { Module } from "../../state";
import { moduleMenuClickedAction } from "../../actions/user/switchModuleActions";

export default buildReducer<Module>()
    .handle(moduleMenuClickedAction, (_, action) => action.payload)
    .done("search");