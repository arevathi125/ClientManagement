//dependencies
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mysql=require('mysql');

//define the express operation
const app=express();
const port=3000;

//defining the cors-cross origin by receiving the data in json format
app.use(cors());
app.use(bodyParser.json())

//establish the connection with the DB
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Dhakshan2011$',
    database:'final_project'
});

//verifying whether db is connected or not
db.connect(err=>{
    if(err){
   console.error('Connection is not established with the DB',err)
    }
    else{
        console.log('Connected to DB');
    }
});

//Defining the Port
app.listen(port,()=>{
    console.log('Server port established on 3000')
});

//Defining the API routes
//To get all Clients
app.get('/getClients',(req,res)=>{
const sql='Select * from Client';
db.query(sql,(err,result)=>{
    if(err){
   console.log('Error in fetching the client',err);
   res.status(500).json({error:'An error occured'});
    }
    else{
     res.status(200).json(result);
    }
});
});

//To get single Client on id
app.get('/getClient/:id',(req,res)=>{
    const id=req.params.id;
   // const id=req.params.client_id;
    const sql='Select * from Client where client_id=?';
//db.query(sql,[id],(err,result)=>{
    db.query(sql,[id],(err,result)=>{
    if(err){
   console.log('Error in fetching the client',err);
   res.status(500).json({error:'An error occured'});
    }
    else{
     res.status(200).json(result);
    }
});
});

//To insert Clients into DB
app.post('/addClient',(req,res)=>{
const{id,name,email,address,password,repeatPassword,meetingTopic,numberOfPeople,startTime}=req.body;
console.log('startTime',startTime);
const sql='insert into Client values(?,?,?,?,?,?,?,?,?)';
console.log('sql',sql);
db.query(sql,[id,name,email,address,password,repeatPassword,meetingTopic,numberOfPeople,startTime],(err,result)=>{
    if(err){
   console.log('Error in adding the client',err);
   res.status(500).json({error:'An error occured'});
    }
    else{
     res.status(200).json({message:'Client Meeting Schedule added successfully'});
    }
});
});

//To Update Client 
app.put('/updateClient',(req,res)=>{
const{id,name,email,address,password,repeat_password,meeting_topic,number_of_people,start_time}=req.body;
const sql='update Client set name=?,email=?,address=?,password=?,repeat_password=?,meeting_topic=?,number_of_people=?,start_time=? where client_id=?';
db.query(sql,[name,email,address,password,repeat_password,meeting_topic,number_of_people,start_time,id],(err,result)=>{
    if(err){
   console.log('Error in Updating the client',err);
   res.status(500).json({error:'An error occured'});
    }
    else{
     res.status(200).json(result);
    }
});
});

//Deletion of Client on id
app.delete('/deleteClient/:id',(req,res)=>{
    const id=req.params.id;
    const sql='delete from Client where client_id=?';
db.query(sql,[id],(err,result)=>{
    if(err){
   console.log('Error in Deleting the client',err);
   res.status(500).json({error:'An error occured'});
    }
    else{
     res.status(200).json(result);
    }
});
});



