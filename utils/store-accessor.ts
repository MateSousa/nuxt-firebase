import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Auth from '@/store/auth'

/* eslint-disable import/no-mutable-exports */

let auth: Auth

const initializeStores = (store: Store<any>): void => {
  auth = getModule(Auth, store)
}

export { initializeStores, auth  }