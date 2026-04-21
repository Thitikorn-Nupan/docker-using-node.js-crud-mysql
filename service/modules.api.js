import bodyParser from 'body-parser'
import ep from 'express'

class ModulesApi {
    // remember getter in js is not a method So don't use -> ()
    static get app() {
        return ep()
    }

    static get router () {
        return ep.Router()
    }
}

export const modulesApi= {
    express : ep ,
    bodyParser : bodyParser ,
    application : ModulesApi.app,
    router : ModulesApi.router
}