import type { IOption } from "../IOption" 
export interface ISelectionAction {

    Get (params : {}) : Promise<IOption[]>;
}