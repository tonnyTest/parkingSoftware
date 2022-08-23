const express = require('express');
const router = express.Router();

const conn = require("../services/connect");

// Admin Login Api
router.post('/login', function(req, resp) {
	let email = req.body.email;
	let password = req.body.password;
	if (email && password) {
		conn.query('SELECT * FROM adminlg WHERE email = ? AND password = ?', [email, password], function(err, results, fields) {
			if (err) throw err;
			if (results) {
				resp.send('Login Successfully!');
			} else {
				resp.send('Incorrect Username and/or Password!');
			}			
			resp.end();
		});
	} else {
		resp.send('Please enter Username and Password!');
		resp.end();
	}
});


// User Permit Api To Store in DB
router.post('/permit', (req, resp)=> {
	console.log("backend" + req.body);
	const { name , contact,  officeNo, empType, vehicleType, regisNo, permit, slotNo, totalAmt } = req.body;
	conn.query(
		`INSERT INTO rm_permit_db (name, contact, office_no, employe_type, vehicle_type, registration_no, permit, slot_no, total_amt ) VALUES(?,?,?,?,?,?,?,?,?)`,
		[  name , contact,  officeNo, empType, vehicleType, regisNo, permit, slotNo, totalAmt ],
		(err, results) => { 
			if (err) {
			resp.send(err);
			} else {
			    if(results){
					resp.send("Permit generated successfully...!")
				}
			}		
		}
	);
});

// User Permit Api To Fetch Data from DB
router.get('/permit/data', (req, resp)=> {
	console.log("backend" + req.body);
     conn.query(`SELECT * FROM rm_permit_db` ,
		(err, results) => {
			if (err) {
			  resp.send(err);
			} else {
			    if(results){
					resp.send(results);
					console.log(results);
				}
			}		
		}
	);
});



//dummy api hit 
// router.get("/gateway", (req, resp)=>{
//     console.log("insert Data"); 
//     try{
//     //    const result =  req.body;
// 	   console.log(info);
// 	   resp.send(info);
// 	}catch(err)
// 	{
//     resp.send("err");
// 	}
// })

// Gateway Api To Fetch From DB
router.get("/gateway", (req, resp)=>{
    conn.query(`SELECT * FROM rm_gateway_data` ,
		(err, results) => {
			if (err) {
			resp.send(err);
			} else {
			    if(results){
					const lastArr = results[results.length - 1];
					// console.log("inside res data" + lastArr);
					// var last=JSON.stringify(lastArr);
					// var str = last.toString().replace(/\\/g, '');
					// var ash = JSON.parse(lastArr)
					// console.log("str " + ash);
					resp.send(JSON.parse(lastArr.iot_data));
					console.log(JSON.parse(lastArr.iot_data));
				}
			}		
		}
	);
})




//dummy api hit 
// router.get("/gateway", (req, resp)=>{
//     console.log("insert Data"); 
//     try{
//     //    const result =  req.body;
// 	   console.log(info);
// 	   resp.send(info);
// 	}catch(err)
// 	{
//     resp.send("err");
// 	}
// })

// Gateway Api To Fetch From DB
// router.get("/gateway", (req, resp)=>{
//     conn.query(`SELECT * FROM rm_data` ,
// 		(err, results) => {
// 			if (err) {
// 			resp.send(err);
// 			} else {
// 			    if(results){
// 					const lastArr = results[results.length - 1];
// 					// console.log("inside res data" + lastArr);
// 					// var last=JSON.stringify(lastArr);
// 					// var str = last.toString().replace(/\\/g, '');
// 					// console.log("str " + results);
// 					resp.send(lastArr);
// 				}
// 			}		
// 		}
// 	);
// })

// Gateway Api to Store Data in DB
// router.post("/api", (req, resp)=>{
// 	const occupancy = req.body; 
// 	console.log("node backend" + req.body);
// 	conn.query(
// 		`INSERT INTO rm_data(rm_block) VALUES(?)`,
// 		[occupancy],
// 		function (err, results) {
// 		if (err){
// 			resp.send(err);
// 		}
// 		else
// 		{  
// 			if(results)
// 			{
// 				resp.send(results);
// 				console.log("from node" + results)
// 			}
// 		}
// 		}
// 	);   
// })

router.post("/api", (req, resp)=>{
	const finalData = JSON.stringify(req.body); 
	console.log("node backend" + finalData);
	conn.query(
		`INSERT INTO rm_gateway_data(iot_data) VALUES(?)`,
		[finalData],
		function (err, results) {
		if (err){
			resp.send(err);
		}
		else
		{  
			if(results)
			{
				resp.send(results);
				console.log( results)
			}
		}
		}
	);
})


router.post("/api/parking-data", (req, resp)=>{
	const totalSlots = JSON.stringify(req.body); 
	console.log("api server parking display" + totalSlots);
	conn.query(
		`INSERT INTO rm_internal_display(iot_display) VALUES(?)`,
		[totalSlots],
		function (err, results) {
		if (err){
			resp.send(err);
		}
		else
		{  
			if(results)
			{
				resp.send(results);
				console.log( results)
			}
		}
		}
	);
})

// if(process.env.Node_ENV == "production"){
// 	// router.use(express.static("/client/build"));

	// router.use('/' , express.static(path.join(__dirname + "/client/build")));
	// router.get("*", (req , res) => {
	// 	res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
	// })

// }


// Gateway RFID Api to fetch Data from DB
router.get("/api/rfid-details", (req, resp)=>{
	const details = req.body; 
	console.log("rfid details" + details);
	conn.query(
		`SELECT * FROM rm_rfid_db`,
		(err, results) => {
			if (err) {
			resp.send(err);
			} else {
			    if(results){
					resp.send(results);
					console.log(results);
				}
			}		
		}
	);   
})


router.post("/rfid-users", (req, resp)=>{
	const {vehicleNo, vehicleTag, gateIn, timeIn, gateOut, timeOut, duration} = req.body; 
	console.log("rfid details" + req.body);
	conn.query(
		`INSERT INTO rm_rfid_db(vehicle_no , vehicle_tag, gate_in, time_in, gate_out, time_out, duration) VALUES(?,?,?,?,?,?,?)`,
		[vehicleNo, vehicleTag, gateIn, timeIn, gateOut, timeOut, duration ],
		function (err, results) {
		if (err){
			resp.send(err);
		}
		else
		{  
			if(results)
			{
				resp.send(results);
				console.log("from gateway rfid" + results)
			}
		}
		}
	);
})


module.exports = router;
