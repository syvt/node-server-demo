const OracleDAO = require("./db/oracle/oracle-dao");

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


function selectDB(){
    db.getRsts("select * \
    from traffic_owner.vlr_online_full\
     where rownum<=5")
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    });
}

function selectDB1(){
    
    db.getAllRsts("select * \
    from traffic_owner.vlr_online_full\
     where rownum<=2")
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    });
}



function callFunction(){
    db.executeJavaFunction('test',['abc',123])
    .then(data=>{
        console.log(data);
    })
    
}

setTimeout(() => {
    //selectDB();
    callFunction();
}, 3000);
