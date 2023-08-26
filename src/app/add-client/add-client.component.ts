import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { response } from 'express';
//import { response } from 'express';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit{
  id:number=0;
  name:String='';
  email:String='';
  address:String='';
  password:String='';
  repeatPassword:String='';
  meetingTopic:String='';
  numberOfPeople:number=0;
  startTime:String='';
  message:string='';
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    
  }
register(){
  const client={
    id:this.id,
    name:this.name,
    email:this.email,
    address:this.address,
    password:this.password,
    repeatPassword:this.repeatPassword,
    meetingTopic:this.meetingTopic,
    numberOfPeople:this.numberOfPeople,
    startTime:this.startTime
  
  };

  console.log("hi");
  console.log("Client1",client);
    this.http.post('http://localhost:3000/addClient',client)
    .subscribe((response:any)=>
    //.subscribe((response:any)=>
    { 
      this.message = response.message;
      console.log(this.message);
    },
    (error)=>{console.error('Error adding the product',error);}
  );
}
}
 /* console.log("Client",client);
  this.http.post('http://localhost:3000/addClient',client).subscribe((response:any)=>
  // {this.message=response.message}
  // (error)=>{console.error('Error adding the client',error);}
  console.error('Error adding the client'));
  console.log("Hi")
  
  
}
} */
