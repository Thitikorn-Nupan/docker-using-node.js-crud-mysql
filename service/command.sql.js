class CommandSql {
    static readsRomance = 'select * from romances';
    static createRomance = 'insert into romances(rid,title,price) values (?,?,?)';
    static updateRomance = 'update romances set title = ? , price = ? where rid = ?';
    static deleteRomance = 'delete from romances where rid = ?';
}

export default CommandSql