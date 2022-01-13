// reflect-metadata to fix a bug: the decorator on the class has access to the
import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import { IFetchUsersService } from '../interfaces/IFetchUsersService'
import { ICounterService } from '../interfaces/ICounterService'

@injectable()
export class FetchUsersService implements IFetchUsersService {
  // DEPENDENCY INJECTION --> CounterService being injected:
  @inject('counterServiceProvider') public _counterService: ICounterService

  private _users: any = []

  public get users(): any {
    return this._users
  }

  constructor(public injectedCounterServiceCount: number = 0) {}

  public fetchUsers(): any {
    console.log(
      'CounterService is being injected into FetchUsersService! this._counterService.count: ',
      this._counterService.count
    )
    this.injectedCounterServiceCount = this._counterService.count

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        console.log('USERS FETCHED: ', json)
        this._users = json
      })
  }
}
