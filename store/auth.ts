import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

type User = string | null

@Module({ namespaced: true, name: 'auth', stateFactory: true })
export default class Auth extends VuexModule { 
    private user = null 

    get getUser() { 
        return this.user
    }

    @Mutation
    SET_AUTH_USER({ authUser, claims }) {
        if (authUser) {
            this.user = authUser.email
        } else {
            this.user = null
        }        
    }



  
}