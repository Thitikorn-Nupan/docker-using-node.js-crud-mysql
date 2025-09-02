import bodyParser from 'body-parser'
import ep from 'express'

class ModulesApi {
    // remember getter in js is not a method So don't use -> ()
    get app() {
        return ep()
    }

    get router () {
        return ep.Router()
    }

}

const modules = new ModulesApi()

export const modulesApi= {
    express : ep ,
    bodyParser : bodyParser ,
    application : modules.app,
    router : modules.router
}