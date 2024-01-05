import { ref, computed, type Ref } from "vue";
import {useAPIRegister } from "../APIRegister";
import  {SelectionAction }  from "../interface/StoreActionEnum/SelectionActionEnum";
import type {ISelectionMiddleAction }  from "../interface/IStoreMiddleAction/ISelectionMiddleAction";
import type { IOption } from "@/interface/IOption";
function compare(a :any , b : any) {
    if ( parseInt(a.Value) <parseInt(b.Value) ) {
      return -1;
    }
    if (parseInt(a.Value) > parseInt(b.Value) ) {
      return 1;
    }
    // a 必須等於 b
    return 0;
  }



// const Map = ref({});
const APIRegister = useAPIRegister<SelectionAction>();

//選項功能模組 :


export function useSelectionStore() : ISelectionMiddleAction<SelectionAction> {

    //for each item in List 
    //  Value : 選項值
    //  Text  : 選項顯示文字

    const List : Ref<Array<IOption> > = ref([]);
    const param = ref({});
    function setParameter(_param : {}) : void
    {
      param.value  = _param;
      
    }
    async function Get(prefix= "") : Promise<void>
    {

        List.value  =  await APIRegister
          .execuateAPI<SelectionAction>(SelectionAction.Get, param.value)
        // Map.value =
        // List.value.reduce((a : any, c : any)=>{ 
        //     a[prefix+ c.Value] = c.Text
        //     return a ;   
        // }, {});

    }

    // async function GetSelection(route, prefix= "")
    // {

    //     List.value = (await window.myAjax.post(route, param.value)).data;
    //     Map.value =
    //     List.value.reduce((a, c)=>{ 
    //         a[prefix+ c.Value] = c.Text
    //         return a ;   
    //     }, {});

    //     List.value.sort(compare);
    //     console.log(List.value);
    //     return List
    // }
    

    return {

        //選項清單
        Get,
        List,
        setParameter,
        APIRegister
    }

}