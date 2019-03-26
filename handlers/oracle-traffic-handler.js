const OracleDAO = require("../db/oracle/oracle-dao");

const dbConfig =
                {
                    poolAlias:'cuongdqPool',//ten cua pool
                    user:'bigdata_owner',      //username to oracle
                    password:'bigdata',        //password to oracle
                                            //connection String to oracle = tnsname
                    connectString:"(DESCRIPTION =\
                                        (ADDRESS_LIST =\
                                          (ADDRESS = (PROTOCOL = TCP)(HOST = 10.151.59.25)(PORT = 1521))\
                                        )\
                                        (CONNECT_DATA =\
                                          (SERVER = DEDICATED)\
                                          (SERVICE_NAME = traffic)\
                                        )\
                                      )",
                    poolMax: 2,             //so luong pool max
                    poolMin: 2,             //so luong pool min
                    poolIncrement: 0,       //so luong pool tang len neu co
                    poolTimeout: 4          //thoi gian pool timeout
                }

const db = new OracleDAO(dbConfig);



const getVlrOnline = (req,res,next) =>{

    db.getRsts("select * \
    from traffic_owner.vlr_online_full\
     where 1=1\
     "+ (req.paramS&&req.paramS.isdn?"and isdn = '"+req.paramS.isdn+"'":"") +"\
     "+ (req.paramS&&req.paramS.cell_name?"and cell_name = '"+req.paramS.cell_name+"'":"") +"\
     "+ (req.json_data&&req.json_data.isdn?"and isdn = '"+req.json_data.isdn+"'":"") +"\
     "+ (req.json_data&&req.json_data.cell_name?"and cell_name = '"+req.json_data.cell_name+"'":"") +"\
     and rownum<=5")
    .then(data=>{
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8' });          
        //res.end(JSON.stringify(data));
        res.end(JSON.stringify(data));
    })
    .catch(err=>{
        res.writeHead(403, {'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(err));
    });


    
}


module.exports = {
    getVlrOnline: getVlrOnline
};