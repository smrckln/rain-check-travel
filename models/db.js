var sqlite = require('sqlite3').verbose();
var db = new sqlite.Database('./rtt.db');

var db_module = {
    prepare: prepare_stmt,
    run: run_stmt,
    init: init_db,
    data: _data
};

var _data = {"data": [{
            "name": "Pennsylvania State University",
            "latitude": 40.8048496290786,
            "longitude": -77.861618310732
        }]};

function init_db() {
    db.run("CREATE TABLE if not exists users (id INTEGER NOT NULL PRIMARY KEY, username TEXT, password TEXT)");
    db.run("CREATE TABLE if not exists places (id INTEGER NOT NULL PRIMARY KEY, user_id INTEGER, name TEXT, longitude DECIMAL, latitude DECIMAl, FOREIGN KEY(user_id) references users(id))");
}

function prepare_stmt(stmt) {

}

function run_stmt(stmt) {

}

module.exports = db_module;
