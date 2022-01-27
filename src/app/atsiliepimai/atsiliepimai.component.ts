import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atsiliepimai',
  templateUrl: './atsiliepimai.component.html',
  styleUrls: ['./atsiliepimai.component.css']
})
export class AtsiliepimaiComponent implements OnInit {

  atsiliepimai=[];

  isLoading=false;

  constructor( private http:HttpClient ) { }

  ngOnInit(): void {
    this.getAtsiliepimai();
  }

  getAtsiliepimai(){
    this.isLoading=true;
    this.http
      .get('https://atsiliepimai-fe9ea-default-rtdb.firebaseio.com/atsiliepimai.json')
      .subscribe((response)=>{
        const tmp=[];
        for (const key in response){
          tmp.push({ ...response[key], id:key});
          console.log(key);
        }
        this.atsiliepimai=tmp;
        console.log(this.atsiliepimai);
        this.isLoading=false;
      });
  }

  deleteAtsiliepimai(){
    this.isLoading=true;
    this.http
      .delete('https://atsiliepimai-fe9ea-default-rtdb.firebaseio.com/atsiliepimai.json')
      .subscribe((response)=>{
        this.isLoading=false;
        this.atsiliepimai=[];
      });
  }
  deleteAtsiliepimas(id:string){
    this.isLoading=true;
    this.http
      .delete('https://atsiliepimai-fe9ea-default-rtdb.firebaseio.com/atsiliepimai/'+id+'.json')
      .subscribe((response)=>{
        this.getAtsiliepimai();
      });
  }

  onUpdate(){
    this.getAtsiliepimai();
  }
}
