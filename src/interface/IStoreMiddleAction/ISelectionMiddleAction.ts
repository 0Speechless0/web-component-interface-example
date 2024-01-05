import type { Ref } from "vue";
import type { IAPIRegister } from "../IAPIRegister";
import type {IOption} from "../IOption"
import type { IStore } from "../IStore";
export interface ISelectionMiddleAction<T> extends IStore<T>
{
    setParameter(params : {}) : void;
    Get(prefix? : string ) : void;
    List : Ref<Array<IOption> >;
}