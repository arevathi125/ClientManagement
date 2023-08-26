import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.css']
})
export class ViewClientComponent implements OnInit{
  clients:any[]=[];
  message:String='';
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.fetchClient();
  }
  fetchClient(){
    this.http.get('http://localhost:3000/getClients').subscribe((response:any)=>
    {this.clients=response},
    (error)=>{console.error('Error fetching the client',error);}
    );
    }

    deleteClient(client_id:number){
      if(confirm('Are you sure to delete this meeting Schedule?')){
        this.http.delete('http://localhost:3000/deleteClient/'+client_id).subscribe((response:any)=>
        {this.message=response.meassage;
        this.fetchClient();},
        (error)=>{console.error('Error fetching the client',error);}
        );
      }
    }
}
