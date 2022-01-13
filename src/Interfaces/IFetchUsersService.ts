export interface IFetchUsersService {
  get users(): any[]
  injectedCounterServiceCount: number
  fetchUsers(): void
}
