// reflect-metadata to fix a bug: the decorator on the class has access to the
// reflect-metadata library:
// CHECK IF IT'S STILL NEEDED TO BE IMPORTED!
import 'reflect-metadata';
import { injectable } from 'inversify';

@injectable()
export class CounterService {
  public count: number = 0;
  public increment(): void {
    this.count++;
  }
}
