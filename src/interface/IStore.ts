import type { IAPIRegister } from "./IAPIRegister";

export interface IStore<T> {
  APIRegister : IAPIRegister<T>;
}