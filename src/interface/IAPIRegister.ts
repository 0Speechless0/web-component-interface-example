export interface IAPIRegister<T> {
    [prop: string]: unknown;
    execuateAPI(actionName :string, params :{} ) : any;
    registerAPI(action : T) : void;
    getClientInstance() : any;
    APIRegisterPool : T;
}