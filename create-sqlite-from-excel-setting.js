/** 
 * Vi du de chay khoi tao mot csdl sqlite tu file excel mau
 */

 //buoc 1: require 
const db_service = require("./db/sqlite3/excel-sqlite-service");

// const excelFilename = require('./db/sqlite3/sqlite-config').excel_structure;
// db_service.handler.createDatabase(excelFilename);


db_service.handler.db().getRsts('select * from mnp')
.then(data=>{console.log(data)})
.catch(err=>{console.log(err)});
