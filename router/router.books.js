import {modulesApi} from '../service/modules.api.js'
import CommandSql from "../service/command.sql.js";
import ConnectDatabase from "../config/connect.database.js";
import Logging from "../log/logging.js";

class RouterBooks {

    log = null
    routerBooks = null
    connect = null

    constructor() {
        this.log = new Logging().logLabel('router.books.js')
        // set meddler ware
        this.routerBooks = modulesApi.router
        this.routerBooks.use(modulesApi.bodyParser.json())
        this.routerBooks.use(modulesApi.bodyParser.urlencoded({extended:true}))
        //
        this.connect = new ConnectDatabase().connect
    }

    getRouterBooks() {
        function getResponseJson(status,result) {
            return { status: status, result : result}
        }

        this.routerBooks.get('/romance/reads' ,(req,res) => {
            this.connect.query(CommandSql.readsRomance, function (err, result) {
                if (!err) {
                    res.status(202).json(getResponseJson("accepted",result))
                } else {
                    throw err
                }
            })
            this.log.info('access /books/romance/reads path it was done')
        })

        this.routerBooks.post('/romance/create' ,(req,res)=> {
            let {rid , title , price} = req.body
            this.log.info(`${rid} ${title} ${price}`)
            this.connect.query(CommandSql.createRomance, [rid,title,price] ,function (err, result) {
                if (!err) {
                    res.status(201).json(getResponseJson("create",result))
                } else {
                    throw err
                }
            })
            this.log.info('access /books/romance/create path it was done')
        })

        this.routerBooks.put('/romance/update/(:rid)' ,(req,res)=> {
            let {title , price} = req.body
            let rid = req.params['rid']
            this.connect.query(CommandSql.updateRomance, [title,price,rid] ,function (err, result) {
                if (!err) {
                    res.status(202).json(getResponseJson("accepted",result))
                } else {
                    throw err
                }
            })
            this.log.info('access /romance/update/(:rid) path it was done')
        })

        this.routerBooks.delete('/romance/delete/(:rid)' ,(req,res)=> {
            let rid = req.params['rid']
            this.connect.query(CommandSql.deleteRomance, [rid] ,function (err, result) {
                if (!err) {
                    res.status(200).json(getResponseJson("ok",result))
                } else {
                    throw err
                }
            })
            this.log.info('access /books/romance/delete/(:rid) path it was done')
        })
        return this.routerBooks
    }
}

export default RouterBooks