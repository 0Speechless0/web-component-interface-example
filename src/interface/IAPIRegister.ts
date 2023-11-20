export interface IAPIRegister<T> {
    [prop: string]: unknown;
    execuateAPI() : T;
    registerAPI(action : T) : void;
    
}