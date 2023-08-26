import { Component ,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
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
  constructor(private http:HttpClient,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    console.log('Id is Before'+this.id);
    
    this.route.paramMap.subscribe(params=>{
      console.log('Id is After'+this.id);
      const idParam=params.get("id");
      //const idParam=params.get('client_id');
      console.log('Id is '+idParam);
      if(idParam!== null){
        this.id=+idParam;
        console.log('IdParam is '+idParam);
        this.fetchClient();
      }
      else{
        console.log("id is missing or null");
      }
    })
  }
  fetchClient(){
    this.http.get('http://localhost:3000/getClient/'+this.id).subscribe((response:any)=>
    {
      const client=response[0];
      this.name=client.name,
    this.email=client.email,
    this.address=client.address,
   this.password=client.password,
    this.repeatPassword=client.repeat_password,
    this.meetingTopic=client.meeting_topic,
    this.numberOfPeople=client.number_of_people,
    this.startTime=client.start_time;
    },
    (error)=>{console.error('Error fetching the Client Details',error);}
    )
  }
  
  updatedSchedule(){
    const client={
    id:this.id,
    name:this.name,
    email:this.email,
    address:this.address,
    password:this.password,
    repeat_password:this.repeatPassword,
    meeting_topic:this.meetingTopic,
    number_of_people:this.numberOfPeople,
    start_time:this.startTime
    }
    this.http.put('http://localhost:3000/updateClient',client).subscribe((response:any)=>
    {
      this.message=response.message;
      this.router.navigate(['/view'])
    },

    (error)=>{console.error('Error Updating the Client Details',error);}
    )
  }

}
