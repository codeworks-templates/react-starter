import { observer } from "mobx-react-lite"
import React from "react"
import { Link } from "react-router-dom"
import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"

function Login() {

  function login() {
    console.log(AppState)
    // AuthService.loginWithRedirect()
    setTimeout(() => {
      AppState.account = new Account({
        name: 'Jimmy Faker',
        picture: 'https://thiscatdoesnotexist.com',
        email: 'jimmy@faker.com',
        id: 'faker123'
      })
      AppState.user = AppState.account
      localStorage.setItem('user-token', JSON.stringify(true))

    }, 1000)
  }

  function logout() {
    AppState.account = null
    AppState.user = null
    localStorage.removeItem('user-token')

    // AuthService.logout({})
  }

  const notAuthenticated = (
    <button className="btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0" onClick={login}>Login</button>
  )


  const authenticated = (
    <div className="dropdown dropstart my-2 my-lg-0">
      <div className="bg-dark border-0 selectable no-select" data-bs-toggle="dropdown"
        aria-expanded="false">
        <div>
          <img src={AppState.account?.picture || AppState.user?.picture} alt="account photo" height="40" className="rounded" />
        </div>
      </div>
      <div className="dropdown-menu dropdown-menu-lg-left p-0" aria-labelledby="authDropdown">
        <div className="list-group">
          <Link to={'Account'}>
            <div className="list-group-item dropdown-item list-group-item-action">
              Manage Account
            </div>
          </Link>
          <div className="list-group-item dropdown-item list-group-item-action text-danger selectable" onClick={logout}>
            <i className="mdi mdi-logout"></i>
            logout
          </div>
        </div>
      </div>
    </div>
  )



  return (
    <div>

      <span className="navbar-text">

        {!AppState.account?.id ? notAuthenticated : authenticated}

      </span>
    </div>
  )
}

export default observer(Login)