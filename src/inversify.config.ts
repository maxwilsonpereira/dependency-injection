// Mapping the classes through their identifiers:

// reflect-metadata to fix a bug: the decorator on the class has access to the
// reflect-metadata library:
// CHECK IF IT'S STILL NEEDED TO BE IMPORTED!
import 'reflect-metadata';
import { Container } from 'inversify';
import { CounterService } from './services/CounterService';

let container = new Container();
// on a request for CounterService, create a instance of CounterService:
// container.bind(CounterService).toSelf();
// ***** MAKE IT A SINGLETON *****
container.bind(CounterService).toSelf().inSingletonScope();
export { container };
