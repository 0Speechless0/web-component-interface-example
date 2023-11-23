import type { IOption } from "../interface/IOption";
import { useSelectionStore } from "../store/SelectionStore";
import {axiosInstance as clientInstance} from "./apiFrameworkTest";


useSelectionStore().APIRegister.registerAPI({

    Get: async (params: {}): Promise<IOption[]> => {

        return (await clientInstance.post("Unit/GetUnitList", params) ).data 
    }
})