export interface IAPIRegister<T> {
    [prop: string]: unknown;
    execuateAPI<F>(actionEnum : F, params :{} ) : any;
    registerAPI<F>(actionEnum : F, action : (params : any )  => void) : void;
    getClientInstance() : any;
    APIRegisterPool : any;
}