
import {ref} from "vue";
import type {IStore}  from "./interface/IStore";
import type { IAPIRegister } from "./interface/IAPIRegister";

const APIRegisterPool : any = ref({}) ;

export function useAPIRegister<T>(controllerName : string ) : IAPIRegister
{



	function registerAPI<T extends {}>(action : T) : void
	{
		APIRegisterPool.value[controllerName] = action;
	}
	function getControllerAction<T extends {}>(controllerName : string) : T
	{
		return APIRegisterPool.value[controllerName];
	}
	const a =ref(1);
	return {
		a,
		registerAPI,
		getControllerAction
	}

}