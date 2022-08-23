
const mysql = require('mysql2');
 
  var conn;
  conn=mysql.createPool({
    host: "us-cdbr-east-05.cleardb.net",
    user: "b1db846b652ca4",
    password: "7311b9fe",
    database: "heroku_76a113fe11817a7",
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0
  });

  conn.getConnection(function(err){
    if(!!err){
      console.log(err);
      setTimeout(conn, 2000);
    }else{
      console.log('Connected!:)');
    }
  });
  // conn.connect(function(err){
  //   if(!err){
  //     console.log(err);
  //     setTimeout(conn, 2000);
  //   }else{
  //     console.log('Connected!:)');
  //   }
  // });

  conn.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      conn;                        // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });

   




















  // var  handleDisconnect =()=> {
  //   connection = mysql.createConnection(db_config); // Recreate the connection, since
  //                                                   // the old one cannot be reused.
  
  //   connection.connect(function(err) {              // The server is either down
  //     if(err) {                                     // or restarting (takes a while sometimes).
  //       console.log('error when connecting to db:', err);
  //       setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
  //     }                                     // to avoid a hot loop, and to allow our node script to
  //   });                                     // process asynchronous requests in the meantime.
  //                                           // If you're also serving http, display a 503 error.
  //   connection.on('error', function(err) {
  //     console.log('db error', err);
  //     if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
  //       handleDisconnect();                         // lost due to either server restart, or a
  //     } else {                                      // connnection idle timeout (the wait_timeout
  //       throw err;                                  // server variable configures this)
  //     }
  //   });
  // } 

module.exports = conn;