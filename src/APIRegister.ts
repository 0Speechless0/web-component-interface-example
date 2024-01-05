
import {ref, type Ref} from "vue";

import type { IAPIRegister } from "./interface/IAPIRegister";
import {axiosInstance as clientInstance} from "./test/apiFrameworkTest";


export function useAPIRegister<T>() : IAPIRegister<T>
{

	const APIRegisterPool = ref();

	APIRegisterPool.value = {};

	function registerAPI<F>(actionEnum: F , action : (params : any )  => void  ) : void
	{
		APIRegisterPool.value[actionEnum] = action;
	}
	function execuateAPI<F>(actionEnum : F, params : {}) : any
	{	
		return APIRegisterPool.value[actionEnum](params, clientInstance);
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