export interface IAPIRegister {
    [prop: string]: unknown;
    getControllerAction<T extends {}>(name : string ) : T;
    registerAPI<T extends {}>(action : T) : void;
    
}