import mysql from "mysql2";
import {information} from "./details.database.js";

class ConnectDatabase {

    connect = null

    constructor() {
        this.#initConnect()
    }

    #initConnect () {
        this.connect = mysql.createConnection({
            host : information.host,
            user : information.user,
            password : information.password ,
            port : information.port,
            database : information.database
        })
    }

}

/**
new ConnectDatabase().connect.query('select * from romance', function (err, result, fields) {
    // when select table result arg it'll store value of table
    if (!err) {
        console.log(result)
    } else {
        console.log(err.message)
    }
})
*/

export default ConnectDatabase