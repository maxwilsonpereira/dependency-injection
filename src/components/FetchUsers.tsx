// Functional component version updating some state will ONLY WORK with a SINGLETON,
// otherwise, the state will always be created again.
// If you are not updating a state on the injected class, than it doesn't need to be a singleton.

import { useState, useEffect } from 'react'
import { container } from '../inversify.config'
import { IFetchUsersService } from '../interfaces/IFetchUsersService'

const FetchUsers: React.FunctionComponent = () => {
  // REACT ONLY ACCEPTS PROPERTY INJECTION! NO CONSTRUCTOR INJECTION!
  const _fetchUsersService: IFetchUsersService =
    container.get<IFetchUsersService>('fetchUsersServiceProvider')

  const [usersFetched, setUsersFetched] = useState(_fetchUsersService.users)

  useEffect(() => {
    _fetchUsersService.fetchUsers()
  }, [])

  return (
    <div>
      <h2>Dependency Injection</h2>
      <p>
        Count is a variable from CounterService that is being injected into
        FetchUsersService:
      </p>
      COUNT (from CounterService):{' '}
      {_fetchUsersService.injectedCounterServiceCount}
      <hr />
      <p>
        Fetch Users Component is using Dependency Injection to fetch the users
        from <b>https://jsonplaceholder.typicode.com/users:</b>
      </p>
      <button
        style={{ margin: '10px 0' }}
        type="button"
        className="buttonMax"
        onClick={() => setUsersFetched(_fetchUsersService.users)}
      >
        SHOW FETCHED USERS
      </button>
      {usersFetched.map((user: any) => (
        <p
          key={user.id}
          style={{ padding: '0px 20px', margin: 0, color: 'darkred' }}
        >
          {user.name}
        </p>
      ))}
    </div>
  )
}
export default FetchUsers
