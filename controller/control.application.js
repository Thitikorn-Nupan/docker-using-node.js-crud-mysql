import Logging from "../log/logging.js";
import {modulesApi} from "../service/modules.api.js";
import RouterBooks from "../router/router.books.js";

class ControlApplication {

    log = null
    router = null
    app = null

    constructor() {
        this.log = new Logging().log
        this.router = new RouterBooks()
        this.app = modulesApi.application
    }

    display () {
        this.app.use('/api/books',this.router.getRouterBooks()) // initial router books
        this.app.listen(8000,(error) => {
            if (!error) {
                this.log.info(`You're on port 8000`)
            }
            else {
                this.log.warn(error.message)
            }
        })
    }
}

new ControlApplication().display()

