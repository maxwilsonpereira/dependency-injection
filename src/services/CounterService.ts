// reflect-metadata to fix a bug: the decorator on the class has access to the
import "reflect-metadata";
import { injectable } from "inversify";
import { ICounterService } from "../Interfaces/ICounterService";

@injectable()
export class CounterService implements ICounterService {
  private _count: number = 0;

  public get count(): number {
    return this._count;
  }

  public increment(): void {
    this._count++;
  }
}
