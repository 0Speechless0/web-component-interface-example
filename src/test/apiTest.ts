import type { IOption } from "../interface/IOption";
import { useSelectionStore } from "../store/SelectionStore";
import {axiosInstance} from "./apiFrameworkTest";


useSelectionStore().APIRegister.registerAPI({
    Get: async function (params: {}): Promise<IOption[]> {
        return (await axiosInstance.post("/Unit/GetList", params) ).data
    }
})