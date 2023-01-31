import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
      return AppState.account
    } catch (err) {
      throw new Error('HAVE YOU STARTED YOUR SERVER YET???')
    }
  }
}

export const accountService = new AccountService()