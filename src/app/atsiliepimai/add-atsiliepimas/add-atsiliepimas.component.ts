import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-add-atsiliepimas',
  templateUrl: './add-atsiliepimas.component.html',
  styleUrls: ['./add-atsiliepimas.component.css']
})
export class AddAtsiliepimasComponent implements OnInit {

  @Output() updateAtsiliepimai=new EventEmitter();
  atsiliepimai=[];
  vardas='';
  tekstas='';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }


 

  postAtsiliepimas(){
    const a={
      vardas:this.vardas,
      tekstas:this.tekstas
    };
    this.http
      .post('https://atsiliepimai-fe9ea-default-rtdb.firebaseio.com/atsiliepimai.json', a)
      .subscribe((response)=>{
        console.log(response);
        this.updateAtsiliepimai.emit();
        this.vardas='';
        this.tekstas='';
      });


  }

}
