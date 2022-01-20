// Mapping the classes through their identifiers:

// reflect-metadata to fix a bug: the decorator on the class has access to the
import 'reflect-metadata'
import { Container } from 'inversify'
import { CounterService } from './services/CounterService'
import { FetchUsersService } from './services/FetchUsersService'
import { ICounterService } from './interfaces/ICounterService'
import { IFetchUsersService } from './interfaces/IFetchUsersService'

let container = new Container()
// on a request for CounterService, create a instance of CounterService:
// container.bind(CounterService).toSelf();
// BINDING TO INTERFACE - THE BETTER WAY TO DO IT, so you can implement different interfaces!
container
  .bind<ICounterService>('counterServiceProvider')
  .to(CounterService)
  .inSingletonScope() // MAKE IT A SINGLETON: It will exist ONLY ONE instance of CounterService!

container
  .bind<IFetchUsersService>('fetchUsersServiceProvider')
  .to(FetchUsersService)
  .inSingletonScope()

// BINDING DIRECTLY TO THE SERVICE:
container.bind(CounterService).toSelf()
export { container }
