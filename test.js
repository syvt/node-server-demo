var oracledb = require('oracledb');  
  
oracledb.getConnection({  
     user: "SYVT",  
     password: "syvt",  
     // connectString: "10.151.59.25:1521:traffic"
     connectString: "(DESCRIPTION =(ADDRESS_LIST =(ADDRESS = (COMMUNITY = tcp.world)(PROTOCOL = TCP)(HOST = 10.151.59.25)(PORT = 1521)))(CONNECT_DATA = (SID = traffic)))"
}, function(err, connection) {  
     if (err) {  
          console.error(err.message);  
          return;  
     }  
     connection.execute( "SELECT id FROM tmp_file_input WHERE id = 1",  
     [],  
     function(err, result) {  
          if (err) {  
               console.error(err.message);  
               doRelease(connection);  
               return;  
          }  
          console.log(result.metaData);  
          console.log(result.rows);  
          doRelease(connection);  
     });  
});  
  
function doRelease(connection) {  
     connection.release(  
          function(err) {  
               if (err) {console.error(err.message);}  
          }  
     );  
}