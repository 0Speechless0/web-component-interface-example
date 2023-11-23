
import {ref, type Ref} from "vue";

import type { IAPIRegister } from "./interface/IAPIRegister";
import {axiosInstance as clientInstance} from "./apiFrameworkTest";


export function useAPIRegister<T>() : IAPIRegister<T>
{
	const APIRegisterPool =ref() ;

	function registerAPI(action : T) : void
	{
		APIRegisterPool.value = action;
	}
	function execuateAPI(actionName : string, params : {}) : any
	{	
		return APIRegisterPool.value[actionName](params, clientInstance);
	}

	function getClientInstance()
	{
		return clientInstance;
	}
	return {
		APIRegisterPool,
		registerAPI,
		execuateAPI,
		getClientInstance
	}

}