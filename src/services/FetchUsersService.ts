// reflect-metadata to fix a bug: the decorator on the class has access to the
import "reflect-metadata";
import { inject, injectable } from "inversify";
import { resolve } from "inversify-react";
import { IFetchUsersService } from "../Interfaces/IFetchUsersService";
import { ICounterService } from "../Interfaces/ICounterService";

@injectable()
export class FetchUsersService implements IFetchUsersService {
  @resolve("counterServiceProvider") // THIS SHOULD be enough to inject counterServiceProvider into this class?
  private _counterService: ICounterService;
  private _users: any = [];

  constructor() {
    console.log("****** HERE ******");
    // console.log(this._counterService?.count);
  }

  public get users(): any {
    return this._users;
  }

  public fetchUsers(): any {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log("USERS FETCHED: ", json);
        this._users = json;
      });
  }
}
