// reflect-metadata to fix a bug: the decorator on the class has access to the
import 'reflect-metadata'
import { injectable } from 'inversify'
import { IFetchUsersService } from '../interfaces/IFetchUsersService'

@injectable()
export class FetchUsersService implements IFetchUsersService {
  private _users: any = []

  public get users(): any {
    return this._users
  }

  public fetchUsers(): any {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        console.log('USERS FETCHED: ', json)
        this._users = json
      })
  }
}
