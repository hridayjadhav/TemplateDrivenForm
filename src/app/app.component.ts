import { Component, OnInit } from '@angular/core';
import {  FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title: any;

  
  getValue(f: any) { 
    console.log(f);
    
  }

  constructor(){}

  ngOnInit(): void { }

  onSubmit(f:NgForm){
    console.log(f.value);

  }


}
