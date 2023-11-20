import type { IOption } from "../interface/IOption";
import { useSelectionStore } from "../store/SelectionStore";
import "./apiFrameworkTest";


useSelectionStore().APIRegister.registerAPI({
    Get: function (params: {}): Promise<IOption[]> {
        throw new Error("Function not implemented.");
    }
})