
import {ref} from "vue";

import type { IAPIRegister } from "./interface/IAPIRegister";



export function useAPIRegister<T>() : IAPIRegister<T>
{
	const APIRegisterPool = ref() ;

	function registerAPI(action : T) : void
	{
		APIRegisterPool.value = action;
	}
	function execuateAPI() : T
	{
		return APIRegisterPool.value;
	}
	return {
		registerAPI,
		execuateAPI
	}

}