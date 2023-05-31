import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { CounterValue } from 'src/app/model/counter-value';
import { DataService } from 'src/app/services/data-service/data-service.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit{

  constructor(public dataService: DataService){}

  increments: CounterValue[]= []

  ngOnInit(): void {

    this.dataService.counterValuesSubject.subscribe(counterValues => {
       for(let i = 0; i < counterValues.length; i++){
      const counterValue = counterValues[i];
      if(counterValue.type === 'increment' || counterValue.type === 'start'){
        this.increments.push(counterValue)
      }
    }
    })




  }

}
